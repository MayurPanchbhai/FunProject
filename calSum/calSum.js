let vd=document.querySelector("video");
let I1=document.getElementById("in1");
let I2=document.getElementById("in2");

function play(){
    if(I1.value != ""&& I2.value!= ""){
        vd.style.display="block";
        console.log("enter nadm");

        vd.play();

        setTimeout(function out(){
            vd.style.display="none";
        },10000)
    }
    else{
        alert("enter the number");
    }
    

    
}