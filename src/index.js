import storeImage from "./store_front.jpg";
import "./style.css";
//impoort css stuff
//
function storePage() {
  const div = document.createElement("div");
  div.classList.add("img");
  const id = document.getElementById("content");

  const storeIcon = new Image();
  storeIcon.src = storeImage;

  const headLine = document.createElement("h1");
  headLine.innerText = "E's Food Place";

  const rating = document.createElement("p");
  rating.innerText =
    "This cozy restaurant has left the best impressions! Hospitable hosts, delicious dishes, beautiful presentation, wide wine list and wonderful dessert. I recommend to everyone! I would like to come back here again and again.";

  id.appendChild(headLine);
  id.appendChild(rating);
  div.appendChild(storeIcon);
  //id.appendChild(div);

  return div;
}

document.body.appendChild(storePage());
