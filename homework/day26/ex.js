let jsContent = `Năm 1995: JavaScript được tạo ra bởi Brendan Eich chỉ trong khoảng 10 ngày khi ông làm việc tại Netscape. Tên ban đầu của Javascript là Mocha, sau đó được đổi tên thành LiveScript.
Năm 1996:Javascript được gửi đến ECMA(European Computer Manufacturers Association - Hội liên hiệp các nhà sản xuất máy tính Châu Âu)để chuẩn hóa và đổi tên thành JavaScript.
Năm 2009: ECMAScript 5 ra đời với nhiều cải tiến quan trọng như có thêm nhiều phương thức mới cho mảng và đối tượng và tính năng "strict mode". Cũng trong năm 2009 Ryan Dahl đã tạo ra Node.js, một nền tảng cho phép chạy javaScript ngoài trình duyệt. Điều này đã mở ra một cánh cửa mới cho JavaScript.
Năm 2015:ECMAScript 6 (ES6) ra đời,là phiên bản lớn nhất của ECMAScript với nhiều cải tiến và tính năng được coi là vượt bậc.
Năm 2016 - nay:Các phiên bản ECMAScript mới được ra mắt liên tục,với nhiều cải tiến và tính năng mới.Cho đến nay javaScript đã trở thành một trong số những ngôn ngữ được ưa chuộng và sử dụng nhiều nhất thế giới.`;


function printHighlight(content, keyword) {
    const contentLower = content.toLowerCase();
    const keywordLower = keyword.toLowerCase();

    let start = 0;
    let highlightedContent = "";

    while (true) {
        start = contentLower.indexOf(keywordLower, start);
        if (start === -1) {
            highlightedContent += content.slice(highlightedContent.length);
            break;
        } else {
            highlightedContent += content.slice(highlightedContent.length, start) + '<b>' + content.slice(start, start + keyword.length) + '</b>';
            start += keyword.length;
        }
    }
    console.log(highlightedContent);
}

function fixContent(content) {
    content = content.replace(/([.,;:!?])(?=\S)/g, "$1 ");

    content = content.replace(/(\S)([({[\]<])/g, "$1 $2");
    content = content.replace(/([)}\]>])(\S)/g, "$1 $2"); 

    content = content.replace(/\s+/g, ' ').trim();

    return content;
}


printHighlight(jsContent, "javascript");
console.log(fixContent(jsContent));