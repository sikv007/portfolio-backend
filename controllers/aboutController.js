import About from "../models/aboutModel.js";

export const getAbout = async (req, res) => {
  const about = await About.find();
  res.status(200).json({
    status: "success",
    data: {
      about,
    },
  });
};