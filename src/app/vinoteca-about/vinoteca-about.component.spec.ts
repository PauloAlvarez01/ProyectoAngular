import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VinotecaAboutComponent } from './vinoteca-about.component';

describe('VinotecaAboutComponent', () => {
  let component: VinotecaAboutComponent;
  let fixture: ComponentFixture<VinotecaAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VinotecaAboutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VinotecaAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
