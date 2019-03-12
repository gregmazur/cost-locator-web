import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegionDropdownComponent } from './region-dropdown.component';
import { MODULE_DEPENDENCIES } from 'src/app/app.module';

describe('RegionDropdownComponent', () => {
  let component: RegionDropdownComponent;
  let fixture: ComponentFixture<RegionDropdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegionDropdownComponent ],
      imports: [MODULE_DEPENDENCIES]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegionDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
