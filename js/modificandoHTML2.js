$('#div1').append(', 2')
$('#div1').prepend('0, ')

$('<span>, 3</span>').appendTo('#div1')
$('<span>-1, </span>').prependTo('#div1')

$('#div2').before('<p>antes 2</p>')
$('#div2').after('<p>depois 2</p>')

$('<p>Antes 3</p>').insertBefore('#div3')
$('<p>Depois 3</p>').insertAfter('#div3')

// $('p.numero').wrap('<div>')
$('p.numero').wrapAll('<div id="div4">')
$("#div4").empty()
$('#div3, #div4').prev().remove()

// $('<div>Substituto</div>').replaceAll('body > p')
// $('body > p').replaceWith('<div>Substituto</div>')
$('body > p').replaceWith(function(){
    return $('<div>').html($(this).html()).append('!!')
})