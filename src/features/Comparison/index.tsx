import useComparison from "./useComparison";
import { useCartStore } from "../../store/useCartStore";
import ComparisonTable from "./ComparisonTable";
import type { Product } from "../../api/types";

function Comparison() {
  const props = useComparison();
  const { addToCart } = useCartStore();

  return (
    <div className="mb-12">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Comparison</h2>
        {props.compareList.length > 0 && (
          <button
            onClick={props.clearComparison}
            className="text-sm border-b-2 border-black pb-1 hover:bg-black hover:text-white px-2 transition font-mono"
          >
            Clear All
          </button>
        )}
      </div>

      {props.isLoading ? (
        <div className="text-center py-8 font-mono">
          Loading comparison data...
        </div>
      ) : (
        <ComparisonTable
          products={(props?.products as Product[]) ?? []}
          onAddToCart={addToCart}
        />
      )}
    </div>
  );
}

export default Comparison;
