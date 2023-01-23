import { Component, Input } from '@angular/core';
import { FRESHPRODUCTS } from 'src/app/DB/mock-fresh-product';
import { FreshProducts } from 'src/app/models/Fresh-Product';

@Component({
  selector: 'app-fresh-product',
  templateUrl: './fresh-product.component.html',
  styleUrls: ['./fresh-product.component.css']
})
export class FreshProductComponent {
  freshProducts: FreshProducts[] = FRESHPRODUCTS;  
}
