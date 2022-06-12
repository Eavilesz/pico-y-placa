import React, { useState } from "react";
import Label from "../Label";
import Input from "../Input";
import { dateToDay, validatePlate } from "./utils";

const InputForm = () => {
  const [values, setValues] = useState({});

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setValues({ ...values, [name]: value });
  };
  const handleSubmit = (e) => {
    const { day, hour, minutes, month, plateNumber, year } = values;
    const lastPlateNumber = plateNumber.charAt(plateNumber.length - 1);
    const dayOfTheWeek = dateToDay(month, day, year, hour, minutes);
    console.log(
      "%cCan you drive? %o",
      "color: #c084fc ;",
      validatePlate(
        Number(lastPlateNumber),
        Number(dayOfTheWeek),
        Number(hour),
        Number(minutes)
      )
    );
  };

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
              <Label title={"Licence plate Id"} />
            </div>
            <div className="col-6 row">
              <div className="col-4">
                <Input
                  type={"text"}
                  name={"plateLetters"}
                  placeholder={"Letters"}
                />
              </div>
              <p className="col-1">/</p>
              <div className="col-4">
                <Input
                  onChange={handleChange}
                  name={"plateNumber"}
                  placeholder={"Number"}
                />
              </div>
            </div>
          </div>

          <div className="row g-1 mb-4">
            <div className="col-5 text-end">
              <Label title={"Date"} />
            </div>
            <div className="col-6 row">
              <div className="col-3">
                <Input
                  onChange={handleChange}
                  name={"month"}
                  placeholder={"MM"}
                />
              </div>
              <p className="col-1">/</p>
              <div className="col-3">
                <Input
                  onChange={handleChange}
                  name={"day"}
                  placeholder={"DD"}
                />
              </div>
              <p className="col-1">/</p>
              <div className="col-3">
                <Input
                  onChange={handleChange}
                  name={"year"}
                  placeholder={"YYYY"}
                />
              </div>
            </div>
          </div>

          <div className="row g-1 mb-4">
            <div className="col-5 text-end">
              <Label title={"Time (24H)"} />
            </div>
            <div className="col-6 row">
              <div className="col-4">
                <Input
                  onChange={handleChange}
                  name={"hour"}
                  placeholder={"HH"}
                />
              </div>
              <p className="col-1">:</p>
              <div className="col-4">
                <Input
                  onChange={handleChange}
                  name={"minutes"}
                  placeholder={"MM"}
                />
              </div>
            </div>
          </div>

          <div className="row g-1 mb-4">
            <div className="col-5 text-end">
              <Label title={" "} />
            </div>
            <div className="col-6 row">
              <div className="col-4 flex">
                <button
                  type="button"
                  className="btn btn-dark"
                  onClick={handleSubmit}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
export default InputForm;