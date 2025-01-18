const cart = [
  {
    id: 1,
    name: "T-Shirt",
    price: 100000,
    quantity: 2,
    hotSale: false,
  },
  {
    id: 2,
    name: "Jean",
    price: 200000,
    quantity: 1,
    hotSale: false,
  },
  {
    id: 3,
    name: "Skirt",
    price: 150000,
    quantity: 3,
    hotSale: true,
  },
  {
    id: 4,
    name: "Shirt",
    price: 120000,
    quantity: 2,
    hotSale: false,
  },
  {
    id: 5,
    name: "Jacket",
    price: 250000,
    quantity: 1,
    hotSale: true,
  },
];

function renderOrder(cart) {
  if (!Array.isArray(cart) || cart.length === 0) {
    return `Dữ liệu không hợp lệ `;
  }
  let tbody = "";
  cart.forEach((item) => {
    let style = "";
    if (item.hotSale) {
      style = `style="color:red"`;
    }
    const itemElement = /*html*/ `
          <tr ${style}>
            <td>${item.name}</td>
            <td>${item.price}</td>
            <td>${item.quantity}</td>
            <td>${item.price * item.quantity}</td>
          </tr>
        `;

    tbody += itemElement;
  });

  let total = 0;
  for (let i = 0; i < cart.length; i++) {
    total += cart[i].price * cart[i].quantity;
  }

  let tfoot = "";
  const sum = /*html*/ `
    <tr>
        <td colspan="3">Tổng tiền</td>
        <td>${total}</td>
    </tr>`;
  tfoot += sum;

  const myTable = /*html*/ `
    <table border="1" cellspacing="0" cellpadding="5"> 
        <thead>
            <tr>
                <th>Tên sản phẩm</th>
                <th>Đơn giá</th>
                <th>Số lượng</th>
                <th>Thành tiền</th>
            </tr>
        </thead>
        <tbody>
          ${tbody}
        </tbody>
        <tfoot>
         ${tfoot}
        </tfoot>
    </table>
`;

  document.body.innerHTML = myTable;
}
renderOrder(cart);
