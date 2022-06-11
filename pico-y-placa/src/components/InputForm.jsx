import React from "react";
import Label from "./Label";
import Input from "./Input";

const InputForm = () => {
  return (
    <div
      className="justify-content-center d-flex container border align-items-center bg-secondary text-white"
      style={{ height: "45rem" }}
    >
      <div>
        <h1 className="mb-5">"Pico y placa" Predictor</h1>
        <form>
          <div className="row g-1 mb-4">
            <div className="col-5 text-end">
              <Label title={"Licence plate number"} />
            </div>
            <div className="col-6 row">
              <div className="col-4">
                <Input type={"text"} id={"plateLetters"} />
              </div>
              <p className="col-1">/</p>
              <div className="col-4">
                <Input id={"plateNumber"} />
              </div>
            </div>
          </div>

          <div className="row g-1 mb-4">
            <div className="col-5 text-end">
              <Label title={"Date"} />
            </div>
            <div className="col-6 row">
              <div className="col-3">
                <Input id={"month"} />
              </div>
              <p className="col-1">/</p>
              <div className="col-3">
                <Input id={"day"} />
              </div>
              <p className="col-1">/</p>
              <div className="col-3">
                <Input id={"year"} />
              </div>
            </div>
          </div>

          <div className="row g-1 mb-4">
            <div className="col-5 text-end">
              <Label title={"Time"} />
            </div>
            <div className="col-6 row">
              <div className="col-4">
                <Input id={"hour"} />
              </div>
              <p className="col-1">:</p>
              <div className="col-4">
                <Input id={"minutes"} />
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
export default InputForm;
