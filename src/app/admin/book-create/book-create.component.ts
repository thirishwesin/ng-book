import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {Book} from "../../core/model/book";
import {BookService} from "../../core/service/book.service";
import {Router, RouterModule} from "@angular/router";

@Component({
  selector: 'app-book-create',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule],
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.scss']
})
export class BookCreateComponent implements OnInit {
  /*
"id": 1,
"title": "Blue Moon",
"author": "T.M Thomas",
"price": 25.4,
"description": "A good to read novel",
"imageUrl": "https://picsum.photos/400",
"comments": [
"Nice",
"Good to read"
],
"publishedDate": "2022-07-16"
  */

  constructor(private fb: FormBuilder, private bookService: BookService, private router: Router) { }
  bookForm: FormGroup = this.fb.group({
    
  })
  
  ngOnInit(): void {
  }

  createBook() {

  }

    
}
    

