import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-chat',
  templateUrl: './product-chat.component.html',
  styleUrls: ['./product-chat.component.scss']
})
export class ProductChatComponent implements OnInit {
  constructor(
    private CartService: CartService,
  ){}
  chatList = this.CartService.getChat();
  prices = this.CartService.getPrices();
  pricesList = <any[]>[];
  ngOnInit(): void {
    this.getPrice();
  }
  getPrice(){
    this.CartService.getPrices().subscribe((res:any)=>{
        console.log('res',res)
        this.pricesList = res;
      });
  };
}
