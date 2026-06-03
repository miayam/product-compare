import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ProductList from "./features/ProductList";
import Comparison from "./features/Comparison";
import Cart from "./features/Cart";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen bg-gray-50 text-black font-sans">
        <header className="bg-black text-white p-6 mb-8 shadow-[0_4px_0px_0px_rgba(0,0,0,1)]">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <h1 className="text-3xl font-bold tracking-tighter">
              MONO-COMPARE
            </h1>
            <Cart />
          </div>
        </header>

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 pb-16">
          <Comparison />
          <ProductList />
        </main>
      </div>
    </QueryClientProvider>
  );
}

export default App;
