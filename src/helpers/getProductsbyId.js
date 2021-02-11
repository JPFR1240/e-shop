export const getProductsbyId = async (id) => {
    const resp = await fetch(`https://fakestoreapi.com/products/${id}`);
    const product = await resp.json();
  
    console.log(product.image)
    return product;
  };
  