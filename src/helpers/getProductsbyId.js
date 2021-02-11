export const getProductsbyId = async (id) => {
    const resp = await fetch(`https://fakestoreapi.com/products/${id}`);
    const product = await resp.json();
  
    return product;
  };
  
  /* Helper que retorna un producto en base al id */