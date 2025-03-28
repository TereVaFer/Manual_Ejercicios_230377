import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Practice12Component } from './practice12.component';

describe('Practice12Component', () => {
  let component: Practice12Component;
  let fixture: ComponentFixture<Practice12Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Practice12Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Practice12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
