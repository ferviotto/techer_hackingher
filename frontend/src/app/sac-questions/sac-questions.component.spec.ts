import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SacQuestionsComponent } from './sac-questions.component';

describe('SacQuestionsComponent', () => {
  let component: SacQuestionsComponent;
  let fixture: ComponentFixture<SacQuestionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SacQuestionsComponent]
    });
    fixture = TestBed.createComponent(SacQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
