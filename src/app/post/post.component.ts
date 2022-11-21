import { NewsService } from './../news.service';
import { Component, Input, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  @Input() data: any = {}
  @Input() bookmark: boolean;
  bookmarks: any = [];
  constructor(private newService: NewsService) {

  }

  ngOnInit(): void {
    this.newService.getBookmarks().subscribe(value => {

      this.bookmarks = value;
    });
  }
  returnDate(date: any) {
    return moment(date).format('MMM Do YY');
  }


  bookmarkNews(item) {
    // if (this.bookmarks.include(item))
    console.log();

    let index = this.bookmarks.findIndex(x => x.title === item.title);


    if (index > -1) this.bookmarks.splice(index, 1)
    else this.bookmarks.push(item)

    this.newService.setBookmarks(this.bookmarks)

  }

  checkBookmarks(item) {
    let index = this.bookmarks.findIndex(x => x.title === item.title);
    if (index == -1) return false
    return true
  }
}
