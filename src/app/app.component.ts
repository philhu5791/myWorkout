import { Component } from '@angular/core';
import { ExciseStep } from './classes/excise-step';
import { STEPS } from './classes/data-steps';
import { StepSourceService } from './services/step-source.service';
import { GlobalConfigService } from './services/global-config.service'
import { MatSlideToggleChange } from '@angular/material';



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
  isDemoChecked: boolean;
  isAutoChecked: boolean;
  globalConfig: GlobalConfigService;
  stepDataService: StepSourceService;


  constructor(private service: StepSourceService, private config: GlobalConfigService) {
    this.title = 'my-workout';
    this.load = false;
    this.globalConfig = config;
    this.stepDataService = service;

    service.loadSteps(this);
    console.log("AppComponent creating");
  }

//   getSteps(){
//
//     let result = Promise.resolve(STEPS).then(steps => {this.steps = steps; console.log("data is load"); this.load = true;});
//
//   }

  ngOnInit(){
    console.log("AppComponent init");
    this.isDemoChecked = true;
  }

  onTest(){
    console.log("AppComponent is notified for loaded event");
    this.load = true;
  }

  onDemoChange(value: MatSlideToggleChange){
    console.log("demo button toggled")
    this.globalConfig.isDemo = this.isDemoChecked;
    this.stepDataService.setDemo(this.isDemoChecked);
    this.stepDataService.reset();
    this.stepDataService.loadSteps(this);
  }

  onAutoChange(value: MatSlideToggleChange){
    console.log("Auto button toggled")
    this.globalConfig.isAutoPlay = this.isAutoChecked
  }

 }
