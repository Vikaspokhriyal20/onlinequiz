
const quizData = [
    {
        question: 'Choose the correct HTML element to define important text',
        options: [
            '<b>',
            '<i>',
            '<strong>',
            '<important>',
        ],
        correct:2,

    },
    {
        question: 'How can you make a numbered list',
        options: [
            '<dl>',
            '<ol>',
            '<list>',
            '<ul>',
        ],
        correct:1,

    },
    {
        question: 'How can you make a bulleted list',
        options: [
            '<ul>',
            '<dl>',
            '<list>',
            '<ol>',
        ],
        correct:0,

    },
    {
        question: 'Which HTML element defined the title of a document',
        options: [
            '<mete>',
            '<body>',
            '<link>',
            '<title>',
        ],
        correct:3,

    },
    {
        question: 'Which input type defines a slider control',
        options: [
          
            '<range>',
            '<slider>',
            '<search>',
            '<controls',
        ],
        correct:0,

    },
]

const answerEle = document.querySelectorAll('.answer');
const [questionElement, option_1, option_2, option_3, option_4] = document.querySelectorAll('#question , #option_1 , #option_2, #option_3, #option_4');

const submitBtn = document.getElementById('submit-btn');
const result = document.getElementById('quiz');

let  currentQuiz = 0;
let score = 0;

const loadQuiz = () => {
    const { question, options } = quizData[currentQuiz];
    console.log(options);
    questionElement.innerText = `${currentQuiz+1}: ${question}`;

    options.forEach((currentOption , index) => (window[`option_${index + 1}`].innerText = currentOption))
}

loadQuiz();

const getSelectedOption = () => {
    let ans_index;
    answerEle.forEach((currentOption, index) => {
        if (currentOption.checked) {
            ans_index = index;
        }
    });
    return ans_index;
}

const unSelectedOption = () => {
    return answerEle.forEach((currentOption) => (currentOption.checked = false));
}

submitBtn.addEventListener('click', () => {
    const selectedOptionIndex = getSelectedOption();
    // console.log(selectedOptionIndex);


    if (selectedOptionIndex===quizData[currentQuiz].correct) {
        score = score + 1;
    }
    currentQuiz++;

    if (currentQuiz < quizData.length) {
        unSelectedOption();
        loadQuiz();
    } else {
        result.innerHTML =
        `
        <h3>Your score 🏆 ${score}/${quizData.length}</h3>
        <p><strong>Congratulations for complate the quiz 🎉🎊</strong></p>
        <button id='reload' onclick='location.reload()'>Reload</button>
        `
    }
        
})

