import React, { useEffect, useState } from 'react';
import { Block } from './Block';

function App() {
  const [rates, setRates] = useState([]);

  useEffect(() => {
    fetch('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json')
      .then((res) => res.json())
      .then((json) => {
        setRates(json);
        console.log(json);
      })
      .catch((err) => {
        alert('Не вдалося отримати курси валют');
        console.warn(err);
      });
  }, []);

  return (
    <div className="App">
      <Block value={0} currency="UAH" onChangeCurrency={(cur) => console.log(cur)} />
      <Block value={0} currency="USD" />
    </div>
  );
}

export default App;