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
  if (!Array.isArray(data) || data.length === 0) {
    return `Dữ liệu không hợp lệ `;
  }
  const createMenu = (parentId) => {
    const items = data.filter((item) => item.parentId === parentId);
    if (items.length === 0) return null;
    const ul = document.createElement("ul");

    items.forEach((item) => {
      const li = document.createElement("li");
      const a = document.createElement("a");
      a.href = "#";
      a.textContent = item.name;
      a.style.fontSize = parentId === 0 ? "24px" : "20px";
      li.appendChild(a);
      const subMenu = createMenu(item.id);
      if (subMenu) {
        li.appendChild(subMenu);
      }
      ul.appendChild(li);
    });
    return ul;
  };
  const menu = createMenu(0);
  menu.id = "main-menu";
  return menu;
}

const menuElement = buildMenu(menu);
document.body.appendChild(menuElement);
