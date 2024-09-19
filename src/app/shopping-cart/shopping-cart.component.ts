import { ChangeDetectorRef, Component, computed, OnInit } from '@angular/core';
import { Product, ShoppingCartItem } from '../models';
import { ShoppingCartItemComponent } from '../shopping-cart-item/shopping-cart-item.component';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-shopping-cart',
  standalone: true,
  imports: [ShoppingCartItemComponent, CurrencyPipe],
  templateUrl: './shopping-cart.component.html',
  styles: ``
})
export class ShoppingCartComponent implements OnInit {

  products!: Product[];
  items!: ShoppingCartItem[];

  ngOnInit(): void {
    this.products = [
      {
        id: 'd6342a50-056b-449e-b90a-3e357a29a82a',
        url: 'https://cdn.pixabay.com/photo/2013/07/13/14/08/apparel-162192_1280.png',
        name: 'T-shirt', size: 'M', color: 'Red', price: 54
      },
      {
        id: 'e744cdee-bebe-42c4-b235-c75f6602fafb',
        url: 'https://cdn.pixabay.com/photo/2017/07/31/15/06/boot-2558324_1280.jpg',
        name: 'Boots', size: 'XL', color: 'Brown', price: 92
      },
      {
        id: '8329c7b0-a217-4d3e-affb-d4279707c5e3',
        url: 'https://cdn.pixabay.com/photo/2016/02/25/20/41/sweater-1222876_1280.jpg',
        name: 'Sweater', size: 'L', color: 'Pink', price: 40
      }
    ];

    this.items = this.products.slice(0, 2).map(x => <ShoppingCartItem>{ id: x.id, quantity: 1 });
  }

  getShoppingCartProducts() {
    const itemIds = this.items.map(x => x.id);
    return this.products.filter(x => itemIds.includes(x.id));
  }
}
