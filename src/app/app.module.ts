import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MyMaterialModule } from './modules/my-material/my-material.module';
import { ExciseComponent } from './components/excise/excise.component';
import { StepSourceService} from './services/step-source.service';

@NgModule({
  declarations: [
    AppComponent,
    ExciseComponent
  ],
  imports: [
    BrowserModule,
    MyMaterialModule
  ],
  providers: [StepSourceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
