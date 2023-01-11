function carregar() {

var msg = window.document.getElementById('msg')
var img = window.document.getElementById('img')
var data = new Date ()
var hora = data.getHours()
var min = data.getMinutes()
if (min<=9){
    min = '0'+ min
}
//hora = 8
//hora = 15
msg.innerHTML = `Agora São ${hora}:${min} horas.`
//hora = 8
if (hora >= 0 && hora < 12){
    // Good Morning
    img.src = './img-hr/_manha.png'
    document.body.style.background = '#fcae97'

}else if (hora >= 12 && hora <= 18){
    //Good Afternoon
    img.src = './img-hr/_tarde.png'
    document.body.style.background = '#ff9a02'

}else {
    // Good Evering 
    img.src = './img-hr/_noite.png'
    document.body.style.background = '#515154' 
}
}
