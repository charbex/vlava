
 var _servicescontainer=document.getElementById('servicescontainer')
 for (let i = 0; i < 5; i++) {
    let _icon='briefcase';
    if(i==1){
        _icon='map'
    }
    if(i==2){
        _icon='envelope'
    }
    var content=`
     
               <div class="icon"><i class="bi bi-${_icon}"></i></div>
               <h4 class="title"><a href="">Lorem Ipsum ${i}</a></h4>
               <p class="description">Voluptatubbm deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
              
    ` 
   let _div= document.createElement('div');
   _div.innerHTML=content;
   _div.className="col-lg-4 col-md-6 icon-box"
   _servicescontainer.appendChild(_div);
 }