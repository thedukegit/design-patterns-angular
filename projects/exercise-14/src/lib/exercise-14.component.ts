import {Component} from '@angular/core';
import {Asteroid} from "./models/asteroid";
import {MatButton} from "@angular/material/button";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'lib-exercise-14',
  standalone: true,
  imports: [
    MatButton,
    MatFormField,
    MatInput,
    FormsModule,
    MatLabel
  ],
  templateUrl: './exercise-14.component.html',
  styles: ``
})
export class Exercise14Component {
  protected amount = 100;
  private baseAsteroid = new Asteroid('Base Asteroid');
  protected asteroids: Asteroid[] = [];

  protected generate(amount: number): void {
    for (let i = 0; i < amount; i++) {
      this.asteroids.push(this.cloneAsteroid());
    }
  }

  private cloneAsteroid(): Asteroid {
    const clone: Asteroid = structuredClone(this.baseAsteroid)
    clone.name = this.generateRandomString(10);
    return clone;
  }

  private generateRandomString(length: number): string {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }
}
