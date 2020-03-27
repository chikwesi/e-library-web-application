import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { BookService } from 'src/app/service/book.service';
import { Book } from 'src/app/model/data-model';

@Component({
  selector: 'app-update-book-dialog',
  templateUrl: './update-book-dialog.component.html',
  styleUrls: ['./update-book-dialog.component.scss']
})
export class UpdateBookDialogComponent implements OnInit {
  @Output() saved:EventEmitter<Boolean> = new EventEmitter<Boolean>()
  @Input() bookToUpdate:Book;

  updateBookForm: FormGroup
  bookImage: string;
  constructor(
    public activeModal: NgbActiveModal,
    private bookService: BookService) { }

  ngOnInit(): void {
    this.updateBookForm = new FormGroup({
      title: new FormControl(this.bookToUpdate.title, [Validators.required]),
      author: new FormControl(this.bookToUpdate.author, [Validators.required]),
      description: new FormControl(this.bookToUpdate.description, [Validators.required]),
      bookImage: new FormControl(null, []),

    })
  }
  getBookImage(event: any) {
    const file = event.target.files[0]
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload  = () =>  this.bookImage = reader.result.toString()
   
  }
  updateBook(){
    const book = this.updateBookForm.value
    book.bookImage = this.bookImage || this.bookToUpdate.bookImage
    const updatedBook = {
      ...this.bookToUpdate,
      ...book
    }
    const isSaved = this.bookService.updateBook(updatedBook)
    if(isSaved)this.saved.emit(true)
  }
}
