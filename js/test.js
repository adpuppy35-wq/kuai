new Vue({
    el: '#app',

    data: {
        letters: ['A', 'B', 'C', 'D'],

        questions: [
            
            {
                id: 1,
                type: 'word',
                question: 'Как будет «спасибо» по-китайски?',
                options: ['谢谢 (xièxie)', '你好 (nǐ hǎo)', '再见 (zàijiàn)', '请 (qǐng)'],
                correct: 0,
                section: 'приветствие и прощание',
                answered: false,
                isCorrect: false,
                selected: null
            },
            {
                id: 2,
                type: 'word',
                question: 'Как будет «посадочный талон» по-китайски?',
                options: ['座位 (zuòwèi)', '登机牌 (dēngjīpái)', '安全带 (ānquándài)', '行李 (xíngli)'],
                correct: 1,
                section: 'в аэропорту',
                answered: false,
                isCorrect: false,
                selected: null
            },
            {
                id: 3,
                type: 'word',
                question: 'Как будет «пристегните ремень» по-китайски?',
                options: ['请系好安全带 (qǐng jì hǎo ānquándài)', '请让一下 (qǐng ràng yíxià)', '请稍等 (qǐng shāo děng)', '请出示 (qǐng chūshì)'],
                correct: 0,
                section: 'салон и оборудование',
                answered: false,
                isCorrect: false,
                selected: null
            },

            {
                id: 4,
                type: 'word',
                question: 'Что означает «转机 (zhuǎnjī)»?',
                options: ['пересадка', 'прилёт', 'вылет', 'задержка'],
                correct: 0,
                section: 'в аэропорту',
                answered: false,
                isCorrect: false,
                selected: null
            },
            {
                id: 5,
                type: 'word',
                question: 'Что означает «到达时间 (dàodá shíjiān)»?',
                options: ['время вылета', 'время прилёта', 'время посадки', 'время регистрации'],
                correct: 1,
                section: 'в аэропорту',
                answered: false,
                isCorrect: false,
                selected: null
            },


            {
                id: 6,
                type: 'fill',
                question: 'Вставьте слово: «请把______放好» (пожалуйста, поставьте багаж как следует).',
                options: ['行李 (xíngli)', '饮料 (yǐnliào)', '座位 (zuòwèi)', '安全带 (ānquándài)'],
                correct: 0,
                section: 'салон и оборудование',
                answered: false,
                isCorrect: false,
                selected: null
            },
            {
                id: 7,
                type: 'fill',
                question: 'Вставьте слово: «请问您需要什么______?» (какой напиток вы хотите?).',
                options: ['餐食 (cānshí)', '饮料 (yǐnliào)', '行李 (xíngli)', '报纸 (bàozhǐ)'],
                correct: 1,
                section: 'основное обслуживание',
                answered: false,
                isCorrect: false,
                selected: null
            },
            {
                id: 8,
                type: 'fill',
                question: 'Вставьте слово: «我该怎么去我的______» (как пройти в мой номер?).',
                options: ['房间 (fángjiān)', '机票 (jīpiào)', '座位 (zuòwèi)', '桌子 (zhuōzi)'],
                correct: 0,
                section: 'в отеле',
                answered: false,
                isCorrect: false,
                selected: null
            },
            {
                id: 9,
                type: 'fill',
                question: 'Вставьте слово: «请问______在哪里?» (извините, где туалет?).',
                options: ['出口 (chūkǒu)', '洗手间 (xǐshǒujiān)', '餐厅 (cāntīng)', '登机口 (dēngjīkǒu)'],
                correct: 1,
                section: 'как пройти',
                answered: false,
                isCorrect: false,
                selected: null
            },
            {
                id: 10,
                type: 'fill',
                question: 'Вставьте слово: «请系好______» (пожалуйста, пристегните ремень).',
                options: ['安全带 (ānquándài)', '行李 (xíngli)', '座椅 (zuòyǐ)', '窗户 (chuānghu)'],
                correct: 0,
                section: 'приветствие и прощание',
                answered: false,
                isCorrect: false,
                selected: null
            }
        ]
    },


    methods: {
        checkAnswer: function (q, index) {
            if (q.answered) return;
            q.answered = true;
            q.selected = index;
            q.isCorrect = (index === q.correct);
        },

        optionClass: function (q, index) {
            if (!q.answered) return '';
            if (index === q.correct) return 'option-correct';
            if (index === q.selected) return 'option-wrong';
            return '';
        },

        resetTest: function () {
            this.questions.forEach(function (q) {
                q.answered = false;
                q.isCorrect = false;
                q.selected = null;
            });
        }
    }
});