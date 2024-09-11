import { Component, OnInit } from '@angular/core';
import { MockTestService } from '../service/MockTestService';

@Component({
  selector: 'app-mock-test',
  templateUrl: './mock-test.component.html',
  styleUrls: ['./mock-test.component.css']
})
export class MockTestComponent implements OnInit {
    mockTest: any =  {
            "mockTestId": 2,
            "title": "MockTest 2",
            "duration": 60,
            "totalQuestions": 10,
            "questions": [
              {
                "questionId": 1,
                "difficultyLevel": "Easy",
                "subject": "Quantitative Aptitude",
                "tagOrTopic": "Passage Reading",
                "marks": 1,
                "negativeMarks": 0,
                "translations": [
                  {
                    "translationId": 1,
                    "languageCode": "en",
                    "questionText": "Read the passage and answer the following question: 'The sun rises in the east and sets in the west.' What is the direction of sunrise?",
                    "optionA": "East",
                    "optionB": "West",
                    "optionC": "North",
                    "optionD": "South",
                    "correctOption": "A",
                    "explanation": "The passage states that the sun rises in the east.",
                    "hint": "-"
                  }
                ]
              },
              {
                "questionId": 2,
                "difficultyLevel": "Easy",
                "subject": "English Comprehension",
                "tagOrTopic": "Passage Reading",
                "marks": 1,
                "negativeMarks": 0,
                "translations": [
                  {
                    "translationId": 2,
                    "languageCode": "en",
                    "questionText": "Read the passage and answer the following question: 'Alice went to the market and bought some apples.' Where did Alice go?",
                    "optionA": "Market",
                    "optionB": "School",
                    "optionC": "Park",
                    "optionD": "Library",
                    "correctOption": "A",
                    "explanation": "The passage mentions that Alice went to the market.",
                    "hint": "-"
                  }
                ]
              },
              {
                "questionId": 3,
                "difficultyLevel": "Easy",
                "subject": "Mathematics",
                "tagOrTopic": "Arithmetic",
                "marks": 1,
                "negativeMarks": 0,
                "translations": [
                  {
                    "translationId": 3,
                    "languageCode": "en",
                    "questionText": "What is the result of 5 × 8?",
                    "optionA": "40",
                    "optionB": "35",
                    "optionC": "45",
                    "optionD": "50",
                    "correctOption": "A",
                    "explanation": "5 multiplied by 8 equals 40.",
                    "hint": "-"
                  }
                ]
              },
              {
                "questionId": 4,
                "difficultyLevel": "Easy",
                "subject": "Mathematics",
                "tagOrTopic": "Algebra",
                "marks": 1,
                "negativeMarks": 0,
                "translations": [
                  {
                    "translationId": 4,
                    "languageCode": "en",
                    "questionText": "Solve for x in the equation: 2x + 3 = 7.",
                    "optionA": "2",
                    "optionB": "3",
                    "optionC": "4",
                    "optionD": "5",
                    "correctOption": "A",
                    "explanation": "Subtract 3 from both sides to get 2x = 4, then divide by 2 to find x = 2.",
                    "hint": "-"
                  }
                ]
              },
              {
                "questionId": 5,
                "difficultyLevel": "Easy",
                "subject": "General Knowledge",
                "tagOrTopic": "Current Affairs",
                "marks": 1,
                "negativeMarks": 0,
                "translations": [
                  {
                    "translationId": 5,
                    "languageCode": "en",
                    "questionText": "Who is the current President of the United States? (As of 2024)",
                    "optionA": "Joe Biden",
                    "optionB": "Donald Trump",
                    "optionC": "Barack Obama",
                    "optionD": "George Bush",
                    "correctOption": "A",
                    "explanation": "Joe Biden is the current President of the United States.",
                    "hint": "-"
                  }
                ]
              },
              {
                "questionId": 6,
                "difficultyLevel": "Easy",
                "subject": "General Knowledge",
                "tagOrTopic": "Astronomy",
                "marks": 1,
                "negativeMarks": 0,
                "translations": [
                  {
                    "translationId": 6,
                    "languageCode": "en",
                    "questionText": "What is the largest planet in our solar system?",
                    "optionA": "Jupiter",
                    "optionB": "Earth",
                    "optionC": "Mars",
                    "optionD": "Saturn",
                    "correctOption": "A",
                    "explanation": "Jupiter is the largest planet in our solar system.",
                    "hint": "-"
                  }
                ]
              },
              {
                "questionId": 7,
                "difficultyLevel": "Easy",
                "subject": "English Comprehension",
                "tagOrTopic": "Grammar",
                "marks": 1,
                "negativeMarks": 0,
                "translations": [
                  {
                    "translationId": 7,
                    "languageCode": "en",
                    "questionText": "In the sentence 'She quickly ran to the store,' what does the word 'quickly' describe?",
                    "optionA": "How she ran",
                    "optionB": "Where she ran",
                    "optionC": "When she ran",
                    "optionD": "Why she ran",
                    "correctOption": "A",
                    "explanation": "The word 'quickly' describes the manner in which she ran.",
                    "hint": "-"
                  }
                ]
              },
              {
                "questionId": 8,
                "difficultyLevel": "Easy",
                "subject": "English Comprehension",
                "tagOrTopic": "Grammar",
                "marks": 1,
                "negativeMarks": 0,
                "translations": [
                  {
                    "translationId": 8,
                    "languageCode": "en",
                    "questionText": "In the sentence 'The cat slept under the table,' where did the cat sleep?",
                    "optionA": "Under the table",
                    "optionB": "On the table",
                    "optionC": "Behind the table",
                    "optionD": "Next to the table",
                    "correctOption": "A",
                    "explanation": "The sentence specifies that the cat slept under the table.",
                    "hint": "-"
                  }
                ]
              },
              {
                "questionId": 9,
                "difficultyLevel": "Easy",
                "subject": "Mathematics",
                "tagOrTopic": "Arithmetic",
                "marks": 1,
                "negativeMarks": 0,
                "translations": [
                  {
                    "translationId": 9,
                    "languageCode": "en",
                    "questionText": "What is the value of the square root of 49?",
                    "optionA": "7",
                    "optionB": "5",
                    "optionC": "6",
                    "optionD": "8",
                    "correctOption": "A",
                    "explanation": "The square root of 49 is 7.",
                    "hint": "-"
                  }
                ]
              },
              {
                "questionId": 10,
                "difficultyLevel": "Easy",
                "subject": "Mathematics",
                "tagOrTopic": "Geometry",
                "marks": 1,
                "negativeMarks": 0,
                "translations": [
                  {
                    "translationId": 10,
                    "languageCode": "en",
                    "questionText": "If a rectangle has a length of 10 units and a width of 5 units, what is its area?",
                    "optionA": "50 square units",
                    "optionB": "15 square units",
                    "optionC": "30 square units",
                    "optionD": "20 square units",
                    "correctOption": "A",
                    "explanation": "The area of a rectangle is calculated by multiplying length by width (10 × 5 = 50).",
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
            this.subject = 'English Comprehension'; // Set default subject
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
            this.subject = subject;
            this.initializeSubjectQuestions();
            // this.resetTimer(); // Reset the timer when filtering by subject
          }
        }
        