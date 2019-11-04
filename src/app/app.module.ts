import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MyMaterialModule } from './modules/my-material/my-material.module';
import { ExciseComponent } from './components/excise/excise.component';
import { StepSourceService} from './services/step-source.service';
import { GlobalConfigService } from './services/global-config.service';

@NgModule({
  declarations: [
    AppComponent,
    ExciseComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MyMaterialModule
  ],
  providers: [StepSourceService, GlobalConfigService],
  bootstrap: [AppComponent]
})
export class AppModule { }
