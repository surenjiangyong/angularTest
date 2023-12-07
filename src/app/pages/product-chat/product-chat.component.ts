import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { CartService } from '../cart.service';

// @Directive({selector: '[appSpy]'})
@Component({
  selector: 'app-product-chat',
  templateUrl: './product-chat.component.html',
  styleUrls: ['./product-chat.component.scss']
})
export class ProductChatComponent implements OnInit,OnDestroy {
  
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
    console.log('chat组件被初始化')
    this.getPrice();
  };
  ngOnChange():void {
    console.log('数据发生变化')
  };
  ngOnDestroy():void {
    console.log('chat组件被销毁')
  };
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
