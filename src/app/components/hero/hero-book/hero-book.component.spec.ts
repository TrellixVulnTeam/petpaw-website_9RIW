import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroBookComponent } from './hero-book.component';

describe('HeroBookComponent', () => {
  let component: HeroBookComponent;
  let fixture: ComponentFixture<HeroBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroBookComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
