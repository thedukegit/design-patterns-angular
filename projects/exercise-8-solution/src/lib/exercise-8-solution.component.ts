import { Component } from '@angular/core';
import { AsteroidBuilder } from './models/asteroid.builder';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatButton } from '@angular/material/button';
import { Asteroid } from './models/asteroid';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'lib-exercise-8-solution',
  standalone: true,
  imports: [MatFormField, MatLabel, MatInput, MatButton, ReactiveFormsModule],
  templateUrl: './exercise-8-solution.component.html',
  styleUrl: './exercise-8-solution.component.scss',
})
export class Exercise8SolutionComponent {
  protected formGroup: FormGroup = new FormGroup({
    size: new FormControl(''),
    speed: new FormControl(''),
    durability: new FormControl(''),
  });

  protected asteroids: Array<Asteroid> = [];

  public create() {
    const asteroid = new AsteroidBuilder()
      .withSize(this.formGroup.controls['size'].value)
      .withSpeed(this.formGroup.controls['speed'].value)
      .withDurability(this.formGroup.controls['durability'].value)
      .build();
    this.asteroids.push(asteroid);
  }
}
