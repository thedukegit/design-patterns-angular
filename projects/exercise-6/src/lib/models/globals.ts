import { Score } from './score';
import { Lives } from './lives';

export class Globals {
  // keep track of the instance
  private static instance: Globals;

  public score = new Score();
  public lives = new Lives();

  // make constructor private so it can not be instantiated from the outside
  private constructor() {}

  // create a static method to control the creation of the instance
  public static getInstance() {
    // if we dont have an instance, create it
    if (Globals.instance == null) {
      console.log('only once');
      Globals.instance = new Globals();
    }
    return Globals.instance;
  }
}
