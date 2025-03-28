import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tarea8Component } from './tarea8.component';

describe('Tarea8Component', () => {
  let component: Tarea8Component;
  let fixture: ComponentFixture<Tarea8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Tarea8Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tarea8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
