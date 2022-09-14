import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {BookService} from "../../core/service/book.service";
import {ActivatedRoute, Router, RouterModule} from "@angular/router";
import {Book} from "../../core/model/book";
import {Observable} from "rxjs";

@Component({
  selector: 'app-update-book',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule],
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.scss']
})
export class UpdateBookComponent implements OnInit {

  book!:Book;

  updateForm!:FormGroup;

  constructor(private fb:FormBuilder, private bookService:BookService, private router:Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
    let id = parseInt(this.route.snapshot.paramMap.get("id") as string);
    this.bookService.findBookById(id)
      .subscribe(
        data => {
          this.book = data;
          // let comment = [this.book?.comments ? [...this.book.comments] : ['']]
          this.updateForm = this.fb.group(
            {
              title:[this.book?.title],
              author:[this.book?.author],
              price:[this.book?.price],
              description:[this.book?.description],
              imageUrl:[this.book?.imageUrl],
              // comments:[comment]
              comments:[this.book?.comments],
              publishedDate:[this.book?.publishedDate]
            }
          )
        }
      );
  }

  updateBook(){
    const comments:string[] = new Array();
    let commentsDate = this.updateForm.controls['comments'].value;
    console.log(typeof(commentsDate));

    if(typeof(commentsDate) == "string"){
      comments.push(...commentsDate.split(","))
    }else{
      commentsDate = this.updateForm.controls['comments'].value as string[];
      commentsDate.forEach( (c:string) => {
        comments.push(c)
      });
    }

    // title?: string, author?: string, price?: number, description?: string, imageUrl?: string, comments?: string[], publishedDate?: Date,id?: number
    const book = new Book(
      this.updateForm.controls['title'].value,
      this.updateForm.controls['author'].value,
      this.updateForm.controls['price'].value,
      this.updateForm.controls['description'].value,
      this.updateForm.controls['imageUrl'].value,
      comments,
      this.updateForm.controls['publishedDate'].value,
      this.book.id
    );
    this.bookService.updateBook(book)
      .subscribe(
        data => console.log(data),
        error => console.log(error),
        () => this.router.navigate(['/listbook'])
      );
    console.log(book);
  }
}
