import {Component, EventEmitter, Input, OnChanges, OnInit, Output, ViewChildren} from '@angular/core';
import {TestInstanceComponent} from '../test-instance/test-instance.component';

@Component({
  selector: 'app-test-paas',
  templateUrl: './test-paas.component.html',
  styleUrls: ['./test-paas.component.css']
})
export class TestPaasComponent implements OnInit, OnChanges {

  @Input() paas;
  @Output() paasChange = new EventEmitter();
  @Input() display = false;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    this.paasChange.emit(this.paas);
  }
}
