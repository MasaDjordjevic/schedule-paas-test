import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {MainService} from './main.service';
import {HttpModule} from '@angular/http';
import {TestInstanceComponent} from './test-instance/test-instance.component';
import {BarChartComponent} from './bar-chart/bar-chart.component';
import {ChartsModule} from 'ng2-charts/ng2-charts';
import {AverageChartComponent} from './average-chart/average-chart.component';
import {FormsModule} from '@angular/forms';
import { InfoComponent } from './info/info.component';

@NgModule({
  declarations: [
    AppComponent,
    TestInstanceComponent,
    BarChartComponent,
    AverageChartComponent,
    InfoComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    ChartsModule,
    FormsModule
  ],
  providers: [MainService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
