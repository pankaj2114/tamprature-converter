var cel=document.getElementById("cel");
var feh=document.getElementById("feh");
var kel=document.getElementById("kel");
var ran=document.getElementById("ran");
var cen=document.getElementById("cen");


cel.addEventListener("input" ,function(){
    let c=this.value;
    let f= (c * 9/5) + 32;
    let k=c + 273.15;
    let r=(c + 273.15) * 9/5
    let cn=c;
    
    feh.value=f;
    kel.value=k;
    ran.value=r;
    cen.value=cn;
    
    
})
feh.addEventListener("input" ,function(){
    let f=this.value;
    let c= (f - 32) * 5/9 
    let k=(f + 459.67)* 5/9;
    let r=f + 459.67;
    let cn=c;
   
    cel.value=c;
    kel.value=k;
    ran.value=r;
    cen.value=cn;
    
})
kel.addEventListener("input" ,function(){
    let k=this.value;
    let c= k - 273.15 ;
    let f=(k * 9/5) - 459.67;
    let r= k * 9/5;
    let cn=c;
   
    cel.value=c;
    feh.value=f;    
    ran.value=r;
    cen.value=cn;
    
    
})
ran.addEventListener("input" ,function(){
    let r=this.value;
    let c= (r - 491.67) * 5/9;
    let f=r - 459.67;
    let k= r * 5/9;
    let cn=c;
   
    cel.value=c;
    feh.value=f; 
    kel.value=k;      
    cen.value=cn;
    
    
})
cen.addEventListener("input" ,function(){
    let cn=this.value;
    let f= (cn * 9/5) + 32;
    let k=cn + 273.15;
    let r=(cn + 273.15) * 9/5
    let c=cn;
    
    feh.value=f;
    kel.value=k;
    ran.value=r;
    cel.value=c;
    
    
})


