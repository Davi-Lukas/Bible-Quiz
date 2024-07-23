document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('name') !== null) {
        document.getElementById('name').value = localStorage.getItem('name')
    }

    document.getElementById('form').addEventListener('submit', (event) => {
        event.preventDefault()
        const usernameInput = document.getElementById('name')
        const username = usernameInput.value.trim() // Remove espaços em branco no início e no final
        const invalidName = document.getElementById('error')
        // Em cima, o nome do usuário, embaixo, quantidade de questões
        const selectedDifficulty = document.querySelector('input[type="radio"]:checked')
        const invalidSelectedDifficulty = document.getElementById('error2')
    
        function problemsUserName(name, problem) {
            invalidName.style.display = 'block'
            document.getElementById('username').textContent = name
            document.getElementById('problem').textContent = problem
            usernameInput.focus()
        }
        
        // Verifica se o nome atende aos critérios
        if (username.length > 0) {
            if (username.length <= 20) {
                if (/^[a-zA-ZÀ-ú0-9 ]+$/.test(username)) {
                    // Verifica se alguma o opção foi marcada
                    if (selectedDifficulty) {
                        localStorage.setItem('name', username)
                        localStorage.setItem('difficulty', selectedDifficulty.value)
                        window.location.href = '../quiz.html'
                    } else {
                        invalidSelectedDifficulty.style.display = 'block'
                    }
                } else {
                    problemsUserName(username, 'o nome deve conter apenas letras, números ou letras acentuadas')
                }
            } else {
                problemsUserName('fornecido', 'o nome deve ter no máximo 20 caracteres')
            }
        } else {
            problemsUserName(username, 'por favor, coloque seu nome ou apelido')
        }
    })
})
