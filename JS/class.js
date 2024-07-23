export class Quiz {
    quiz = [
        { question: 'Quantos dias Lázaro, irmão de Marta e Maria, ficou sepultado até Jesus ressuscitá-lo?', answer: '4', options: ['3', '4', '5', '6'] },
        { question: 'Em qual cidade Jesus nasceu?', answer: 'Belém', options: ['Belém', 'Belem', 'Belen', 'Belén'] },
        { question: 'Quantos discípulos principais Jesus escolheu?', answer: '12', options: ['10', '11', '12', '13'] },
        { question: 'Quem não _______ de novo, não pode entrar e nem ver o reino de Deus.', answer: 'nascer', options: ['nascer', 'crer', 'acreditar', 'ouvir'] },
        { question: 'Quem traiu Jesus por 30 moedas de pratas?', answer: 'Judas Iscariotes', options: ['Judas', 'Judas Iscariotes', 'Simão Pedro', 'Pedro'] },
        { question: 'Quem negou Jesus 3 vezes antes do galo cantar?', answer: 'Simão Pedro', options: ['Judas', 'Judas Iscariotes', 'Simão Pedro', 'Pedro'] },
        { question: 'Qual é o "capítulo do amor" em 1 Coríntios?', answer: 'Capítulo 13', options: ['Capítulo 13', 'Capítulo 14', 'Capítulo 11', 'Capítulo 12'] },
        { question: 'Qual carta de Paulo discute detalhadamente a justificação pela fé?', answer: 'Romanos', options: ['Gálatas', 'Éfesios', 'Romanos', 'Filipenses'] },
        { question: 'Qual parábola Jesus contou para ilustrar a necessidade de estar sempre preparado para o Reino de Deus?', answer: 'Dez Virgens', options: ['Dez Virgens', 'Joio e trigo', 'Do semeador', 'Da rocha'] },
        { question: 'Jesus ressuscitou no __ dia.', answer: '3º', options: ['1º', '2º', '3º', '4º'] },
        { question: 'Em qual capítulo Paulo discute a ressurreição dos mortos com detalhes em 1 Corítios?', answer: 'Capítulo 15', options: ['Capítulo 13', 'Capítulo 14', 'Capítulo 15', 'Capítulo 12'] },
        { question: 'Qual discípulo era cobrador de impostos antes de seguir Jesus?', answer: 'Mateus', options: ['Mateus', 'Lucas', 'Simão Pedro', 'Tomé'] },
        { question: 'O que significa a palavra \'Apocalipse\'?', answer: 'Revelação', options: ['Revelação', 'Final', 'Aperecimento', 'Destruição'] },
        { question: 'Qual é a epístola que aconselha a \'orar sem cessar\'?', answer: '1 Tessalonicenses 5:17', options: ['1 Tessalonicenses 5:17', '2 Tessalonicenses 5:17', '1 Tessalonicenses 6:17', '2 Tessalonicenses 6:17'] },
        { question: 'Quantos anciãos se sentam ao redor do trono de Deus no livro de Apocalipse?', answer: '24', options: ['24', '21', '22', '23'] },
        { question: 'Quem teve uma visão de um homem da Macedônia pedindo ajuda e decidiu ir para lá?', answer: 'Paulo', options: ['Paulo', 'Simão Pedro', 'João', 'Lucas'] },
        { question: 'Qual foi a primeira pessoa a ver Jesus ressuscitado?', answer: 'Maria Madalena', options: ['Maria Madalena', 'Maria', 'Simão Pedro', 'José'] },
        { question: 'Qual discípulo era conhecido por duvidar da ressurreição de Jesus até ver as marcas dos pregos?', answer: 'Tomé', options: ['Tomé', 'Simão Pedro', 'Mateus', 'Lucas'] },
        { question: 'Qual é a única parábola que Jesus explicou detalhadamente aos discípulos?', answer: 'Do semeador', options: ['Do semeador', 'Da rocha', 'Joio e trigo', 'Dez virgens'] },
        { question: 'Qual foi o sinal que Judas Iscariotes usou para identificar Jesus aos soldados no Getsêmani?', answer: 'Um beijo', options: ['Um beijo', 'Um abraço', 'Uma fala', 'Um assobio'] },
        { question: 'Qual foi a escrita na tábua pregada na cruz acima da cabeça  de Jesus?', answer: 'INRI', options: ['INRI', 'ENRI', 'INRE', 'ENRE'] },
        { question: 'Quais foram os 3 discípulos que viram a transfiguração?', answer: 'Pedro/Tiago/João', options: ['Pedro/Tiago/João', 'Pedro/Tiago/Lucas', 'Tomé/Tiago/João', 'Pedro/Mateus/João'] },
        { question: 'Quem foi o primeiro mártir cristão?', answer: 'Estêvão', options: ['Estêvão', 'Simão Pedro', 'Paulo', 'Lucas'] },
        { question: 'Qual apóstolo escreveu mais livros no Novo Testamento?', answer: 'Paulo', options: ['Paulo', 'Simão Pedro', 'Tomé', 'Lucas'] },
        { question: 'Qual epístola fala sobre a armadura de Deus?', answer: 'Efésios', options: ['Efésios', 'Romanos', 'Filipenses', 'Gálatas'] },
        { question: 'Quem morreu na cruz por nós?', answer: 'Jesus', options: ['Jesus', 'José', 'Josué', 'Jacó'] },
        { question: 'Qual parábola do filho que volta para os braços do pai?', answer: 'Filho pródigo', options: ['Filho pródigo', 'Pai que perdoa', 'Filho arrenpedido', 'Bom samaritano'] },
        { question: 'Deus é ____.', answer: 'amor', options: ['amor', 'invisível', 'impiedoso', 'injusto'] },
        { question: 'Jesus disse para \'amarmos o _______\'.', answer: 'próximo', options: ['próximo', 'dinheiro', 'pecado', 'mundo'] },
        { question: 'A Bíblia é...', answer: 'a Palavra de Deus', options: ['a Palavra de Deus', 'uma revista', 'um dicionário', 'um livro qualquer'] },
        { question: 'Quem é o Reis dos reis, Senhor dos senhores?', answer: 'Jesus', options: ['Jesus', 'A Bíbila', 'Os anjos', 'A nova terra'] },
        { question: 'Deus ama a todos, incluindo cristãos e ímpios?', answer: 'Verdade', options: ['Verdade', 'Mentira', 'Ama apenas os cristãos', 'Ama apenas os ímpios'] }
    ]
    
    correctQuestions = 0
    remainQuestions = null
    correctQuestions = 0
    points = 0
    difficulty = localStorage.getItem('difficulty')

    #shuffleArray(array) { // Serve para embaralhar os elementos de um array
        let currentIndex = array.length, temporaryValue, randomIndex

        while (currentIndex !== 0) {
            randomIndex = Math.floor(Math.random() * currentIndex)
            currentIndex -= 1
            temporaryValue = array[currentIndex]
            array[currentIndex] = array[randomIndex]
            array[randomIndex] = temporaryValue
        }
        return array
    }

    saveInTheLocalStorage(reason, length, highPoints) {
        localStorage.setItem('qtdCorrects', this.correctQuestions)
        localStorage.setItem('qtdIncorrects', length - this.correctQuestions)
        localStorage.setItem('points', this.points)
        localStorage.setItem('reason', reason)
        localStorage.setItem('highPoints', highPoints)
        localStorage.setItem('remainQuestions', this.remainQuestions)
    }

    constructor() {
        this.#shuffleArray(this.quiz)

        this.quiz.forEach((value, index) => {
            this.#shuffleArray(this.quiz[index].options)
        })
    }
}
