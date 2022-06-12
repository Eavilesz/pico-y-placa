import { isEmpty } from "lodash";

// this function will return the day of the week from a given date
export const dateToDay = (month, day, year, hour, minutes) => {
  const dateString = `${month} ${day}, ${year} ${hour}:${minutes}:00`;
  const date = new Date(dateString);
  return date.getDay();
};

// in this function we validate is the given licence plate numnber can be on the road at the given time
export const validatePlate = (lastPlateNumber, day, hour, minutes) => {
  if (day === 1) {
    if (lastPlateNumber === 1 || lastPlateNumber === 2) {
      return validateTime(Number(hour), Number(minutes));
    }
  }
  if (day === 2) {
    if (lastPlateNumber === 3 || lastPlateNumber === 4) {
      return validateTime(Number(hour), Number(minutes));
    }
  }
  if (day === 3) {
    if (lastPlateNumber === 5 || lastPlateNumber === 6) {
      return validateTime(Number(hour), Number(minutes));
    }
  }
  if (day === 4) {
    if (lastPlateNumber === 7 || lastPlateNumber === 8) {
      return validateTime(Number(hour), Number(minutes));
    }
  }
  if (day === 5) {
    if (lastPlateNumber === 9 || lastPlateNumber === 0) {
      return validateTime(Number(hour), Number(minutes));
    }
  }
  return true;
};
// in this function we validate if one or more of the form inputs have been left empty.
export const validateEmptyFields = (
  day,
  hour,
  minutes,
  month,
  plateNumber,
  year,
  setIsAllCompleted
) => {
  if (
    !isEmpty(day) &&
    !isEmpty(hour) &&
    !isEmpty(minutes) &&
    !isEmpty(month) &&
    !isEmpty(plateNumber) &&
    !isEmpty(year)
  ) {
    setIsAllCompleted(true);
  } else {
    setIsAllCompleted(false);
  }
};
// In this function we take the hour intervals in which every car can drive and return true if the hour and minutes inputs matches these intervals
const validateTime = (hour, minutes) => {
  if (hour === 9 || hour === 19) {
    return minutes > 30 ? true : false;
  }
  if (
    (hour < 16 && hour > 8) ||
    (hour < 25 && hour > 18) ||
    (hour < 7 && hour >= 0)
  ) {
    return true;
  } else {
    return false;
  }
};
