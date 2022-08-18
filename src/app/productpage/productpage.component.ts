import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Product } from '../product/product';
import { appConstant } from '../app.constant';
import { environment } from '../environment/environment';


@Component({
  selector: 'app-productpage',
  templateUrl: './productpage.component.html',
  styleUrls: ['./productpage.component.css'],
})
export class ProductpageComponent implements OnInit {
  product: Product | any = '';
  id: number | string = '';
  constructor(private activatedRoute: ActivatedRoute, private http: HttpClient ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((data) => {
      this.getDetails((data as any).id);
    });
  }

  getDetails(id: number) {
    this.http .get(`${environment.dummyurl}${appConstant.apiRoute.products}/${id}`) .subscribe((data) => {
    this.product = data;
    console.log(data);
      });
  }
}
