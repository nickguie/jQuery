$('#feira').addClass('destaque').removeClass('destaque')
$('li').addClass('destaque')
$('[wm-obrigatorio]').removeClass('destaque')
$('li.opcional').removeClass('destaque')
$('div p span').addClass('destaque')

//Exclusivos jQuery
$('li:first').css('border', 'solid 3px yellow')
$('li:odd').css('border', 'solid 10px orange')
$('li:gt(1)').css('border', 'solid 10px white')
$('li:not(:last)').css('border', 'none')
$('li:contains("r")').css('background-color', 'black')

$('form *').hide()
$('form :text').show()
$('form :password').show()
$('form :checkbox').show()
$('form :radio').show()
$('form :file').show()