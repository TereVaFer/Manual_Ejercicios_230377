import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Practice10AssistantComponent } from './practice10-assistant.component';

describe('Practice10AssistantComponent', () => {
  let component: Practice10AssistantComponent;
  let fixture: ComponentFixture<Practice10AssistantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Practice10AssistantComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Practice10AssistantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
