import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Practice9AssistantComponent } from './practice9-assistant.component';

describe('Practice9AssistantComponent', () => {
  let component: Practice9AssistantComponent;
  let fixture: ComponentFixture<Practice9AssistantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Practice9AssistantComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Practice9AssistantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
