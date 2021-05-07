const userHelper = require("../database/helper/userHelper");

const registerUser = async (req, res) => {
  const { userData } = req.body;

  console.log(userData);
  if (!userData) {
    return res.status(400).send("Missing parameters");
  }
  const dbData = await userHelper.createDBUser(userData);
  res.status(200).send(dbData);
};

module.exports = {
  registerUser,
};
