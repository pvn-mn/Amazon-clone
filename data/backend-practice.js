const xhr = new XMLHttpRequest();

xhr.addEventListener('load', () => {
    console.log(xhr.response);
});

//backend can respond with different types of data -
// (making a GET request === using URL in the browser):

// xhr.open('GET', 'https://supersimplebackend.dev/hello'); //Plain text
// xhr.open('GET', 'https://supersimplebackend.dev/products/first'); //JSON
// xhr.open('GET', 'https://supersimplebackend.dev/documentation'); //HTML
xhr.open('GET', 'https://supersimplebackend.dev/images/apple.jpg'); // Images

xhr.send();