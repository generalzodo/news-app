import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient) { }
  bookmarks = new BehaviorSubject([]);
  getNews(url:string){

   return  this.http.get(url)
  }
  
  getBookmarks() {
    let bookmarks = localStorage.getItem('bookmarks')
    if(bookmarks == null) this.bookmarks.next([])
    else this.bookmarks.next(JSON.parse(bookmarks))
    return this.bookmarks.asObservable()
  }

  setBookmarks(item){
    this.bookmarks.next(item);
    
    localStorage.setItem('bookmarks', JSON.stringify(item))
  }
  
}
