import {Component, OnInit} from '@angular/core';
import {SteadfastInfantry} from "./models/steadfast-infantry";
import {MatLabel} from "@angular/material/form-field";
import {SwiftCavalry} from "./models/swift-cavalry";
import {DeadlyArchers} from "./models/deadly-archers";
import {Farmers} from "./models/farmers";
import {Fishermen} from "./models/fishermen";
import {Hunters} from "./models/hunters";

@Component({
  selector: 'lib-exercise-3-without',
  standalone: true,
  imports: [
    MatLabel
  ],
  templateUrl: 'exercise-3-without.component.html',
  styleUrls: ['exercise-3-without.component.scss']
})
export class Exercise3WithoutComponent implements OnInit {
  protected steadfastInfantry = new SteadfastInfantry();
  protected swiftCavalry = new SwiftCavalry();
  protected deadlyArchers = new DeadlyArchers();
  protected farmers = new Farmers();
  protected fishermen = new Fishermen();
  protected hunters = new Hunters();

  public ngOnInit(): void {

  }


}
