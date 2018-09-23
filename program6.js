    var es = {
        hello:
        console.log("Hola")
      };
      
      var de = {
      };
      
      var en = {
        hello: "Hello",
      };
      
      const ff = {};
     
  function helloWorld(language) {
    if (!language.hello) {
      console.log("hello");
    }
    else {
      console.log(language.hello);
    }
  }
  
  helloWorld(es);
  helloWorld(de);
helloWorld(ff);
