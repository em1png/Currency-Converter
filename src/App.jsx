import { useState, useEffect, useRef } from 'react';
import Window from './components/Window';
import axios from 'axios';

function App() {
  const myRef = useRef(null);

  useEffect(() => {
    axios.get(`https://api.freecurrencyapi.com/v1/latest?apikey=ZqLWRtgrTvSGYcHAEGHZIVmTeME2emtpFzvnh2H8`)
    .then(res => {
      myRef.current = res.data.data;
      onChangeFromValue(1);
    })
    .catch((err) => console.warn(err))
  }, []);

  const [fromCurType, setFromCurType] = useState('USD');
  const [fromCurValue, setFromCurValue] = useState(0);

  const [toCurType, setToCurType] = useState('RUB');
  const [toCurValue, setToCurValue] = useState(0);

  const onChangeFromValue = (value) => {
    setFromCurValue(value);
    const price = value / myRef.current[fromCurType];
    const end = price * myRef.current[toCurType];
    setToCurValue((end).toFixed(2));
  };

  const onChangeToValue = (value) => {
    setToCurValue(value);
    const result = (myRef.current[fromCurType] / myRef.current[toCurType]) * value;
    setFromCurValue(result.toFixed(2));
  };

  return (
    <div className='bg-zinc-900 h-screen flex items-center justify-center box-border'>
      <div className='bg-white flex justify-between items-center rounded-lg p-3 w-[650px] h-[150px]'>
        <Window CurType={fromCurType} CurValue={fromCurValue} setCurType={setFromCurType} onChangeValue={onChangeFromValue} />
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
        </svg>
        <Window CurType={toCurType} CurValue={toCurValue} setCurType={setToCurType} onChangeValue={onChangeToValue} statusDisabled={true} />
      </div>
    </div>
  )
}

export default App
