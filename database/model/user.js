const mongoose = require("mongoose");

const DOCUMENT_NAME = "User";
const COLLECTION_NAMAE = "users";

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      trim: true,
    },
    state: {
      type: String,
      required: true,
    },
    stateID: {
      type: Number,
      required: true,
    },
    district: {
      type: String,
      required: true,
    },
    districtID: {
      type: Number,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
    minimize: false,
    versionKey: false,
  }
);

const UserModel = mongoose.model(DOCUMENT_NAME, userSchema, COLLECTION_NAMAE);

module.exports = UserModel;
