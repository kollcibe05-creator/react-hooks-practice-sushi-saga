import React, {useEffect, useState} from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

function App() {
  const [sushis, setSushis] = useState([])
  const [sushisDisplayed, setSushisDisplayed] = useState([])
  const [emptyPlates, setEmptyPlates] = useState([])
  const [money, setMoney] = useState(100)
  const [currentIndex, setCurrentIndex] = useState(0)
  useEffect(() => {
    fetch('http://localhost:3001/sushis') 
    .then(r => r.json())
    .then(data => {
      setSushis(data)
      setSushisDisplayed(data.slice(0, 4))
    })
}, [])
  function handleEmptyPlate(id) {
    setEmptyPlates([...emptyPlates, id])
  }
  function deductBalance(price) {
    setMoney((money) => money -  price)
  }
  function LoadMore() {
    const nextIndex = (currentIndex + 4) % sushis.length //% resets to 0 at the end
    setSushisDisplayed(sushis.slice(nextIndex, nextIndex + 4))
    setCurrentIndex(nextIndex)
  } 
  return (
    <div className="app">
      <SushiContainer sushis={sushisDisplayed} onAddEmptyPlate={handleEmptyPlate} moneyLeft={money} onDeductBalance={deductBalance} onLoadMore={LoadMore}/>
      <Table plates={emptyPlates} moneyLeft={money}/>
    </div>
  );
}

export default App;
