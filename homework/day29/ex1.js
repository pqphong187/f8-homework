const menu = [
  {
    id: 1,
    name: "Home",
    parentId: 0,
  },
  {
    id: 2,
    name: "About",
    parentId: 0,
  },
  {
    id: 3,
    name: "News",
    parentId: 0,
  },
  {
    id: 4,
    name: "Products",
    parentId: 0,
  },
  {
    id: 5,
    name: "Contact",
    parentId: 0,
  },
  {
    id: 6,
    name: "T-Shirt",
    parentId: 4,
  },
  {
    id: 7,
    name: "Jean",
    parentId: 4,
  },
  {
    id: 8,
    name: "Skirt",
    parentId: 4,
  },
];

function buildMenu(data) {
  const mainItems = data.filter((item) => item.parentId === 0);
  const subItems = data.filter((item) => item.parentId !== 0);

  // menu chính
  const mainUl = document.createElement("ul");
  mainUl.id = "main-menu";
  mainItems.forEach((parent) => {
    const mainLi = document.createElement("li");
    const mainA = document.createElement("a");
    mainA.href = "#";
    mainA.textContent = parent.name;
    mainA.style.fontSize = "24px";
    mainLi.appendChild(mainA);

    // menu con
    const childrenMenu = subItems.filter(
      (child) => child.parentId === parent.id
    );
    if (childrenMenu.length > 0) {
      const subUl = document.createElement("ul");
      childrenMenu.forEach((child) => {
        const subLi = document.createElement("li");
        const subA = document.createElement("a");
        subA.href = "#";
        subA.textContent = child.name;
        subA.style.fontSize = "20px";
        subLi.appendChild(subA);
        subUl.appendChild(subLi);
      });
      mainLi.appendChild(subUl);
    }

    mainUl.appendChild(mainLi);
  });

  return mainUl;
}

const menuElement = buildMenu(menu);
document.body.appendChild(menuElement);
