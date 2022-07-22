import React, { useState } from "react";
import { toast } from "react-toastify";
import Styles from "../Compare/Compare.module.css";

const Compare = () => {
  const [inputA, setInputA] = useState("");
  const [inputB, setInputB] = useState("");

  const handaleSubmit = (e) => {
    e.preventDefault();
    const inputAValue = e.target.inputA.value;
    const inputBValue = e.target.inputB.value;

    if (inputAValue === "" && inputBValue === "") {
      return toast.info("Both Input is Empty, Please Provide a Input Value");
    }

    if (inputAValue === "") {
      return toast.warning("A Input is Empty");
    } else {
      setInputA(inputAValue);
    }
    if (inputBValue === "") {
      return toast.warning("B Input is Empty");
    } else {
      setInputB(inputBValue);
    }

    if (inputA && inputB) {
      toast.success(
        `Both Input Have a Data, Your Input Data Is:  ${inputA} ${inputB}`
      );
      e.target.inputA.value = "";
      e.target.inputB.value = "";
    }
  };

  return (
    <div className={Styles.mainContainer}>
      <form onSubmit={handaleSubmit}>
        <div className={Styles.textBoxs}>
          <input placeholder="A Input" name="inputA" type="text" />
          <input placeholder="B Input" name="inputB" type="text" />
        </div>
        <button type="submit">Compute</button>
      </form>
    </div>
  );
};

export default Compare;
