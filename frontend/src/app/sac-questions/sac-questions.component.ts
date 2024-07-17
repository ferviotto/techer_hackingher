import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { FaqService } from '../services/faq.service';

@Component({
  selector: 'app-sac-questions',
  templateUrl: './sac-questions.component.html',
  styleUrls: ['./sac-questions.component.scss']
})
export class SacQuestionsComponent implements OnInit {
  questionForm: FormGroup;
  faqs: any[] = [];

  constructor(
    private fb: FormBuilder,
    private faqService: FaqService
  ) {
    this.questionForm = this.fb.group({
      name: [''],
      email: [''],
      title: [''],
      question: ['']
    });
  }

  ngOnInit(): void {
    this.faqService.getFaqs().subscribe(data => {
      this.faqs = data.map(item => {
        return { ...item, showAnswer: false };
      });
    });
  }

  onSubmit() {
    if (this.questionForm.valid) {
      console.log('Form Submitted', this.questionForm.value);
    }
  }

  toggleAnswer(item: any): void {
    item.showAnswer = !item.showAnswer;
  }
}
