import { Quiz } from "./class.js"

document.addEventListener('DOMContentLoaded', () => {
    const quiz = new Quiz
    let highPoints = localStorage.getItem('highPoints')
    let qtdQuestions = null
    const difficulty = quiz.difficulty
    let deleteQuestions = null
    if (difficulty === 'Fácil') {
        qtdQuestions = Math.floor(quiz.quiz.length / 3)
    } else if (difficulty === 'Médio') {
        qtdQuestions = Math.floor(quiz.quiz.length / 3) * 2
    } else {
        qtdQuestions = quiz.quiz.length
    }

    if (highPoints === null) highPoints = 0
    else highPoints = +highPoints

    quiz.remainQuestions = qtdQuestions
    
    deleteQuestions = quiz.quiz.length - qtdQuestions
    for (let i = 0; i < deleteQuestions; i++) {
        quiz.quiz.pop()
    }

    function toGiveUp() {
        const buttonContainer = document.getElementById('exit')
        const button = document.createElement('button')
        button.textContent = 'X'
        button.classList.add('exit')
        button.addEventListener('click', () => {
            const Confirm = confirm(`Você deseja realmente desistir? Apenas ${quiz.quiz.length} perguntas restantes.`)
            if (Confirm) {
                quiz.saveInTheLocalStorage('withdrawal', qtdQuestions, highPoints)
                window.location.href = './final.html'
            }
        })
        buttonContainer.appendChild(button)
    }

    function loadQuestion() { // Serve para carregar a questão
        const currentQuestion = quiz.quiz.shift()
        if (currentQuestion !== undefined) {
            document.getElementById('question').textContent = currentQuestion.question
        } else {
            quiz.saveInTheLocalStorage('answered', qtdQuestions, highPoints)
            window.location.href = './final.html'
            return // Só para ter certeza, ele vai sair da função
        }
        
        const optionsContainer = document.getElementById('options')
        optionsContainer.innerHTML = ''
        currentQuestion.options.forEach((option) => {
            const button = document.createElement('button')
            button.textContent = option
            button.classList.add('options')
            button.addEventListener('click', () => checkAnswer(button, option, currentQuestion))
            optionsContainer.appendChild(button)
        })
        document.getElementById('result').textContent = `Questões restantes: ${quiz.remainQuestions - 1}.`
    }

    function checkAnswer(button, selectedOption, currentQuestion) { // Checa se a resposta está correta ou errada
        const correctAnswer = currentQuestion.answer
        const buttons = document.querySelectorAll('#options button')
        quiz.remainQuestions -= 1

        if (selectedOption === correctAnswer) {
            quiz.points += 10
            if (quiz.points > highPoints) {
                highPoints += 10
            }
            // Toca o som de acerto
            const correctSound = document.getElementById('correct-sound')
            correctSound.play()
            button.classList.add('correct')
            document.getElementById('result').textContent = 'Correto!'
            quiz.correctQuestions++
            setTimeout(loadQuestion, 1000)
        } else {
            // Toca o som de erro
            const errorSound = document.getElementById('error-sound')
            errorSound.play()

            button.classList.add('incorrect')
            
            document.getElementById('result').textContent = `Errado! A resposta correta era: ${correctAnswer}.`

            buttons.forEach((btn) => btn.disabled = true)

            // Destacar a resposta correta
            buttons.forEach((btn) => {
                if (btn.textContent === correctAnswer) {
                    btn.classList.add('correct')
                }
            })
            
            setTimeout(loadQuestion, 1000)   
        }
    }
    
    loadQuestion()
    toGiveUp()
})

