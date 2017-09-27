import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {MainService} from '../main.service';

@Component({
  selector: 'app-test-instance',
  templateUrl: './test-instance.component.html',
  styleUrls: ['./test-instance.component.css']
})
export class TestInstanceComponent implements OnInit, OnChanges {

  @Input() serverUrl;
  @Input() test;
  @Output() testChange = new EventEmitter();
  @Input() averagePoints = [10, 30, 50, 100, 150, 250, 400, 500, 750, 1000];
  @Input() display = false;
  @Input() start = false;
  @Input() restart = false;
  durations: number[] = [];
  failures = 0;
  testCounter = 0;
  averageDurations: number[] = [];

  constructor(private mainService: MainService) { }

  ngOnChanges(changes: SimpleChanges) {
    for (const propertyName in changes) {
      if (propertyName === 'start') {
        if (this.start && this.testCounter === 0) {
          this.reset();
        }
        if (this.start) {
          this.runTests();
        }
      } else if (propertyName === 'restart') {
        if (this.restart) {
          this.reset();
        }
      }
    }
  }

  get min() {
    return Math.min(...this.durations);
  }

  get max() {
    return Math.max(...this.durations);
  }

  get avg() {
    return this.durations.length ? this.durations.reduce((a, b) => a + b) / this.durations.length : 0;
  }

  reset() {
    this.durations = [];
    this.failures = 0;
    this.testCounter = 0;
    this.averageDurations = [];
    this.test.result = this.testResult;
    this.testChange.emit(this.test);
  }

  ngOnInit() {
    // this.runTests();
  }


  runTests = () => {
    this.mainService.testPaas(this.serverUrl, this.test.testUrl).then(res => {
      this.durations.push(res.duration);
      this.testCounter++;
      if (res.failed) {
        this.failures++;
      }

      if (this.averagePoints.indexOf(this.testCounter) >= 0) {
        this.averageDurations.push(this.avg);
      }

      this.test.result = this.testResult;
      this.testChange.emit(this.test);

      if (this.testCounter < this.test.testCount.testCount && this.start) {
        this.runTests();
      }
    });
  }

  get testResult() {
    return {
      testCounter: this.testCounter,
      failures: this.failures,
      min: this.min,
      max: this.max,
      avg: this.avg,
      averageDurations: this.averageDurations
    };
  }


}
