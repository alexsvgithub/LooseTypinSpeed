

  setInterval(function () {document.getElementById("btn").click();}, 60000);
  function fun(){


    let a=document.getElementById('nn').value;
    var leng = (a.split(" ").length );

      document.open();
      document.write("<h1>speed is "+leng+" per minute sec</h1>");
      setInterval(function () {window.open("https://alexsvgithub.github.io/LooseTypinSpeed/typing.html");}, 3000);
      document.close();

  }
