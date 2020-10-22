"use strict";
//data 를 가져온다
//item 이라는 div를 만들어 이미지와 속성을 넣는다
// item들을 item-list에 추가한다
let itemList = [];
function loadItems() {
  return fetch("./data/data.json")
    .then((response) => response.json())
    .then((json) => json.items);
}

function showItems(items) {
  const list = document.querySelector(".item-list");
  let last;
  while ((last = list.lastChild)) list.removeChild(last);
  items.forEach((item) => {
    const listItem = document.createElement("li");
    listItem.setAttribute("class", "item");
    const attribute = document.createElement("div");
    //item의 텍스트
    let str = "";
    for (let value in item) {
      if (value === "img") continue;
      str += `${item[value]}, `;
    }
    str = str.slice(0, str.length - 2);
    const text = document.createTextNode(str);

    //item의 이미지
    const img = document.createElement("img");
    img.src = item["img"];
    img.width = 50;
    listItem.appendChild(img);
    attribute.appendChild(text);
    listItem.appendChild(attribute);

    //console.log(item);
    list.appendChild(listItem);
  });

  //일단 있는걸 비워준다
  //들어온 아이템으로 새로 추가해준다
}

function clickBtn(event) {
  console.log(event.target);
}

function setEventListeners() {
  let category = document
    .querySelector(".category")
    .addEventListener("click", (event) => {
      const target = event.target;
      const filter = target.id;
      if (!filter) return;
      console.log(filter);
      filterItems(filter);
    });
}

function filterItems(value) {
  if (!itemList) return;
  const filteredItems = itemList.filter((item) => {
    for (let val in item) {
      if (item[val] == value) return item;
    }
  }); // type value에 맞는것만 필터
  showItems(filteredItems);
}

loadItems()
  .then((items) => {
    itemList = items;
    showItems(items);
    setEventListeners(items); //상단에 하나 달아주면될듯
  })
  .catch(console.log);

//filter 에 마우스가 올라가면 사이즈 커지게
// 클릭시 이벤트 발생 : item 제거 후 해당 속성인 아이템만 추가
