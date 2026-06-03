import useProducts from "./useProducts";
import { useCompareStore } from "../../store/useCompareStore";
import ProductCard from "./ProductCard";
import Pagination from "./Pagination";

function ProductList() {
  const {
    products,
    isLoading,
    searchQuery,
    setSearchQuery,
    page,
    setPage,
    totalPages,
    total,
  } = useProducts();
  const { compareList, addToCompare } = useCompareStore();

  if (isLoading)
    return (
      <div className="text-center py-8 font-mono">Loading products...</div>
    );

  return (
    <div className="mb-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <div>
          <h2 className="text-2xl font-bold">Products</h2>
          <p className="text-sm font-mono text-gray-600">
            {total} results found
          </p>
        </div>
        <input
          type="text"
          placeholder="Search products..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full md:w-72 border-2 border-black px-4 py-2 outline-none focus:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-shadow font-mono"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onCompare={addToCompare}
            isComparing={compareList.includes(product.id)}
          />
        ))}
      </div>

      <Pagination page={page} totalPages={totalPages} setPage={setPage} />
    </div>
  );
}

export default ProductList;
