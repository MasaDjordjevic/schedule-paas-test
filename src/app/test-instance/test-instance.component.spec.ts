import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestInstanceComponent } from './test-instance.component';

describe('TestInstanceComponent', () => {
  let component: TestInstanceComponent;
  let fixture: ComponentFixture<TestInstanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestInstanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestInstanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
