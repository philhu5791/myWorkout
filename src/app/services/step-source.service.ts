import { Injectable } from '@angular/core';
import { ExciseStep } from '../classes/excise-step';
import { DEMO_STEPS } from '../classes/demo-data-steps';
import { STEPS } from '../classes/data-steps';
import { AppComponent } from '../app.component';

@Injectable({
  providedIn: 'root'
})
export class StepSourceService {
  steps: ExciseStep[];
  demoSteps: ExciseStep[];
  size: number;
  index: number;
  isDemo: boolean;

  constructor() {
     console.log("Data service starts");
     this.isDemo = true;
     this.index = 0;
  }

  setDemo(isDemo: boolean){
    this.isDemo = isDemo;
  }

  loadSteps(app: AppComponent){
      Promise.resolve(STEPS).then(steps => {this.steps = steps; console.log("data is load"); app.onTest(); });
      Promise.resolve(DEMO_STEPS).then(steps => {this.demoSteps = steps; console.log("data is load"); app.onTest();});
    }

  getStep() : ExciseStep{
     console.log("dataService: get step");
    if(this.isDemo){
      return this.demoSteps[this.index];
    }else{
      return this.steps[this.index];
    }

  }

  reset(){
    this.index = 0;
  }

  nextStep(){
    this.index++;
    this.index = this.index >= this.getStepSize() - 1? this.getStepSize() - 1: this.index;
  }

  previousStep(){
    this.index--;
    this.index = this.index < 0? 0: this.index
  }

  getStepSize(): number{
     if(this.isDemo){
          return this.demoSteps.length;
        }else{
          return this.steps.length;
        }
  }

}
