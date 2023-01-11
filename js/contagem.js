function contar(){
    
    var inicio = document.getElementById('txtinicio')
    var fim = document.getElementById('txtfim')
    var passo = document.getElementById('txtpasso')
    var res = document.getElementById('res')
 if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
    window.alert('[ERRO] Verifique os dados')
 }else{
    res.innerHTML =  'Contando </br>'
    var i = Number(inicio.value)
    var f = Number(fim.value)
    var p = Number(passo.value)
    if(p<=0){ 
        window.alert('Passo Inválido, cosiderando com 1 ')
        p = 1 
    }
if(i < f) { // contagem crescente
    for(var c = i; c <= f; c += p){
        res.innerHTML += ` ${c} \u{1F449}`
    }
    res.innerHTML += `\u{1f3c1}`
    }else { // contagem Decrescente
        for(var c = i; c >= f; c -= p){
            res.innerHTML += ` ${c} \u{1f449}`
        }
        res.innerHTML += `\u{1f3c1}`
    } 
 }



}
