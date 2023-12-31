const phoneRegex = /^\+54\d\d\d\d\d\d\d\d\d\d+$/;
const addressRegex = /([A-Za-z0-9]+( [A-Za-z0-9]+)+),\s[A-Za-z]+/;
const nameRegex = /^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\s']+$/;

interface FormDataProps {
  lastname: string;
  name: string;
  phone: string;
  address: string;
}

const validateUserData = (formData: FormDataProps) => {
  const errors = {
    lastname: "",
    name: "",
    phone: "",
    address: "",
  };

  if (!nameRegex.test(formData.name)) {
    errors.name = "Ingresar un nombre valido";
  } else {
    errors.name = "";
  }

  if (!nameRegex.test(formData.lastname)) {
    errors.lastname = "Ingresar un apellido valido";
  } else {
    errors.lastname = "";
  }

  if (!phoneRegex.test(formData.phone)) {
    errors.phone = "Ingresar un telefono valido";
  } else {
    errors.phone = "";
  }

  if (!addressRegex.test(formData.address)) {
    errors.address = "Ingresar una direccion valida";
  } else {
    errors.address = "";
  }

  return errors;
};

export default validateUserData;
