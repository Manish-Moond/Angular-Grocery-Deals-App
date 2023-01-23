import { Component, OnInit, Input } from '@angular/core';
import { FreshProducts } from 'src/app/models/Fresh-Product';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-fresh-product-card',
  templateUrl: './fresh-product-card.component.html',
  styleUrls: ['./fresh-product-card.component.css'],
})
export class FreshProductCardComponent implements OnInit {
  @Input('product') product: FreshProducts;

  heartIcon = faHeart;
  constructor() {}

  ngOnInit(): void {}
}
