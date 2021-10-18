

  setInterval(function () {document.getElementById("btn").click();}, 60000);
  function fun(){


    let a=document.getElementById('nn').value;
    var leng = (a.split(" ").length );

      document.open();
      document.write("<h1>speed is "+leng-1+" words per minute</h1>");
      document.write("<br>")
      document.write("<p>Please wait while we reload</p>")
      document.close();
    setTimeout("location.reload(true);",3000);
      

  }
