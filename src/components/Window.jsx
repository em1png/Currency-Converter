import React from 'react'
import {TbCurrencyRubel, TbCurrencyEuro, TbCurrencyDollar, TbCurrencyBitcoin, TbQuestionMark} from 'react-icons/tb'

const Window = ({ CurType, CurValue, setCurType, onChangeValue, statusDisabled }) => {
  const currencyType = ['RUB', 'USD', 'EUR', 'BRL']
  return (
    <div className='w-[300px] h-[100px] p-3'>
      {/*  */}
      <ul className='flex mb-3 justify-center items-center shadow-lg border border-gray-200 rounded-md'>
        {currencyType.map(item =>
          <li
            onClick={() => setCurType(item)}
            key={item}
            className={`flex justify-center items-center text-xs font-semibold cursor-pointer w-1/4 h-[30px] text-center  ${item === CurType ? 'bg-gray-100' : ''}`}>{item}</li>)
            }
      </ul>
      {/*  */}
      <div className='relative flex bg-white shadow-lg border border-gray-200 rounded-md'>
        <div className='pl-2 absolute inset-y-0 left-0 pointer-events-none flex items-center'>
          {( () => {
            switch (CurType) {
              case "RUB": return <TbCurrencyRubel size={14} strokeWidth="2" color="black" className="w-4 h-4"/>;
              case "USD": return <TbCurrencyDollar size={14} strokeWidth='2' color="black" className="w-4 h-4"/>;
              case "EUR": return <TbCurrencyEuro size={14} strokeWidth='2' color="black" className="w-4 h-4"/>;
              case "BTC": return <TbCurrencyBitcoin size={14} strokeWidth='2' color="black" className="w-4 h-4"/>;
              default: return <TbQuestionMark size={14} strokeWidth='2' color="black" className="w-4 h-4"/>;
            }
          }) ()}
        </div>

        <input type='text' placeholder='Value..' value={CurValue} onChange={e => onChangeValue(e.target.value)} disabled={statusDisabled}
          className='text-sm w-full h-full focus:border bg-white pl-7 py-1 rounded-md focus:border-indigo-500 focus:outline-none flex items-center'/>
      </div>
    </div>
  )
}

export default Window