export const getProducts = async () => {
  const resp = await fetch("https://fakestoreapi.com/products/");
  const data = await resp.json();

  const products = data.map((product) => {
    return {
      id: product.id,
      title: product.title,
      price: product.price,
      description: product.description,
      category: product.category,
      image: product.image
    };
  });
  
  return products;
};
