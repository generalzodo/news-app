import { NewsService } from './../news.service';
import { Component, OnInit } from "@angular/core";

import { Subscription } from "rxjs";

import { environment } from '../../environments/environment';
import * as moment from 'moment';
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  data: any = {};
  loading = true;
  errors: any;
  leftArticlesCount: any;
  categories: any = {};
  trending: any;
  breaking: any;
  bookmarks: any;
  tabs:any = 'latest'

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private newService:NewsService) {

  }

  ngOnInit() {
    
    this.activatedRoute.data.subscribe((response: any) => {
      this.trending = response.res.articles[0];
      response.res.articles.shift()
      this.breaking = response.res.articles[0];
      response.res.articles.shift()

      this.data = response.res
    });
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
 
    this.newService.getBookmarks().subscribe(value => {

      this.bookmarks = value;
    });

    
  }

  // ngOnDestroy() {
  //   this.queryArticles.unsubscribe();
  //   this.queryCategories.unsubscribe();


  returnDate(date: any) {
    return moment(date).format('MMM Do YY');
  }

  bookmarkNews(item) {
    // if (this.bookmarks.include(item))
    const index = this.bookmarks.indexOf(item);

    if (index > -1) this, this.bookmarks.splice(index, 1)
    else this.bookmarks.push(item)

  }


}
