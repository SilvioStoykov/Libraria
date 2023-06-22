const addNewBtn = document.querySelector('#add-btn')
const grid = document.querySelector('.books-grid')
const popup = document.querySelector('.popup')
const addBookBtn = document.querySelector('#submitBtn')
const closeFormBtn = document.querySelector('#closeFormBtn')
const title = document.querySelector('.title-input')
const authorInput = document.querySelector('.author-input')
const pagesInput = document.querySelector('.pages-input')


let bookCards = []
let myLibrary = []


addNewBtn.addEventListener('click', ()=>{
    openPopup()
})

closeFormBtn.addEventListener('click',()=>{
    closePopup()
})

addBookBtn.addEventListener('click', ()=>{
    initCard()
    closePopup()
})

/*Initializing the cards containing book information*/
let initCard = function(){
    let book = new Book()
    book = document.createElement('div')
    book.classList.add('book')

    let bookName = document.createElement('p')
    bookName.classList.add('book-name')
  

    let author = document.createElement('p')
    author.classList.add('author')

    let pages = document.createElement('p')
    pages.classList.add('pages')

    book.title = title.value
    book.author = authorInput.value
    book.pages = pagesInput.value

    bookName.innerHTML = book.title
    author.innerHTML = book.author
    pages.innerHTML = book.pages

    const readBtn = document.createElement('button')
    readBtn.classList.add('readBtn')
    readBtn.innerHTML = "Read"

    deleteBtn = document.createElement('button')
    deleteBtn.classList.add('deleteBtn')
    deleteBtn.innerHTML = "Delete"

    grid.appendChild(book)
    book.appendChild(bookName)
    book.appendChild(author)
    book.appendChild(pages)
    book.appendChild(readBtn)
    book.appendChild(deleteBtn)
    bookCards.push(book)


    /*Deleting a book whenever the deleteBtn is pressed*/
    bookCards.forEach(element => {
        deleteBtn.addEventListener('click',()=>{
            book.remove()
        })
    });
    
    /*Changing read button status*/
    let readFlag = true
    readBtn.addEventListener('click', ()=>{
        
        if(readFlag == true){
            readBtn.style.backgroundColor = "green"
            readFlag = false
        }
        else if (readFlag == false){
            readBtn.style.backgroundColor = "red"
            readFlag = true
        }
    })
}

/*Opens the popup containg the book information form*/
let openPopup = function(){
    popup.classList.add('open-popup')
}

let closePopup = function(){
    popup.classList.remove('open-popup')
}

// class Book{
//     constructor(title, author, pages) {
//         this.title = title
//         this.author = author
//         this.pages = pages
//     }
// }


function Book(title, author, pages){
    title,
    author,
    pages
}
