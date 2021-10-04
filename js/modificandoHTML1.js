//Conteudo 1
$('#conteudo1').append('<p>1</p>')

//Conteudo 2
const elementos = [
    $('<li></li>').append('ARROZ'),
    $('<li>').append('FEIJAO'),
    $('<li>').append('CARNE')
]

const lista = $('<ul><li>Sorvete</li></ul>').prepend(elementos)
$('#conteudo2').append(lista)

//Conteudo 3
$('#conteudo3').append('<h1>1</h1>', '<h1>2</h1>')
    .prepend('<h1>0</h1>')
$('#conteudo3').html('<h1>123</h1>')    
$('#conteudo3').text('<h1>123</h1>')

//Alterando todos

$('div[id]').html('<strong>TODOS!</strong>')