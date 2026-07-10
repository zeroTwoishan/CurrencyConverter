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
        <div className="w-20 h-20 bg-white/5 border border-white/10 rounded-full flex items-center justify-center p-2.5 shadow-2xl backdrop-blur-md mb-3">
          <svg className="w-full h-full animate-[spin_25s_linear_infinite]" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="logo-grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#60a5fa" />
                <stop offset="100%" stopColor="#a78bfa" />
              </linearGradient>
              <linearGradient id="logo-grad2" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#a78bfa" />
                <stop offset="100%" stopColor="#f472b6" />
              </linearGradient>
            </defs>
            <circle cx="256" cy="256" r="210" fill="none" stroke="url(#logo-grad1)" strokeWidth="32" strokeLinecap="round" strokeDasharray="900" strokeDashoffset="100" />
            <path d="M 360 210 L 160 210 L 210 160 M 160 210 L 210 260" fill="none" stroke="url(#logo-grad2)" strokeWidth="32" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M 152 302 L 352 302 L 302 252 M 352 302 L 302 352" fill="none" stroke="url(#logo-grad1)" strokeWidth="32" strokeLinecap="round" strokeLinejoin="round" />
            <text x="195" y="240" fontFamily="system-ui, sans-serif" fontSize="130" fontWeight="bold" fill="#ffffff" textAnchor="middle">$</text>
            <text x="317" y="325" fontFamily="system-ui, sans-serif" fontSize="130" fontWeight="bold" fill="#ffffff" textAnchor="middle">₹</text>
          </svg>
        </div>
        <h1 className="text-2xl font-bold text-white tracking-wide">
          Currency Converter
        </h1>
        <p className="text-white/60 text-xs mt-1 font-medium">
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
