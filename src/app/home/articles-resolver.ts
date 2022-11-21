
import { Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { NewsService } from '../news.service';

 
// import { ProductService } from '../product/product.service';
 
@Injectable({
  providedIn: 'root'
})
export class ArticlesResolverService implements Resolve<any> {
  url = '';
  constructor(private newsService: NewsService, ) {}
  resolve(route: ActivatedRouteSnapshot): Observable<any> {

    
    let category = route.paramMap.get('cat')
    if(category == 'headlines') category = ''
    this.url  = 'https://newsapi.org/v2/top-headlines?' +
    'country=ng&' + 'category='+ category +'&'+
    'apiKey=043c1abc77f54ab9857dc88481c7475c';
    return this.newsService.getNews(this.url);
     

    // this.queryCategories = this.apollo
    //   .watchQuery({
    //     query: CATEGORIES_QUERY
    //   })
    //   .valueChanges.subscribe(result => {
    //     this.categories = result.data['categories'];


    //     this.loading = result.loading;
    //     this.errors = result.errors;
    //   });
  }
}