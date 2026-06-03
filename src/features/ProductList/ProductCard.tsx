import type { Product } from "../../api/types";

interface Props {
  product: Product;
  onCompare: (id: number) => void;
  isComparing: boolean;
}

const ProductCard = ({ product, onCompare, isComparing }: Props) => {
  return (
    <div className="border border-black p-4 flex flex-col justify-between h-full bg-white hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-shadow">
      <div className="relative overflow-hidden mb-4">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="w-full h-48 object-cover grayscale contrast-125"
        />
      </div>
      <h3 className="font-bold text-lg mb-1 truncate">{product.title}</h3>
      <p className="text-gray-800 font-mono mb-4">
        ${product.price.toFixed(2)}
      </p>

      <button
        onClick={() => onCompare(product.id)}
        disabled={isComparing}
        className={`w-full border py-2 text-sm transition ${
          isComparing ? "bg-black text-white" : "border-black hover:bg-gray-100"
        }`}
      >
        {isComparing ? "✓ Comparing" : "+ Compare"}
      </button>
    </div>
  );
};

export default ProductCard;
