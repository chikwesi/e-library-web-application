import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { BookService } from 'src/app/service/book.service';

@Component({
  selector: 'app-add-book-dialog',
  templateUrl: './add-book-dialog.component.html',
  styleUrls: ['./add-book-dialog.component.scss']
})
export class AddBookDialogComponent implements OnInit {
  @Output() saved:EventEmitter<Boolean> = new EventEmitter<Boolean>()
  newBookForm: FormGroup
  bookImage: string;
  constructor(
    public activeModal: NgbActiveModal,
    private bookService: BookService) { }

  ngOnInit(): void {
    this.newBookForm = new FormGroup({
      title: new FormControl('', [Validators.required]),
      author: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      bookImage: new FormControl('', [Validators.required]),

    })
  }
  getBookImage(event: any) {
    const file = event.target.files[0]
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload  = () =>  this.bookImage = reader.result.toString()
   
  }
  addBook(){
    const book = this.newBookForm.value
    book.bookImage = this.bookImage
    const isSaved = this.bookService.addBook(book)
    if(isSaved)this.saved.emit(true)
  }
}
