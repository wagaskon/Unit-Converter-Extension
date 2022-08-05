
/* Conversion Factors
1 meter = 3.281 feet => 1feet =1/3.281 meter
1 liter = 0.264 gallon =>gallon= 1/0.264 liters
1 kilogram = 2.204 pound
*/
let magnitude=0;
console.log("mag=", magnitude)
const meter=document.getElementById("meter")
const liter=document.getElementById("liter")
const kilogram=document.getElementById("kilogram")

const buttn=document.getElementById("btn-convt")
buttn.addEventListener("click", function(){
    magnitude= Number(document.getElementById("txt").value);
    conversion(magnitude,3.281)
    conversion(magnitude,0.264)
    conversion(magnitude,2.204)
})
function conversion(mag,factor){
    let u1=0;
    let u2=0;
   //Meter and Feet
    
    u1=(mag*factor).toFixed(2);
    u2=((mag)*(1/factor)).toFixed(2);
    if(factor===3.281){
        render(u1, u2,"meter", "feet", meter); 
    }
    else if(factor===0.264){
        render(u1, u2,"Liters", "Gallons", liter); 
    }
    else{
        render(u1, u2,"Kilograms", "Pounds", kilogram); 
    }
       
}

function render(x,y,a,b,body ){
    body.innerHTML= `${magnitude} ${a} = ${x} ${b} | ${magnitude} ${b} = ${y} ${a} `;
    
}



