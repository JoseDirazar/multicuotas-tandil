import Container from "@/components/ui/container";
import Billboard from "@/components/ui/billboard";
import ProductCard from "@/components/ui/product-card";
import NoResults from "@/components/ui/no-results";

import getProducts from "@/actions/get-products";
import getCategory from "@/actions/get-category";

import Filter from "./components/filter";
import MobileFilters from "./components/mobile-filters";

export const revalidate = 0;

interface CategoryPageProps {
  params: {
    categoryId: string;
  };
  searchParams: {
    colorId: string;
    sizeId: string;
  };
}
interface FilterProps {
  id: string;
   storeId: string; 
   name: string; 
   value: string; 
   createdAt: string; 
   UpdatedAt: string;
}
const CategoryPage: React.FC<CategoryPageProps> = async ({
  params,
  searchParams,
}) => {
  const products = await getProducts({
    categoryId: params.categoryId,
    colorId: searchParams.colorId,
    sizeId: searchParams.sizeId,
  });
  
  const sizes: FilterProps[] = []
  const colors: FilterProps[] = []

  for (let i = 0; i < products.length; i++) {
    const product = products[i];
    
    // Verificar si el tamaño no está en el array 'sizes' y agregarlo si no está presente
    if (sizes.findIndex(size => size?.id === product.size.id) === -1) {
      sizes.push({...product.size as FilterProps});
    }
    
    // Verificar si el color no está en el array 'colors' y agregarlo si no está presente
    if (colors.findIndex(color => color?.id === product.color.id) === -1) {
      colors.push({...product.color as FilterProps});
    }
  }
  console.log(sizes)
  console.log(colors)
  const category = await getCategory(params.categoryId);

  return (
    <div className="bg-white dark:bg-black">
      <Container>
        <Billboard data={category.billboard} />
        <div className="px-4 pb-24 sm:px-6 lg:px-8">
          <div className="mt-8 h-full lg:grid lg:grid-cols-5 lg:gap-x-8">
            <MobileFilters sizes={sizes} colors={colors} />
            <div className="hidden lg:block">
              <Filter valueKey="sizeId" name="Marca" data={sizes} />
              <Filter valueKey="colorId" name="Color" data={colors} />
            </div>
            <div className="mt-6 lg:col-span-4 lg:mt-0">
              {products.length === 0 && <NoResults />}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
                {products.map((item) => (
                  <ProductCard key={item.id} data={item} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CategoryPage;
