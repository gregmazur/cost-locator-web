import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseDropdownComponent } from './house-dropdown.component';

describe('HouseDropdownComponent', () => {
  let component: HouseDropdownComponent;
  let fixture: ComponentFixture<HouseDropdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HouseDropdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HouseDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
