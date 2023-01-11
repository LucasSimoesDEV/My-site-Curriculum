
    var num = document.getElementById('fnum')
    var lista = document.getElementById('flista')
    var res = document.getElementById('res')
    var valores = []
   function isnumero(n){
    if(Number(n) >= 1 && Number(n) <=100){
        return true
    }else {
        return false
    }
}

    function inlista(n, x){
        if(x.indexOf(Number(n)) != -1){
            return true 
        }else {
            return false
        }
    }


    function adicionar(){
        if(isnumero(num.value) && !inlista(num.value, valores)){
           // let valor = Number(num.value)
           valores.push(Number(num.value))
            let item = document.createElement('option')
            item.text = `Valor ${num.value} adicionado`
            item.value = `lista${num.value}`
            lista.appendChild(item)
            res.innerHTML = ''
            
        }else{ window.alert('Valor inválido')

        }
    num.value = ''
    }
        
        
    
    function finalizar(){
        if(valores.length == 0){
            window.alert('Adicione valores')

        }else{
            
            let tot = valores.length
            let maior = valores[0]
            let menor = valores[0]
            let media = 0
            let soma = 0
           
            for(let pos in valores){
                soma += valores[pos]
                media = soma / valores.length // ou var soma / var tot

                  if(valores[pos]>maior){
                    maior = valores[pos]
                    if(valores[pos]< menor){
                        menor - valores[pos]
                    }
                }
            }
            
            res.innerHTML = ''
            res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados</p>`
            res.innerHTML += `<p>O menor número adicionado é ${menor}</P>`
            res.innerHTML += `<p>O maior número adicionado é ${maior}</P>`
            res.innerHTML += `<p>A soma dos número adicionados é ${soma}</P>`
            res.innerHTML += `<p>A média dos número adicionados é ${media}</P>`

        }
    }