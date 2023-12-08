//video 1
// const search = document.getElementById('search-books');
// const bookList = document.getElementById('book-list');

//video 2

// console.log(search, bookList);

// const titles = document.getElementsByClassName('title');

// console.log(Array.isArray(titles));
// console.log(Array.isArray(Array.from(titles)));

// Array.from(titles).forEach(function(title){
//   console.log(title);
// });

//video 3

// const wmf = document.querySelector('#book-list li:nth-child(2) .name');
// console.log(wmf);

// var books = document.querySelector('#book-list li .name');
// console.log(books);

// books = document.querySelectorAll('#book-list li .name');
// console.log(books);

//video 4

// Array.from(books).forEach(function(book){
//   console.log(book);
// });

// var books = document.querySelectorAll('#book-list li.name');
// Array.from(books).forEach(function()){
//     console.log(book.textContent)
// }

//video 5

// const books = document.querySelectorAll('#book-list li .name');

// Array.from(books).forEach(function(book){
//   book.textContent += ' (Book title)';
// });

// const bookList = document.querySelector('#book-list');
// bookList.innerHTML = '<h2>Books and more books...</h2>';
// bookList.innerHTML += '<p>This is how you add HTML content</p>';

//video 6

// const banner = document.querySelector('#page-banner');

// console.log('#page-banner node type is:', banner.nodeType);
// console.log('#page-banner node name is:', banner.nodeName);
// console.log('#page-banner has child nodes:', banner.hasChildNodes());

// const clonedBanner = banner.cloneNode(true);
// console.log(clonedBanner);

//video 7
// const bookList = document.querySelector('#book-list');
// console.log('the parent node is:', bookList.parentNode);
// console.log('the parent element is:', bookList.parentElement);


// console.log(bookList.children);

//video 8
const bookList = document.querySelector('#book-list');

console.log('#book-list next sibling:', bookList.nextSibling);
console.log('#book-list next element sibling:', bookList.nextElementSibling);
console.log('#book-list previous sibling:', bookList.previousSibling);
console.log('#book-list previous element sibling:', bookList.previousElementSibling);

bookList.previousElementSibling.querySelector('p').innerHTML += '<br />Too cool for everyone else!';

//video 9

