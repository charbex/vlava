
 var _servicescontainer=document.getElementById('servicescontainer');
 fetch('https://vlavaapin.onrender.com/services')
 .then(response => response.json())
 .then(json =>{
    //alert (json);
    for (let i = 0; i <json.length; i++) {
        let _icon='briefcase';
        if(i==1){
            _icon='map'
        }
        if(i==2){
            _icon='envelope'
        }
        var content=`
         
                   <div class="icon"><i class="bi bi-${json[i].icon}"></i></div>
                   <h4 class="title"><a href="">${json[i].title}</a></h4>
                   <p class="description">Voluptatubbm deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
                  
        ` 
       let _div= document.createElement('div');
       _div.innerHTML=content;
       _div.className="col-lg-4 col-md-6 icon-box"
       _servicescontainer.appendChild(_div);
     } 
 })

 