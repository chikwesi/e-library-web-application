import { Injectable } from '@angular/core';
import { Book, LendBook } from '../model/data-model';
import { UsersService } from './users.service';

@Injectable({
  providedIn: 'root'
})
export class BookService {


  constructor(
    private userService: UsersService
  ) { }
  getAllBooks() {
    const books = <Book[]>JSON.parse(localStorage.getItem('books'))
    return books || []
  }
  saveBookInMemory(books: Book[]) {
    localStorage.setItem('books', JSON.stringify(books))
  }
  deleteBook(bookId: number) {
    const books = <Book[]>this.getAllBooks();
    const selectedBookIndex = books.findIndex(books => books.id == bookId)
    books.splice(selectedBookIndex, 1)
    this.saveBookInMemory(books)
  }
  addBook(data: {
    title: string,
    description: string,
    author: string,
    bookImage: string

  }) {
    const books = <Book[]>this.getAllBooks()
    const book: Book = {
      ...data,
      id: books ? books.reduce((x, i) => i.id > x ? i.id + 1 : x + 1, 1) : 1,
      dateCreated: new Date(Date.now())
    }
    books.push(book)
    this.saveBookInMemory(books)
    return ({ status: 'Success', message: 'book created successfully' })
  }
  updateBook(data: Book) {
    const books = <Book[]>this.getAllBooks();
    const selectedBookIndex = books.findIndex(books => books.id == data.id)
    const book: Book = {
      ...data
    }
    books.splice(selectedBookIndex, 1, book)
    this.saveBookInMemory(books)
    return ({ status: 'Success', message: 'book updated successfully' })
  }
  getAllLentBooks() {
    const lent = <LendBook[]>JSON.parse(localStorage.getItem('lentbooks'))
    return lent || []
  }
  saveLentBooksInMemory(books: LendBook[]) {
    localStorage.setItem('lentbooks', JSON.stringify(books))
  }

  lendBook(data: {
    userIds: number[],
    bookId: number
  }) {
    const lentBooks = <LendBook[]>this.getAllLentBooks()
    data.userIds.forEach(element => {
      const isBookLentAlready = lentBooks.find(u => u.userId == element && u.bookId == data.bookId);
      if (!isBookLentAlready) {
        const lendBook: LendBook = {
          bookId: data.bookId,
          userId: element,
          numberLent: 1,
          id: lentBooks ? lentBooks.reduce((x, i) => i.id > x ? i.id + 1 : x + 1, 1) : 1,
          dateLent: new Date(Date.now())
        }
        lentBooks.push(lendBook)
      this.saveLentBooksInMemory(lentBooks)
      }
    });
    
    return ({ status: 'Success', message: 'book lended successfully' })
  }
  getLentUsersByBookId(bookId:number){
    const allUsers = this.userService.getAllUsers()
    const lentBooks = <LendBook[]>this.getAllLentBooks()
    const lentBooksById = lentBooks.filter( u => u.bookId == bookId)
    let lentUsers = lentBooksById.map( u => {
      let user = allUsers.find(e => u.userId == e.id)
      u.user = user
      return u
    })

    return lentUsers
  }
}

