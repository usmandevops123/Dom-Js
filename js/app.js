let a =10;
let b=20;

setTimeout(function(){
    console.log('assync');
},3000); 
fetch('/').then(function(){
    console.log('fetch');
})


console.log(a);