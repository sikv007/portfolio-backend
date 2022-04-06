import mongoose from "mongoose";

const soscialsSchema = new mongoose.Schema({
  icon: {
    type: String,
    unique: true,
  },
  title: {
    type: String,
    unique: true,
  },
  type: {
    type: String,
  },
  url: {
    type: String,
    unique: true,
  },
});

const Socials = mongoose.model("Socials", soscialsSchema);

export default Socials;
