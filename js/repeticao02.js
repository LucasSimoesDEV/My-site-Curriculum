function tabuada(){
var num = document.getElementById('txtn')
var tab = document.getElementById('seltab')

if (num.value.length == 0){
    
    window.alert('Digite um número')
}else{
    var n = Number(num.value)
    var c = 1 
    tab.innerHTML = ''
    for(var c = 1; c<=10;c++ ){
      var item = document.createElement('option')
      item.text = `${n} x ${c} = ${n*c}`
      item.value = `tab${c}`
      tab.appendChild(item)
    }
   
    }
}
function soma(){
    var num = document.getElementById('txtn')
    var tab = document.getElementById('seltab')
    
    if (num.value.length == 0){
        
        window.alert('Digite um número')
    }else{
        var n = Number(num.value)
        var c = 1 
        tab.innerHTML = ''
        for(var c = 1; c<=10;c++ ){
          var item = document.createElement('option')
          item.text = `${n} + ${c} = ${n+c}`
          item.value = `tab${c}`
          tab.appendChild(item)
        }
       
        }
    }

    function subtracao(){
        var num= document.getElementById('txtn')
        var tab = document.getElementById('seltab')
        if(num.value.length == 0){
            window.alert('Digite um número')
        }else{
            var n = Number(num.value)
            var c = 1
            
            tab.innerHTML = '' 
            while( c<=10){
                item = document.createElement('option')
                item.value = `tab${c}`
                tab.appendChild(item)
                item.text = `${n} - ${c} = ${n-c}`
            c++
            }

        }


    }