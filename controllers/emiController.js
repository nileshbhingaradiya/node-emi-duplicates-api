const {findServicePointByPostalCode, emiCalculator} = require("../services")

exports.getEmi = async (req, res, next) => {
  const data = await findServicePointByPostalCode()
  const currency = data[req.query.currency || 'NGN']
  const monthlyRate = req.query.rate || 2
  const principal = Math.round((req.query.principal || 100) * currency, 2)
  const month = req.query.month || 10

  const emi = emiCalculator(principal, monthlyRate, month)
  const response = {emi, usd_to_ngn: currency, principal, month, monthly_rate: monthlyRate}

  return res.status(200).send({message: "success", data: response})
}


exports.hasDuplicates = async (req, res) => {
  const {str1, str2} = req.body
  const hasDuplicates = str1 === str2
  return res.status(200).send({message: "success", data: {hasDuplicates}})
}