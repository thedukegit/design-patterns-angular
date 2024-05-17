import { Component, OnInit } from '@angular/core';
import { Dreadnought } from './models/dreadnought';
import { Warhammer } from './models/warhammer';
import { Interceptor } from './models/interceptor';
import {
  MatCard,
  MatCardContent,
  MatCardHeader,
  MatCardTitle,
} from '@angular/material/card';
import { Ship } from './models/ship';

@Component({
  selector: 'lib-exercise-5',
  standalone: true,
  imports: [MatCard, MatCardHeader, MatCardContent, MatCardTitle],
  templateUrl: 'exercise-5.component.html',
  styleUrl: 'exercise-5.component.scss',
})
export class Exercise5Component implements OnInit {
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
