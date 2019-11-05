import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExciseComponent } from './excise.component';

describe('ExciseComponent', () => {
  let component: ExciseComponent;
  let fixture: ComponentFixture<ExciseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExciseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExciseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
