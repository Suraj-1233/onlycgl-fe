import { Component, OnInit, OnDestroy } from '@angular/core';
import { MockTestService } from '../service/MockTestService';

@Component({
  selector: 'app-mock-test',
  templateUrl: './mock-test.component.html',
  styleUrls: ['./mock-test.component.css']
})
export class MockTestComponent implements OnInit, OnDestroy {
  mockTest: any = {
    "mockTestId": 2,
    "title": "MockTest 2",
    "duration": 60,
    "totalQuestions": 10,
   "questions": [
    {
      "questionId": 1,
      "difficultyLevel": "Easy",
      "subject": "Mathematics",
      "tagOrTopic": "Capitals",
      "marks": 1,
      "negativeMarks": 0,
      "translations": [
        {
          "translationId": 1,
          "languageCode": "en",
          "questionText": "What is the capital of France? 1",
          "optionA": "Paris",
          "optionB": "London",
          "optionC": "Berlin",
          "optionD": "Madrid",
          "correctOption": "A",
          "explanation": "Paris is the capital of France.",
          "hint": "-"
        },
        {
          "translationId": 2,
          "languageCode": "hi",
          "questionText": "फ्रांस की राजधानी क्या है? 1",
          "optionA": "पेरिस",
          "optionB": "लंदन",
          "optionC": "बर्लिन",
          "optionD": "मैड्रिड",
          "correctOption": "A",
          "explanation": "पेरिस फ्रांस की राजधानी है।",
          "hint": "-"
        }
      ]
    },
    {
      "questionId": 2,
      "difficultyLevel": "Easy",
      "subject": "English Comprehension",
      "tagOrTopic": "Capitals",
      "marks": 1,
      "negativeMarks": 0,
      "translations": [
        {
          "translationId": 3,
          "languageCode": "en",
          "questionText": "What is the capital of France? 2",
          "optionA": "Paris",
          "optionB": "London",
          "optionC": "Berlin",
          "optionD": "Madrid",
          "correctOption": "A",
          "explanation": "Paris is the capital of France.",
          "hint": "-"
        },
        {
          "translationId": 4,
          "languageCode": "hi",
          "questionText": "फ्रांस की राजधानी क्या है? 2",
          "optionA": "पेरिस",
          "optionB": "लंदन",
          "optionC": "बर्लिन",
          "optionD": "मैड्रिड",
          "correctOption": "A",
          "explanation": "पेरिस फ्रांस की राजधानी है।",
          "hint": "-"
        }
      ]
    },
    {
      "questionId": 3,
      "difficultyLevel": "Easy",
      "subject": "Quantitative Aptitude",
      "tagOrTopic": "Capitals",
      "marks": 1,
      "negativeMarks": 0,
      "translations": [
        {
          "translationId": 5,
          "languageCode": "en",
          "questionText": "What is the capital of France? 3",
          "optionA": "Paris",
          "optionB": "London",
          "optionC": "Berlin",
          "optionD": "Madrid",
          "correctOption": "A",
          "explanation": "Paris is the capital of France.",
          "hint": "-"
        },
        {
          "translationId": 6,
          "languageCode": "hi",
          "questionText": "फ्रांस की राजधानी क्या है? 3",
          "optionA": "पेरिस",
          "optionB": "लंदन",
          "optionC": "बर्लिन",
          "optionD": "मैड्रिड",
          "correctOption": "A",
          "explanation": "पेरिस फ्रांस की राजधानी है।",
          "hint": "-"
        }
      ]
    },
    {
      "questionId": 4,
      "difficultyLevel": "Easy",
      "subject": "Mathematics",
      "tagOrTopic": "Capitals",
      "marks": 1,
      "negativeMarks": 0,
      "translations": [
        {
          "translationId": 7,
          "languageCode": "en",
          "questionText": "What is the capital of France? 4",
          "optionA": "Paris",
          "optionB": "London",
          "optionC": "Berlin",
          "optionD": "Madrid",
          "correctOption": "A",
          "explanation": "Paris is the capital of France.",
          "hint": "-"
        },
        {
          "translationId": 8,
          "languageCode": "hi",
          "questionText": "फ्रांस की राजधानी क्या है? 4",
          "optionA": "पेरिस",
          "optionB": "लंदन",
          "optionC": "बर्लिन",
          "optionD": "मैड्रिड",
          "correctOption": "A",
          "explanation": "पेरिस फ्रांस की राजधानी है।",
          "hint": "-"
        }
      ]
    },
    {
      "questionId": 5,
      "difficultyLevel": "Easy",
      "subject": "English Comprehension",
      "tagOrTopic": "Capitals",
      "marks": 1,
      "negativeMarks": 0,
      "translations": [
        {
          "translationId": 9,
          "languageCode": "en",
          "questionText": "What is the capital of France? 5",
          "optionA": "Paris",
          "optionB": "London",
          "optionC": "Berlin",
          "optionD": "Madrid",
          "correctOption": "A",
          "explanation": "Paris is the capital of France.",
          "hint": "-"
        },
        {
          "translationId": 10,
          "languageCode": "hi",
          "questionText": "फ्रांस की राजधानी क्या है? 5",
          "optionA": "पेरिस",
          "optionB": "लंदन",
          "optionC": "बर्लिन",
          "optionD": "मैड्रिड",
          "correctOption": "A",
          "explanation": "पेरिस फ्रांस की राजधानी है।",
          "hint": "-"
        }
      ]
    },
    {
      "questionId": 6,
      "difficultyLevel": "Easy",
      "subject": "Quantitative Aptitude",
      "tagOrTopic": "Capitals",
      "marks": 1,
      "negativeMarks": 0,
      "translations": [
        {
          "translationId": 11,
          "languageCode": "en",
          "questionText": "What is the capital of France? 6",
          "optionA": "Paris",
          "optionB": "London",
          "optionC": "Berlin",
          "optionD": "Madrid",
          "correctOption": "A",
          "explanation": "Paris is the capital of France.",
          "hint": "-"
        },
        {
          "translationId": 12,
          "languageCode": "hi",
          "questionText": "फ्रांस की राजधानी क्या है? 6",
          "optionA": "पेरिस",
          "optionB": "लंदन",
          "optionC": "बर्लिन",
          "optionD": "मैड्रिड",
          "correctOption": "A",
          "explanation": "पेरिस फ्रांस की राजधानी है।",
          "hint": "-"
        }
      ]
    },
    {
        "questionId": 1,
        "difficultyLevel": "Easy",
        "subject": "General Knowledge",
        "tagOrTopic": "Capitals",
        "marks": 1,
        "negativeMarks": 0,
        "translations": [
            {
                "translationId": 1,
                "languageCode": "en",
                "questionText": "What is the capital of France? 1",
                "optionA": "Paris",
                "optionB": "London",
                "optionC": "Berlin",
                "optionD": "Madrid",
                "correctOption": "A",
                "explanation": "Paris is the capital of France.",
                "hint": "-"
            },
            {
                "translationId": 2,
                "languageCode": "hi",
                "questionText": "फ्रांस की राजधानी क्या है? 1",
                "optionA": "पेरिस",
                "optionB": "लंदन",
                "optionC": "बर्लिन",
                "optionD": "मैड्रिड",
                "correctOption": "A",
                "explanation": "पेरिस फ्रांस की राजधानी है।",
                "hint": "-"
            }
        ]
    },
    {
        "questionId": 2,
        "difficultyLevel": "Easy",
        "subject": "General Knowledge",
        "tagOrTopic": "Capitals",
        "marks": 1,
        "negativeMarks": 0,
        "translations": [
            {
                "translationId": 3,
                "languageCode": "en",
                "questionText": "What is the capital of France? 2",
                "optionA": "Paris",
                "optionB": "London",
                "optionC": "Berlin",
                "optionD": "Madrid",
                "correctOption": "A",
                "explanation": "Paris is the capital of France.",
                "hint": "-"
            },
            {
                "translationId": 4,
                "languageCode": "hi",
                "questionText": "फ्रांस की राजधानी क्या है? 2",
                "optionA": "पेरिस",
                "optionB": "लंदन",
                "optionC": "बर्लिन",
                "optionD": "मैड्रिड",
                "correctOption": "A",
                "explanation": "पेरिस फ्रांस की राजधानी है।",
                "hint": "-"
            }
        ]
    },
    {
        "questionId": 3,
        "difficultyLevel": "Easy",
        "subject": "General Knowledge",
        "tagOrTopic": "Capitals",
        "marks": 1,
        "negativeMarks": 0,
        "translations": [
            {
                "translationId": 5,
                "languageCode": "en",
                "questionText": "What is the capital of France? 3",
                "optionA": "Paris",
                "optionB": "London",
                "optionC": "Berlin",
                "optionD": "Madrid",
                "correctOption": "A",
                "explanation": "Paris is the capital of France.",
                "hint": "-"
            },
            {
                "translationId": 6,
                "languageCode": "hi",
                "questionText": "फ्रांस की राजधानी क्या है? 3",
                "optionA": "पेरिस",
                "optionB": "लंदन",
                "optionC": "बर्लिन",
                "optionD": "मैड्रिड",
                "correctOption": "A",
                "explanation": "पेरिस फ्रांस की राजधानी है।",
                "hint": "-"
            }
        ]
    }
    ]
  };

  currentQuestionIndex: number = 0;
  selectedAnswer: string | null = null;
  timeLeft: number = 0; // Time left in seconds
  interval: any;
  subjectQuestions: any[] = [];
  subject: string = ''; // Current subject
  questionTimers: { [subject: string]: { [questionId: number]: { startTime: number | null, timeSpent: number } } } = {}; // Timers for each question
  currentQuestionStartTime: number | null = null;
  markedQuestions: Set<number> = new Set<number>(); // Track questions marked for review

  ngOnInit(): void {
    this.subject = 'General Knowledge'; // Set default subject
    this.initializeSubjectQuestions();
    this.timeLeft = this.mockTest.duration * 60; // Convert minutes to seconds
    this.startTimer();
  }

  ngOnDestroy(): void {
    if (this.interval) {
      clearInterval(this.interval);
    }
    console.log(this.questionTimers, "This is timer data");
  }

  initializeSubjectQuestions() {
    this.subjectQuestions = this.mockTest.questions.filter((q: any) => q.subject === this.subject);
    this.currentQuestionIndex = 0; // Reset index when initializing
    this.selectedAnswer = null; // Clear any selected answer
    this.stopQuestionTimer();

    if (this.subjectQuestions.length > 0) {
      this.startQuestionTimer();
    }
  }

  getCurrentQuestion() {
    return this.subjectQuestions[this.currentQuestionIndex]?.translations[0];
  }

  getCurrentQuestionId() {
    return this.subjectQuestions[this.currentQuestionIndex]?.questionId;
  }

  selectOption(option: string) {
    this.selectedAnswer = option;
  }

  clearResponse() {
    this.selectedAnswer = null;
  }

  markForReview() {
    const questionId = this.getCurrentQuestionId();
    if (questionId !== undefined) {
      if (this.markedQuestions.has(questionId)) {
        this.markedQuestions.delete(questionId);
      } else {
        this.markedQuestions.add(questionId);
      }
    }
  }

  saveAndNext() {
    if (this.subjectQuestions.length > 0) {
      this.stopQuestionTimer();
      if (this.currentQuestionIndex < this.subjectQuestions.length - 1) {
        this.currentQuestionIndex++;
        this.startQuestionTimer();
        this.selectedAnswer = null;
      }
    }
  }

  selectQuestion(index: number) {
    if (this.subjectQuestions.length > 0 && index < this.subjectQuestions.length) {
      this.stopQuestionTimer();
      this.currentQuestionIndex = index;
      this.selectedAnswer = null;
      this.startQuestionTimer();
    }
  }

  startTimer() {
    this.interval = setInterval(() => {
      if (this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        clearInterval(this.interval);
        this.submitTest();
      }
    }, 1000); // Timer updates every second
  }

  resetTimer() {
    if (this.interval) {
      clearInterval(this.interval);
    }
    this.timeLeft = this.mockTest.duration * 60; // Reset timeLeft based on fetched data
    this.startTimer();
  }

  startQuestionTimer() {
    if (this.currentQuestionStartTime !== null) {
      this.stopQuestionTimer();
    }
    this.currentQuestionStartTime = Date.now();
    const questionId = this.getCurrentQuestionId();
    if (questionId !== undefined) {
      if (!this.questionTimers[this.subject]) {
        this.questionTimers[this.subject] = {};
      }
      if (!this.questionTimers[this.subject][questionId]) {
        this.questionTimers[this.subject][questionId] = { startTime: Date.now(), timeSpent: 0 };
      } else {
        this.questionTimers[this.subject][questionId].startTime = Date.now();
      }
    }
  }

  stopQuestionTimer() {
    if (this.currentQuestionStartTime !== null) {
      const questionId = this.getCurrentQuestionId();
      if (questionId !== undefined && this.questionTimers[this.subject] && this.questionTimers[this.subject][questionId]) {
        const timeSpent = Date.now() - (this.questionTimers[this.subject][questionId].startTime ?? Date.now());
        this.questionTimers[this.subject][questionId].timeSpent += timeSpent;
        this.questionTimers[this.subject][questionId].startTime = null;
      }
      this.currentQuestionStartTime = null;
    }
  }

  saveQuestionTimerData() {
    const questionId = this.getCurrentQuestionId();
    if (questionId !== undefined) {
      if (!this.questionTimers[this.subject]) {
        this.questionTimers[this.subject] = {};
      }
      this.questionTimers[this.subject][questionId] = {
        startTime: this.currentQuestionStartTime,
        timeSpent: this.getQuestionTime(questionId)
      };
    }
  }

  getQuestionTime(questionId: number): number {
    const questionTimer = (this.questionTimers[this.subject] && this.questionTimers[this.subject][questionId]) || { timeSpent: 0 };
    const currentTime = this.currentQuestionStartTime !== null ? Date.now() - this.currentQuestionStartTime : 0;
    return questionTimer.timeSpent + currentTime;
  }

  getFormattedQuestionTime(questionId: number): string {
    const totalTime = this.getQuestionTime(questionId);
    const minutes: number = Math.floor(totalTime / 60000);
    const seconds: number = Math.floor((totalTime % 60000) / 1000);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  }

  getQuestionStatus(index: number) {
    const questionId = this.subjectQuestions[index]?.questionId;
    if (questionId !== undefined) {
      if (questionId === this.getCurrentQuestionId()) {
        return 'active-question';
      }
      if (this.markedQuestions.has(questionId)) {
        return 'marked-for-review';
      }
    }
    return '';
  }

  submitTest() {
    // Logic to auto-submit the test when time runs out
    alert('Time is up! Submitting test automatically.');
  }

  getFormattedTime() {
    const minutes: number = Math.floor(this.timeLeft / 60);
    const seconds: number = this.timeLeft % 60;
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  }

  filterBySubject(subject: string) {
    this.stopQuestionTimer(); // Stop timer for current question
    this.saveQuestionTimerData(); // Save the current question timer data
    this.subject = subject;
    this.initializeSubjectQuestions();
    // this.resetTimer(); // Optional: Uncomment if you want to reset the timer when switching sections
  }
}
