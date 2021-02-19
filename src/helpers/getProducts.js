export const getProducts = async () => {
  try {
    const resp = await fetch("https://fakestoreapi.com/products/");
    const products = await resp.json();

    return products;
  } catch (error) {
    console.log(error);
  }
};

/* helper para poder obtener todos los productos */
