export const getHTML = (req, res) => {
  res.sendFile("./public/frontend/index.html", { root: "./" });
};

export const getCSS = (req,res) => {
  res.sendFile("./public/frontend/src/css/style.css", { root: "./" });
}

export const getJS = (req,res) => {
  res.sendFile("./public/frontend/src/js/index.js", { root: "./" });
}

