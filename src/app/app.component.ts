import {Component, inject} from '@angular/core';
import {Router, RouterOutlet} from '@angular/router';
import {MatOption, MatSelect} from "@angular/material/select";

interface ComponentInterface {
  name: string;
  component: any;
  path: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatSelect, MatOption],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'design-patterns-angular';
  protected components: ComponentInterface[] = []
  private readonly router: Router = inject(Router);

  protected navigateToComponent(component: ComponentInterface): void {
    this.router.navigate([component.path]);
  }
}
