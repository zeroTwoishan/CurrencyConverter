import { useState, useEffect } from 'react'
import { InputBox, Swap, Headers} from "./components/components"
import useCurrencyHook from "./hook/currencyHook";

function App() {
  const [amount,setAmount] = useState("");
  const [from,setFrom] = useState("usd");
  const [to,setTo] = useState("inr");
  const [convertedAmount,setconvertedAmount] = useState(0);
  const { data: currencyInfo, loading, error } = useCurrencyHook(from);
  const options = Object.keys(currencyInfo || {});

  const swap = () => {
    setFrom(to);
    setTo(from);
    setconvertedAmount(amount);
    setAmount(convertedAmount);
  }

  const convert = () =>{
    if (currencyInfo && currencyInfo[to]) {
      setconvertedAmount(Number(amount) * currencyInfo[to]);
    }
  }

  // Automatically recalculate the conversion when rates, amounts, or currencies change
  useEffect(() => {
    if (currencyInfo && currencyInfo[to]) {
      setconvertedAmount(Number(amount) * currencyInfo[to]);
    }
  }, [amount, from, to, currencyInfo]);
  return (
    <>
    <div className="w-full h-screen flex flex-wrap justify-center items-center bg-financial">
    <div className="w-full max-w-md mx-auto border border-white/20 rounded-lg p-5 backdrop-blur-xs bg-white/10 shadow-2xl">
      
      <Headers/>

      <form onSubmit={(e) => { 
      e.preventDefault();
      convert(); 
      }}>
      {error && (
        <div className="w-full bg-red-500/10 border border-red-500/20 text-red-200 text-xs text-center py-2 px-3 rounded-lg mb-4 font-semibold">
          ⚠️ Network Error: Using offline/stale rates.
        </div>
      )}

      <InputBox
        label="From"
        amount={amount}
        currencyOptions={options}
        onCurrencyChange={(currency) => setFrom(currency)}
        selectCurrency={from}
        onAmountChange={(amount) => setAmount(amount)}
      />

      <Swap onSwap={swap} />

      <InputBox
        label="To"
        amount={loading ? "" : convertedAmount}
        placeholder={loading ? "Loading..." : "0"}
        currencyOptions={options}
        onCurrencyChange={(currency) => setTo(currency)}
        selectCurrency={to}
        amountDisable
      />

      <button
        type="submit"
        className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg font-semibold hover:bg-blue-700 active:scale-[0.99] transition-all duration-200 shadow-md cursor-pointer mt-4"
      >
        Convert {from.toUpperCase()} to {to.toUpperCase()}
      </button>
    </form>
    </div>
    </div>
    </>
  )
}
export default App