import { useState } from 'react'
import { InputBox, Swap } from "./components/components"
import useCurrencyHook from "./hook/currencyHook";

function App() {
  const [amount,setAmount] = useState(0);
  const [from,setFrom] = useState("usd");
  const [to,setTo] = useState("inr");
  const [convertedAmount,setconvertedAmount] = useState(0);
  const currencyInfo = useCurrencyHook(from);
  const options = Object.keys(currencyInfo);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setconvertedAmount(amount);
    setAmount(convertedAmount);
  }

  const convert = () =>{
    if (currencyInfo && currencyInfo[to]) {
      setconvertedAmount(amount * currencyInfo[to]);
    }
  }
  return (
    <>
    <div className="w-full h-screen flex flex-wrap justify-center items-center bg-financial">
    <div className="w-full max-w-md mx-auto border border-white/20 rounded-lg p-5 backdrop-blur-xs bg-white/10 shadow-2xl">
      
      {/* Header Section with Custom Icon */}
      <div className="flex flex-col items-center mb-6 text-center">
        <div className="w-14 h-14 bg-blue-500/10 border border-blue-400/20 rounded-full flex items-center justify-center p-3 shadow-inner backdrop-blur-md mb-2">
          <svg className="w-full h-full text-blue-400 animate-[spin_8s_linear_infinite]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
          </svg>
        </div>
        <h1 className="text-xl font-bold text-white tracking-wide">
          Currency Converter
        </h1>
        <p className="text-white/50 text-[11px] mt-0.5 font-medium">
          Live Daily Exchange Rates
        </p>
      </div>

      <form onSubmit={(e) => { 
      e.preventDefault();
      convert(); 
    }}>
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
        amount={convertedAmount}
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
