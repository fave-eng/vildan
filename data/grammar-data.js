window.GRAMMAR_DATA = [
  {
    "id": "grammar-word-order-questions",
    "order": 1,
    "title": "Word order in questions · Порядок слов в вопросах",
    "level": "",
    "status": "available",
    "linkedLessonId": "lesson-1",
    "page": "grammar-topic.html?id=grammar-word-order-questions",
    "lockOnPass": true,
    "revealAnswersOnError": false,
    "explanation": "Как строить вопросы в Present Simple, Past Simple, с be, can и вопросительными словами.",
    "studyGuide": {
      "eyebrow": "GRAMMAR · ENGLISH FILE B1",
      "intro": "В английском вопрос обычно нельзя построить простым добавлением вопросительного знака к утверждению. Выбор структуры зависит от времени и глагола.",
      "promise": "После этой темы ты сможешь самостоятельно строить и проверять вопросы о настоящем и прошлом, включая вопросы с what, where, when, why и how.",
      "sections": [
        {
          "id": "grammar-section-01",
          "number": "01",
          "title": "Главный принцип",
          "kicker": "Statement ≠ question",
          "intro": "В английском порядок слов показывает, что перед нами вопрос. В большинстве общих и специальных вопросов вспомогательный глагол располагается перед подлежащим.",
          "blocks": [
            {
              "type": "syntax",
              "title": "Порядок слов в специальном вопросе",
              "tokens": [
                {
                  "text": "Where",
                  "role": "Вопросительное слово",
                  "tone": "neutral"
                },
                {
                  "text": "do",
                  "role": "Вспомогательный глагол",
                  "tone": "verb"
                },
                {
                  "text": "you",
                  "role": "Подлежащее",
                  "tone": "subject"
                },
                {
                  "text": "work?",
                  "role": "Основной глагол",
                  "tone": "verb"
                }
              ],
              "note": "В обычном утверждении: You work here. В вопросе: Do you work here?",
              "translation": "Где ты работаешь?"
            },
            {
              "type": "contrast",
              "title": "Утверждение и вопрос",
              "left": {
                "label": "Утверждение",
                "pattern": "Подлежащее + основной глагол",
                "meaning": "Информация",
                "examples": [
                  "Your brother works here."
                ],
                "note": ""
              },
              "right": {
                "label": "Вопрос",
                "pattern": "Вспомогательный глагол + подлежащее + основной глагол",
                "meaning": "Запрос информации",
                "examples": [
                  "Does your brother work here?"
                ],
                "note": ""
              }
            }
          ]
        },
        {
          "id": "grammar-section-02",
          "number": "02",
          "title": "Present Simple: do / does",
          "kicker": "Routine · habits · facts",
          "intro": "Если в вопросе есть обычный смысловой глагол, в Present Simple используй do с I / you / we / they и does с he / she / it.",
          "blocks": [
            {
              "type": "table",
              "title": "Сравнение",
              "headers": [
                "Подлежащее",
                "Вопрос без question word",
                "Вопрос с question word"
              ],
              "rows": [
                [
                  "I / you / we / they",
                  "Do they study online?",
                  "Where do they study?"
                ],
                [
                  "he / she / it",
                  "Does she work on Fridays?",
                  "When does she work?"
                ]
              ],
              "note": "После does основной глагол всегда в начальной форме: work, а не works."
            },
            {
              "type": "note",
              "title": "Что происходит с -s?",
              "text": "Вопросительное does уже показывает третье лицо единственного числа, поэтому -s на основном глаголе не повторяется.",
              "examples": [
                "She lives here. → Does she live here?",
                "NOT: Does she lives here?"
              ],
              "tone": "remember"
            }
          ]
        },
        {
          "id": "grammar-section-03",
          "number": "03",
          "title": "Past Simple: did",
          "kicker": "Finished actions",
          "intro": "Для обычных глаголов в Past Simple вопрос строится с did для всех лиц; основной глагол возвращается в начальную форму.",
          "blocks": [
            {
              "type": "syntax",
              "title": "Прошедшее время",
              "tokens": [
                {
                  "text": "What",
                  "role": "Вопросительное слово",
                  "tone": "neutral"
                },
                {
                  "text": "did",
                  "role": "Вспомогательный глагол",
                  "tone": "verb"
                },
                {
                  "text": "Sam",
                  "role": "Подлежащее",
                  "tone": "subject"
                },
                {
                  "text": "order?",
                  "role": "Начальная форма",
                  "tone": "verb"
                }
              ],
              "note": "Ordered → order после did.",
              "translation": ""
            },
            {
              "type": "contrast",
              "title": "Сравнение настоящего и прошлого",
              "left": {
                "label": "Present Simple",
                "pattern": "Do / Does + subject + V1",
                "meaning": "Регулярные или повторяющиеся действия",
                "examples": [
                  "Does Mia travel often?"
                ],
                "note": ""
              },
              "right": {
                "label": "Past Simple",
                "pattern": "Did + subject + V1",
                "meaning": "Завершённые события",
                "examples": [
                  "Did Mia travel last week?"
                ],
                "note": ""
              }
            },
            {
              "type": "examples",
              "title": "Утверждение → вопрос",
              "rows": [
                {
                  "en": "They visited a museum. → Did they visit a museum?",
                  "ru": "Они посетили музей?",
                  "why": "visited становится visit после did."
                },
                {
                  "en": "He bought a camera. → What did he buy?",
                  "ru": "Что он купил?",
                  "why": "Неправильный глагол bought также заменяется на buy."
                }
              ]
            }
          ]
        },
        {
          "id": "grammar-section-04",
          "number": "04",
          "title": "Be и модальные глаголы",
          "kicker": "No do / does / did",
          "intro": "Если в сказуемом already есть be или модальный глагол (например, can), отдельный do / does / did не нужен. Перенеси be или модальный глагол перед подлежащим.",
          "blocks": [
            {
              "type": "table",
              "title": "Три механизма вопроса",
              "headers": [
                "Что уже есть в предложении",
                "Структура",
                "Пример"
              ],
              "rows": [
                [
                  "be: am / is / are",
                  "Be + subject",
                  "Is Ella late?"
                ],
                [
                  "be: was / were",
                  "Was / Were + subject",
                  "Were you at home?"
                ],
                [
                  "modal: can",
                  "Can + subject + V1",
                  "Can they help?"
                ],
                [
                  "обычный глагол",
                  "Do / Does / Did + subject + V1",
                  "Did they help?"
                ]
              ],
              "note": ""
            },
            {
              "type": "note",
              "title": "Нельзя дублировать вспомогательный глагол",
              "text": "Не добавляй do / does к be или can.",
              "examples": [
                "NOT: Does she is at home? → Is she at home?",
                "NOT: Does he can swim? → Can he swim?"
              ],
              "tone": "important"
            }
          ]
        },
        {
          "id": "grammar-section-05",
          "number": "05",
          "title": "What, where, when, why, how",
          "kicker": "Information questions",
          "intro": "Вопросительное слово ставится в самом начале, но остальная вопросительная структура сохраняется.",
          "blocks": [
            {
              "type": "syntax",
              "title": "Вопрос о времени",
              "tokens": [
                {
                  "text": "When",
                  "role": "О чём спрашиваем",
                  "tone": "neutral"
                },
                {
                  "text": "does",
                  "role": "Вспомогательный",
                  "tone": "verb"
                },
                {
                  "text": "Dan",
                  "role": "Подлежащее",
                  "tone": "subject"
                },
                {
                  "text": "go swimming?",
                  "role": "Основной глагол",
                  "tone": "verb"
                }
              ],
              "note": "",
              "translation": ""
            },
            {
              "type": "contrast",
              "title": "Когда who сам является подлежащим",
              "left": {
                "label": "Вопрос о дополнении",
                "pattern": "Who + did + subject + verb?",
                "meaning": "Кого кто-то позвал",
                "examples": [
                  "Who did Mia call?"
                ],
                "note": "Mia — тот, кто звонит."
              },
              "right": {
                "label": "Вопрос о подлежащем",
                "pattern": "Who + verb?",
                "meaning": "Кто совершил действие",
                "examples": [
                  "Who called Mia?"
                ],
                "note": "Who — тот, кто звонит. В нейтральном вопросе do/did не нужен."
              }
            },
            {
              "type": "note",
              "title": "Особенность subject questions",
              "text": "В вопросах Who called you? и What happened? вопросительное слово само выполняет роль подлежащего. Поэтому обычное do / did не требуется. Эмфатическое did возможно, но не является нейтральной формой такого вопроса.",
              "examples": [],
              "tone": "important"
            }
          ]
        },
        {
          "id": "grammar-section-06",
          "number": "06",
          "title": "Отрицания и короткие ответы",
          "kicker": "Keep the auxiliaries",
          "intro": "Тот же вспомогательный глагол используется в отрицании и коротком ответе; это помогает запомнить тип конструкции.",
          "blocks": [
            {
              "type": "table",
              "title": "Вопрос → короткий ответ → отрицание",
              "headers": [
                "Вопрос",
                "Короткий ответ",
                "Отрицание"
              ],
              "rows": [
                [
                  "Do they work here?",
                  "Yes, they do. / No, they don’t.",
                  "They don’t work here."
                ],
                [
                  "Does she drive?",
                  "Yes, she does. / No, she doesn’t.",
                  "She doesn’t drive."
                ],
                [
                  "Did he call?",
                  "Yes, he did. / No, he didn’t.",
                  "He didn’t call."
                ],
                [
                  "Is she ready?",
                  "Yes, she is. / No, she isn’t.",
                  "She isn’t ready."
                ],
                [
                  "Can he swim?",
                  "Yes, he can. / No, he can’t.",
                  "He can’t swim."
                ]
              ],
              "note": ""
            },
            {
              "type": "note",
              "title": "Ответ не должен содержать лишний do",
              "text": "Неверно: Yes, she is do. Верно: Yes, she is. Для be и can в коротком ответе используется этот же глагол.",
              "examples": [],
              "tone": "important"
            }
          ]
        },
        {
          "id": "grammar-section-07",
          "number": "07",
          "title": "Как проверять себя",
          "kicker": "Decision guide",
          "intro": "Используй простой алгоритм перед тем, как записать вопрос.",
          "blocks": [
            {
              "type": "decision",
              "title": "Пять шагов",
              "steps": [
                {
                  "if": "Хочу спросить о конкретной детали?",
                  "then": "Сначала поставь вопросительное слово.",
                  "example": "Why …? / Where …?"
                },
                {
                  "if": "Главный глагол — be?",
                  "then": "Поставь am / is / are / was / were перед подлежащим.",
                  "example": "Where is Ella?"
                },
                {
                  "if": "Есть can / другой модальный глагол?",
                  "then": "Поставь модальный глагол перед подлежащим.",
                  "example": "Can your neighbour help?"
                },
                {
                  "if": "Это Present Simple с обычным глаголом?",
                  "then": "Поставь do / does и используй V1.",
                  "example": "Does your aunt work?"
                },
                {
                  "if": "Это Past Simple с обычным глаголом?",
                  "then": "Поставь did и используй V1.",
                  "example": "Did Sam order dinner?"
                }
              ]
            },
            {
              "type": "note",
              "title": "Частые ошибки",
              "text": "Сразу после does или did глагол должен быть в V1. Не используй порядок слов утверждения в специальных вопросах.",
              "examples": [
                "NOT: Where she works? → Where does she work?",
                "NOT: Did he went? → Did he go?"
              ],
              "tone": "remember"
            }
          ]
        }
      ]
    },
    "exercises": [
      {
        "type": "exercise",
        "id": "q-grammar-easy",
        "title": "1 · Choose the correct structure",
        "instructions": "Choose the grammatically correct question.",
        "items": [
          {
            "id": "item-1",
            "number": 1,
            "input": "single",
            "prompt": "Present Simple, third person",
            "options": [
              "Where your sister works?",
              "Where does your sister work?"
            ],
            "answer": 1
          },
          {
            "id": "item-2",
            "number": 2,
            "input": "single",
            "prompt": "Past Simple",
            "options": [
              "Did she finished?",
              "Did she finish?"
            ],
            "answer": 1
          },
          {
            "id": "item-3",
            "number": 3,
            "input": "single",
            "prompt": "Verb be",
            "options": [
              "Are they ready?",
              "Do they are ready?"
            ],
            "answer": 0
          },
          {
            "id": "item-4",
            "number": 4,
            "input": "single",
            "prompt": "Modal can",
            "options": [
              "Can Leo drive?",
              "Does Leo can drive?"
            ],
            "answer": 0
          }
        ],
        "hideAnswersOnError": true,
        "difficulty": "Easy"
      },
      {
        "type": "exercise",
        "id": "q-grammar-medium",
        "title": "2 · Fill in the auxiliary",
        "instructions": "Write do, does, did or is.",
        "items": [
          {
            "id": "item-1",
            "number": 1,
            "input": "gaps",
            "segments": [
              "",
              " your friends live nearby?"
            ],
            "answers": [
              "Do"
            ]
          },
          {
            "id": "item-2",
            "number": 2,
            "input": "gaps",
            "segments": [
              "Where ",
              " your cousin work?"
            ],
            "answers": [
              "does"
            ]
          },
          {
            "id": "item-3",
            "number": 3,
            "input": "gaps",
            "segments": [
              "What ",
              " you buy yesterday?"
            ],
            "answers": [
              "did"
            ]
          },
          {
            "id": "item-4",
            "number": 4,
            "input": "gaps",
            "segments": [
              "",
              " Ella late this morning?"
            ],
            "answers": [
              "Is"
            ]
          }
        ],
        "hideAnswersOnError": true,
        "difficulty": "Medium"
      },
      {
        "type": "exercise",
        "id": "q-grammar-advanced",
        "title": "3 · Correct the mistake",
        "instructions": "Rewrite the full question correctly.",
        "items": [
          {
            "id": "item-1",
            "number": 1,
            "input": "text",
            "prompt": "Where he does live?",
            "answer": "Where does he live?"
          },
          {
            "id": "item-2",
            "number": 2,
            "input": "text",
            "prompt": "Did you saw the message?",
            "answer": "Did you see the message?"
          },
          {
            "id": "item-3",
            "number": 3,
            "input": "text",
            "prompt": "How many brothers you have?",
            "answer": "How many brothers do you have?"
          },
          {
            "id": "item-4",
            "number": 4,
            "input": "text",
            "prompt": "Does Nina is from Ufa?",
            "answer": "Is Nina from Ufa?"
          }
        ],
        "hideAnswersOnError": true,
        "difficulty": "Hard"
      },
      {
        "type": "exercise",
        "id": "q-grammar-challenge",
        "title": "4 · Build your own questions",
        "instructions": "Write the whole question using the prompts.",
        "items": [
          {
            "id": "item-1",
            "number": 1,
            "input": "text",
            "prompt": "your parents / be / at work / yesterday?",
            "answer": "Were your parents at work yesterday?"
          },
          {
            "id": "item-2",
            "number": 2,
            "input": "text",
            "prompt": "what / Mark / usually / do / on Sundays?",
            "answer": "What does Mark usually do on Sundays?"
          },
          {
            "id": "item-3",
            "number": 3,
            "input": "text",
            "prompt": "why / you / cancel / the meeting / last week?",
            "answer": "Why did you cancel the meeting last week?"
          },
          {
            "id": "item-4",
            "number": 4,
            "input": "text",
            "prompt": "who / send / you / the invitation? (Past Simple, ask about the sender)",
            "answer": "Who sent you the invitation?"
          }
        ],
        "hideAnswersOnError": true,
        "difficulty": "Challenge"
      }
    ]
  },
  {
    "id": "grammar-relative-clauses-1",
    "order": 2,
    "title": "Relative clauses (1) · Who / which / that",
    "level": "",
    "status": "available",
    "linkedLessonId": "lesson-1",
    "page": "grammar-topic.html?id=grammar-relative-clauses-1",
    "lockOnPass": true,
    "revealAnswersOnError": false,
    "explanation": "Как соединять два предложения и уточнять, о каком человеке или предмете идёт речь.",
    "studyGuide": {
      "eyebrow": "GRAMMAR · MURPHY-STYLE EXPLANATION",
      "intro": "Defining relative clause добавляет необходимую информацию к существительному: помогает понять, о каком именно человеке или предмете идёт речь. В этой теме речь о who / which / that в роли подлежащего придаточного.",
      "promise": "Научись правильно выбирать who / which / that, соединять предложения без повторного he / she / it и согласовывать глагол.",
      "sections": [
        {
          "id": "grammar-section-01",
          "number": "01",
          "title": "Зачем нужно relative clause",
          "kicker": "Identify a person or thing",
          "intro": "Сравни два отдельных предложения с одним. Придаточное следует сразу после слова, которое оно определяет.",
          "blocks": [
            {
              "type": "contrast",
              "title": "Два предложения → одно",
              "left": {
                "label": "Отдельно",
                "pattern": "The nurse is my neighbour. She works nights.",
                "meaning": "Повторяется she",
                "examples": [
                  "The nurse is my neighbour.",
                  "She works nights."
                ],
                "note": ""
              },
              "right": {
                "label": "Вместе",
                "pattern": "The nurse who works nights is my neighbour.",
                "meaning": "who относится к nurse",
                "examples": [
                  "The nurse who works nights is my neighbour."
                ],
                "note": ""
              }
            },
            {
              "type": "syntax",
              "title": "Состав предложения",
              "tokens": [
                {
                  "text": "The nurse",
                  "role": "Человек",
                  "tone": "subject"
                },
                {
                  "text": "who",
                  "role": "Relative pronoun",
                  "tone": "neutral"
                },
                {
                  "text": "works nights",
                  "role": "Информация о человеке",
                  "tone": "verb"
                },
                {
                  "text": "is my neighbour.",
                  "role": "Главная часть",
                  "tone": "neutral"
                }
              ],
              "note": "Порядок важен: relative clause стоит сразу после определяемого слова.",
              "translation": ""
            }
          ]
        },
        {
          "id": "grammar-section-02",
          "number": "02",
          "title": "Who — о людях",
          "kicker": "People",
          "intro": "Используй who, когда относительное местоимение относится к человеку или группе людей.",
          "blocks": [
            {
              "type": "examples",
              "title": "Человек или люди",
              "rows": [
                {
                  "en": "The woman who answered the phone was polite.",
                  "ru": "Женщина, которая ответила на звонок, была вежливой.",
                  "why": "who = the woman; она ответила на звонок."
                },
                {
                  "en": "Students who practise regularly make progress.",
                  "ru": "Ученики, которые регулярно тренируются, делают успехи.",
                  "why": "who = students; глагол в множественном числе."
                }
              ]
            },
            {
              "type": "note",
              "title": "Не who для предмета",
              "text": "Для вещи или места не используй who.",
              "examples": [
                "NOT: a laptop who works → a laptop that works",
                "NOT: a phone who rings → a phone which rings"
              ],
              "tone": "important"
            }
          ]
        },
        {
          "id": "grammar-section-03",
          "number": "03",
          "title": "Which — о вещах и животных",
          "kicker": "Things",
          "intro": "Используй which, если говоришь о предмете, явлении, фильме, книге, приложении и т. п.",
          "blocks": [
            {
              "type": "examples",
              "title": "Вещь или явление",
              "rows": [
                {
                  "en": "I bought a lamp which uses very little electricity.",
                  "ru": "Я купил лампу, которая потребляет мало электричества.",
                  "why": "which относится к lamp."
                },
                {
                  "en": "We watched a film which won several awards.",
                  "ru": "Мы посмотрели фильм, который получил несколько наград.",
                  "why": "which относится к film."
                }
              ]
            },
            {
              "type": "note",
              "title": "Не which для человека",
              "text": "В стандартных определительных придаточных who используется для людей.",
              "examples": [
                "NOT: the man which called → the man who called"
              ],
              "tone": "important"
            }
          ]
        },
        {
          "id": "grammar-section-04",
          "number": "04",
          "title": "That — для людей и вещей",
          "kicker": "Flexible alternative",
          "intro": "В defining relative clauses (без запятых) that может заменять who для людей и which для предметов. Это не означает, что who и which всегда взаимозаменяемы друг с другом.",
          "blocks": [
            {
              "type": "table",
              "title": "Какие варианты допустимы",
              "headers": [
                "Определяемое слово",
                "Основной вариант",
                "Также правильно",
                "Неправильно"
              ],
              "rows": [
                [
                  "Человек",
                  "who",
                  "that",
                  "which"
                ],
                [
                  "Вещь",
                  "which",
                  "that",
                  "who"
                ]
              ],
              "note": ""
            },
            {
              "type": "examples",
              "title": "Два грамматически верных варианта",
              "rows": [
                {
                  "en": "A person who helps others / a person that helps others",
                  "ru": "Человек, который помогает другим.",
                  "why": "Оба варианта подходят в defining clause."
                },
                {
                  "en": "A tool which saves time / a tool that saves time",
                  "ru": "Инструмент, который экономит время.",
                  "why": "Оба варианта подходят в defining clause."
                }
              ]
            }
          ]
        },
        {
          "id": "grammar-section-05",
          "number": "05",
          "title": "Глагол зависит от существительного",
          "kicker": "Subject–verb agreement",
          "intro": "Relative pronoun who / which / that в этих примерах является подлежащим придаточной части. Глагол согласуется с определяемым существительным.",
          "blocks": [
            {
              "type": "table",
              "title": "Число и время",
              "headers": [
                "Определяемое слово",
                "Форма глагола",
                "Предложение"
              ],
              "rows": [
                [
                  "one person",
                  "works",
                  "A person who works remotely…"
                ],
                [
                  "several people",
                  "work",
                  "People who work remotely…"
                ],
                [
                  "one device",
                  "helps",
                  "A device that helps students…"
                ],
                [
                  "past event",
                  "helped",
                  "A person who helped us yesterday…"
                ]
              ],
              "note": ""
            },
            {
              "type": "note",
              "title": "He / she / it не повторяем",
              "text": "Когда who / which / that уже заменяет подлежащее, не добавляй ещё одно.",
              "examples": [
                "NOT: a woman who she works here",
                "YES: a woman who works here"
              ],
              "tone": "remember"
            }
          ]
        },
        {
          "id": "grammar-section-06",
          "number": "06",
          "title": "Когда нельзя убрать who / which / that",
          "kicker": "Subject vs object",
          "intro": "В этой теме who / which / that выполняет функцию подлежащего внутри relative clause: именно человек/вещь совершает действие. В таком случае слово нельзя пропустить.",
          "blocks": [
            {
              "type": "contrast",
              "title": "Сравнение двух ролей",
              "left": {
                "label": "SUBJECT: нельзя убрать",
                "pattern": "A woman who lives next door",
                "meaning": "who выполняет действие lives",
                "examples": [
                  "The woman who lives next door is a doctor."
                ],
                "note": "В этой теме закрепляем SUBJECT relative clauses."
              },
              "right": {
                "label": "OBJECT: иногда можно убрать",
                "pattern": "A woman (who) I met yesterday",
                "meaning": "I выполняет действие met, woman — объект",
                "examples": [
                  "The woman (who) I met yesterday is a doctor."
                ],
                "note": "Случаи object relative clauses изучаются подробнее отдельно."
              }
            },
            {
              "type": "note",
              "title": "Вопрос для самопроверки",
              "text": "Кто выполняет действие непосредственно после relative pronoun? Если это сам человек/предмет, которого ты описываешь, относительное местоимение обычно обязательно.",
              "examples": [],
              "tone": "important"
            }
          ]
        },
        {
          "id": "grammar-section-07",
          "number": "07",
          "title": "Как избежать ошибок",
          "kicker": "Final checklist",
          "intro": "После того как объединил предложения, проверь место придаточного и его грамматическую структуру.",
          "blocks": [
            {
              "type": "decision",
              "title": "Четыре шага",
              "steps": [
                {
                  "if": "О каком существительном уточняю информацию?",
                  "then": "Поставь relative clause сразу после него.",
                  "example": "A chef … works here."
                },
                {
                  "if": "Это человек?",
                  "then": "Выбери who или that.",
                  "example": "A chef who knows French …"
                },
                {
                  "if": "Это предмет, фильм, книга или устройство?",
                  "then": "Выбери which или that.",
                  "example": "A device which saves time …"
                },
                {
                  "if": "Согласован ли глагол с определяемым словом?",
                  "then": "singular works, plural work; не повторяй he / she / it.",
                  "example": "People who work… / A person who works…"
                }
              ]
            },
            {
              "type": "note",
              "title": "Defining clauses без запятых",
              "text": "В приведённых ограничительных придаточных запятые не используются. При добавлении необязательной информации с запятыми действуют другие правила, а that обычно не подходит.",
              "examples": [
                "YES: The students who arrived early got seats.",
                "NOT: The students, that arrived early, got seats."
              ],
              "tone": "remember"
            }
          ]
        }
      ]
    },
    "exercises": [
      {
        "type": "exercise",
        "id": "relative-easy",
        "title": "1 · People or things?",
        "instructions": "Choose the pronoun who or which.",
        "items": [
          {
            "id": "item-1",
            "number": 1,
            "input": "single",
            "prompt": "A cyclist … wears a helmet",
            "options": [
              "who",
              "which"
            ],
            "answer": 0
          },
          {
            "id": "item-2",
            "number": 2,
            "input": "single",
            "prompt": "A phone … takes clear photos",
            "options": [
              "who",
              "which"
            ],
            "answer": 1
          },
          {
            "id": "item-3",
            "number": 3,
            "input": "single",
            "prompt": "A neighbour … feeds our cat",
            "options": [
              "who",
              "which"
            ],
            "answer": 0
          },
          {
            "id": "item-4",
            "number": 4,
            "input": "single",
            "prompt": "An app … tracks your spending",
            "options": [
              "who",
              "which"
            ],
            "answer": 1
          }
        ],
        "hideAnswersOnError": true,
        "difficulty": "Easy"
      },
      {
        "type": "exercise",
        "id": "relative-medium",
        "title": "2 · Complete the clauses",
        "instructions": "Write who or which. Do not use that in this exercise.",
        "items": [
          {
            "id": "item-1",
            "number": 1,
            "input": "gaps",
            "segments": [
              "The woman ",
              " answered was very helpful."
            ],
            "answers": [
              "who"
            ]
          },
          {
            "id": "item-2",
            "number": 2,
            "input": "gaps",
            "segments": [
              "I found a book ",
              " explains the topic clearly."
            ],
            "answers": [
              "which"
            ]
          },
          {
            "id": "item-3",
            "number": 3,
            "input": "gaps",
            "segments": [
              "The actors ",
              " live nearby are friendly."
            ],
            "answers": [
              "who"
            ]
          },
          {
            "id": "item-4",
            "number": 4,
            "input": "gaps",
            "segments": [
              "This is the camera ",
              " belongs to Ben."
            ],
            "answers": [
              "which"
            ]
          }
        ],
        "hideAnswersOnError": true,
        "difficulty": "Medium"
      },
      {
        "type": "exercise",
        "id": "relative-advanced",
        "title": "3 · Fix the relative clause",
        "instructions": "Rewrite the entire sentence correctly.",
        "items": [
          {
            "id": "item-1",
            "number": 1,
            "input": "text",
            "prompt": "I know a man which speaks Italian.",
            "answer": "I know a man who speaks Italian.",
            "acceptedAnswers": [
              "I know a man who speaks Italian.",
              "I know a man that speaks Italian."
            ]
          },
          {
            "id": "item-2",
            "number": 2,
            "input": "text",
            "prompt": "I bought a laptop who has a long battery life.",
            "answer": "I bought a laptop which has a long battery life.",
            "acceptedAnswers": [
              "I bought a laptop which has a long battery life.",
              "I bought a laptop that has a long battery life."
            ]
          },
          {
            "id": "item-3",
            "number": 3,
            "input": "text",
            "prompt": "The students who studies online are here.",
            "answer": "The students who study online are here.",
            "acceptedAnswers": [
              "The students who study online are here.",
              "The students that study online are here."
            ]
          },
          {
            "id": "item-4",
            "number": 4,
            "input": "text",
            "prompt": "The guide who she met us was friendly.",
            "answer": "The guide who met us was friendly.",
            "acceptedAnswers": [
              "The guide who met us was friendly.",
              "The guide that met us was friendly."
            ]
          }
        ],
        "hideAnswersOnError": true,
        "difficulty": "Hard"
      },
      {
        "type": "exercise",
        "id": "relative-challenge",
        "title": "4 · Combine the sentences",
        "instructions": "Make one sentence. Use a subject relative clause and keep both pieces of information.",
        "items": [
          {
            "id": "item-1",
            "number": 1,
            "input": "text",
            "prompt": "I bought a desk. It fits in a small room.",
            "answer": "I bought a desk which fits in a small room.",
            "acceptedAnswers": [
              "I bought a desk which fits in a small room.",
              "I bought a desk that fits in a small room."
            ]
          },
          {
            "id": "item-2",
            "number": 2,
            "input": "text",
            "prompt": "A doctor helped me. She works at the local hospital.",
            "answer": "A doctor who works at the local hospital helped me.",
            "acceptedAnswers": [
              "A doctor who works at the local hospital helped me.",
              "A doctor that works at the local hospital helped me."
            ]
          },
          {
            "id": "item-3",
            "number": 3,
            "input": "text",
            "prompt": "The visitors arrived early. They had booked online.",
            "answer": "The visitors who had booked online arrived early.",
            "acceptedAnswers": [
              "The visitors who had booked online arrived early.",
              "The visitors that had booked online arrived early."
            ]
          },
          {
            "id": "item-4",
            "number": 4,
            "input": "text",
            "prompt": "We saw a film. It tells the story of an explorer.",
            "answer": "We saw a film which tells the story of an explorer.",
            "acceptedAnswers": [
              "We saw a film which tells the story of an explorer.",
              "We saw a film that tells the story of an explorer."
            ]
          }
        ],
        "hideAnswersOnError": true,
        "difficulty": "Challenge"
      }
    ]
  }
];
