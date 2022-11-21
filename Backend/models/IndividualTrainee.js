const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const individualTraineeSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      index: { unique: true },
    },
    password: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    firstname: {
      type: String,
      required: true,
    },
    lastname: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      required: false,
    },
    country: {
      type: String,
      required: false,
    },
    registered_courses: {
      id: [{ type: Schema.ObjectId, ref: "Course"}],
      progress: [Number],
    },
    accessToken: { type: String },
    refreshToken: { type: String },
  },
  { timestamps: true }
);

const IndividualTrainee = mongoose.model(
  "IndividualTrainee",
  individualTraineeSchema
);
module.exports = IndividualTrainee;
