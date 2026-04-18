import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartidaForm } from './partida-form';

describe('PartidaForm', () => {
  let component: PartidaForm;
  let fixture: ComponentFixture<PartidaForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PartidaForm],
    }).compileComponents();

    fixture = TestBed.createComponent(PartidaForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
