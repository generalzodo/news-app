import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { ArticlesResolverService } from './home/articles-resolver';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', redirectTo: 'category/headlines', pathMatch: 'full' }, 
  { path: "category/:cat",  resolve:{res: ArticlesResolverService},  component: HomeComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
