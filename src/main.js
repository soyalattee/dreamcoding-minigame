"use strict";
//data 를 가져온다
//item 이라는 div를 만들어 이미지와 속성을 넣는다
function loadItems() {
  return fetch("./data/data.json")
    .then((response) => response.json())
    .then((json) => json.items);
}

// 클릭시 이벤트 발생 : item 제거 후 해당 속성인 아이템만 추가
function showItems(items) {
  const list = document.querySelector(".item-list");
  let last;
  // array.map : 한 배열의 요소들을 다른 요소로 변경 한다.
  // array.join : 문자열 배열을 하나의 문자열로 생성 .
  // map 으로 배열안 객체를 <li>...</li> 형태로 바꾼뒤 join 을 통해 한 문자열로 만들어 추가
  console.log(items);
  list.innerHTML = items.map((item) => createHTMLString(item)).join("");

  // items.forEach((item) => {
  //   const listItem = document.createElement("li");
  //   listItem.setAttribute("class", "item");
  //   const attribute = document.createElement("div");
  //   //item의 텍스트
  //   let str = "";
  //   for (let value in item) {
  //     if (value === "img") continue;
  //     str += `${item[value]}, `;
  //   }
  //   str = str.slice(0, str.length - 2);
  //   const text = document.createTextNode(str);

  //   //item의 이미지
  //   const img = document.createElement("img");
  //   img.src = item["img"];
  //   img.width = 50;
  //   listItem.appendChild(img);
  //   attribute.appendChild(text);
  //   listItem.appendChild(attribute);

  //   //console.log(item);
  //   list.appendChild(listItem);
  // });
}

function createHTMLString(item) {
  return `
  <li class="item  index${item.index}">
    <img src="${item.img}" alt="${item.type}" class="item__image"/>
    <span class="item__description">${item.sex}, ${item.size}</span>
  </li>`;
}

function setEventListeners(items) {
  const category = document
    .querySelector(".category")
    .addEventListener("click", (event) => {
      const dataset = event.target.dataset;
      onButtonClick(dataset, items);
    });
  const logo = document
    .querySelector(".logo")
    .addEventListener("click", () => showItems(items));
}

// 이벤트를 처리하는 함수는 "on+어떤이벤트 처리" 로 작성한다.
function onButtonClick(dataset, items) {
  const key = dataset.key;
  const value = dataset.value;

  if (key == null || value == null) return;
  //filter : 특정 조건을 만족하는 요소들로만 새로운 배열 생성
  //const filteredItems = items.filter((item) => item[key] === value);
  //showItems(filteredItems);
  updateItems(items, key, value);
}

// classList : 엘리먼트 클래스속성의 컬렉선. remove, add , item, contains, replaces 등 가능
function updateItems(items, key, value) {
  items.forEach((item) => {
    if (item[key] === value) {
      console.log(`item: ${item.index}`);
      document
        .querySelector(`.index${item.index}`)
        .classList.remove("invisible");
    } else {
      console.log(item.index);
      document.querySelector(`.index${item.index}`).classList.add("invisible");
    }
  });
}

//main
loadItems()
  .then((items) => {
    let idx = 0;
    items.forEach((item) => (item.index = idx++));
    return items;
  })
  .then((items) => {
    showItems(items);
    setEventListeners(items); //상단에 하나 달아주면될듯
  })
  .catch(console.log);
