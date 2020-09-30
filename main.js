let myLibrary = [];
class Book {
    constructor(title, author, numberOfPages, isRead){
        this.title = title;
        this.author = author;
        this.numberOfPages = numberOfPages;
        this.isRead = isRead;
        this.info  = title + " by " + author + ", " + numberOfPages + " pages, " + isRead;
    }
    displayTheBook() {
        const card = document.createElement('article');
        books.appendChild(card);
        card.classList.add('book');
        card.innerHTML = '<strong>'+ this.title + '</strong><br><br>' +
                'by <i>' + this.author + '</i><br><br>' + this.numberOfPages + ' Pages<br><br>' +
                '<span id="readStatus">' + this.isRead + '</span>';
        // ID
        let cardId = document.getElementsByClassName("card");
        card.id = myLibrary.length - 1;
        // buttons
        let remove = document.createElement("button");
        let markRead = document.createElement("button");
        remove.classList.add("remove");
        markRead.classList.add("markread");
        card.appendChild(remove);
        card.appendChild(markRead);
        remove.textContent = "remove";
        markRead.textContent = "read";
        remove.style.visibility = "hidden";
        markRead.style.visibility = "hidden";
        //visibility of remove/read buttons
        card.addEventListener("mouseover", function () {
            remove.style.visibility = "visible";
            markRead.style.visibility = "visible";
        });
        card.addEventListener("mouseout", function () {
            remove.style.visibility = "hidden";
            markRead.style.visibility = "hidden";
        });
        // delete fucntionality
        remove.addEventListener("click", () => {
            let index = card.id;
            myLibrary.splice(index, 1);
            remove.parentElement.remove();
        });
        //read status change functionality
        let readSpan = document.querySelectorAll("#readStatus");
        markRead.addEventListener("click", () => {
            let index = card.id;
            if(myLibrary[index].isRead === "read"){
                myLibrary[index].isRead = "to read";
                readSpan[index].innerHTML = "to read";
            }else{
                myLibrary[index].isRead = "read";
                readSpan[index].innerHTML = "read";
            }
        });
    }
}
const display = (() => {
    const visibilityChange = () => {
        if(formWrapper.style.visibility === "visible"){
            formWrapper.style.visibility = "hidden";
        }else{
            formWrapper.style.visibility = "visible";
        }
        document.getElementById("title").value = "";
        document.getElementById("author").value = "";
        document.getElementById("pages").value = "";
        readRadio.checked = false;
        unreadRadio.checked = false;
    }
    const addToLibrary = () => {
        let authorInput = document.getElementById('author').value;
        let titleInput = document.getElementById('title').value;
        let pagesInput = document.getElementById('pages').value;
        let statusInput = document.getElementById('read');

        if(statusInput.checked === true) {
            statusInput.value = "read";
        }else{
            statusInput.vaule = "to read";
        }

        let newBook = new Book(titleInput, authorInput, pagesInput, statusInput.value);
        myLibrary.push(newBook);
        newBook.displayTheBook();
        display.visibilityChange();
    }
    return {
        visibilityChange,
        addToLibrary
    }
})();
const formWrapper = document.querySelector(".input-form_wrapper");
//submiting input form
const submit = document.getElementById("submit");
submit.addEventListener("click", display.addToLibrary);
//opening input form

const inputForm = document.querySelector("#add-book");
inputForm.addEventListener("click", display.visibilityChange);
//closing input form
const closingButton = document.querySelector("#closebutton");
closingButton.addEventListener("click", display.visibilityChange);
//other
const readRadio = document.getElementById("read");
const unreadRadio = document.getElementById("toread");
const books = document.querySelector('.books-wrapper');

//to do:
// refactoring to make code more clear for visitors
// local storage/ firebase database