import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JugadorForm } from './jugador-form';

describe('JugadorForm', () => {
  let component: JugadorForm;
  let fixture: ComponentFixture<JugadorForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JugadorForm],
    }).compileComponents();

    fixture = TestBed.createComponent(JugadorForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
