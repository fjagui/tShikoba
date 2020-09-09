import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParteListComponent } from './parte-list.component';

describe('ParteListComponent', () => {
  let component: ParteListComponent;
  let fixture: ComponentFixture<ParteListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParteListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParteListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
