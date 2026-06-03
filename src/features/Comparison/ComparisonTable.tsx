import type { Product } from "../../api/types";

interface Props {
  products: Product[];
  onAddToCart: (id: number) => void;
}

const ComparisonTable = ({ products, onAddToCart }: Props) => {
  if (products.length < 2)
    return (
      <div className="text-center p-8 border border-dashed border-gray-400 text-gray-500">
        Select two products to compare
      </div>
    );

  return (
    <div className="border border-black overflow-x-auto w-full bg-white">
      <table className="w-full min-w-150 border-collapse text-sm font-mono">
        <thead>
          <tr className="border-b border-black">
            <th className="p-3 bg-black text-white sticky left-0 z-10 min-w-30 text-left">
              Spec
            </th>
            {products.map((p) => (
              <th key={p.id} className="p-3 min-w-50 text-left">
                {p.title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-gray-300">
            <td className="p-3 font-bold sticky left-0 bg-white z-10">Price</td>
            {products.map((p) => (
              <td key={p.id} className="p-3">
                ${p.price}
              </td>
            ))}
          </tr>
          <tr className="border-b border-gray-300">
            <td className="p-3 font-bold sticky left-0 bg-white z-10">
              Rating
            </td>
            {products.map((p) => (
              <td key={p.id} className="p-3">
                {p.rating} / 5
              </td>
            ))}
          </tr>
          <tr className="border-b border-gray-300">
            <td className="p-3 font-bold sticky left-0 bg-white z-10">Stock</td>
            {products.map((p) => (
              <td key={p.id} className="p-3">
                {p.stock} units
              </td>
            ))}
          </tr>
          <tr className="border-b border-gray-300">
            <td className="p-3 font-bold sticky left-0 bg-white z-10">
              Category
            </td>
            {products.map((p) => (
              <td key={p.id} className="p-3 capitalize">
                {p.category}
              </td>
            ))}
          </tr>
          <tr>
            <td className="p-3 font-bold sticky left-0 bg-white z-10">
              Action
            </td>
            {products.map((p) => (
              <td key={p.id} className="p-3">
                <button
                  onClick={() => onAddToCart(p.id)}
                  className="border border-black px-4 py-2 hover:bg-black hover:text-white transition"
                >
                  Add to Cart
                </button>
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ComparisonTable;
