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
