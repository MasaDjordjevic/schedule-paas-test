import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {MainService} from './main.service';
import {Http, HttpModule} from '@angular/http';
import { TestInstanceComponent } from './test-instance/test-instance.component';
import { TestPaasComponent } from './test-paas/test-paas.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { AverageChartComponent } from './average-chart/average-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    TestInstanceComponent,
    TestPaasComponent,
    BarChartComponent,
    AverageChartComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    ChartsModule
  ],
  providers: [MainService],
  bootstrap: [AppComponent]
})
export class AppModule { }
