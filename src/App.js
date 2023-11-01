import React from "react";
import "./App.css";
import formData from "./data/form.json";
const App = () => {
  const renderInputField = (inputData) => {
    if (inputData.type === "select") {
      return (
        <div key={inputData.id}>
          <label htmlFor={inputData.id}>{inputData.label}</label>
          <select name={inputData.name} id={inputData.id}>
            {inputData.options?.map((op) => {
              return (
                <option value={op.value} key={op.id}>
                  {op.label}
                </option>
              );
            })}
          </select>
        </div>
      );
    } else if (inputData.type === "radio") {
      return (
        <div key={inputData.id}>
          {inputData.options.map((op, index) => {
            return (
              <div key={op.value}>
                <label htmlFor={index}>{op.label}</label>
                <input name={inputData.name} id={index} type="radio" />
              </div>
            );
          })}
        </div>
      );
    } else {
      return (
        <div key={inputData.id}>
          <label htmlFor={inputData.id}>{inputData.label}</label>
          <input
            placeholder={inputData.placeholder}
            name={inputData.name}
            type={inputData.type}
            required={inputData.required}
          />
        </div>
      );
    }
  };
  return (
    <form className="form">
      {formData.map((inputData) => {
        return <div key={inputData.id}>{renderInputField(inputData)}</div>;
      })}
    </form>
  );
};

export default App;
