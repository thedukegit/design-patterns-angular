import {Component, inject} from '@angular/core';
import {Router, RouterOutlet} from '@angular/router';
import {DummyComponent} from "./dummy.component";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatOption, MatSelect} from "@angular/material/select";
import {Exercise3WithoutComponent} from "../../projects/exercise-3-without/src/lib/exercise-3-without.component";
import {Exercise3WithComponent} from "../../projects/exercise-3-with/src/lib/exercise-3-with.component";

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
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'design-patterns-angular';
  protected components: ComponentInterface[] = [
    {name: 'Dummy exercise', component: DummyComponent, path: 'dummy-exercise'},
    {name: 'Exercise 3 Without', component: Exercise3WithoutComponent, path: 'exercise-3-without'},
    {name: 'Exercise 3 With', component: Exercise3WithComponent, path: 'exercise-3-with'},
  ]
  private readonly router: Router = inject(Router);

  protected navigateToComponent(component: ComponentInterface): void {

    this.router.navigate([component.path]);
  }
}
