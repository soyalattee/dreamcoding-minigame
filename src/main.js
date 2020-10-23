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
  <li class="item">
    <img src="${item.img}" alt="${item.type}" class="item__image"/>
    <span class="item__description">${item.sex}, ${item.size}</span>
  </li>`;
}

function setEventListeners(items) {
  let category = document
    .querySelector(".category")
    .addEventListener("click", (event) => {
      const filter = event.target.id;
      if (!filter) return;
      onButtonClick(filter, items);
    });
  let logo = document
    .querySelector(".logo")
    .addEventListener("click", () => showItems(items));
}

// 이벤트를 처리하는 함수는 "on+어떤이벤트 처리" 로 작성한다.
function onButtonClick(value, items) {
  const filteredItems = items.filter((item) => {
    for (let val in item) {
      if (item[val] == value) return item;
    }
  }); // type value에 맞는것만 필터
  showItems(filteredItems);
}

//main
loadItems()
  .then((items) => {
    showItems(items);
    setEventListeners(items); //상단에 하나 달아주면될듯
  })
  .catch(console.log);
