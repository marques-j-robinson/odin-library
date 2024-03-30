const library = []

function addBookToLibrary() {

}

function Book(title, author, totalPages, completed) {
    this.title = title
    this.author = author
    this.totalPages = totalPages
    this.completed = completed
    this.info = function() {
        return `${title} by ${author}, ${totalPages} pages, ${completed?'completed':'not read yet'}`
    }
}

const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 295, false)

console.log(theHobbit.info())
