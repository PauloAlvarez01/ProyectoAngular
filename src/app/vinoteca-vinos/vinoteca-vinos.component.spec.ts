import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VinotecaVinosComponent } from './vinoteca-vinos.component';

describe('VinotecaVinosComponent', () => {
  let component: VinotecaVinosComponent;
  let fixture: ComponentFixture<VinotecaVinosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VinotecaVinosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VinotecaVinosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
