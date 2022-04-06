import Socials from "../models/socialsModel.js";

export const getAll = async (req, res) => {
  const socials = await Socials.find();
  res.status(200).json({
    status: "success",
    data: {
      socials,
    },
  });
};
