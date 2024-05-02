import {Component, OnInit, signal} from '@angular/core';

@Component({
  selector: 'lib-exercise-4-without',
  standalone: true,
  imports: [],
  templateUrl: 'exercise-4-without.component.html'
})
export class Exercise4WithoutComponent implements OnInit {
  protected powerLevel = signal(0);
  protected warning = signal('');

  public ngOnInit(): void {
    setInterval(() => {
      this.powerLevel.set(Math.floor((Math.random() * 2000) + 8000));
      console.log('Power level:', this.powerLevel());
      if (this.powerLevel() > 9000) {
        this.warning.set('It\'s over 9000!');
      } else {
        this.warning.set('');
      }
    }, 1000);


  }


}
