import React from "react";

const DATA = ["5%", "10%", "15%", "25%", "50%"];

export const LeftSide = ({
  numberOfPeople,
  setNumberOfPeople,
  bills,
  setBills,
  procentage,
  setProcentage,
}) => {
  function handleClick(el) {
    const result = Number(el.replace(/%/g, ""));
    setProcentage(result);
  }
  console.log(procentage);
  return (
    <div className="leftSide">
      <h4 className="headlines">Bill</h4>
      <svg
        className="svgDollar"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 320 512"
        fill="rgba(158, 187, 189, 1)"
      >
        <path d="M160 0c17.7 0 32 14.3 32 32V67.7c1.6 .2 3.1 .4 4.7 .7c.4 .1 .7 .1 1.1 .2l48 8.8c17.4 3.2 28.9 19.9 25.7 37.2s-19.9 28.9-37.2 25.7l-47.5-8.7c-31.3-4.6-58.9-1.5-78.3 6.2s-27.2 18.3-29 28.1c-2 10.7-.5 16.7 1.2 20.4c1.8 3.9 5.5 8.3 12.8 13.2c16.3 10.7 41.3 17.7 73.7 26.3l2.9 .8c28.6 7.6 63.6 16.8 89.6 33.8c14.2 9.3 27.6 21.9 35.9 39.5c8.5 17.9 10.3 37.9 6.4 59.2c-6.9 38-33.1 63.4-65.6 76.7c-13.7 5.6-28.6 9.2-44.4 11V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V445.1c-.4-.1-.9-.1-1.3-.2l-.2 0 0 0c-24.4-3.8-64.5-14.3-91.5-26.3c-16.1-7.2-23.4-26.1-16.2-42.2s26.1-23.4 42.2-16.2c20.9 9.3 55.3 18.5 75.2 21.6c31.9 4.7 58.2 2 76-5.3c16.9-6.9 24.6-16.9 26.8-28.9c1.9-10.6 .4-16.7-1.3-20.4c-1.9-4-5.6-8.4-13-13.3c-16.4-10.7-41.5-17.7-74-26.3l-2.8-.7 0 0C119.4 279.3 84.4 270 58.4 253c-14.2-9.3-27.5-22-35.8-39.6c-8.4-17.9-10.1-37.9-6.1-59.2C23.7 116 52.3 91.2 84.8 78.3c13.3-5.3 27.9-8.9 43.2-11V32c0-17.7 14.3-32 32-32z" />
      </svg>
      <input
        className="billInput"
        onChange={(ev) => setBills(ev.target.value)}
        style={{ textAlign: "end" }}
        type="text"
        value={bills}
      />
      <div className="divContainer">
        <h4 className="headlines"> Select Tip %</h4>
        <div className="selectProcentage">
          {DATA.map((el) => (
            <div
              onClick={() => handleClick(el)}
              key={el}
              className="procentage"
            >
              {el}
            </div>
          ))}
          <input
            onChange={(ev) => setProcentage(ev.target.value)}
            className="custom"
            placeholder="custom"
            type="text"
          />
        </div>
      </div>
      <h4 className="headlines">Number of People</h4>
      <svg
        className="svgPerson"
        fill="rgba(158, 187, 189, 1)"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 320 512"
      >
        <path d="M112 48a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm40 304V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V256.9L59.4 304.5c-9.1 15.1-28.8 20-43.9 10.9s-20-28.8-10.9-43.9l58.3-97c17.4-28.9 48.6-46.6 82.3-46.6h29.7c33.7 0 64.9 17.7 82.3 46.6l58.3 97c9.1 15.1 4.2 34.8-10.9 43.9s-34.8 4.2-43.9-10.9L232 256.9V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V352H152z" />
      </svg>
      <input
        onChange={(ev) => setNumberOfPeople(ev.target.value)}
        type="text"
        value={numberOfPeople}
        className="peopleInput"
      />
    </div>
  );
};
