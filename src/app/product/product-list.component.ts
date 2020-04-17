import { Component } from '@angular/core';

@Component({
  selector: 'my-product',
  templateUrl :   './product-list.component.html'
})
export class ProductListComponent  {
  pageTitle: string = "Product List";
  products:any[]= [
    {
      "productId" : 1,
      "productName": "car",
      "productCost":"5lkhs",
      "productYear":2020,
      "productCode" : "#1cb",
       "ProductRating" : 4.2
    },
    {
      "productId" : 2,
      "productName": "bike",
      "productCost":"1lkhs",
      "productYear":2021,
      "productCode" : "#2cb",
      "ProductRating" : 4.8
    }
  ]
} 