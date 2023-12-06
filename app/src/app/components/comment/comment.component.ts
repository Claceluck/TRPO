import { Component, OnInit } from '@angular/core';
import { CommentService } from '../../services/comment.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrl: './comment.component.scss'
})
export class CommentComponent implements  OnInit {
  comments: any[] = [];
  message: any;

  constructor(private service: CommentService) {}

  ngOnInit(): void {
    this.service.getComments().subscribe(c => {
      this.comments = c;
    });
  }

  add(text: string) {
    const comment = {text};
    this.service.create(comment).subscribe( c => {
      this.comments.push(c);
    }, err => this.message = err);
  }
}
