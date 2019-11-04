import { Component, OnInit, Input } from '@angular/core';
import { ExciseStep } from '../../classes/excise-step'
import { StepSourceService } from '../../services/step-source.service';

@Component({
  selector: 'app-excise',
  templateUrl: './excise.component.html',
  styleUrls: ['./excise.component.css']
})


export class ExciseComponent implements OnInit {
  @Input() demoMode;
  excise: ExciseStep;

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
    title: String;
    imageSrc: String;
    instruction: String[];

    constructor(private service: StepSourceService) {
      console.log("excise component is creating")
      this.color = 'primary';
      this.mode = 'determinate';
      console.log(this.excise);
      this.ring = new Audio();
      this.ring.src = "./assets/sound/ring.mp3"
      this.ring.load();
    }

    ngOnInit(){
//       console.log("value is "+ this.value)
//       console.log("stepTime is "+ this.stepTime)
      console.log("excise component on Init")
      this.loadStepDetail();
      this.startCountingDown()
    }
    ngOnChanges() {
    console.log("demoMode is changed " + this.demoMode)
    if(this.demoMode == true || this.demoMode == false){
        this.stopCountingDown();
        this.loadStepDetail();
        this.startCountingDown()
    }

   }


    loadStepDetail(){
          this.value = 100;
          this.excise = this.service.getStep();
          this.title = this.excise.title;
          this.stepTime = this.excise.stepTime;
          this.repeat = this.excise.repeatTime;
          this.timeCounter = this.stepTime;
          this.imageSrc = this.excise.imageSrc;
          this.instruction = this.excise.instruction.split("$");
          console.log(this.instruction);
          // Reset progress bar
           this.progressControl = new Progress(this.stepTime)
           this.finish = false;
    }

    onNextStep(){
       console.log("next button clicked!")
       this.service.nextStep();
       this.loadStepDetail();
       this.startCountingDown()
    }

    onPreviousStep(){
       this.service.previousStep();
       this.loadStepDetail();
       this.startCountingDown()
    }

     setProgress(progress: Progress){
        let value = progress.countdown();
        this.value = value;
        console.log("set progress "+ this.value);
        console.log("stepTime is "+ this.stepTime);
        console.log("repeat time is "+ this.repeat);
        if(progress.isDone()){
          this.ring.play();
          clearInterval(this.interval);
          this.repeat --;
          if(this.repeat > 0){
            this.value = 100
            progress.reset()
            this.startCountingDown();
          }else{
            console.log("The excise is finished");
            this.finish = true;
          }
        }

      }


   startCountingDown(){
         console.log("Start to countdown for " + this.stepTime + "s");
         this.interval = setInterval(()=>{this.setProgress(this.progressControl)}, 1000);
   }

   stopCountingDown(){
     if(this.interval){
      clearInterval(this.interval);
     }

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
