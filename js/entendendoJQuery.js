//5000 milisegundos
$('div').hide(5000).show(5000).fadeOut(5000)
console.log($(  'div').get(0))
console.log($.isEmptyObject({}))//função utilitaria
console.log(jQuery.inArray(3, [1,2,3]))

$.fn.fundoVerde = function(){
    this.css('background-color', 'green')
    return this
}

$('body').fundoVerde().hide(1000)