import mongoose from "mongoose";

const aboutSchema = new mongoose.Schema({
  heading: {
    type: String,
    unique: true,
  },
  text: {
    type: String,
    unique: true,
  },
  image: {
    type: String,
    unique: true,
  },
});

const About = mongoose.model("about", aboutSchema);

export default About;