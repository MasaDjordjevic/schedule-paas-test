import {Component, OnInit} from '@angular/core';
import {MainService} from './main.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  azureTest: string;
  appharborTest: string;

  inputs = {
    start: false,
    restart: false,
    testCount: 35
  };

  tests = [
    {title: 'trivial', testUrl: '/api/values'},
    {title: 'simple data access', testUrl: '/api/classrooms/getclassrooms'},
    {title: 'moderate data access', testUrl: '/api/departments/getdepartmentsbyyear'},
    {
      title: 'medium data access',
      testUrl: '/api/classrooms/getschedule?classroomID=11&weeksFromNow=0'
    },
    {
      title: 'heavy data access',
      testUrl: '/api/students/getschedule?studentID=2634&weeksFromNow=2'
    }
  ];

  averagePointsStatic = [10, 30, 50, 100, 150, 250, 400, 500, 750, 1000];

  get averagePoints() {
    return this.averagePointsStatic.filter(a => a <= this.inputs.testCount);
  }

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

  testArray = [];

  constructor(private mainService: MainService) {
    this.paasArray.forEach(paas => {
      paas.averagePoints = this.averagePoints;
      paas.tests = JSON.parse(JSON.stringify(this.tests));
      paas.tests.forEach(t => t.testCount = this.inputs);
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

  get   barChartData() {
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
