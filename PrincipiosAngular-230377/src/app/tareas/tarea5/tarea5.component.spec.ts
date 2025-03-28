import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tarea5Component } from './tarea5.component';

describe('Tarea5Component', () => {
  let component: Tarea5Component;
  let fixture: ComponentFixture<Tarea5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Tarea5Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tarea5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
