import { Injectable } from '@angular/core';
import {BehaviorSubject, catchError, map, Observable, shareReplay, tap, throwError} from "rxjs";
import {Book} from "../model/book";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable()
export class BookService {

  //Create Object
  private bookSubject:BehaviorSubject<Book[]> = new BehaviorSubject<Book[]>([]);
  books$ = this.bookSubject.asObservable();

  constructor(private http:HttpClient) {
    this.loadAllBooks();
  }

  private loadAllBooks(){
    const header = new HttpHeaders();
    header.set("Content-Type", "application/json");
    this.http.get<Book[]>("http://localhost:8080/api/books", {headers:header})
      .pipe(
        shareReplay(),
        catchError( err => {
          return throwError(err);
        }),
        tap( book => this.bookSubject.next(book))
      ).subscribe();
  }

  findBookById(id:number):Observable<Book>{
    return this.books$.pipe(
      map(books => books.find(book => book.id == id))
    ) as Observable<Book>;
  }

  createBook(book:Book):Observable<Book>{
    const header = new HttpHeaders().set('Content-Type','application/json');
    return this.http.post<Book>('http://localhost:8080/api/book/create', book, {headers:header})
      .pipe(
        catchError( err => {
          return throwError(err)
        }),
        tap( () => this.loadAllBooks())
      );
  }

  updateBook(book:Book):Observable<Book>{
    const header = new HttpHeaders().set("Content-Type","application/json");
    return this.http
      .put<Book>(`http://localhost:8080/api/book/update/${book.id}`, book, {headers:header})
      .pipe(
        shareReplay(),
        catchError( err => {
          return throwError(err);
        }),
        tap (() => this.loadAllBooks())
      );
  }

  deleteBook(id:number):Observable<any>{
    return this.http
      .delete<any>(`http://localhost:8080/api/book/delete/${id}`)
      .pipe(
        catchError( err => {
          return throwError(err);
        }),
        tap(
          () => this.loadAllBooks()
        )
      );
  }
}
