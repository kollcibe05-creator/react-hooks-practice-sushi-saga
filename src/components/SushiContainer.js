import React from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

function SushiContainer({sushis, onAddEmptyPlate, moneyLeft, onDeductBalance, onLoadMore}) {
  return (
    <div className="belt">
      {sushis.map(sushi => <Sushi key={sushi.id} sushi={sushi} onAddEmptyPlate={onAddEmptyPlate} moneyLeft={moneyLeft} onDeductBalance={onDeductBalance}/>)}
      <MoreButton onLoadMore={onLoadMore}/>
    </div>
  );
}

export default SushiContainer;
