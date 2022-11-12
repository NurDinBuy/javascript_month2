// Основой HTML-документа являются теги.

// document.body.style.height = '100vh'
// document.body.style.width = '100vw'
// document.body.style.background = 'red'


// В соответствии с объектной моделью документа («Document Object Model», коротко DOM), каждый HTML-тег является объектом.
// Вложенные теги являются «детьми» родительского элемента. Текст, который находится внутри тега, также является объектом.
//
// Все эти объекты доступны при помощи JavaScript, мы можем использовать их для изменения страницы.
//
// Например, document.body – объект для тега <body>.

// события addEventListener

// var heading = document.getElementById('hello')
// console.dir(heading.textContent)
//
// heading.textContent = 'Hello from JavaScript!'

// const osiX = document.getElementById('x')
// const osiY = document.getElementById('y')
//
// window.addEventListener('mousemove', event => {
//     let x = event.screenX
//     let y = event.screenY
//
//     osiX.innerHTML = x
//     osiY.innerHTML = y
// })