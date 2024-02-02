import React from "react";

export const RightSide = ({
  numberOfPeople,
  setNumberOfPeople,
  bills,
  setBills,
  procentage,
}) => {
  const tipAmount = (((bills / numberOfPeople) * procentage) / 100).toFixed(2);
  const total = (
    parseFloat(bills / numberOfPeople) + parseFloat(tipAmount)
  ).toFixed(2);

  function handleReset() {
    setNumberOfPeople(0);
    setBills(0);
  }

  return (
    <div className="rightSide">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "50px",
          paddingTop: 30,
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span>Tip amount</span>
            <span style={{ color: " rgba(127, 157, 159, 1)" }}>/person</span>
          </div>
          <div className="content">
            {isNaN(tipAmount) ? 0 : `$${tipAmount}`}
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span>Total</span>
            <span style={{ color: " rgba(127, 157, 159, 1)" }}>/person</span>
          </div>
          <div className="content">{isNaN(total) ? 0 : `$${total}`}</div>
        </div>
      </div>
      <div>
        <button onClick={handleReset} className="resetButton">
          R E S E T
        </button>
      </div>
    </div>
  );
};
