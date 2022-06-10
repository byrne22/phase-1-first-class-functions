
  function receivesAFunction(callback){
    callback();  
}
receivesAFunction(callback)


function returnsANamedFunction(){
  return returnsANamedFunction;

}
function returnsAnAnonymousFunction(){
   return function (){};
}