/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { InputBox } from './components';
import useCurrencyInfo from './hooks/useCurrencyInfo';

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState('usd');
  const [to, setTo] = useState('inr');
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);
  const options = currencyInfo ? Object.keys(currencyInfo) : [];

  const swap = () => {
    setFrom(to);
    setTo(from);
    const tempAmount = amount; 
    setAmount(convertedAmount);
    setConvertedAmount(tempAmount);
  };

  const convert = () => {
    if (currencyInfo && currencyInfo[to]) {
      setConvertedAmount(amount * currencyInfo[to]);
    }
  };

  return (
    <div className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat bg-gradient-to-r from-blue-600 to-purple-600">
      <div className="w-full max-w-md mx-auto border border-gray-300 rounded-xl p-8 bg-white/30 shadow-lg backdrop-blur-lg">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            convert();
          }}
          className="space-y-6"
        >
          <div className="w-full mb-4">
            <InputBox
              label="From"
              amount={amount}
              currencyOptions={options}
              onCurrencyChange={(currency) => setFrom(currency)}
              selectCurrency={from}
              onAmountChange={(amount) => setAmount(amount)}
            />
          </div>

          <div className="relative flex justify-center mb-4">
            <button
              type="button"
              className="flex items-center justify-center bg-blue-500 text-white rounded-full w-10 h-10 shadow-lg hover:bg-blue-600 transition duration-300 transform hover:scale-110 focus:outline-none"
              onClick={swap}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 4v6h6M20 20v-6h-6"
                />
              </svg>
            </button>
          </div>

          <div className="w-full">
            <InputBox
              label="To"
              amount={convertedAmount}
              currencyOptions={options}
              onCurrencyChange={(currency) => setTo(currency)}
              selectCurrency={to}
              amountDisable
            />
          </div>

          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-3 rounded-lg shadow-lg hover:bg-purple-700 transition duration-300 transform hover:scale-105 focus:outline-none"
          >
            Convert {from.toUpperCase()} to {to.toUpperCase()}
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
