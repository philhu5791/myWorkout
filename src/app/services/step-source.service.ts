import { Injectable } from '@angular/core';
import { ExciseStep } from '../classes/excise-step';
import { STEPS } from '../classes/data-steps';

@Injectable({
  providedIn: 'root'
})
export class StepSourceService {
  steps: ExciseStep[];
  size: number;
  index: number;

  constructor() {
     this.loadSteps();
     this.index = 0;
  }

  private loadSteps(){
      let result = Promise.resolve(STEPS).then(steps => {this.steps = steps; console.log("data is load"); this.size = steps.length});
    }

  getStep() : ExciseStep{
    return this.steps[this.index];
  }

  nextStep(){
    this.index++;
    this.index = this.index > this.size ? this.size: this.index;
  }

  previousStep(){
    this.index--;
    this.index = this.index < 0? 0: this.index
  }


}
