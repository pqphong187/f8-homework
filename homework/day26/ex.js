let jsContent = `Năm 1995: JavaScript được tạo ra bởi Brendan Eich chỉ trong khoảng 10 ngày khi ông làm việc tại Netscape. Tên ban đầu của Javascript là Mocha, sau đó được đổi tên thành LiveScript.
Năm 1996:Javascript được gửi đến ECMA(European Computer Manufacturers Association - Hội liên hiệp các nhà sản xuất máy tính Châu Âu)để chuẩn hóa và đổi tên thành JavaScript.
Năm 2009: ECMAScript 5 ra đời với nhiều cải tiến quan trọng như có thêm nhiều phương thức mới cho mảng và đối tượng và tính năng "strict mode". Cũng trong năm 2009 Ryan Dahl đã tạo ra Node.js, một nền tảng cho phép chạy javaScript ngoài trình duyệt. Điều này đã mở ra một cánh cửa mới cho JavaScript.
Năm 2015:ECMAScript 6 (ES6) ra đời,là phiên bản lớn nhất của ECMAScript với nhiều cải tiến và tính năng được coi là vượt bậc.
Năm 2016 - nay:Các phiên bản ECMAScript mới được ra mắt liên tục,với nhiều cải tiến và tính năng mới.Cho đến nay javaScript đã trở thành một trong số những ngôn ngữ được ưa chuộng và sử dụng nhiều nhất thế giới.`;

function printHighlight(content, keyword) {
  if (!content || typeof content !== "string" || content.trim() === "") {
    return "Nội dung không hợp lệ.";
  }
  if (!keyword || typeof keyword !== "string" || keyword.trim() === "") {
    return "Từ khóa không hợp lệ.";
  }
  if (keyword.length > content.length) {
    return "Từ khóa không được dài hơn nội dung.";
  }

  const contentLower = content.toLowerCase();
  const keywordLower = keyword.toLowerCase();

  let start = 0;
  let highlightedContent = "";

  while (true) {
    const index = contentLower.indexOf(keywordLower, start);
    if (index === -1) {
      highlightedContent += content.slice(start);
      break;
    }
    highlightedContent +=
      content.slice(start, index) +
      "<b>" +
      content.slice(index, index + keyword.length) +
      "</b>";
    start = index + keyword.length;
  }

  return highlightedContent;
}

function fixContent(content) {
  if (!content || typeof content !== "string" || content.trim() === "") {
    return "Nội dung không hợp lệ.";
  }

  // content = content.replace(/([.,;:!?])(\S)/g, "$1 $2");
  content = content.replace(/([.,;:!?])(?!\s)/g, "$1 ");

  content = content.replace(/(\S)([({[<])/g, "$1 $2");
  content = content.replace(/([)}\]>])(\S)/g, "$1 $2");

  return content;
}

console.log(printHighlight(jsContent, "javascript"));
console.log(fixContent(jsContent));
