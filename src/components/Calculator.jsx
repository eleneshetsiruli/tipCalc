import React, { useState } from "react";
import { LeftSide } from "./LeftSide";
import { RightSide } from "./RightSide";

export const Calculator = () => {
  const [numberOfPeople, setNumberOfPeople] = useState(null);
  const [bills, setBills] = useState(null);
  const [procentage, setProcentage] = useState(null);
  return (
    <div className="calcCard">
      <LeftSide
        numberOfPeople={numberOfPeople}
        setNumberOfPeople={setNumberOfPeople}
        bills={bills}
        setBills={setBills}
        procentage={procentage}
        setProcentage={setProcentage}
      />
      <RightSide
        numberOfPeople={numberOfPeople}
        setNumberOfPeople={setNumberOfPeople}
        bills={bills}
        setBills={setBills}
        procentage={procentage}
        setProcentage={setProcentage}
      />
    </div>
  );
};
