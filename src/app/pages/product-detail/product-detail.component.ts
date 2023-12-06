import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { products, Product } from "../products";
import { CartService } from "../cart.service";

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private CartService: CartService,
  ) { }
  product: Product | undefined;
  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));
    // console.log(routeParams,productIdFromRoute)
    this.product = products.find(product => product.id === productIdFromRoute);
  }
  addChat(product: Product){
    // console.log('product',product)
    this.CartService.addToChat(product);
    // console.log(this.CartService.getChat())
  }
}
