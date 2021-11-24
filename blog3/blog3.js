
var data1='';



function fun()
{
    console.log(data1);
    document.getElementById("comment").innerHTML =data1;

}


function addC() {
    var x = document.getElementById("myText").value;
    var y = document.getElementById("myTextR").value;
    document.getElementById("myText").value="";
    document.getElementById("myTextR").value="";
    data1=data1+"<br><br>"+"Comment By - "+isLogin+"<br>"+"Comment:-"+x+"<br>"+"Rating:- "+y;
    fun();
    isLogin="hhh";
  }