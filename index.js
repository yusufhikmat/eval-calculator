
 let button = document.querySelector('.buttons');
 let btns = document.querySelectorAll('.btn');
 let value = document.querySelector('#value');
 

 for(let i=0; i < btns.length; i++){
    btns[i].addEventListener('click', function(){

        if(this.innerHTML ==="="){
            value.innerHTML = eval(value.innerHTML);
        }else{
            if(this.innerHTML === 'clear'){
                value.innerHTML='';
            }else{
                value.innerHTML += this.innerHTML;
            }
        }
        

    })
 }