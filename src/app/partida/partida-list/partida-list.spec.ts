import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartidaList } from './partida-list';

describe('PartidaList', () => {
  let component: PartidaList;
  let fixture: ComponentFixture<PartidaList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PartidaList],
    }).compileComponents();

    fixture = TestBed.createComponent(PartidaList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
