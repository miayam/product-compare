import useCart from "./useCart";

function Cart() {
  const { cartProducts, suggestions, removeFromCart, addToCart } = useCart();

  return (
    <div className="border-2 border-black p-6 bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
      <h2 className="text-2xl font-bold mb-6 border-b-2 border-black pb-2">
        Smart Cart
      </h2>

      {cartProducts.length === 0 ? (
        <p className="text-gray-500 font-mono mb-6">Your cart is empty</p>
      ) : (
        <div className="space-y-4 mb-6 text-black">
          {cartProducts.map((product) => (
            <div
              key={product?.id}
              className="flex justify-between items-center border-b border-gray-300 pb-2"
            >
              <div className="flex items-center space-x-3">
                <img
                  src={product?.thumbnail}
                  alt={product?.title}
                  className="w-12 h-12 object-cover grayscale"
                />
                <span className="font-mono text-sm truncate w-32">
                  {product?.title}
                </span>
              </div>
              <div className="flex items-center space-x-4">
                <span className="font-bold font-mono">${product?.price}</span>
                <button
                  onClick={() => product?.id && removeFromCart(product.id)}
                  className="text-red-600 text-xl font-bold hover:text-black transition"
                >
                  ×
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {suggestions.length > 0 && (
        <div>
          <h3 className="font-bold text-sm mb-3 uppercase tracking-widest text-gray-800">
            You might also need
          </h3>
          <div className="grid grid-cols-1 gap-3">
            {suggestions.slice(0, 3).map((suggestion) => (
              <div
                key={suggestion.id}
                className="flex items-center justify-between bg-gray-100 p-2 border text-black border-gray-300"
              >
                <div className="flex items-center space-x-2">
                  <img
                    src={suggestion.thumbnail}
                    alt={suggestion.title}
                    className="w-10 h-10 object-cover grayscale"
                  />
                  <span className="text-xs font-mono truncate w-24">
                    {suggestion.title}
                  </span>
                </div>
                <button
                  onClick={() => addToCart(suggestion.id)}
                  className="text-xs border border-black px-2 py-1 hover:bg-black hover:text-white transition font-mono"
                >
                  + Add
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
