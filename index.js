//using slice method (.slice) it returns the first two elements
const returnFirstTwoDrivers = function (drivers) {
    return drivers.slice(0, 2);
  };
  //returns the last two elements 
  const returnLastTwoDrivers = function (drivers) {
    return drivers.slice(-2);
  };
  
  const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
  
  const createFareMultiplier = function (multiplyValue) {
    return function (value) {
      return multiplyValue * value;
    };
  };
  //passing argument 2, passing argument 3 and assigning variables (fareD/T)
  const fareDoubler = createFareMultiplier(2); //pass argument 2 & variables assigned
  const fareTripler = createFareMultiplier(3); //pass argument 3
  
  const selectDifferentDrivers = function (drivers, driversToReturn) {
    return driversToReturn(drivers);
  };
  
  //example of returning the 2 elem.
  const drivers = ['John', 'Jane', 'Dave', 'Susan']; //string of array
  console.log(selectDifferentDrivers(drivers, returnFirstTwoDrivers)); 