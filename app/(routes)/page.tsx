import getBillboard from "@/actions/get-billboard";
import getProducts from "@/actions/get-products";
import ProductList from "@/components/product-list";
import Billboard from "@/components/ui/billboard";
import Container from "@/components/ui/container";

export const revalidate = 0;

const HomePage = async () => {
  const products = await getProducts({ isFeatured: true });
  const billboard = await getBillboard("58604d7e-847e-4ccf-ac30-c62e9ae1e964");
  return (
    <Container>
      <div className="pb-10">
        <Billboard data={billboard} />        
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList title="Mas vendidos" items={products} />
        </div>
      </div>
    </Container>
  );
};

export default HomePage;
