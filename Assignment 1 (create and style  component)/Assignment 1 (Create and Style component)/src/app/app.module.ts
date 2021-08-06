import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { SucessAlertComponent } from './components/sucess-alert/sucess-alert.component';
import { WarningAlertComponent } from './components/warning-alert/warning-alert.component';

@NgModule({
  declarations: [
    AppComponent,
    SucessAlertComponent,
    WarningAlertComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
