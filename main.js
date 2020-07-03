//Library and books related functions
let myLibrary = [];

function Book(title, author,numberOfPages,isRead){
    this.title = title;
    this.author = author;
    this.numberOfPages = numberOfPages;
    this.isRead = isRead;

    this.info = function(){
        return title + " by " + author + ", " + numberOfPages + " pages, " + isRead;
    }
}

function addBookToLibrary(book){
    myLibrary.push(book);
}

function removeFromLibrary(book){
    myLibrary.slice(myLibrary.indexOf(book),1);
}

function readStatus(book){
    if(book.isRead == "yes"){
        book.isRead = "no";
    }else{
        book.isRead = 'yes';
    }
}

function render(){

}

//DOM selectors
let closeButton = document.querySelector("#close");
let openButton = document.querySelector("#add");

let addBook = document.querySelector("#addBookToLibrary");
let removeBook = document.querySelectorAll(".remove");

let form = document.querySelector("#form-container");
let books = document.querySelector("#books-container");

//Event Listeners
openButton.addEventListener('click', function(){
    form.style.display = "block";
});
closeButton.addEventListener('click', function(){
    form.style.display = "none";
});

addBook.addEventListener('click', function(){
    let book = new Book();
    addBookToLibrary();
    render();
})
removeBook.addEventListener('click',function(){
    removeFromLibrary();
    render();
})
