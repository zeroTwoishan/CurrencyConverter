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

      <div className="w-full bg-blue-600/10 border border-blue-500/20 text-blue-200 text-center py-3 px-4 rounded-lg font-semibold shadow-inner backdrop-blur-md mt-4 select-none">
        {loading ? (
          <span className="flex items-center justify-center gap-2">
            <svg className="animate-spin h-4 w-4 text-blue-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Fetching exchange rate...
          </span>
        ) : currencyInfo && currencyInfo[to] ? (
          `1 ${from.toUpperCase()} = ${currencyInfo[to].toFixed(4)} ${to.toUpperCase()}`
        ) : (
          "Exchange rate unavailable"
        )}
      </div>
    </form>
    </div>
    </div>
    </>
  )
}
export default App