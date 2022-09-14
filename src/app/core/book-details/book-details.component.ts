import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Observable} from "rxjs";
import {Book} from "../model/book";
import {BookService} from "../service/book.service";
import {ActivatedRoute, Router} from "@angular/router";
import {CartService} from "../service/cart.service";

@Component({
  selector: 'app-book-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {

  constructor(private bookService:BookService, private route:ActivatedRoute,private router:Router,
              private cartService:CartService) { }

  book$!:Observable<Book>;
  id!:number;

  ngOnInit(): void {
    this.id =parseInt(this.route.snapshot.paramMap.get("id")as string);
    this.book$ = this.bookService.findBookById(this.id);
  }

  addToCart(book:Book){
    this.cartService.addTocart(book)
      .subscribe();
  }

  goHome(){
    this.router.navigate(['/']);
  }

  cartView(){
    this.router.navigate(['/viewcart']);
  }
}
