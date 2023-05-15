import { Component } from '@angular/core';
import { ICONS } from 'src/data';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.css']
})
export class IconsComponent {
  isButtonShown = true;

  getRandomElement(arr: string[]) {
    return Math.floor(Math.random() * ((arr.length - 1) - 0) + 0);
  }

  getIconClassName() {
    return `fa fa-${ICONS[this.getRandomElement(ICONS)] || 'search'} fa-5x`
  }

  toggleButtonVisible() {
    setTimeout(() => {
      this.isButtonShown = true
    }, 3000)

    this.isButtonShown = false;
  }
}
