import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { Subscription } from "rxjs";
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  data: any = {};
  loading = true;
  errors: any;
  category: string;


  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe( paramMap => {
      this.category = paramMap.get('cat');
      console.log(this.category);
      
  })
    

  }
  ngOnDestroy() {

  }

}
