import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {MainService} from './main.service';
import {Http, HttpModule} from '@angular/http';
import { TestInstanceComponent } from './test-instance/test-instance.component';
import { TestPaasComponent } from './test-paas/test-paas.component';

@NgModule({
  declarations: [
    AppComponent,
    TestInstanceComponent,
    TestPaasComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [MainService],
  bootstrap: [AppComponent]
})
export class AppModule { }
