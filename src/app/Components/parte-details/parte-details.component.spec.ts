import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParteDetailsComponent } from './parte-details.component';

describe('ParteDetailsComponent', () => {
  let component: ParteDetailsComponent;
  let fixture: ComponentFixture<ParteDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParteDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParteDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
