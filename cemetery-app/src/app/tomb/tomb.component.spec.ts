import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TombComponent } from './tomb.component';

describe('TombComponent', () => {
  let component: TombComponent;
  let fixture: ComponentFixture<TombComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TombComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TombComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
