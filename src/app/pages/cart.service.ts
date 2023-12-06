import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './products';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  constructor(
    private http: HttpClient,
  ) { }
  items: Product[] = [];
  addToChat(item:Product){
    console.log('item',item)
    this.items.push(item);
  };
  getChat(){
    return this.items;
  }
  clearChat(){
    this.items = [];
    return this.items;
  }
  // async 
  getPrices(){
    // await 
    let data = this.http.get<{type:string,price:number}[]>('/assets/shipping.json');
    // data.subscribe((res:any)=>{
    //   console.log('res',res)
    //   return res;
    // })
    // console.log(data)
    return data;
  }
}
