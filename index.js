const returnFirstTwoDrivers = function (drivers) {
 return drivers.slice(0,2);
};

const returnLastTwoDrivers = function (drivers) {
  return drivers.slice(-2);
};

const selectingDrivers = [ returnFirstTwoDrivers, returnLastTwoDrivers
  ];
  
const createFareMultiplier = function(multiplyValue){
  return function(value)
  
};

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

const fetchSpecifiedDrivers = function (drivers, arrayOfDrivers ) {
  return arrayOfDrivers(drivers);
};