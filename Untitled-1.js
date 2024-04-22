http = require("http");
fs = require("fs");
path = require("path");

const homepage = path.join(process.cwd(), "Pages", "page.html");
const Scriptpage = path.join(process.cwd(), "Scripts", "script.js");
const icontpage = path.join(process.cwd(), "Icons", "icons.ico");
const imgtpage = path.join(process.cwd(), "Images", "images.jpeg");
const stylepage = path.join(process.cwd(), "styles", "style.css");
let mainhtml = "";
fs.readFile(homepage, "utf-8", (error, data) => {
  if (error) {
    console.log("erorr!!!");
  } else {
    mainhtml = data;
  }
});
let script = "";
fs.readFile(Scriptpage, "utf-8", (error, data) => {
  if (error) {
    console.log("erorr!!!");
  } else {
    script = data;
  }
});
let image = "";
fs.readFile(imgtpage, (error, data) => {
  if (error) {
    console.log("erorr!!!");
  } else {
    image = data;
  }
});
let icons = "";
fs.readFile(icontpage, (error, data) => {
  if (error) {
    console.log("erorr!!!");
  } else {
    icons = data;
  }
});
let style = "";
fs.readFile(stylepage, (error, data) => {
  if (error) {
    console.log("erorr!!!");
  } else {
    style = data;
  }
});
http
  .createServer((req, res) => {
    if (req.method == "GET") {
      switch (req.url) {
        case "/":
        case "/page.html":
        case "/Pages/page.html":
        case "/Task2/Pages/page.html":
          res.write(mainhtml);
          break;
        case "/":
        case "/icons.ico":
        case "/Icons/icons.ico":
        case "/Task2//Icons/icons.ico":
          res.write(icons);
          break;
        case "/":
        case "Images/images.jpeg":
        case "/Images/images.jpeg":
        case "/Task2/Images/images.jpeg":
          res.write(image);
          break;
        case "/":
        case "Scripts/script.js":
        case "/Scripts/script.js":
        case "/Task2/Scripts/script.js":
          res.write(script);
          break;
        case "/style.css":
        case "/styles/style.css":
        case "/Task2//styles/style.css":
          res.write(style);
          break;
      }
    }

    res.end();
  })
  .listen(8080, () => console.log("http://127.0.0.1:8080"));
