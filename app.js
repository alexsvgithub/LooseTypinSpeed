

  setInterval(function () {document.getElementById("btn").click();}, 60000);
  function fun(){


    let a=document.getElementById('nn').value;
    var leng = (a.split(" ").length );

      document.open();
      document.write("<h1>speed is "+leng+" per minute sec</h1>");
      document.close();
    setTimeout("location.reload(true);",3000);
      

  }
