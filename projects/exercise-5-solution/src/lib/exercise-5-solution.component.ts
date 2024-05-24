import { Component } from '@angular/core';
import { Dreadnought } from './models/ships/dreadnought';
import { Warhammer } from './models/ships/warhammer';
import { Interceptor } from './models/ships/interceptor';
import { Ship } from './models/ships/ship';
import {
  MatCard,
  MatCardContent,
  MatCardHeader,
  MatCardTitle,
} from '@angular/material/card';

@Component({
  selector: 'lib-exercise-5-solution',
  standalone: true,
  imports: [MatCard, MatCardHeader, MatCardContent, MatCardTitle],
  templateUrl: './exercise-5-solution.component.html',
  styleUrl: './exercise-5-solution.component.scss',
})
export class Exercise5SolutionComponent {
  protected dreadnought: Dreadnought = new Dreadnought();
  protected warhammer: Warhammer = new Warhammer();
  protected interceptor: Interceptor = new Interceptor();
  protected ships: Array<Ship> = [
    this.dreadnought,
    this.warhammer,
    this.interceptor,
  ];

  public ngOnInit(): void {}
}
