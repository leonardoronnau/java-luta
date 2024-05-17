let log = new Log(document.querySelector('.log'))

// aqui eles selecionam qual seria o nome de cada lutado

let char = new knight ('leonardo')
let monster = new bigmonster()

// aqui ele  indentifica quem é cada um dos 2 personagens

const stage = new Stage(
    char,
    monster,
    document.querySelector('#char'),
    document.querySelector('#monster'),
    log
    
)

stage.start()