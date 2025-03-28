import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Practice8AssistantComponent } from './practice8-assistant.component';

describe('Practice8AssistantComponent', () => {
  let component: Practice8AssistantComponent;
  let fixture: ComponentFixture<Practice8AssistantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Practice8AssistantComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Practice8AssistantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
