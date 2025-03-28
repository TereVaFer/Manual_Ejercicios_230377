import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tarea7Component } from './tarea7.component';

describe('Tarea7Component', () => {
  let component: Tarea7Component;
  let fixture: ComponentFixture<Tarea7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Tarea7Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tarea7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
