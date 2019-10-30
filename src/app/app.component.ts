import { Component } from '@angular/core';
import { ExciseStep } from './classes/excise-step';
import { STEPS } from './classes/data-steps';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title :String;
  steps: ExciseStep[];
  test: ExciseStep;
  load: boolean;

  constructor() {
    this.title = 'my-workout';
    this.load = false;
    this.getSteps();
    console.log("start the app")

  }

  getSteps(){

    let result = Promise.resolve(STEPS).then(steps => {this.steps = steps; console.log("data is load"); this.load = true;});

  }

  ngOnInit(){


  }

 }
