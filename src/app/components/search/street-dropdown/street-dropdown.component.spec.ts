import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StreetDropdownComponent } from './street-dropdown.component';

describe('StreetDropdownComponent', () => {
  let component: StreetDropdownComponent;
  let fixture: ComponentFixture<StreetDropdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StreetDropdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StreetDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
