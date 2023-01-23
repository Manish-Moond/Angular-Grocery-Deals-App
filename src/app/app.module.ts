import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PosterComponent } from './components/poster/poster.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { FreshProductComponent } from './components/fresh-product/fresh-product.component';
import { FreshProductCardComponent } from './components/fresh-product-card/fresh-product-card.component';
import { ReviewComponent } from './components/review/review.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, PosterComponent, CategoriesComponent, FreshProductComponent, FreshProductCardComponent, ReviewComponent, FooterComponent],
  imports: [BrowserModule, FontAwesomeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
