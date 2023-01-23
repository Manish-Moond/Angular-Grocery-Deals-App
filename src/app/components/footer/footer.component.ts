import { Component, Output } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  // @Output newEve
  enteredEmail(value:string){
    console.log(value);
  }
}
