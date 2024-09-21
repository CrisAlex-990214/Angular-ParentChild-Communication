import { Component, computed, EventEmitter, input, Input, Output, output } from '@angular/core';
import { Product } from '../models';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-shopping-cart-item',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './shopping-cart-item.component.html',
  styles: ``
})
export class ShoppingCartItemComponent {
  // @Input() product!: Product;
  // @Input() quantity!: number;

  product = input.required<Product>();
  quantity = input.required<number>();

  subtotal = computed(() => this.product().price * this.quantity());

  // @Output() quantityUpdated = new EventEmitter<number>();
  quantityUpdated = output<number>();
}
