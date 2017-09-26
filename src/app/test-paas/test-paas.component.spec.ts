import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestPaasComponent } from './test-paas.component';

describe('TestPaasComponent', () => {
  let component: TestPaasComponent;
  let fixture: ComponentFixture<TestPaasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestPaasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestPaasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
