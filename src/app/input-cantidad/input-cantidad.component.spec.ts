import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputCantidadComponent } from './input-cantidad.component';

describe('InputCantidadComponent', () => {
  let component: InputCantidadComponent;
  let fixture: ComponentFixture<InputCantidadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InputCantidadComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputCantidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
