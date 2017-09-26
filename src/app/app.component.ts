import {Component, OnInit} from '@angular/core';
import {MainService} from './main.service';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  azureTest: string;
  appharborTest: string;

  testCount = 40;

  tests = [
    {title: 'trivial', testUrl: '/api/values', testCount: this.testCount},
    {title: 'simple data access', testUrl: '/api/classrooms/getclassrooms', testCount: this.testCount},
    {title: 'moderate data access', testUrl: '/api/departments/getdepartmentsbyyear', testCount: this.testCount},
    {
      title: 'medium data access',
      testUrl: '/api/classrooms/getschedule?classroomID=11&weeksFromNow=0',
      testCount: this.testCount
    },
    {
      title: 'heavy data access',
      testUrl: '/api/students/getschedule?studentID=2634&weeksFromNow=2',
      testCount: this.testCount
    }
  ];

  averagePointsStatic = [10, 30, 50, 100, 150, 250, 400, 500, 750, 1000];

  averagePoints = this.averagePointsStatic.filter(a => a < this.testCount)

  paasArray = [
    {
      name: 'Azure',
      serverUrl: 'https://schedule-server.azurewebsites.net',
      averagePoints: [],
      tests: []
    },
    {
      name: 'AppHarbor',
      serverUrl: 'https://schedule-server2.apphb.com',
      averagePoints: [],
      tests: []
    }
  ];


  constructor(private mainService: MainService) {
    this.paasArray.forEach(paas => {
      paas.averagePoints = this.averagePoints;
      paas.tests = JSON.parse(JSON.stringify(this.tests));

    });

  }

  ngOnInit() {
  }

  get testNames() {
    return this.tests.map(a => a.title);
  }

  get barChartNames() {
    return this.testNames.slice(0, -1);
  }

  get barChartData() {
    let ret = [];
    this.paasArray.forEach(paas => {
      ret.push({
        data: paas.tests.map(a => a.result ? a.result.avg : 0).slice(0, -1),
        label: paas.name
      });
    });
    return ret;
  }

  averageCartData(testName) {
    let ret = [];
    this.paasArray.forEach(paas => {
      const arr = paas.tests.map(a => (a.title === testName && a.result) ? a.result.averageDurations : null).filter(a => a);
      const arr2 = arr.length ? arr[0] : arr;
      ret.push({
        data: arr2,
        label: paas.name
      });
    });
    return ret;
  }

}
