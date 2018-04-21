import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemeProfileComponent } from './theme-profile.component';

describe('ThemeProfileComponent', () => {
  let component: ThemeProfileComponent;
  let fixture: ComponentFixture<ThemeProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThemeProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemeProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
