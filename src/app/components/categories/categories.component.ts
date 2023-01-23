import { Component } from '@angular/core';
import { Categories } from '../../models/Categories';
import { CATEGORIES } from '../../DB/mock-categories';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
})
export class CategoriesComponent {
  categories: Categories[] = CATEGORIES;
}
