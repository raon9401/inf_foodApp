const menuObj = {
  Bugger: [
    {
      id: 1,
      title: "와퍼주니어",
      contents:
        "불에 직접 구운 순 쇠고기 패티가 들어간 와퍼의 주니어 버전~ 작지만 꽉 찼다!",
      imgUrl:
        "https://d1cua0vf0mkpiy.cloudfront.net/images/menu/normal/23656b09-e460-49f4-acaa-de3d9e67ae9c.png",
    },
    {
      id: 2,
      title: "치즈와퍼",
      contents:
        "불에 직접 구운 순 쇠고기 패티가 들어간 와퍼에 고소한 치즈까지!",
      imgUrl:
        "https://d1cua0vf0mkpiy.cloudfront.net/images/menu/normal/a1a7111a-d083-4d9e-8f2d-288edd6dc827.png",
    },
    {
      id: 3,
      title: "불고기와퍼",
      contents:
        "불에 직접 구운 순 쇠고기 패티가 들어간 와퍼에 달콤한 불고기 소스까지!",
      imgUrl:
        "https://d1cua0vf0mkpiy.cloudfront.net/images/menu/normal/a887fed0-56a8-43ba-8313-c9d85cc7b900.png",
    },
    {
      id: 4,
      title: "와퍼",
      contents:
        "불에 직접 구운 순 쇠고기 패티에 싱싱한 야채가 한가득~ 버거킹의 대표 메뉴!",
      imgUrl:
        "https://d1cua0vf0mkpiy.cloudfront.net/images/menu/normal/7ac407c6-2300-4468-9ad0-be69de0176d4.png",
    },
  ],
  BuggerSet: [
    {
      id: 1,
      title: "불맛 더블치즈버거 세트",
      contents: "불맛 더블치즈버거+프렌치프라이R+콜라R",
      imgUrl:
        "https://d1cua0vf0mkpiy.cloudfront.net/images/menu/normal/432cd4e4-4800-4d0c-bdf8-b2beabf7fdcc.png",
    },
    {
      id: 2,
      title: "불맛 더블치즈앤베이컨버거 세트",
      contents: "불맛 더블치즈앤베이컨버거 +프렌치프라이R+콜라R",
      imgUrl:
        "https://d1cua0vf0mkpiy.cloudfront.net/images/menu/normal/b470da96-48ff-4038-a1f9-e2dda77b73cc.png",
    },
    {
      id: 3,
      title: "몬스터와퍼 세트",
      contents: "몬스터와퍼+프렌치프라이(R)+콜라(R)",
      imgUrl:
        "https://d1cua0vf0mkpiy.cloudfront.net/images/menu/normal/bb6bdd7a-c872-47d3-925a-94da7f2bb266.png",
    },
    {
      id: 4,
      title: "통새우와퍼 세트",
      contents: "통새우와퍼+프렌치프라이(R)+콜라(R)",
      imgUrl:
        "https://d1cua0vf0mkpiy.cloudfront.net/images/menu/normal/91999994-df3f-46c0-9632-122e63c7fa40.png",
    },
  ],
  Side: [
    {
      id: 1,
      title: "리얼 어니언링",
      contents: "통째로 썰어 더 두툼하고 더 바삭해진",
      imgUrl:
        "https://d1cua0vf0mkpiy.cloudfront.net/images/menu/normal/eb6f5068-2ad9-4d19-ba00-2084b8e3c952.png",
    },
    {
      id: 2,
      title: "너겟킹",
      contents: "바삭~ 촉촉~ 한입에 쏙 부드러운 너겟킹",
      imgUrl:
        "https://d1cua0vf0mkpiy.cloudfront.net/images/menu/normal/f6cd8164-7998-43dc-b6b0-85f9731d534b.png",
    },
    {
      id: 3,
      title: "21치즈스틱",
      contents:
        "21cm의 역대급 사이즈! 진하고 고소한 자연 모짜렐라가 가득한 21치즈스틱",
      imgUrl:
        "https://d1cua0vf0mkpiy.cloudfront.net/images/menu/normal/5bb2a2eb-0cb0-4690-ab5b-acc829f920ed.png",
    },
  ],
  Drink: [
    {
      id: 1,
      title: "코카콜라",
      contents: "코카-콜라로 더 짜릿하게!",
      imgUrl:
        "https://d1cua0vf0mkpiy.cloudfront.net/images/menu/normal/ea527075-e1e0-483b-9e8f-e85577ac2faf.png",
    },
    {
      id: 2,
      title: "스프라이트",
      contents: "나를 깨우는 상쾌함!",
      imgUrl:
        "https://d1cua0vf0mkpiy.cloudfront.net/images/menu/normal/f57d3294-3f87-4201-bcaa-a75fee1bdaa9.png",
    },
    {
      id: 3,
      title: "기라델리 딥초코 핫",
      contents: "부드러움이 극대화 된 버거킹X기라델리 시즌셀렉션",
      imgUrl:
        "https://d1cua0vf0mkpiy.cloudfront.net/images/menu/normal/4bf0be5d-00d7-4ac8-81fa-7f2f209ae8e4.png",
    },
  ],
};

const buttonArr = ["All", ...Object.keys(menuObj)];

const buttonWrap = document.getElementById("button-wrap");
const contentsWrap = document.getElementById("contents-area");

for (const item of buttonArr) {
  let button = document.createElement("button");
  button.textContent = item;
  button.className = "menu-btn";

  button.addEventListener("click", function () {
    document.querySelectorAll("#button-wrap button").forEach((btn) => {
      btn.classList.remove("active");
    });

    this.classList.add("active");
    toggleDisplay(item);
  });

  buttonWrap.appendChild(button);
}

Object.entries(menuObj).forEach(([category, items]) => {
  items.forEach((item) => {
    const card = document.createElement("div");
    card.className = "card visible";
    card.dataset.category = category;

    card.innerHTML = `
      <img src="${item.imgUrl}" alt="${item.title}">
      <h3>${item.title}</h3>
      <p>${item.contents}</p>
    `;
    contentsWrap.appendChild(card);
  });
});

function toggleDisplay(selectedCategory) {
  document.querySelectorAll(".card").forEach((card) => {
    if (
      selectedCategory === "All" ||
      card.dataset.category === selectedCategory
    ) {
      card.classList.add("visible");
    } else {
      card.classList.remove("visible");
    }
  });
}

if (buttonWrap.children.length > 0) {
  buttonWrap.children[0].classList.add("active");
}
