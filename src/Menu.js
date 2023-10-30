//I have to add the classes to all the elements i forgot!!

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
  /* const menuOuter = document.createElement("div");
  const menuInner = document.createElement("div"); */

  //makes array of variable names for outer menu divs
  function menuOuterArray(n) {
    let newArr = [];
    for (let i = 0; i < n; i++) {
      newArry.push("menu-outer" + i);
    }
    return newArr;
  }

  //makes array of variable names for inner menu divs
  function menuInnerArray(n) {
    let newArr = [];
    for (let i = 0; i < n; i++) {
      newArry.push("menu-inner" + i);
    }
    return newArr;
  }

  //pass div arrays to a variable
  const menuOuterDivs = menuOuterArray(3);
  const menuInnerDivs = menuInnerArray(3);

  //make divs each with their own unique name
  function makeOuterDivs() {
    let array = [];
    for (let i = 0; i < menuOuterDivs.length; i++) {
      menuOuterDivs[i] = document.createElement("div");
      array.push(menuOuterDivs[i]);
    }

    return array;
  }

  //make inner divs
  function makeInnerDivs() {
    let array = [];
    for (let i = 0; i < menuInnerDivs.length; i++) {
      menuInnerDivs[i] = document.createElement("div");
      array.push(menuInnerDivs[i]);
    }
    return array;
  }

  //appending h3 and p's to inner
  function appendPToH3() {
    //first append p to h3
    horchata.append(horchataDescr, horchataPrice, horchataImg);
    lemonade.append(lemonadeDescr, lemonadePrice, lemonadeImg);
    unsweetTea.append(teaDescr, teaPrice, unSweetTeaImg);

    let array = [horchata, lemonade, unsweetTea];

    return array;
  }

  //appends h3 & p's to inner menu div
  function appendToInnerDiv() {
    let array = [];
    let divArray = makeInnerDivs();
    let h3Array = appendPToH3();
    divArray.forEach((div) => {
      h3Array.forEach((drink) => {
        array.push(div.append(drink));
      });
    });
    return array;
  }

  //append inner menu div to outer menu div
  function appendInnerToOuterDiv() {
    let array = [];
    const innerDivArray = appendToInnerDiv();
    const outerDivArray = makeOuterDivs();
    outerDivArray.forEach((outerDiv) => {
      innerDivArray.forEach((innerDiv) => {
        array.push(outerDiv.appendChild(innerDiv));
      });
    });
    return array;
  }

  //append outer menu div to content main content div

  function appendContentToContainer() {
    const divContent = appendInnerToOuterDiv();
    divContent.forEach((div) => {
      mainContent.appendChild(div);
    });
    return mainContent;
  }

  //beverage sections
  const mainHeadingTitle = document.createElement("h1");
  const beverageHeader = document.createElement("h2");
  const horchata = document.createElement("h3");
  const lemonade = document.createElement("h3");
  const unsweetTea = document.createElement("h3");
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

  //adding class names

  //Appending beverage main sections
}
