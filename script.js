

/**
 * This isn't great, but it works. It loads event handlers after so many seconds after load...
 * then we just hope they load it fast enough.
 */
let load = new Promise ((resolve, reject) => {
    let button;
    setTimeout(() => {
            //set up mobile menu
        button = document.getElementById('btn-menu')
        button.addEventListener('click',(eventTarget)=>{
            let nav = document.getElementById('computer-nav');
            if(nav.getAttribute('class') == 'nav computer'){
                nav.setAttribute('class','shift-in nav');
            }else{
                nav.setAttribute('class','shift-out nav');
                setTimeout(()=>{
                    
                    nav.setAttribute('class', 'nav computer');
                },300);
            }
        });
        document.getElementById('btn-sidebar').addEventListener('click',(eventTarget)=>{
            let element = document.getElementById('aside-nav');
            if(element == null){
                eventTarget.target.setAttribute('class','hidden');
            } else{
                if(element.getAttribute('class') == 'aside computer' || 
                    element.getAttribute('class') == 'aside shift-out' ){
                    element.setAttribute('class','aside shift-in');
                }else{
                    element.setAttribute('class','aside shift-out');
                }
        }
           
        });
        document.getElementById('study-dropbtn').addEventListener('click',(eventTarget)=>{
            let element = document.getElementById('study-dropdown');
            if(element == null){
                eventTarget.target.setAttribute('class','hidden');
            } else{
                if(element.getAttribute('class') == 'dropleft hidden'){
                    element.setAttribute('class','dropleft');
                }else{
                    element.setAttribute('class','dropleft hidden');
                }
        }
           
        });
       resolve(button);
    }, 300);
});


load.then((value)=>{
    console.log(value);
})
load.catch((reason)=>{
    load;
    console.log('Oops');
    
});