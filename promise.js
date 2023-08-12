const myPromise = new Promise(function(resolve, reject) {
    setTimeout(function(){ 
        resolve("Dileep "); }, 1000);
  });
  
  myPromise.then(function(value) {
    
    console.log(value);
  });
  