import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs/BehaviorSubject";


@Injectable()
export class DataService {

  private goals = new BehaviorSubject<any>([{goal:'The initial Goal', cost:3000},{goal:'Japan Travel', cost:4000}]);
  goal = this.goals.asObservable();

  constructor() { }

  changeGoal(goal){
    this.goals.next(goal);
  }
}
