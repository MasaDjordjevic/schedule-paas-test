import {Component, Input, OnInit} from '@angular/core';
import 'chart.js';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {

  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true,
    tooltips: {enabled: false}

  };
  @Input() barChartLabels: string[];
  public barChartType = 'bar';
  public barChartLegend = true;

  @Input() barChartData: any[];

  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }

  constructor() { }

  ngOnInit() {
  }


}
