import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-average-chart',
  templateUrl: './average-chart.component.html',
  styleUrls: ['./average-chart.component.css']
})
export class AverageChartComponent implements OnInit {

  @Input() averageChartData: Array<any>;
  @Input() averageChartLabels: Array<any>;
  averageChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public averageChartLegend = true;
  public averageChartType = 'line';

  constructor() { }

  ngOnInit() {
  }

}
