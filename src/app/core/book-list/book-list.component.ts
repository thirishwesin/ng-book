import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BookService} from "../service/book.service";
import {Observable} from "rxjs";
import {Book} from "../model/book";
import {HttpClientModule} from "@angular/common/http";
import {RouterModule} from "@angular/router";

@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [CommonModule,HttpClientModule,RouterModule],
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {

  constructor(private bookService:BookService) { }

  books$:Observable<Book[]> = this.bookService.books$;

  ngOnInit(): void {
  }

}
