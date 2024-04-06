const defaultBooks = [
    {title: 'The Hobbit', author: 'J.R.R. Tolkien', totalPages: 295, completed: true},
    {title: 'Dune', author: 'Frank Herbert', totalPages: 896, completed: false},
    {title: 'A Game of Thrones', author: 'George R. R. Martin', totalPages: 694, completed: false},
]

const rootEl = document.querySelector('#root')

const library = []

class Book {
    constructor(title, author, totalPages, completed) {
        this.title = title
        this.author = author
        this.totalPages = totalPages
        this.completed = completed
    }

    set toggleCompleted(completed) {
        this.completed = !completed
    }

    get info() {
        return `${this.title} by ${this.author}, ${this.totalPages} pages, ${this.completed?'completed':'not read yet'}`
    }
}

function addBookToLibrary({title, author, totalPages, completed}) {
    const newBook = new Book(title, author, totalPages, completed)
    library.push(newBook)
    const bookEl = document.createElement('div')
    const infoEl = document.createElement('p')
    const toggleCompletedEl = document.createElement('button')
    toggleCompletedEl.innerText = 'Toggle Completed Status'
    toggleCompletedEl.addEventListener('click', () => {
        newBook.toggleCompleted = newBook.completed
        infoEl.innerHTML = newBook.info
        infoEl.append(toggleCompletedEl)
        infoEl.append(deleteBtnEl)
    })
    const deleteBtnEl = document.createElement('button')
    deleteBtnEl.innerText = 'Remove'
    deleteBtnEl.addEventListener('click', () => {
        bookEl.classList.add('hide')
    })
    infoEl.append(newBook.info)
    infoEl.append(toggleCompletedEl)
    infoEl.append(deleteBtnEl)
    bookEl.append(infoEl)
    rootEl.append(bookEl)
}

// Adds default books to library
defaultBooks.forEach(book => {
    addBookToLibrary(book)
})

const newBookFormEl = document.querySelector('#newbookform')

function toggleFormDisplay() {
    if (!newBookFormEl.classList.contains('hide')) {
        newBookFormEl.classList.add('hide')
    } else {
        newBookFormEl.classList.remove('hide')
    }
}

const newBookBtnEl = document.querySelector('#newbook')
newBookBtnEl.addEventListener("click", () => {
    toggleFormDisplay()
})

const form = document.querySelector('form')

form.addEventListener('submit', (e) => {
    e.preventDefault()
    const newBook = Object.fromEntries(new FormData(form).entries())
    newBook.totalPages = newBook.totalPages === '' ? 0 : Number(newBook.totalPages)
    newBook.completed = newBook.completed ? true : false
    addBookToLibrary(newBook)
    toggleFormDisplay()
});
