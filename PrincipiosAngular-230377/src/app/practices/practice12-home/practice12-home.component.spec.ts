import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Practice12HomeComponent } from './practice12-home.component';

describe('Practice12HomeComponent', () => {
  let component: Practice12HomeComponent;
  let fixture: ComponentFixture<Practice12HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Practice12HomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Practice12HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
