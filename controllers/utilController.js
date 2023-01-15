exports.hasDuplicates = async (req, res) => {
  const {str1, str2} = req.body
  const hasDuplicates = str1 === str2
  return res.status(200).send({message: "hasDuplicates", hasDuplicates})
}