function Relogio(elemento){
    const horaCerta = $('<p>').html('0')
    const botaoMenos = $('<button>').html('-')
    const botaoMais = $('<button>').html('+')

    const $elemento = $(elemento)
    $elemento.append(horaCerta, botaoMenos, botaoMais)

    const getIntervaloAtual = 
        () => parseInt($elemento.attr('wm-relogio'))

    let temporizador = null
    const iniciar = () =>{
        if(temporizador) clearInterval(temporizador)
        temporizador = setInterval(()=>{
            horaCerta.html(new Date().toLocaleString('pt-BR'))
        }, getIntervaloAtual())
    }

    const alterarIntervalo = delta => {
        const novo = Math.max(getIntervaloAtual() + delta, 1000)
        $elemento.attr('wm-relogio', novo)
        iniciar()
    }

    botaoMenos.click(e => alterarIntervalo(+1000))
    botaoMais.click(e => alterarIntervalo(-1000))
    iniciar()
}

$('[wm-relogio]').each((i, e) => new Relogio(e))

// $('[wm-relogio]').attr('opa') //LER O ATRIBUTO
// $('[wm-relogio]').attr('opa', 3) //ALTERAR OU INCLUIR NOVO ATRIBUTO
$('[wm-relogio]').attr({ opa:1, novo: true })
$('[wm-relogio]').removeAttr('opa').removeAttr('novo')