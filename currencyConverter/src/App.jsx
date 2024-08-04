import { useState,useEffect } from "react";
import InputBox from "./components/InputBox";
import useCurrencyInfo from "./hooks/useCurrencyInfo"
function App() {

    const [amount,setAmount] = useState();
    const [from,setFrom] = useState("usd");
    const [to,setTo] = useState("inr");
    const [convertedAmount,setConvertedAmount] = useState();

    const CurrencyInfo = useCurrencyInfo(from);

    const Options = Object.keys(CurrencyInfo);




    const swap = () => {
        const temp = from;
        setFrom(to);
        
        setTo(temp)
        setConvertedAmount(amount);
        setAmount(convertedAmount);
    }

    useEffect(() => {
        setConvertedAmount(amount * CurrencyInfo[to]);
          }, [amount, CurrencyInfo, to]);

    const convert = () =>{
        setConvertedAmount(amount * CurrencyInfo[to]);
        console.log(amount);
    }

  return (
      <div
          className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat bg-purple-800"
      >
          <div className="w-full">
              <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                  <form
                      onSubmit={(e) => {
                          e.preventDefault();
                          convert()
                         
                      }}
                  >
                     <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 mb-7 rounded-lg">
                          Convert {from.toUpperCase()} to {to.toUpperCase()}
                      </button>
                      <div className="w-full mb-1">
                          <InputBox
                              label="From"
                              amount={amount}
                              onAmountChange={(amount) => setAmount(amount)}
                              currencyOptions={Options}
                              onCurrencyChange={(currency) => setFrom(currency)}
                              selectCurrency={from}
                              
                          />
                      </div>
                      <div className="relative w-full h-0.5">
                          <button
                              type="button"
                              className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"

                              onClick={swap}
                          >
                              swap
                          </button>
                      </div>
                      <div className="w-full mt-1 mb-4">
                          <InputBox
                              label="To"
                              amount={convertedAmount}
                              currencyOptions={Options}
                              onCurrencyChange={(currency) => setTo(currency)}
                              selectCurrency={to}
                              amountDisable
                              
                          />
                      </div>
                     
                  </form>
              </div>
          </div>
      </div>
  );
}

export default App

// import { useState, useEffect } from "react";
// import InputBox from "./components/InputBox";
// import useCurrencyInfo from "./hooks/useCurrencyInfo";

// function App() {
//   const [amount, setAmount] = useState(0);
//   const [from, setFrom] = useState("usd");
//   const [to, setTo] = useState("inr");
//   const [convertedAmount, setConvertedAmount] = useState(0);

//   const CurrencyInfo = useCurrencyInfo(from);
//   const Options = Object.keys(CurrencyInfo);

//   useEffect(() => {
//     if (amount && CurrencyInfo[to]) {
//       setConvertedAmount(amount * CurrencyInfo[to]);
//     }
//   }, [amount, CurrencyInfo, to]);

//   const swap = () => {
//     setFrom((prevFrom) => {
//       const temp = to;
//       setTo(prevFrom);
//       setConvertedAmount(amount);
//        setAmount(convertedAmount);
//       return temp;

//     });
//   };

//   const convert = () => {
//     if (CurrencyInfo[to]) {
//       setConvertedAmount(amount * CurrencyInfo[to]);
//     }
//   };

//   return (
//     <div className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat bg-purple-800">
//       <div className="w-full">
//         <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
//           <form
//             onSubmit={(e) => {
//               e.preventDefault();
//               convert();
//             }}
//           >
//             <div className="w-full mb-1">
//               <InputBox
//                 label="From"
//                 amount={amount}
//                 onAmountChange={(amount) => setAmount(amount)}
//                 currencyOptions={Options}
//                 onCurrencyChange={(currency) => setFrom(currency)}
//                 selectCurrency={from}
//               />
//             </div>
//             <div className="relative w-full h-0.5">
//               <button
//                 type="button"
//                 className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
//                 onClick={swap}
//               >
//                 swap
//               </button>
//             </div>
//             <div className="w-full mt-1 mb-4">
//               <InputBox
//                 label="To"
//                 amount={convertedAmount}
//                 currencyOptions={Options}
//                 onCurrencyChange={(currency) => setTo(currency)}
//                 selectCurrency={to}
//                 amountDisable
//               />
//             </div>
//             <button
//               type="submit"
//               className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
//             >
//               Convert {from.toUpperCase()} to {to.toUpperCase()}
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;
