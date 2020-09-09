import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateParteComponent } from './update-parte.component';

describe('UpdateParteComponent', () => {
  let component: UpdateParteComponent;
  let fixture: ComponentFixture<UpdateParteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateParteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateParteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
