import { ComponentFixture, TestBed } from '@angular/core/testing';

import { parallaxComponent } from './parallax.component';

describe('parallaxComponent', () => {
  let component: parallaxComponent;
  let fixture: ComponentFixture<parallaxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ parallaxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(parallaxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
