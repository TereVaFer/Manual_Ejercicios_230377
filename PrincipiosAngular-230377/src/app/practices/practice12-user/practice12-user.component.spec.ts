import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Practice12UserComponent } from './practice12-user.component';

describe('Practice12UserComponent', () => {
  let component: Practice12UserComponent;
  let fixture: ComponentFixture<Practice12UserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Practice12UserComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Practice12UserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
