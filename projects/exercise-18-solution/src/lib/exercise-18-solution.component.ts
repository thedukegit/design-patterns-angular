import {Component, OnInit} from '@angular/core';
import {AggregateInterface} from "./models/aggregate.interface";
import {Aggregator} from "./models/aggregator";
import {FleetProvider} from "./infrastructure/fleet-provider";

@Component({
  selector: 'lib-exercise-18-solution',
  standalone: true,
  imports: [],
  template: `
    <ul>
      <li>
        @for (ship of this.shipNames; track ship) {
          <li>{{ ship }}</li>
        }
    </ul>
  `,
  styles: ``
})
export class Exercise18SolutionComponent implements OnInit {
  private provider = new FleetProvider();
  protected fleet = this.provider.provide();
  protected shipNames: string[] = [];

  private readonly aggregator: AggregateInterface;

  public constructor() {
    this.aggregator = new Aggregator(this.fleet);
  }

  public ngOnInit(): void {
    const iterator = this.aggregator.createIterator();
    while (iterator.hasNext()) {
      this.shipNames.push(iterator.next().getName());
      // console.log(iterator.next().name);
    }
  }
}
