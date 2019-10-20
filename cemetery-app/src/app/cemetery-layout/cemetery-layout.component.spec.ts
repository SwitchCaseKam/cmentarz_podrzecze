import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CemeteryLayoutComponent } from './cemetery-layout.component';

describe('CemeteryLayoutComponent', () => {
  let component: CemeteryLayoutComponent;
  let fixture: ComponentFixture<CemeteryLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CemeteryLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CemeteryLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
