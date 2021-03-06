import React, { useState } from "react";
import { dateToDay, validatePlate, validateEmptyFields } from "./utils";
import Label from "../label/Label";
import Input from "../input/Input";
import Message from "../message/Message";

const InputForm = () => {
  const [values, setValues] = useState({});
  const [canDrive, setCanDrive] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isAllCompleted, setIsAllCompleted] = useState(false);

  // This function will capture all the form input data and store it into an object contained into the "values" state
  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setValues({ ...values, [name]: value });
  };
  const handleSubmit = (e) => {
    const { day, hour, minutes, month, plateNumber, year } = values;
    const lastPlateNumber = plateNumber.charAt(plateNumber.length - 1);
    const dayOfTheWeek = dateToDay(month, day, year, hour, minutes);

    //this function will validate if every field is complete
    validateEmptyFields(
      day,
      hour,
      minutes,
      month,
      plateNumber,
      year,
      setIsAllCompleted
    );
    //Here we set the canDrive state to either true if the car can be on the road or false if it cannot
    setCanDrive(
      validatePlate(
        Number(lastPlateNumber),
        Number(dayOfTheWeek),
        Number(hour),
        Number(minutes)
      )
    );
    setIsSubmitted(true);
    return;
  };

  return (
    <div
      className="justify-content-center d-flex container border align-items-center bg-secondary text-white"
      style={{ height: "45rem" }}
    >
      <div className="border border-dark rounded p-4">
        <h1 className="mb-5">"Pico y placa" Predictor</h1>
        {isSubmitted && !isAllCompleted && (
          <p className="text-warning">* Please, complete the form.</p>
        )}{" "}
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
            <Message
              canDrive={canDrive}
              isSubmitted={isSubmitted}
              isAllCompleted={isAllCompleted}
            />
          </div>
        </form>
      </div>
    </div>
  );
};
export default InputForm;
