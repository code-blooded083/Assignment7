
    var index=1
    let obj={
        0:"coral",
       1:"violet",
        2:"indigo",
        3:"blue",
        4:"green",
        5:"yellow",
        6:"orange",
        7:"red",
    }
function change(){
    
    if(index>7){
        index=0}
    document.getElementsByTagName("body")[0].style.backgroundColor=obj[index++];
     
    
  }
