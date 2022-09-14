import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BookService} from "../../core/service/book.service";
import {Observable} from "rxjs";
import {Book} from "../../core/model/book";
import {Router, RouterModule} from "@angular/router";

@Component({
  selector: 'app-all-books',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './all-books.component.html',
  styleUrls: ['./all-books.component.scss']
})
export class AllBooksComponent implements OnInit {

  books$:Observable<Book[]> = this.bookService.books$;

  constructor(private bookService:BookService, private router:Router) { }

  ngOnInit(): void {
  }

  deleteBook(id:number | undefined){
    this.bookService.deleteBook(id as number).subscribe(
      data => console.log(data),
      error => console.log(error),
      () => this.router.navigate(['/listbook'])
    );
  }
}
