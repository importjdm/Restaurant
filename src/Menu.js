//import pictures
import horchataIcn from "./horchata.jpg";
import lemonadeIcn from "./lemonade.jpg";
import unsweetIcn from "./unsweat-tea.jpg";

export function menu() {
  //Doc fragment
  const docFrag = document.createDocumentFragment();

  //Main body sections
  const header = document.createElement("header");
  const mainContent = document.createElement("div");
  const footer = document.createElement("div");

  //body sub-section
  const menuHeadingContainer = document.createElement("div");
  const menuSubHeadingContainer = document.createElement("div");
  const menuOuter = document.createElement("div");
  const menuInner = document.createElement("div");

  //beverage sections
  const mainHeadingTitle = document.createElement("h1");
  const beverageHeader = document.createElement("h2");
  const horchata = document.createElement("h3");
  const lemonade = document.createElement("h3");
  const UnsweetTea = document.createElement("h3");
  const horchataDescr = document.createElement("p");
  const horchataPrice = document.createElement("p");
  const lemonadeDescr = document.createElement("p");
  const lemonadePrice = document.createElement("p");
  const teaDescr = document.createElement("p");
  const teaPrice = document.createElement("p");

  //beverage images
  const horchataImg = new Image();
  const lemonadeImg = new Image();
  const unSweetTeaImg = new Image();
  horchataImg = horchataIcn;
  lemonadeImg = lemonadeIcn;
  unSweetTeaImg = unsweetIcn;

  //beverages text
  mainHeadingTitle.innerText = "Menu";
  beverageHeader.innerText = "Beverages";
  horchata.innerText = "Horchata";
  horchataDescr.innerText =
    "Voted the best drink in the world by everyone! A sweet light milky silk that taste like heaven!";
  horchataPrice.innetText = "$3";
  lemonade.innerText = "Lemonade";
  lemonadeDescr.innerText =
    "Not your average lemonade made at a corner in a suburban home! If you want the real stuff picked straight from the fields by immigrants have a taste!";
  lemonadePrice.innetText = "$3";
  UnsweetTea.innerText = "Sorta Sweet Tea";
  teaDescr.innerText =
    "This tea is not for the light hearted! A nice blend of bitter and sweet you can't decide if you want to put her down! Kinda like your ex.. JK!";
  teaPrice.innetText = "$3";

  //Appending beverage main sections

  const foodHeader = document.createElement("header");
  const foodSection = document.createElement("section");
  const food = document.createElement("h2");

  const sidesHeader = document.createElement("header");
  const sides = document.createElement("h2");
  const sidesSection = document.createElement("section");
}
