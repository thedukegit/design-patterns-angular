import { Component, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { DummyComponent } from './dummy.component';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatOption, MatSelect } from '@angular/material/select';

interface ComponentInterface {
  name: string;
  component: any;
  path: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatFormField, MatSelect, MatOption, MatLabel],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'design-patterns-angular';
  protected components: ComponentInterface[] = [
    {
      name: 'Dummy exercise',
      component: DummyComponent,
      path: 'dummy-exercise',
    },
    { name: 'Exercise 4', component: DummyComponent, path: 'exercise-4' },
  ];
  private readonly router: Router = inject(Router);

  protected navigateToComponent(component: ComponentInterface): void {
    console.log(component);

    this.router.navigate([component.path]);
  }
}
