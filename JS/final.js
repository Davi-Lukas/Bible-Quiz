document.addEventListener('DOMContentLoaded', () => {
    function returnToStart() {
        const buttonContainer = document.getElementById('returnToStart')
        const button = document.createElement('button')
        button.textContent = 'Reiniciar jogo'
        button.classList.add('returnToStart')
        button.addEventListener('click', () => {
            window.location.href = 'index.html'
        })
        buttonContainer.appendChild(button)
    }

    function score() {
        const correctAnswers = localStorage.getItem('qtdCorrects')
        const incorrectAnswers = localStorage.getItem('qtdIncorrects')
        const points = localStorage.getItem('points')
        const reason = localStorage.getItem('reason')
        const difficulty = localStorage.getItem('difficulty')
        const remainQuestions = localStorage.getItem('remainQuestions')
        let highPoints = localStorage.getItem('highPoints')

        console.log(correctAnswers, incorrectAnswers, points, reason, difficulty, highPoints, remainQuestions)

        if (!(correctAnswers && incorrectAnswers && points && reason && difficulty && remainQuestions && highPoints)) {
            alert('O nome, questões corretas, questões incorretas, questões restantes, pontos ou dificuldade não encontrada, volte para a página do formulário.')
            window.location.href = 'index.html'
        } else {
            highPoints = +highPoints
            if (reason === 'withdrawal') {
                document.getElementById('remainQuestions').style.display = 'block'
                document.getElementById('RemainQuestions').textContent = remainQuestions
            }
            document.getElementById('qtdCorrects').textContent = correctAnswers 
            document.getElementById('qtdIncorrects').textContent = (incorrectAnswers - remainQuestions)
            document.getElementById('points').textContent = points
            document.getElementById('difficulty').textContent = difficulty
            document.getElementById('highPoints').textContent = highPoints
        }
    }


    returnToStart()
    score()
})
