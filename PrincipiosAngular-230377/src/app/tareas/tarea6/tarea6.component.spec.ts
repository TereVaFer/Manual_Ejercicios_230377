import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tarea6Component } from './tarea6.component';

describe('Tarea6Component', () => {
  let component: Tarea6Component;
  let fixture: ComponentFixture<Tarea6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Tarea6Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tarea6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
