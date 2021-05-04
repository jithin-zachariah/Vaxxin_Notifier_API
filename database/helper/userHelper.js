const UserModel = require("../model/user");

const createDBUser = (userData) => {
  return UserModel.create(userData);
};

module.exports = {
  createDBUser,
};
