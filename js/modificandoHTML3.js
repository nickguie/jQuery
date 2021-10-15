// $(document).ready(function(){    
$(function(){
    const pessoas = [
        { nome: 'Ana', nota: 9.1 },
        { nome: 'Bianca', nota: 8.4 },
        { nome: 'Carlos', nota: 7.6 },
        { nome: 'Julia', nota: 9.7 }
    ]

    const linhas = pessoas.map(p => {
        const tdNome = $('<td>').html(p.nome)
        const tdNota = $('<td>').html(p.nota)
        // return $('<tr>').append(tdNome).append(tdNota)
        // return $('<tr>').append([tdNome, tdNota])
        return $('<tr>').append(tdNome, tdNota)
    })

    const tabela = $('<table>').append(linhas)
        .css('border', 'solid 5px')
    $('#conteudo').append(tabela)
})