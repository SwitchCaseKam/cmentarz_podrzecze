import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LawRulesComponent } from './law-rules.component';

describe('LawRulesComponent', () => {
  let component: LawRulesComponent;
  let fixture: ComponentFixture<LawRulesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LawRulesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LawRulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
