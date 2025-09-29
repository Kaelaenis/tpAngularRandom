import { Component } from '@angular/core';

@Component({
  selector: 'app-random',
  templateUrl: './random.component.html',
  styleUrls: ['./random.component.css']
})
export class RandomComponent {
  randomInt: number = 0;

  intChosen: number = 0;
  tryCount: number = 0;

  maxtry: number = 5;
  message: string = '';

  generateRandomInt(): void {
    this.randomInt = Math.floor(Math.random() * 10) + 1;
  }

  ngOnInit(): void {
    this.generateRandomInt();
  }

  onButtonClick(): void {
   while (this.intChosen !== this.randomInt && this.tryCount + 1 < this.maxtry) {
      this.tryCount++;
      if (this.intChosen < this.randomInt) {
        this.message = 'Trop petit !';
      } else if (this.intChosen > this.randomInt) {
        this.message = 'Trop grand !';
      }
      return;
    }
    if (this.tryCount + 1 >= this.maxtry) {
      this.message = `Perdu ! Le nombre était ${this.randomInt}.`;
      return;
    }
    this.message = 'Vous avez gagné en ' + (this.tryCount + 1) + ' essai(s) !';
  }
}
