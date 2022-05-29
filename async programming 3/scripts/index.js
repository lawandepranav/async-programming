let container=document.getElementById("slider");

var imgarr=[
    "https://wallpapercave.com/dwp2x/wp1934740.jpg",
    "https://wallpapercave.com/dwp2x/wp8525542.jpg",
    "https://wallpapercave.com/dwp2x/wp10387943.jpg"
];



function start(){
    let images= document.getElementById("img");
    var i=0;
    let slider=setInterval(function(){
        images.src=imgarr[i];
        i=i+1;
        if(i===imgarr.length){
            i=0;
        }
    }, 2000)
    
}
start();



var dataMovie=[
    {
        title:"" ,
        
    }
]
function movieDiv(){

}