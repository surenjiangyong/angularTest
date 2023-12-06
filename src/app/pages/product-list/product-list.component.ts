import { Component } from '@angular/core';
import { products } from "../products";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
  products = products;
  title = 'haha'
  product = null;
  share(el:any){
    console.log(el)
    this.product = el;
  }
  onNotify(txt:string|null) {
    console.log('接收子组件传递事件及参数',txt)
  }
}
