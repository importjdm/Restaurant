import chewy from "./chewy.jpeg";
import jabba from "./jabba.jpeg";

export default function contactPage() {
  const titleCon = document.createElement("div");
  const corpInqCon = document.createElement("div");
  const custSupCon = document.createElement("div");
  const exportDiv = document.createElement("div");
  const chewyCon = document.createElement("div");
  const jabbaCon = document.createElement("div");

  const h1 = document.createElement("h1");
  const ciTitle = document.createElement("h2");
  const csTitle = document.createElement("h2");
  const ciPara = document.createElement("p");
  const csPara = document.createElement("p");
  const corpInqPic = new Image();
  const custSupPic = new Image();

  corpInqPic.src = chewy;
  custSupPic.src = jabba;

  chewyCon.appendChild(corpInqPic);
  jabbaCon.appendChild(custSupPic);

  exportDiv.classList.add("contactPage");
  corpInqCon.classList.add("corpInq");
  custSupCon.classList.add("custSup");

  h1.innerText = "Contact Us";
  ciTitle.innerText = "Corporate Inquiries";
  csTitle.innerText = "Customer Support";

  ciPara.innerText = "Corporate Manager Call +1 888-888-8888";
  csPara.innerText = "Sam Huson Call +1 999-999-9999 ";

  /*ciTitle.appendChild(ciPara);
  csTitle.appendChild(csPara); */

  titleCon.appendChild(h1);
  corpInqCon.appendChild(ciTitle);
  corpInqCon.appendChild(ciPara);
  corpInqCon.appendChild(chewyCon);

  custSupCon.appendChild(csTitle);
  custSupCon.appendChild(csPara);
  custSupCon.appendChild(jabbaCon);

  exportDiv.appendChild(titleCon);
  exportDiv.appendChild(corpInqCon);
  exportDiv.appendChild(custSupCon);

  return exportDiv;
}
