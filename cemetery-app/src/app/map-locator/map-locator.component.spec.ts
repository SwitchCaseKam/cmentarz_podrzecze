import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapLocatorComponent } from './map-locator.component';

describe('MapLocatorComponent', () => {
  let component: MapLocatorComponent;
  let fixture: ComponentFixture<MapLocatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapLocatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MapLocatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
