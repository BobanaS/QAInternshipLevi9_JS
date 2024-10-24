class Book{
    constructor(bookName,bookAuthor,bookPrice){
        this.name=bookName;
        this.author=bookAuthor;
        this.price=bookPrice;
    }
    printBookData(){
     console.log(`[Book: ${this.name} - Author:${this.author} - Price:${this.price}.] `);
    }

}
let book = new Book("Covek po imenu Uve", "Fredrik Bakman", 1000);
book.printBookData();