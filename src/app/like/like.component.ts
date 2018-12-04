import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.scss']
})
export class LikeComponent implements OnInit {

  @Input()  isLiked = false;

  clickedLike() {
    this.isLiked = !this.isLiked;
  }

  constructor() { }

  ngOnInit() {
  }

}
