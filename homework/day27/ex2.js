const categories = [
  {
    id: 1,
    name: "Electronics",
    children: [
      {
        id: 2,
        name: "Laptops",
        children: [
          {
            id: 3,
            name: "Apple",
          },
          {
            id: 4,
            name: "Dell",
          },
        ],
      },
      {
        id: 5,
        name: "Headphones",
      },
    ],
  },
  {
    id: 6,
    name: "Books",
    children: [
      {
        id: 7,
        name: "Fiction",
        children: [
          {
            id: 8,
            name: "Thrillers",
          },
          {
            id: 9,
            name: "Mystery",
          },
        ],
      },
      {
        id: 10,
        name: "Non-Fiction",
      },
    ],
  },
];

function flattenCategories(categories) {
  if (!Array.isArray(categories)) {
    console.log("Đầu vào phải là một mảng");
  }

  const result = [];
  let currentLevel = categories.map((category) => ({
    ...category,
    parentId: 0,
  }));

  while (currentLevel.length > 0) {
    const nextLevel = [];

    for (const category of currentLevel) {
      const { id, name, parentId, children } = category;

      if (typeof id !== "number" || typeof name !== "string") {
        console.log("Mỗi danh mục phải có một id (số) và name (chuỗi)");
      }

      result.push({ id, name, parentId });

      if (Array.isArray(children)) {
        nextLevel.push(
          ...children.map((child) => ({ ...child, parentId: id }))
        );
      } else if (children !== undefined) {
        console.log("Children phải là một mảng hoặc không xác định");
      }
    }

    currentLevel = nextLevel;
  }
  result.sort((a, b) => a.id - b.id);
  return result;
}

console.log(flattenCategories(categories));
