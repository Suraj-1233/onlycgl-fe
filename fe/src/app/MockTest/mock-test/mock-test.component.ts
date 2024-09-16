import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { MockTestService } from '../service/MockTestService'; // If you are using a service, keep this
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { TestSummaryComponent } from '../modal/test-summary/test-summary.component';

@Component({
  selector: 'app-mock-test',
  templateUrl: './mock-test.component.html',
  styleUrls: ['./mock-test.component.css']
})
export class MockTestComponent implements OnInit, OnDestroy {
  mockTest: any = {
    "mockTestId": 2,
    "title": "MockTest 2",
    "duration": 120,
    "totalQuestions": 20,
    "questions": [
      {
        "questionId": 1,
        "difficultyLevel": "Easy",
        "subject": "Mathematics",
        "tagOrTopic": "Arithmetic",
        "marks": 1,
        "negativeMarks": 0,
        "translations": [
          {
            "translationId": 1,
            "languageCode": "en",
            "questionText": "What is the result of 5 + 3?",
            "optionA": "8",
            "optionB": "6",
            "optionC": "7",
            "optionD": "9",
            "correctOption": "A",
            "explanation": "5 + 3 equals 8.",
            "hint": "It's the sum of two single-digit numbers."
          },
          {
            "translationId": 2,
            "languageCode": "hi",
            "questionText": "5 + 3 का परिणाम क्या है? m",
            "optionA": "8",
            "optionB": "6",
            "optionC": "7",
            "optionD": "9",
            "correctOption": "A",
            "explanation": "5 + 3 बराबर 8 है।",
            "hint": "यह दो अंकीय संख्याओं का योग है।"
          }
        ]
      },
      {
        "questionId": 2,
        "difficultyLevel": "Medium",
        "subject": "English Comprehension",
        "tagOrTopic": "Vocabulary",
        "marks": 1,
        "negativeMarks": 0,
        "translations": [
          {
            "translationId": 3,
            "languageCode": "en",
            "questionText": "What does the word 'ubiquitous' mean? ",
            "optionA": "Widespread",
            "optionB": "Unique",
            "optionC": "Obscure",
            "optionD": "Rare",
            "correctOption": "A",
            "explanation": "'Ubiquitous' means being present everywhere.",
            "hint": "It describes something that is found everywhere."
          },
          {
            "translationId": 4,
            "languageCode": "hi",
            "questionText": "'Ubiquitous' शब्द का क्या अर्थ है? e",
            "optionA": "व्यापक",
            "optionB": "विशेष",
            "optionC": "अज्ञात",
            "optionD": "दुर्लभ",
            "correctOption": "A",
            "explanation": "'Ubiquitous' का अर्थ है हर जगह उपस्थित होना।",
            "hint": "यह किसी ऐसी चीज़ का वर्णन करता है जो हर जगह पाई जाती है।"
          }
        ]
      },
      {
        "questionId": 3,
        "difficultyLevel": "Hard",
        "subject": "Quantitative Aptitude",
        "tagOrTopic": "Algebra",
        "marks": 2,
        "negativeMarks": 0,
        "translations": [
          {
            "translationId": 5,
            "languageCode": "en",
            "questionText": "Solve for x: 2x - 4 = 10",
            "optionA": "7",
            "optionB": "6",
            "optionC": "5",
            "optionD": "4",
            "correctOption": "A",
            "explanation": "Add 4 to both sides to get 2x = 14. Divide by 2 to get x = 7.",
            "hint": "Isolate x by performing inverse operations."
          },
          {
            "translationId": 6,
            "languageCode": "hi",
            "questionText": "x के लिए हल करें: 2x - 4 = 10 q",
            "optionA": "7",
            "optionB": "6",
            "optionC": "5",
            "optionD": "4",
            "correctOption": "A",
            "explanation": "दोनों पक्षों में 4 जोड़ें ताकि 2x = 14 हो जाए। 2 से विभाजित करें ताकि x = 7 हो जाए।",
            "hint": "x को अलग करें और उल्टा क्रियाएं करें।"
          }
        ]
      },
      {
        "questionId": 4,
        "difficultyLevel": "Medium",
        "subject": "General Knowledge",
        "tagOrTopic": "Geography",
        "marks": 1,
        "negativeMarks": 0,
        "translations": [
          {
            "translationId": 7,
            "languageCode": "en",
            "questionText": "Which river is known as the longest river in the world?",
            "optionA": "Nile",
            "optionB": "Amazon",
            "optionC": "Yangtze",
            "optionD": "Mississippi",
            "correctOption": "A",
            "explanation": "The Nile is traditionally considered the longest river in the world.",
            "hint": "It flows through northeastern Africa."
          },
          {
            "translationId": 8,
            "languageCode": "hi",
            "questionText": "कौन सी नदी दुनिया की सबसे लंबी नदी के रूप में जानी जाती है? G",
            "optionA": "नील",
            "optionB": "अमेज़न",
            "optionC": "यांग्त्ज़े",
            "optionD": "मिसिसिपी",
            "correctOption": "A",
            "explanation": "नील को पारंपरिक रूप से दुनिया की सबसे लंबी नदी माना जाता है।",
            "hint": "यह उत्तर-पूर्वी अफ्रीका से बहती है।"
          }
        ]
      },
      {
        "questionId": 5,
        "difficultyLevel": "Easy",
        "subject": "General Knowledge",
        "tagOrTopic": "Ancient Civilizations",
        "marks": 1,
        "negativeMarks": 0,
        "translations": [
          {
            "translationId": 9,
            "languageCode": "en",
            "questionText": "Which civilization is known for building the Pyramids of Giza?",
            "optionA": "Egyptian",
            "optionB": "Mesopotamian",
            "optionC": "Indus Valley",
            "optionD": "Mayan",
            "correctOption": "A",
            "explanation": "The Egyptian civilization is famous for building the Pyramids of Giza.",
            "hint": "This civilization thrived in northeastern Africa."
          },
          {
            "translationId": 10,
            "languageCode": "hi",
            "questionText": "कौन सी सभ्यता गिजा के पिरामिडों के निर्माण के लिए जानी जाती है?",
            "optionA": "मिस्र की",
            "optionB": "मेसोपोटामियन",
            "optionC": "इंडस घाटी",
            "optionD": "मायान",
            "correctOption": "A",
            "explanation": "मिस्र की सभ्यता गिजा के पिरामिडों के निर्माण के लिए प्रसिद्ध है।",
            "hint": "यह सभ्यता उत्तर-पूर्वी अफ्रीका में फैली हुई थी।"
          }
        ]
      },
      {
        "questionId": 6,
        "difficultyLevel": "Hard",
        "subject": "General Knowledge",
        "tagOrTopic": "Human Anatomy",
        "marks": 2,
        "negativeMarks": 0,
        "translations": [
          {
            "translationId": 11,
            "languageCode": "en",
            "questionText": "What is the function of the mitochondria?",
            "optionA": "Energy production",
            "optionB": "Protein synthesis",
            "optionC": "DNA replication",
            "optionD": "Cell division",
            "correctOption": "A",
            "explanation": "The mitochondria are known as the powerhouses of the cell, responsible for energy production.",
            "hint": "They are often referred to as the 'powerhouses' of the cell."
          },
          {
            "translationId": 12,
            "languageCode": "hi",
            "questionText": "माइटोकॉंड्रिया का कार्य क्या है?",
            "optionA": "ऊर्जा उत्पादन",
            "optionB": "प्रोटीन संश्लेषण",
            "optionC": "डीएनए प्रतिकृति",
            "optionD": "कोशिका विभाजन",
            "correctOption": "A",
            "explanation": "माइटोकॉंड्रिया को कोशिका के पावरहाउस के रूप में जाना जाता है, जो ऊर्जा उत्पादन के लिए जिम्मेदार होते हैं।",
            "hint": "उन्हें अक्सर कोशिका के 'पावरहाउस' के रूप में संदर्भित किया जाता है।"
          }
        ]
      },
      {
        "questionId": 7,
        "difficultyLevel": "Easy",
        "subject": "General Knowledge",
        "tagOrTopic": "Periodic Table",
        "marks": 1,
        "negativeMarks": 0,
        "translations": [
          {
            "translationId": 13,
            "languageCode": "en",
            "questionText": "What is the chemical symbol for gold?",
            "optionA": "Au",
            "optionB": "Ag",
            "optionC": "Pb",
            "optionD": "Fe",
            "correctOption": "A",
            "explanation": "The chemical symbol for gold is Au.",
            "hint": "It is derived from the Latin word 'aurum'."
          },
          {
            "translationId": 14,
            "languageCode": "hi",
            "questionText": "सोने का रासायनिक प्रतीक क्या है?",
            "optionA": "Au",
            "optionB": "Ag",
            "optionC": "Pb",
            "optionD": "Fe",
            "correctOption": "A",
            "explanation": "सोने का रासायनिक प्रतीक Au है।",
            "hint": "यह लैटिन शब्द 'aurum' से लिया गया है।"
          }
        ]
      },
      {
        "questionId": 8,
        "difficultyLevel": "Medium",
        "subject": "General Knowledge",
        "tagOrTopic": "Mechanics",
        "marks": 1,
        "negativeMarks": 0,
        "translations": [
          {
            "translationId": 15,
            "languageCode": "en",
            "questionText": "What is the unit of force in the International System of Units?",
            "optionA": "Newton",
            "optionB": "Joule",
            "optionC": "Watt",
            "optionD": "Pascal",
            "correctOption": "A",
            "explanation": "The unit of force in the International System of Units (SI) is the Newton.",
            "hint": "It is named after Sir Isaac Newton."
          },
          {
            "translationId": 16,
            "languageCode": "hi",
            "questionText": "अंतर्राष्ट्रीय प्रणाली में बल की इकाई क्या है?",
            "optionA": "न्यूटन",
            "optionB": "जूल",
            "optionC": "वाट",
            "optionD": "पास्कल",
            "correctOption": "A",
            "explanation": "अंतर्राष्ट्रीय प्रणाली (SI) में बल की इकाई न्यूटन है।",
            "hint": "यह नाम सर आईज़क न्यूटन के नाम पर रखा गया है।"
          }
        ]
      },
      {
        "questionId": 9,
        "difficultyLevel": "Hard",
        "subject": "Mathematics",
        "tagOrTopic": "Macroeconomics",
        "marks": 2,
        "negativeMarks": 0,
        "translations": [
          {
            "translationId": 17,
            "languageCode": "en",
            "questionText": "What does GDP stand for in economics?",
            "optionA": "Gross Domestic Product",
            "optionB": "Gross Development Product",
            "optionC": "Gross Domestic Price",
            "optionD": "Gross Development Price",
            "correctOption": "A",
            "explanation": "GDP stands for Gross Domestic Product, which measures the total value of goods and services produced within a country.",
            "hint": "It is a key indicator of a country's economic performance."
          },
          {
            "translationId": 18,
            "languageCode": "hi",
            "questionText": "अर्थशास्त्र में GDP का क्या अर्थ होता है?",
            "optionA": "सकल घरेलू उत्पाद",
            "optionB": "सकल विकास उत्पाद",
            "optionC": "सकल घरेलू मूल्य",
            "optionD": "सकल विकास मूल्य",
            "correctOption": "A",
            "explanation": "GDP का अर्थ सकल घरेलू उत्पाद होता है, जो एक देश में उत्पादित वस्तुओं और सेवाओं का कुल मूल्य मापता है।",
            "hint": "यह एक देश की आर्थिक प्रदर्शन का प्रमुख संकेतक है।"
          }
        ]
      },
      {
        "questionId": 10,
        "difficultyLevel": "Easy",
        "subject": "Mathematics",
        "tagOrTopic": "Basic Programming",
        "marks": 1,
        "negativeMarks": 0,
        "translations": [
          {
            "translationId": 19,
            "languageCode": "en",
            "questionText": "What does 'HTML' stand for?",
            "optionA": "HyperText Markup Language",
            "optionB": "HyperText Modeling Language",
            "optionC": "HyperText Markup Layout",
            "optionD": "HyperText Machine Language",
            "correctOption": "A",
            "explanation": "HTML stands for HyperText Markup Language, which is used for creating web pages.",
            "hint": "It is a standard language used to create web pages."
          },
          {
            "translationId": 20,
            "languageCode": "hi",
            "questionText": "'HTML' का क्या अर्थ है?",
            "optionA": "हाइपरटेक्स्ट मार्कअप लैंग्वेज",
            "optionB": "हाइपरटेक्स्ट मॉडलिंग लैंग्वेज",
            "optionC": "हाइपरटेक्स्ट मार्कअप लेआउट",
            "optionD": "हाइपरटेक्स्ट मशीन लैंग्वेज",
            "correctOption": "A",
            "explanation": "HTML का अर्थ हाइपरटेक्स्ट मार्कअप लैंग्वेज होता है, जो वेब पेज बनाने के लिए उपयोग की जाती है।",
            "hint": "यह एक मानक भाषा है जिसका उपयोग वेब पेज बनाने के लिए किया जाता है।"
          }
        ]
      },
      {
        "questionId": 11,
        "difficultyLevel": "Medium",
        "subject": "Mathematics",
        "tagOrTopic": "Geometry",
        "marks": 1,
        "negativeMarks": 0,
        "translations": [
          {
            "translationId": 21,
            "languageCode": "en",
            "questionText": "What is the sum of the interior angles of a triangle?",
            "optionA": "180 degrees",
            "optionB": "90 degrees",
            "optionC": "360 degrees",
            "optionD": "270 degrees",
            "correctOption": "A",
            "explanation": "The sum of the interior angles of a triangle is always 180 degrees.",
            "hint": "This is a basic property of triangles."
          },
          {
            "translationId": 22,
            "languageCode": "hi",
            "questionText": "त्रिकोण के आंतरिक कोणों का योगफल क्या होता है?",
            "optionA": "180 डिग्री",
            "optionB": "90 डिग्री",
            "optionC": "360 डिग्री",
            "optionD": "270 डिग्री",
            "correctOption": "A",
            "explanation": "त्रिकोण के आंतरिक कोणों का योगफल हमेशा 180 डिग्री होता है।",
            "hint": "यह त्रिकोणों की एक मूलभूत विशेषता है।"
          }
        ]
      },
      {
        "questionId": 12,
        "difficultyLevel": "Easy",
        "subject": "English Comprehension",
        "tagOrTopic": "Famous Works",
        "marks": 1,
        "negativeMarks": 0,
        "translations": [
          {
            "translationId": 23,
            "languageCode": "en",
            "questionText": "Who wrote 'Pride and Prejudice'?",
            "optionA": "Jane Austen",
            "optionB": "Charles Dickens",
            "optionC": "Emily Brontë",
            "optionD": "William Shakespeare",
            "correctOption": "A",
            "explanation": "'Pride and Prejudice' was written by Jane Austen.",
            "hint": "She is a renowned English novelist."
          },
          {
            "translationId": 24,
            "languageCode": "hi",
            "questionText": "'Pride and Prejudice' किसने लिखा है?",
            "optionA": "जेन ऑस्टेन",
            "optionB": "चार्ल्स डिकेंस",
            "optionC": "एमीली ब्रोंटे",
            "optionD": "विलियम शेक्सपियर",
            "correctOption": "A",
            "explanation": "'Pride and Prejudice' जेन ऑस्टेन द्वारा लिखा गया था।",
            "hint": "वह एक प्रसिद्ध अंग्रेजी उपन्यासकार हैं।"
          }
        ]
      },
      {
        "questionId": 13,
        "difficultyLevel": "Medium",
        "subject": "English Comprehension",
        "tagOrTopic": "Optics",
        "marks": 1,
        "negativeMarks": 0,
        "translations": [
          {
            "translationId": 25,
            "languageCode": "en",
            "questionText": "What is the speed of light in a vacuum?",
            "optionA": "299,792 km/s",
            "optionB": "150,000 km/s",
            "optionC": "300,000 km/s",
            "optionD": "250,000 km/s",
            "correctOption": "A",
            "explanation": "The speed of light in a vacuum is approximately 299,792 kilometers per second.",
            "hint": "It is a fundamental constant in physics."
          },
          {
            "translationId": 26,
            "languageCode": "hi",
            "questionText": "शून्य में प्रकाश की गति क्या होती है?",
            "optionA": "299,792 किमी/सेकंड",
            "optionB": "150,000 किमी/सेकंड",
            "optionC": "300,000 किमी/सेकंड",
            "optionD": "250,000 किमी/सेकंड",
            "correctOption": "A",
            "explanation": "शून्य में प्रकाश की गति लगभग 299,792 किलोमीटर प्रति सेकंड होती है।",
            "hint": "यह भौतिकी में एक मौलिक स्थिरांक है।"
          }
        ]
      },
      {
        "questionId": 14,
        "difficultyLevel": "Hard",
        "subject": "English Comprehension",
        "tagOrTopic": "Genetics",
        "marks": 2,
        "negativeMarks": 0,
        "translations": [
          {
            "translationId": 27,
            "languageCode": "en",
            "questionText": "What is the function of ribosomes in a cell?",
            "optionA": "Protein synthesis",
            "optionB": "DNA replication",
            "optionC": "Energy production",
            "optionD": "Cell division",
            "correctOption": "A",
            "explanation": "Ribosomes are responsible for protein synthesis in the cell.",
            "hint": "They are often referred to as the 'protein factories' of the cell."
          },
          {
            "translationId": 28,
            "languageCode": "hi",
            "questionText": "कोशिका में राइबोसोमों का कार्य क्या है?",
            "optionA": "प्रोटीन संश्लेषण",
            "optionB": "डीएनए प्रतिकृति",
            "optionC": "ऊर्जा उत्पादन",
            "optionD": "कोशिका विभाजन",
            "correctOption": "A",
            "explanation": "राइबोसोम कोशिका में प्रोटीन संश्लेषण के लिए जिम्मेदार होते हैं।",
            "hint": "उन्हें अक्सर कोशिका के 'प्रोटीन फैक्टरियों' के रूप में संदर्भित किया जाता है।"
          }
        ]
      },
      {
        "questionId": 15,
        "difficultyLevel": "Medium",
        "subject": "General Knowledge",
        "tagOrTopic": "History",
        "marks": 1,
        "negativeMarks": 0,
        "translations": [
          {
            "translationId": 29,
            "languageCode": "en",
            "questionText": "Who was the first President of the United States?",
            "optionA": "George Washington",
            "optionB": "Thomas Jefferson",
            "optionC": "Abraham Lincoln",
            "optionD": "John Adams",
            "correctOption": "A",
            "explanation": "George Washington was the first President of the United States.",
            "hint": "He is often referred to as the 'Father of His Country.'"
          },
          {
            "translationId": 30,
            "languageCode": "hi",
            "questionText": "संयुक्त राज्य अमेरिका के पहले राष्ट्रपति कौन थे?",
            "optionA": "जॉर्ज वॉशिंगटन",
            "optionB": "थॉमस जेफरसन",
            "optionC": "अब्राहम लिंकन",
            "optionD": "जॉन एडम्स",
            "correctOption": "A",
            "explanation": "जॉर्ज वॉशिंगटन संयुक्त राज्य अमेरिका के पहले राष्ट्रपति थे।",
            "hint": "उन्हें अक्सर 'अपने देश के पिता' के रूप में संदर्भित किया जाता है।"
          }
        ]
      },
      {
        "questionId": 16,
        "difficultyLevel": "Hard",
        "subject": "English Comprehension",
        "tagOrTopic": "International Trade",
        "marks": 2,
        "negativeMarks": 0,
        "translations": [
          {
            "translationId": 31,
            "languageCode": "en",
            "questionText": "What is the term for the economic theory that suggests a country should export more than it imports?",
            "optionA": "Mercantilism",
            "optionB": "Capitalism",
            "optionC": "Socialism",
            "optionD": "Feudalism",
            "correctOption": "A",
            "explanation": "Mercantilism is the economic theory that suggests a country should export more than it imports to accumulate wealth.",
            "hint": "It was a dominant economic theory in Europe from the 16th to the 18th centuries."
          },
          {
            "translationId": 32,
            "languageCode": "hi",
            "questionText": "उस आर्थिक सिद्धांत का क्या नाम है जो सुझाव देता है कि एक देश को आयात से अधिक निर्यात करना चाहिए?",
            "optionA": "मर्केंटाइलज्म",
            "optionB": "पूंजीवाद",
            "optionC": "साम्यवाद",
            "optionD": "फ्यूडलिज्म",
            "correctOption": "A",
            "explanation": "मर्केंटाइलज्म वह आर्थिक सिद्धांत है जो सुझाव देता है कि एक देश को धन जमा करने के लिए आयात से अधिक निर्यात करना चाहिए।",
            "hint": "यह 16वीं से 18वीं शताब्दी तक यूरोप में एक प्रमुख आर्थिक सिद्धांत था।"
          }
        ]
      },
      {
        "questionId": 17,
        "difficultyLevel": "Easy",
        "subject": "English Comprehension",
        "tagOrTopic": "Operating Systems",
        "marks": 1,
        "negativeMarks": 0,
        "translations": [
          {
            "translationId": 33,
            "languageCode": "en",
            "questionText": "Which operating system is developed by Microsoft?",
            "optionA": "Windows",
            "optionB": "Linux",
            "optionC": "macOS",
            "optionD": "Android",
            "correctOption": "A",
            "explanation": "Windows is the operating system developed by Microsoft.",
            "hint": "It is one of the most widely used operating systems for personal computers."
          },
          {
            "translationId": 34,
            "languageCode": "hi",
            "questionText": "कौन सा ऑपरेटिंग सिस्टम माइक्रोसॉफ्ट द्वारा विकसित किया गया है?",
            "optionA": "विंडोज",
            "optionB": "लिनक्स",
            "optionC": "मैकओएस",
            "optionD": "एंड्रॉइड",
            "correctOption": "A",
            "explanation": "विंडोज माइक्रोसॉफ्ट द्वारा विकसित ऑपरेटिंग सिस्टम है।",
            "hint": "यह व्यक्तिगत कंप्यूटरों के लिए सबसे व्यापक रूप से उपयोग किए जाने वाले ऑपरेटिंग सिस्टम में से एक है।"
          }
        ]
      },
      {
        "questionId": 18,
        "difficultyLevel": "Medium",
        "subject": "Quantitative Aptitude",
        "tagOrTopic": "Continents",
        "marks": 1,
        "negativeMarks": 0,
        "translations": [
          {
            "translationId": 35,
            "languageCode": "en",
            "questionText": "Which is the smallest continent by land area?",
            "optionA": "Australia",
            "optionB": "Europe",
            "optionC": "Antarctica",
            "optionD": "South America",
            "correctOption": "A",
            "explanation": "Australia is the smallest continent by land area.",
            "hint": "It is also known as Oceania."
          },
          {
            "translationId": 36,
            "languageCode": "hi",
            "questionText": "भूमि क्षेत्रफल द्वारा सबसे छोटा महाद्वीप कौन सा है?",
            "optionA": "ऑस्ट्रेलिया",
            "optionB": "यूरोप",
            "optionC": "अंटार्कटिका",
            "optionD": "दक्षिण अमेरिका",
            "correctOption": "A",
            "explanation": "भूमि क्षेत्रफल द्वारा ऑस्ट्रेलिया सबसे छोटा महाद्वीप है।",
            "hint": "इसे ओशेनिया के नाम से भी जाना जाता है।"
          }
        ]
      },
      {
        "questionId": 19,
        "difficultyLevel": "Hard",
        "subject": "Quantitative Aptitude",
        "tagOrTopic": "Calculus",
        "marks": 2,
        "negativeMarks": 0,
        "translations": [
          {
            "translationId": 37,
            "languageCode": "en",
            "questionText": "Find the derivative of the function f(x) = x^3 - 3x^2 + 2x.",
            "optionA": "3x^2 - 6x + 2",
            "optionB": "x^2 - 6x + 2",
            "optionC": "3x^2 - 3x + 2",
            "optionD": "x^2 - 2x + 1",
            "correctOption": "A",
            "explanation": "The derivative of f(x) = x^3 - 3x^2 + 2x is f'(x) = 3x^2 - 6x + 2.",
            "hint": "Apply the power rule for differentiation."
          },
          {
            "translationId": 38,
            "languageCode": "hi",
            "questionText": "फंक्शन f(x) = x^3 - 3x^2 + 2x का अवकलन निकालें।",
            "optionA": "3x^2 - 6x + 2",
            "optionB": "x^2 - 6x + 2",
            "optionC": "3x^2 - 3x + 2",
            "optionD": "x^2 - 2x + 1",
            "correctOption": "A",
            "explanation": "f(x) = x^3 - 3x^2 + 2x का अवकलन f'(x) = 3x^2 - 6x + 2 है।",
            "hint": "अवकलन के लिए पावर नियम लागू करें।"
          }
        ]
      },
      {
        "questionId": 20,
        "difficultyLevel": "Easy",
        "subject": "Quantitative Aptitude",
        "tagOrTopic": "Authors",
        "marks": 1,
        "negativeMarks": 0,
        "translations": [
          {
            "translationId": 39,
            "languageCode": "en",
            "questionText": "Who wrote 'The Great Gatsby'?",
            "optionA": "F. Scott Fitzgerald",
            "optionB": "Ernest Hemingway",
            "optionC": "Mark Twain",
            "optionD": "John Steinbeck",
            "correctOption": "A",
            "explanation": "'The Great Gatsby' was written by F. Scott Fitzgerald.",
            "hint": "He is known for his novels set in the Jazz Age."
          },
          {
            "translationId": 40,
            "languageCode": "hi",
            "questionText": "'The Great Gatsby' किसने लिखा है?",
            "optionA": "एफ. स्कॉट फिट्ज़गेराल्ड",
            "optionB": "अर्नेस्ट हेमिंगवे",
            "optionC": "मार्क ट्वेन",
            "optionD": "जॉन स्टीनबेक",
            "correctOption": "A",
            "explanation": "'The Great Gatsby' एफ. स्कॉट फिट्ज़गेराल्ड द्वारा लिखा गया था।",
            "hint": "वे जैज़ एज में सेट की गई अपनी उपन्यासों के लिए जाने जाते हैं।"
          }
        ]
      }
    ]
  };

  currentQuestionIndex: number = 0;
  selectedAnswer: string | null = null;
  timeLeft: number = 0; // Time left in seconds
  interval: any; // For tracking the overall test timer
  subjectQuestions: any[] = []; // Questions filtered by subject
  currentQuestionStartTime: number | null = null; // Tracks the start time for the current question
  questionTimers: { [subject: string]: { [questionId: number]: { startTime: number | null, timeSpent: number } } } = {}; // Time tracking for each question
  userResponses: {
    [questionId: number]: {
      selectedOption: string | null, timeTaken: number, isCorrect: boolean, marksAwarded: number
    }
  } = {};

  visitedQuestions: { [questionId: number]: boolean } = {};
  markedForReviewAnswers: { [questionId: number]: any } = {};
  saveAndMarkForReviewAnswers: { [questionId: number]: any } = {};


  subject: string = 'General Knowledge'; // Default subject
  activeSubject: string = this.subject; // Active subject for styling
  selectedLanguage: string = 'hi'; // Default language
  currentLanguage: string = this.selectedLanguage;
  availableLanguages: string[] = [];
  constructor(private router: Router, public dialog: MatDialog, private cdr: ChangeDetectorRef // Inject ChangeDetectorRef
  ) { }


  ngOnInit(): void {

    console.log(this.userResponses)
    this.extractLanguages()
    this.initializeSubjectQuestions(); // Initialize questions for the current subject
    this.timeLeft = this.mockTest.duration * 60; // Convert duration to seconds
    this.startTimer(); // Start the test timer
    console.log(this.visitedQuestions)
  }

  ngOnDestroy(): void {
    if (this.interval) {
      clearInterval(this.interval); // Clear the timer when component is destroyed
    }
    console.log(this.questionTimers, "Timer data"); // Log timer data for reference
  }
  // Initialize questions based on the selected subject
  initializeSubjectQuestions() {
    this.subjectQuestions = this.mockTest.questions.filter((q: any) => q.subject === this.subject);
    this.currentQuestionIndex = 0; // Reset index to the first question
    this.stopQuestionTimer(); // Stop timer if running
    if (this.subjectQuestions.length > 0) {
      this.startQuestionTimer(); // Start timer for the first question
      const currentQuestionId = this.getCurrentQuestionId();
      this.visitedQuestions[currentQuestionId] = true; // Mark the first question as visited
      this.setSelectedValue();

      // Restore the selected answer from previous responses if available

    }
    console.log(this.subjectQuestions)
  }


  // getCurrentQuestion() {
  //   return this.subjectQuestions[this.currentQuestionIndex]?.translations[0]; // Assume English translation
  // }


  extractLanguages() {
    const languageSet = new Set<string>(); // Using a Set to ensure uniqueness

    this.mockTest.questions.forEach((question: any) => {
      question.translations.forEach((translation: { languageCode: string; }) => {
        languageSet.add(translation.languageCode);
      });
    });

    this.availableLanguages = Array.from(languageSet);
    console.log(this.availableLanguages); // e.g., ['en', 'hi']
  }
  changeQuestionLanguage(event: Event) {
    const selectElement = event.target as HTMLSelectElement;

    this.currentLanguage = selectElement.value;
  }
  getCurrentQuestion() {

    return this.subjectQuestions[this.currentQuestionIndex]?.translations.find((t: any) => t.languageCode === this.currentLanguage) || this.subjectQuestions[this.currentQuestionIndex]?.translations.find((t: any) => t.languageCode === this.selectedLanguage);
  }
  getCurrentQuestionId() {
    return this.subjectQuestions[this.currentQuestionIndex]?.questionId;
  }

  // Called when a user selects an option
  selectOption(option: string) {
    this.selectedAnswer = option;
    const questionId = this.getCurrentQuestionId();
    this.visitedQuestions[questionId] = true;

    // if (questionId !== undefined) {
    //   this.userResponses[questionId] = {
    //     selectedOption: option,
    //     timeTaken: this.getQuestionTime(questionId) / 1000, // Convert to seconds
    //     isCorrect: this.isAnswerCorrect(questionId, option),
    //     marksAwarded: this.getMarksAwarded(questionId, option),
    //   };

    // }
  }

  clearResponse() {
    this.selectedAnswer = null; // Clear the selected answer
    const questionId = this.getCurrentQuestionId();
    if (questionId !== undefined) {
      delete this.userResponses[questionId]; // Remove the stored answer for the question
    }
  }

  // Handle "Save and Next" button logic
  saveAndNext() {
    debugger

    // Stop timer for the current question
    this.saveCurrentQuestionVisitStatus();

    const currentQuestionId = this.getCurrentQuestionId();
    if (currentQuestionId !== undefined) {
      this.visitedQuestions[currentQuestionId] = true;
      if (this.selectedAnswer === null ||  this.selectedAnswer === undefined) {
        alert(" Please choose an option ")
        return
      }
      // Save the user's response
      this.stopQuestionTimer();

      this.userResponses[currentQuestionId] = {
        selectedOption: this.selectedAnswer,
        timeTaken: this.getQuestionTime(currentQuestionId) / 1000,
        isCorrect: this.isAnswerCorrect(currentQuestionId, this.selectedAnswer || ''),
        marksAwarded: this.getMarksAwarded(currentQuestionId, this.selectedAnswer || ''),
      };

    }

    this.selectedAnswer = null; // Clear the selected answer for the next question
    delete this.markedForReviewAnswers[currentQuestionId];
    delete this.saveAndMarkForReviewAnswers[currentQuestionId];
    // Move to the next question
    if (this.currentQuestionIndex < this.subjectQuestions.length - 1) {
      this.currentQuestionIndex++;
      const currentQuestionId = this.getCurrentQuestionId();
      this.visitedQuestions[currentQuestionId] = true;

      this.setSelectedValue();

      this.startQuestionTimer(); // Start the timer for the next question
    }
    else {
      // Move to the next subject if the current subject's questions are exhausted
      const nextSubject = this.getNextSubject();
      if (nextSubject) {
        this.filterBySubject(nextSubject); // Switch to the next subject
        this.currentQuestionIndex = 0; // Start from the first question of the new subject
        this.startQuestionTimer(); // Start the timer for the new question
      }
    }


  }

  getAnsweredQuestionsCount(): number {
    return Object.values(this.userResponses).filter(
      response => response.selectedOption !== null
    ).length;
  }
  getNextSubject(): string {
    const subjects = ['General Knowledge', 'Mathematics', 'English Comprehension', 'Quantitative Aptitude'];
    const currentIndex = subjects.indexOf(this.subject);

    if (currentIndex !== -1 && currentIndex < subjects.length - 1) {
      return subjects[currentIndex + 1]; // Return the next subject
    } else {
      return subjects[0]; // Loop back to the first subject
    }
  }


  selectQuestion(index: number) {
    if (index < this.subjectQuestions.length) {

      this.stopQuestionTimer(); // Stop the current question timer
      const currentQuestionId = this.getCurrentQuestionId();
      this.visitedQuestions[currentQuestionId] = true;

      // Save the user's response for the current question
      if (currentQuestionId !== undefined) {
        this.visitedQuestions[currentQuestionId] = true;
      }

      // Update the index to the newly selected question
      this.currentQuestionIndex = index;

      // Restore the selected answer for the newly selected question
      const newQuestionId = this.getCurrentQuestionId();
      this.visitedQuestions[newQuestionId] = true;
        debugger
      this.setSelectedValue();


      // Start the timer for the newly selected question
      this.startQuestionTimer();
    }
    console.log(this.visitedQuestions)

  }



  // Test timer management
  startTimer() {
    this.interval = setInterval(() => {
      if (this.timeLeft > 0) {
        this.timeLeft--;
        this.cdr.detectChanges(); // Manually trigger change detection

      } else {
        clearInterval(this.interval);
        this.submitTest(); // Automatically submit the test if time runs out
      }
    }, 1000);
  }

  startQuestionTimer() {
    this.currentQuestionStartTime = Date.now();
    const questionId = this.getCurrentQuestionId();
    if (questionId !== undefined) {
      if (!this.questionTimers[this.subject]) {
        this.questionTimers[this.subject] = {};
      }
      this.questionTimers[this.subject][questionId] = {
        startTime: Date.now(),
        timeSpent: this.questionTimers[this.subject][questionId]?.timeSpent || 0 // Continue from previous time spent
      };
    }
  }

  stopQuestionTimer() {
    if (this.currentQuestionStartTime !== null) {
      const questionId = this.getCurrentQuestionId();
      if (questionId !== undefined) {
        const timeSpent = Date.now() - (this.questionTimers[this.subject][questionId]?.startTime || Date.now());
        this.questionTimers[this.subject][questionId].timeSpent += timeSpent;
        this.questionTimers[this.subject][questionId].startTime = null;
      }
      this.currentQuestionStartTime = null;
    }
  }

  getQuestionTime(questionId: number): number {
    const questionTimer = this.questionTimers[this.subject]?.[questionId] || { timeSpent: 0 };
    const currentTime = this.currentQuestionStartTime ? Date.now() - this.currentQuestionStartTime : 0;
    return questionTimer.timeSpent + currentTime;
  }

  isAnswerCorrect(questionId: number, selectedOption: string): boolean {
    const question = this.mockTest.questions.find((q: { questionId: number }) => q.questionId === questionId);
    return question?.translations[0].correctOption === selectedOption;
  }

  getMarksAwarded(questionId: number, selectedOption: string): number {
    const question = this.mockTest.questions.find((q: { questionId: number }) => q.questionId === questionId);
    return this.isAnswerCorrect(questionId, selectedOption) ? question?.marks : 0;
  }

  // Test submission logic
  submitTest() {
    const responses = Object.keys(this.userResponses).map(questionId => {
      const { selectedOption, timeTaken, isCorrect, marksAwarded } = this.userResponses[parseInt(questionId)];
      return {
        questionId: parseInt(questionId),
        selectedOption,
        timeTaken,
        isCorrect: isCorrect ? "true" : "false",
        marksAwarded
      };
    });
    console.log(this.userResponses, " ha bha ")

    const result = {
      userId: 20, // Replace with actual user ID
      mockTestId: this.mockTest.mockTestId,
      responses
    };

    // Submission logic would go here (e.g., sending result to a backend service)
    console.log(result);
  }

  getFormattedTime() {
    const minutes: number = Math.floor(this.timeLeft / 60);
    const seconds: number = this.timeLeft % 60;
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  }

  // Filters questions by subject
  filterBySubject(subject: string) {
    this.stopQuestionTimer();
    this.subject = subject;
    this.activeSubject = this.subject;
    this.initializeSubjectQuestions();
  }
  getFormattedQuestionTime(questionId: number): string {
    const totalTime = this.getQuestionTime(questionId); // Get the time in milliseconds
    const minutes: number = Math.floor(totalTime / 60000); // Convert to minutes
    const seconds: number = Math.floor((totalTime % 60000) / 1000); // Get the remaining seconds
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`; // Format as mm:ss
  }
  getQuestionStatus(index: number): string {
    const questionId = this.subjectQuestions[index]?.questionId;
    
    // Check if the question has been visited
    const isVisited = this.visitedQuestions.hasOwnProperty(questionId);
    
    // Check if the question has been marked for review and saved
    const hasSavedAndMarkedForReview = this.saveAndMarkForReviewAnswers.hasOwnProperty(questionId);
    
    // Check if the question is marked for review but not saved
    const hasMarkedForReview = this.markedForReviewAnswers.hasOwnProperty(questionId);
    
    // Check if the question has been answered by the user
    const hasAnswered = this.userResponses[questionId]?.selectedOption !== null && 
                        this.userResponses[questionId]?.selectedOption !== undefined;
  
    // Check if the question is the currently active one
    if (questionId === this.getCurrentQuestionId()) {
      return 'active-question'; // Class for the current active question
    }
  
    // If the question has been both marked for review and saved
    if (hasSavedAndMarkedForReview) {
      return 'saved-and-marked-for-review'; // Class for saved and marked for review questions
    }
  
    // If the question is marked for review but not necessarily saved
    if (hasMarkedForReview) {
      return 'marked-for-review-only'; // Class for questions marked for review but not saved
    }
  
    // If the question has been answered
    if (hasAnswered) {
      return 'answered'; // Class for answered questions
    }
  
    // If the question has been visited but not answered
    if (isVisited && !hasAnswered) {
      return 'visited-unanswered'; // Class for visited but unanswered questions
    }
  
    // If the question has neither been visited, answered, nor marked
    if (!isVisited && !hasAnswered && !hasMarkedForReview && !hasSavedAndMarkedForReview) {
      return 'not-visited'; // Class for not-visited questions
    }
  
    // Default case for unanswered questions
    return 'unanswered'; // Class for unanswered questions if none of the above conditions match
  }
  
  isActiveSubject(subject: string): string {
    return this.activeSubject === subject ? 'active-subject' : '';
  }


  MarkedForReview() {
    this.saveAndMarkForReview();
  }

  getNotAnsweredQuestionsCount() {
    return Object.keys(this.mockTest.questions).length - this.getAnsweredQuestionsCount()
  }
  getNotVisitedQuestionsCount() {
    return Object.keys(this.mockTest.questions).length - (Object.keys(this.visitedQuestions).length)
  }
  getMarkedForReviewQuestionsCount() {
    console.log(Object.values(this.markedForReviewAnswers).length, " getMarkedForReviewQuestionsCount")
    return Object.values(this.markedForReviewAnswers).length;

  }
  getSaveAndMarkedForReviewQuestionsCount() {
    console.log(Object.values(this.saveAndMarkForReviewAnswers).length, " getSaveAndMarkedForReviewQuestionsCount")

    return Object.values(this.saveAndMarkForReviewAnswers).length;

  }



  navigate() {
    this.router.navigate(['mock-test/instructions']);
  }


  openSummaryModal(): void {
    const subjects = this.getUniqueSubjects();

    // Loop through each subject and dynamically create the sections data
    const sections = subjects.map(subject => ({
      name: subject,
      questions: this.getTotalQuestionsCountBySubject(subject),
      answered: this.getAnsweredQuestionsCountBySubject(subject),
      notAnswered: this.getNotAnsweredQuestionsCountBySubject(subject),
      markedForReview: this.getMarkedForReviewQuestionsCountBySubject(subject),
      notVisited: this.getNotVisitedQuestionsCountBySubject(subject)
    }));

    this.dialog.open(TestSummaryComponent, {
      data: sections

    }
    );
  }
  getUniqueSubjects(): string[] {
    const subjectsSet = new Set<string>(this.mockTest.questions.map((q: any) => q.subject as string));
    return Array.from(subjectsSet);
  }



  getAnsweredQuestionsCountBySubject(subject: string): number {
    return this.mockTest.questions.filter(
      (q: any) => q.subject === subject && this.userResponses[q.questionId] && this.userResponses[q.questionId].selectedOption !== undefined && this.userResponses[q.questionId].selectedOption !== null
    ).length;
  }


  getNotAnsweredQuestionsCountBySubject(subject: string): number {
    const totalQuestions = this.getTotalQuestionsCountBySubject(subject);
    const answeredQuestions = this.getAnsweredQuestionsCountBySubject(subject);
    return totalQuestions - answeredQuestions;
  }

  getMarkedForReviewQuestionsCountBySubject(subject: string): number {
    return this.mockTest.questions.filter(
      (q: any) => q.subject === subject && this.saveAndMarkForReviewAnswers[q.questionId]
    ).length;
  }

  getNotVisitedQuestionsCountBySubject(subject: string): number {
    const totalQuestions = this.getTotalQuestionsCountBySubject(subject);
    const visitedQuestions = this.mockTest.questions.filter(
      (q: any) => q.subject === subject && this.userResponses.hasOwnProperty(q.questionId)
    ).length;
    return totalQuestions - visitedQuestions;
  }

  getTotalQuestionsCountBySubject(subject: string): number {
    return this.mockTest.questions.filter((q: any) => q.subject === subject).length;
  }

  // Save the current question's visit status
  saveCurrentQuestionVisitStatus() {
    const currentQuestionId = this.getCurrentQuestionId();
    if (currentQuestionId !== undefined) {
      this.visitedQuestions[currentQuestionId] = true;
    }
  }




  saveAndMarkForReview() {
    // Stop timer for the current question
    this.saveCurrentQuestionVisitStatus();

    const currentQuestionId = this.getCurrentQuestionId();
    if (currentQuestionId !== undefined) {
      if (this.selectedAnswer === null ||  this.selectedAnswer === undefined) {
        alert(" Please choose an option ")
        return
      }
      else {
        // Save the user's response
        this.stopQuestionTimer();

        this.saveAndMarkForReviewAnswers[currentQuestionId] = {
          selectedOption: this.selectedAnswer,
          timeTaken: this.getQuestionTime(currentQuestionId) / 1000,
          isCorrect: this.isAnswerCorrect(currentQuestionId, this.selectedAnswer || ''),
          marksAwarded: this.getMarksAwarded(currentQuestionId, this.selectedAnswer || ''),
        };
        this.selectedAnswer = null; // Clear the selected answer for the next question
        delete this.markedForReviewAnswers[currentQuestionId];
        delete this.userResponses[currentQuestionId];
        // Move to the next question
        if (this.currentQuestionIndex < this.subjectQuestions.length - 1) {
          this.currentQuestionIndex++;
          const currentQuestionId = this.getCurrentQuestionId();
          this.visitedQuestions[currentQuestionId] = true;
          this.setSelectedValue();
          this.startQuestionTimer(); // Start the timer for the next question
        }
        else {
          // Move to the next subject if the current subject's questions are exhausted
          const nextSubject = this.getNextSubject();
          if (nextSubject) {
            this.filterBySubject(nextSubject); // Switch to the next subject
            this.currentQuestionIndex = 0; // Start from the first question of the new subject
            this.startQuestionTimer(); // Start the timer for the new question
          }
        }

      }
    }
  }
  // Object to store answers for "Marked for Review" questions

  MarkForReviewAndNext() {
    debugger

    this.stopQuestionTimer();
    this.saveCurrentQuestionVisitStatus();

    const currentQuestionId = this.getCurrentQuestionId();

    if (currentQuestionId !== undefined) {
      // Save the selected answer temporarily in 'markedForReviewAnswers'
      this.markedForReviewAnswers[currentQuestionId] = {
        selectedOption: this.selectedAnswer,
        timeTaken: this.getQuestionTime(currentQuestionId) / 1000,
        isCorrect: this.isAnswerCorrect(currentQuestionId, this.selectedAnswer || ''),
        marksAwarded: this.getMarksAwarded(currentQuestionId, this.selectedAnswer || ''),
      };
      this.selectedAnswer = null;

      delete this.userResponses[currentQuestionId];
      delete this.saveAndMarkForReviewAnswers[currentQuestionId];
      // Clear the selected answer and do NOT store it in 'userResponses'

      // Move to the next question
      if (this.currentQuestionIndex < this.subjectQuestions.length - 1) {
        this.currentQuestionIndex++;
        const newQuestionId = this.getCurrentQuestionId();
        this.visitedQuestions[newQuestionId] = true;

        this.setSelectedValue();

        this.startQuestionTimer();
      } else {
        // Handle switching to the next subject if no more questions in the current subject
        const nextSubject = this.getNextSubject();
        if (nextSubject) {
          this.filterBySubject(nextSubject);
          this.currentQuestionIndex = 0;
          this.startQuestionTimer();
        }
      }
    }
    console.log(this.markedForReviewAnswers)
    //  console.log(this.saveAndMarkForReviewAnswers)

  }


  setSelectedValue() {
    debugger
    const newQuestionId = this.getCurrentQuestionId();
    if (this.markedForReviewAnswers[newQuestionId]) {
      this.selectedAnswer = this.markedForReviewAnswers[newQuestionId].selectedOption;
      delete this.userResponses[newQuestionId];
      delete this.saveAndMarkForReviewAnswers[newQuestionId];

    } else if (this.userResponses[newQuestionId]) {
      this.selectedAnswer = this.userResponses[newQuestionId].selectedOption;
      delete this.markedForReviewAnswers[newQuestionId];
      delete this.saveAndMarkForReviewAnswers[newQuestionId];

    } else if (this.saveAndMarkForReviewAnswers[newQuestionId]) {
      this.selectedAnswer = this.saveAndMarkForReviewAnswers[newQuestionId].selectedOption;
      delete this.markedForReviewAnswers[newQuestionId];
      delete this.userResponses[newQuestionId];

    }
     else {
      this.selectedAnswer = null;
    }

  }


}
