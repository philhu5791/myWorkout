import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title :String;
  color :String;
  mode :String;
  progressControl: Progress
  value :number;
  stepTime :number;
  repeat :number;
  timeCounter :number;
  interval: number;
  finish: boolean;
  ring;

  constructor() {
    this.title = 'my-workout';
    this.color = 'primary';
    this.mode = 'determinate';
    this.value = 100;
    this.stepTime = 5;
    this.repeat = 15;
    this.timeCounter = this.stepTime;
    this.progressControl = new Progress(this.stepTime)
    this.finish = false;
    this.ring = new Audio();
    this.ring.src = "./assets/sound/ring.mp3"
    this.ring.load();
  }

  ngOnInit(){
    console.log("value is "+ this.value)
    console.log("stepTime is "+ this.stepTime)
    this.startCountingDown();
  }

   setProgress(progress: Progress){
//    console.log("value is "+ this.value)
//    console.log("stepTime is "+ this.stepTime)
//    console.log("time counter is " + this.timeCounter)
      let value = progress.countdown();
      this.value = value;
      console.log("set progress "+ this.value);
      console.log("stepTime is "+ this.stepTime);
      console.log("repeat time is "+ this.repeat);
      if(progress.isDone()){
        this.ring.play();
        clearInterval(this.interval);
        this.repeat --;
        if(this.repeat != 0){
          this.value = 100
          progress.reset()
          this.startCountingDown();
        }else{
          this.finish = true;
        }
      }
//       if(this.timeCounter != 0){
//          this.timeCounter--;
//          setTimeout(this.setProgress(this.progressControl), 2000);
//       }else {
//         if(this.repeat == 0){
//           return;
//         }else{
//           this.repeat--;
//           this.timeCounter = this.stepTime
//           this.progressControl.reset();
//           this.value = 100;
//           setTimeout(this.setProgress(this.progressControl), 2000);
//         }
//       }
    }


 startCountingDown(){
       //setTimeout(this.setProgress(this.progressControl), 2000);
       //setInterval(this.setProgress(this.progressControl).bind(this), 2000);
       this.interval = setInterval(()=>{this.setProgress(this.progressControl)}, 1000);
 }


 }

 class Progress{
     stepTime: number;
     timeCounter: number;

    constructor(stepTime: number){
      this.stepTime = stepTime;
      this.timeCounter = stepTime;
    }

    public reset(){
      this.timeCounter = this.stepTime;
    }

    public isDone(): boolean{
      return this.timeCounter == 0;
    }

    public countdown(): number{
      if(this.timeCounter == 0){
        return 0
      }
      this.timeCounter--;
      return (1 - (this.stepTime - this.timeCounter)/this.stepTime)*100
    }
 }
