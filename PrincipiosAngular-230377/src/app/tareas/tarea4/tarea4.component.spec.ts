import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tarea4Component } from './tarea4.component';

describe('Tarea4Component', () => {
  let component: Tarea4Component;
  let fixture: ComponentFixture<Tarea4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Tarea4Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tarea4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
