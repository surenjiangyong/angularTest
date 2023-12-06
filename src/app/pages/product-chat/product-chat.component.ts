import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-chat',
  templateUrl: './product-chat.component.html',
  styleUrls: ['./product-chat.component.scss']
})
export class ProductChatComponent implements OnInit {
  
  checkForm = this.FormBuilder.group({
    name:'',
    address:'',
  });
  constructor(
    private CartService: CartService,
    private FormBuilder: FormBuilder,
  ){}
  chatList = this.CartService.getChat();
  prices = this.CartService.getPrices();
  pricesList = <any[]>[];
  ngOnInit(): void {
    this.getPrice();
  }
  getPrice(){
    this.CartService.getPrices().subscribe((res:any)=>{
        // console.log('res',res)
        this.pricesList = res;
      });
  };
  onSubmit():void{
    console.log('submited', this.checkForm.value);
    // this.checkForm.reset();
  };
}
