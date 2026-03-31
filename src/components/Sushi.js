import React, { useState } from "react";

function Sushi({sushi, onAddEmptyPlate, moneyLeft, onDeductBalance}) {
  const {id, name, img_url, price} = sushi
  const [empty, setEmpty] = useState(false)
  function handleClick() {
    if (moneyLeft < price) return
    setEmpty(true)
    onAddEmptyPlate(id)
    onDeductBalance(price)

  }
  return (
    <div className="sushi">
      <div className="plate" onClick={handleClick}>
        {empty ? null : (
          <img
            src={img_url}
            alt={name}
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  );
}

export default Sushi;
