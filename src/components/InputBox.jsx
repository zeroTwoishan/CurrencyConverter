import React, { useId, useState } from 'react'

function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = "usd",
  amountDisable = false,
  currencyDisable = false,
  className = "",
  placeholder = "0",
  currencyNames = {},
}) {
  // useId generates a unique ID for binding the label to the input element (useful for SEO/Accessibility)
  const amountInputId = useId();
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className={`w-full bg-white p-3.5 rounded-lg flex text-sm shadow-sm ${className}`}>
      {/* Left Section: Label and Input */}
      <div className="w-1/2 flex flex-col justify-between">
        <label htmlFor={amountInputId} className="text-black/40 mb-2 inline-block font-medium">
          {label}
        </label>
        <input
          id={amountInputId}
          type="number"
          placeholder={placeholder}
          disabled={amountDisable}
          className="outline-hidden w-full bg-transparent py-1.5 text-base font-semibold text-gray-800"
          value={amount}
          onChange={(e) => onAmountChange && onAmountChange(e.target.value === "" ? "" : Number(e.target.value))}
          onFocus={(e) => e.target.select()}
        />
      </div>

      {/* Right Section: Currency Type Label and Selection */}
      <div className="w-1/2 flex flex-col items-end justify-between text-right">
        <p className="text-black/40 mb-2 font-medium">Currency Type</p>
        <select
          className="rounded-lg px-2 py-1 bg-gray-100 cursor-pointer outline-hidden hover:bg-gray-200 transition-colors font-semibold text-gray-700 max-w-full"
          value={selectCurrency}
          onChange={(e) => {
            onCurrencyChange && onCurrencyChange(e.target.value);
            setIsFocused(false);
          }}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          disabled={currencyDisable}
        >
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {isFocused
                ? `${currency.toUpperCase()} — ${currencyNames[currency] || ""}`
                : currency.toUpperCase()}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}


export default InputBox