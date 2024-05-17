class character {

    _life = 1
    maxlife = 1
    attack = 0
    defense = 0
    constructor(name){
        this.name = name
    }


    get life() {
        return this._life
    }

    set life(newlife) {
        this._life = newlife < 0 ? 0 : newlife
    }
}

class knight extends character {
    constructor (name) {
        super(name)
        this.life = 100
        this.attack = 10
        this.defense = 8
        this.maxlife = this.life
    }
}


class sorcerer extends character {
    constructor(name) {
        super(name)
        this.life = 80
        this.attack = 15
        this.defense = 3
        this.maxlife = this.life
    }
}


class littlemonster extends character {
    constructor () {
        super('little Monster')
        this.life = 40
        this.attack = 4
        this.defense = 4
        this.maxlife = this.life
    }

}


class bigmonster extends character {
    constructor() {
        super('BIG monster')
         this.life = 120
         this.attack = 16
         this.defense = 6
         this.maxlife = this.life
    }
}


 class  Stage {
    constructor(fighter1, fighter2, fighter1el, fighter2el, logObject) {
        this.fighter1 = fighter1
        this.fighter2 = fighter2
        this.fighter1el = fighter1el
        this.fighter2el = fighter2el
        this.log = logObject
    }

     start() {
        this.update()
        // evento do botao de atacar
        this.fighter1el.querySelector('.attackButton').addEventListener('click',() => this.doAttack(this.fighter1,this.fighter2))
        this.fighter2el.querySelector('.attackButton').addEventListener('click',() => this.doAttack(this.fighter2,this.fighter1))
     }

     update() {

        // lembrar de colocar  a % na style, pois se não não vai descer a % na barra
        // fighter 1
        this.fighter1el.querySelector('.name').innerHTML = `${this.fighter1.name} - ${this.fighter1.life.toFixed(1)} HP`
        let f1Pct = (this.fighter1.life /  this.fighter1.maxlife) * 100 
        this.fighter1el.querySelector('.bar').style.width = `${f1Pct}%`
        //fighter 2 
        this.fighter2el.querySelector('.name').innerHTML = `${this.fighter2.name} - ${this.fighter2.life.toFixed(1)} HP`
        let f2Pct = (this.fighter2.life /  this.fighter2.maxlife) * 100 
        this.fighter2el.querySelector('.bar').style.width = `${f2Pct}%`
     }


doAttack(attacking, attacked) {
     if(attacking.life <= 0 || attacked.life <=0) {
        this.log.addmessage(`atacando cachorro morto`);
        return
     }
     // esse valor é para determinar uma  força aleatoria essa força aleatoria vai ser multiplicada pelo dano do atack do personagem
     let attackFactor = (Math.random()*2).toFixed(2)
     let defenseFactor = (Math.random()*2).toFixed(2)

     let actualDefense = attacked.defense * defenseFactor
     let actualAttack = attacking.attack * attackFactor
     

     if (actualAttack > actualDefense) {
        attacked.life -= actualAttack
        this.log.addmessage(`${attacking.name} causou ${actualAttack.toFixed(2)} de dano em ${attacked.name}`)

     } else {
        this.log.addmessage(`${attacked.name} conseguiu defender...`)
     }

    this.update()
}
}


 class Log {
    list = []
constructor(listEl){
    this.listEl = listEl
}
    addmessage(msg) {
        this.list.push(msg)
        this.render()
    }
    render() {
        this.listEl.innerHTML = ''
        for (let i in this.list) {
            this.listEl.innerHTML += `<li> ${this.list[i] }</li>`
        }
    }

 }