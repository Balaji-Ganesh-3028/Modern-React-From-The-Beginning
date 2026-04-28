import ProductCard from "./ProductCard";
import { useProductContext } from "../context/ProductContextDef";


const ProductList = () => {
  const { products, loading, error } = useProductContext();

  return (
    <>
      {loading && <p>Loading...</p>}
      {error && <p className='text-red-500'>❌ {error}</p>}
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
}

export default ProductList;