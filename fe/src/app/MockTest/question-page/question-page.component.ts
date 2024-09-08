import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-question-page',
  templateUrl: './question-page.component.html',
  styleUrls: ['./question-page.component.css'],
})
export class QuestionPageComponent implements OnInit {
  mockTest: any;
  selectedLanguage: string = 'en';
  currentQuestionIndex: number = 0;
  selectedSection: string = 'General Intelligence & Reasoning';
  questions: any[] = [];
  questionStatuses: string[] = [];
  timer: any;
  formattedTime: string = '';

  ngOnInit(): void {
    this.mockTest = {
      mockTestId: 1,
      title: "MockTest 1",
      duration: 60,
      totalQuestions: 2,
      questions: [
        {
          questionId: 1,
          difficultyLevel: "Easy",
          subject: "General Knowledge",
          tagOrTopic: "Capitals",
          marks: 1,
          negativeMarks: 0,
          translations: [
            {
              translationId: 1,
              languageCode: "en",
              questionText: "What is the capital of France? 1",
              optionA: "Paris",
              optionB: "London",
              optionC: "Berlin",
              optionD: "Madrid",
              correctOption: "A",
              explanation: "Paris is the capital of France.",
              hint: "-"
            },
            {
              translationId: 2,
              languageCode: "hi",
              questionText: "फ्रांस की राजधानी क्या है? 1",
              optionA: "पेरिस",
              optionB: "लंदन",
              optionC: "बर्लिन",
              optionD: "मैड्रिड",
              correctOption: "A",
              explanation: "पेरिस फ्रांस की राजधानी है।",
              hint: "-"
            }
          ]
        },
        {
          questionId: 2,
          difficultyLevel: "Easy",
          subject: "General Knowledge",
          tagOrTopic: "Capitals",
          marks: 1,
          negativeMarks: 0,
          translations: [
            {
              translationId: 3,
              languageCode: "en",
              questionText: "What is the capital of France? 2",
              optionA: "Paris",
              optionB: "London",
              optionC: "Berlin",
              optionD: "Madrid",
              correctOption: "A",
              explanation: "Paris is the capital of France.",
              hint: "-"
            },
            {
              translationId: 4,
              languageCode: "hi",
              questionText: "फ्रांस की राजधानी क्या है? 2",
              optionA: "पेरिस",
              optionB: "लंदन",
              optionC: "बर्लिन",
              optionD: "मैड्रिड",
              correctOption: "A",
              explanation: "पेरिस फ्रांस की राजधानी है।",
              hint: "-"
            }
          ]
        }
      ]
    };
    this.filterQuestionsBySection();
    this.initializeQuestionStatuses();
    this.startTimer();
  }

  initializeQuestionStatuses(): void {
    this.questionStatuses = this.questions.map(() => 'not-visited');
  }

  changeLanguage(languageCode: string): void {
    this.selectedLanguage = languageCode;
  }

  filterQuestionsBySection(): void {
    this.questions = this.mockTest.questions.filter((question: any) =>
      question.subject === this.selectedSection
    );
    if (this.questions.length > 0) {
      this.currentQuestionIndex = 0;
    }
  }

  changeSection(section: string): void {
    this.selectedSection = section;
    this.filterQuestionsBySection();
    this.initializeQuestionStatuses();
  }

  nextQuestion(): void {
    if (this.currentQuestionIndex < this.questions.length - 1) {
      this.currentQuestionIndex++;
    }
  }

  prevQuestion(): void {
    if (this.currentQuestionIndex > 0) {
      this.currentQuestionIndex--;
    }
  }

  goToQuestion(index: number): void {
    if (index >= 0 && index < this.questions.length) {
      this.currentQuestionIndex = index;
    }
  }

  markForReview(): void {
    this.questionStatuses[this.currentQuestionIndex] = 'marked-for-review';
  }

  saveAndNext(): void {
    this.questionStatuses[this.currentQuestionIndex] = 'answered';
    this.nextQuestion();
  }

  saveAndMarkForReview(): void {
    this.questionStatuses[this.currentQuestionIndex] = 'answered-marked-for-review';
    this.nextQuestion();
  }

  clearResponse(): void {
    this.questionStatuses[this.currentQuestionIndex] = 'not-answered';
  }

  startTimer(): void {
    let duration = this.mockTest.duration * 60; // Duration in seconds
    this.timer = setInterval(() => {
      const minutes = Math.floor(duration / 60);
      const seconds = duration % 60;
      this.formattedTime = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
      if (duration <= 0) {
        clearInterval(this.timer);
        alert('Time up!');
      } else {
        duration--;
      }
    }, 1000);
  }

  getTranslatedText(question: any): string {
    const translation = question.translations.find(
      (t: any) => t.languageCode === this.selectedLanguage
    );
    return translation ? translation.questionText : 'Question not available';
  }

  getTranslatedOption(question: any, option: string): string {
    const translation = question.translations.find(
      (t: any) => t.languageCode === this.selectedLanguage
    );
    return translation ? translation[option] : 'Option not available';
  }
}
