const mongoose = require("mongoose");

const getInTouchModel = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      maxLength: [15, "Name should not exceed more than 15 characters"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        "Please fill a valid email address",
      ],
    },
    phone: {
      type: String,
      required: [true, "Phone is required"],
      minLength: [10, "Phone should not be less than 10 digits"],
      maxLength: [10, "Phone should not exceed more than 10 digits"],
    },
    message: {
      type: String,
      required: [true, "Message is required"],
    },
  },
  { timestamps: true }
);

const GetInTouch = mongoose.model("GetInTouch", getInTouchModel);

module.exports = GetInTouch;
