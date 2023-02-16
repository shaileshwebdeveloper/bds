var spans = document.getElementsByTagName("span");
for (i = 0; i < spans.length; i++) spans[i].onclick = changeColor;

function changeColor(elem) {
  color = elem.target.style.backgroundColor;

  if (color === "rgb(201, 254, 218)") {
    let bike = document.querySelector(".coloured-bike");
    bike.src =
      "https://www.bgauss.com/wp-content/uploads/revslider/Overview-Banner-Slider/61.png";
  } else if (color === "rgb(100, 102, 112)") {
    let bike = document.querySelector(".coloured-bike");
    bike.src =
      "https://www.bgauss.com/wp-content/uploads/revslider/Overview-Banner-Slider/51.png";
  } else if (color === "rgb(239, 237, 236)") {
    let bike = document.querySelector(".coloured-bike");
    bike.src =
      "https://www.bgauss.com/wp-content/uploads/revslider/Overview-Banner-Slider/41.png";
  } else if (color === "rgb(214, 56, 60)") {
    let bike = document.querySelector(".coloured-bike");
    bike.src = "https://www.bgauss.com/wp-content/uploads/2020/06/1-1.png";
  } else if (color === "rgb(30, 47, 125)") {
    let bike = document.querySelector(".coloured-bike");
    bike.src = "https://www.bgauss.com/wp-content/uploads/2020/06/2-1.png";
  } else if (color === "rgb(48, 48, 48)") {
    let bike = document.querySelector(".coloured-bike");
    bike.src =
      "https://www.bgauss.com/wp-content/uploads/revslider/Overview-Banner-Slider/31.png";
  }
}
