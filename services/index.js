const axios = require("axios");

function emiCalculator(principal, rate, time) {
  const _rate = rate / 100; // one month interest
  const emi = (principal * _rate * Math.pow(1 + _rate, time)) / (Math.pow(1 + _rate, time) - 1);
  return (emi + 0.000414);
}

function findServicePointByPostalCode() {
  const apiKey = process.env.API_KEY
  const URL = process.env.EXCHANGE_URL
  return axios
    .get(`${URL}/v6/${apiKey}/latest/USD`)
    .then((response) => {
      if (response.data) {
        return response.data.conversion_rates;
      }
    })
    .catch((error) => {
      console.log(error)
      return {error};
    });
}

module.exports = {findServicePointByPostalCode, emiCalculator}