import { Component } from '@angular/core';
import { MatTab, MatTabGroup } from '@angular/material/tabs';
import { DocumentManagerComponent } from './document-manager/document-manager.component';
import { AsteroidComponent } from './asteroid/asteroid.component';

@Component({
  selector: 'lib-exercise-4',
  standalone: true,
  imports: [MatTabGroup, MatTab, DocumentManagerComponent, AsteroidComponent],
  templateUrl: './exercise-4.component.html',
  styleUrl: './exercise-4.component.scss',
})
export class Exercise4Component {}
