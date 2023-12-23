const { catchAsyncErrors } = require("../middlewares/catchAsyncErrors");
const GetInTouch = require("../models/getInTouchModel");
const ErrorHandler = require("../utils/errorHandler");

exports.getInTouch = catchAsyncErrors(async (req, res, next) => {
  const { name, email, phone, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({
      success: false,
      message: "All fields are required",
    });
  }

  if (phone.length !== 10) {
    return res.status(400).json({
      success: false,
      message: "Phone number should be of 10 digits",
    });
  }

  const getInTouch = await GetInTouch.create({
    name,
    email,
    phone,
    message,
  });

  res.status(201).json({
    success: true,
    message: "Your message has been sent successfully",
    getInTouch,
  });
});

exports.getAllRequests = catchAsyncErrors(async (req, res, next) => {
  const allRequests = await GetInTouch.find();

  if (!allRequests) {
    return next(new ErrorHandler("No requests found", 404));
  }

  res.status(200).json({
    success: true,
    message: "All requests found",
    allRequests,
  });
});

exports.deleteRequest = catchAsyncErrors(async (req, res, next) => {
  const id = req.params.id;

  const deletedRequest = await GetInTouch.findByIdAndDelete(id);

  if (!deletedRequest) {
    return next(new ErrorHandler("Issue in deleting the request0", 500));
  }

  res.status(200).json({
    success: true,
    message: "request deleted successfully !",
  });
});
