import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnniversaryComponent } from './anniversary.component';

describe('AnniversaryComponent', () => {
  let component: AnniversaryComponent;
  let fixture: ComponentFixture<AnniversaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnniversaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnniversaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
