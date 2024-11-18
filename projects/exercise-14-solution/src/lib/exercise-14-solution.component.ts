import {Component} from '@angular/core';
import {MatButton} from "@angular/material/button";
import {MatFormField} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {Asteroid} from "./models/asteroid";
import {FormBuilder, FormGroup, ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'lib-exercise-14-solution',
  standalone: true,
  imports: [
    MatButton,
    MatFormField,
    MatInput,
    ReactiveFormsModule
  ],
  templateUrl: './exercise-14-solution.component.html',
  styles: ``
})
export class Exercise14SolutionComponent {
  protected prototypeAsteroid: Asteroid = new Asteroid('The OA');
  protected asteroids: Array<Asteroid> = [];
  protected form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: ['']
    });
  }


  protected onSubmit(): void {
    let asteroid = this.prototypeAsteroid.clone();
    asteroid.name = this.form.controls['name'].value;
    this.asteroids.push(asteroid);
  }

}
