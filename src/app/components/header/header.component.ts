import { Component } from '@angular/core';
import { faHeartCirclePlus, faUser, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  faHeartCirclePlus = faHeartCirclePlus;
  faUser = faUser;
  faShoppingCart = faShoppingCart;
}
