const comBorda = { 'border': 'solid 8px orange' }
const semBorda = { 'border': 'none' }

$('a[href="#link3"]').parent().css(comBorda)
    .css(semBorda)

$('li:last').prev().css(comBorda)
    .css(semBorda)

$('a[href="#link3"]').parent().next().css(comBorda)
    .css(semBorda)

$('a[href="#link1"]').parents().css(comBorda)
    .css(semBorda)

$('a[href="#link1"]').parentsUntil($('body')).css(comBorda)
    .css(semBorda)

$('main').children().css(comBorda)    
    .css(semBorda)

$('body').find('a').css(comBorda)
    .css(semBorda)

const elementoDOM = document.getElementsByClassName('menu')
$(elementoDOM).css(comBorda)   

$('main').children().each((i, e) => $(e).css(comBorda)
    .css(semBorda))

$('li').each((i, e) => {
    $(e).css(comBorda)
})
