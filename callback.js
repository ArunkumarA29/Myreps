let Browser = "Chrome & safari"

function checkbrowserversion(callback){
   
    setTimeout(function(){
        callback(Browser);
    },2000);
}
function displaybrowserversion(version){
    console.log("Browser version is : " +version)
}
checkbrowserversion(displaybrowserversion);

// let s = "safari";

// function  Checkserverversion(callback){

//     setTimeout(function(){
//         callback(s);},2000);
//     }

//     function displayversion(server){
//     console.log("The Browser Version is :" +server);

//     }
//     Checkserverversion(displayversion);

