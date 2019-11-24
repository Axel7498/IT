
DAY 2 - JavaScript

Q1) Demonstrate basics of JavaScript by printing Hello World.

A)
<!doctype html>
<html>
<head>
<script>
function hello()
{
alert("Hello World!");
}
</script>
</head>
<body>
<button onclick="hello()">Click Me</button></br></br>
</body>
</html>

Q2) Find the sum of 2 numbers using JavaScript.

A)
<!doctype html>
<html>
<head>
<script>
function add(){
var a,b,c;
a=Number(document.getElementById("first").value);
b=Number(document.getElementById("second").value);
c= a + b;
document.getElementById("answer").value= c;
}
</script>
</head>
<body>
Enter the First number : <input id="first">
Enter the Second number: <input id="second">
<button onclick="add()">Add</button>
<input id="answer">
</body>
</html>

	


	
Q3) Import an external JavaScript function from a .js file into a HTML file.

A)
<!DOCTYPE html>
<html>
<body>

<h2>External JavaScript</h2>

<p id="demo">A Paragraph.</p>

<button type="button" onclick="myFunction()">Try it</button>

<p>(myFunction is stored in an external file called "myScript.js")</p>

<script src="myScript.js"></script>

<script src="/js/myScript.js"></script>

<script src="https://www.w3schools.com/js/myScript.js"></script>

</body>
</html>

Q4) Create an html page with 2 combo box populated with month & year, to display the calendar for the selected month & year from combo box using JavaScript.

A)
<html>
<head>
<script language="javascript" type="text/javascript">
var i=0,j,cnt=0,c;
var days=["sun","mon","tue","wed","thu","fri","sat"];
var yr,k,mon;
var last=[31,28,31,30,31,30,31,31,30,31,30,31];
var mn=["January","February","March","April","May","June","July","August","September","October","November","December"];
function my()
{
yr=document.form1.qual.value;
k=document.form1.qual1.value;
if(yr%4==0&&yr%100==0||yr%400){last[1]=29;}
document.write("<table width='50%' height='60%' border='9' bgcolor='cyan'>");
document.write("<tr><td colspan='7'><center>"+ mn[k]+" "+yr+"</center></td></tr>");
document.write("<tr>");
for(i=0;i<=6;i++)
{
document.write("<td>"+days[i]+"</td>");}
document.write("</tr>");
var date2=new Date(yr,k,1);
var daz=date2.getDay();
cnt=0;
for(i=0;i<=daz-1;i++)
{
document.write("<td></td>");
cnt=cnt+1;
}
for(j=1;j<=last[k];j++)
{
c=cnt%7;
if(c==0)
{
document.write("</tr><tr><td><a href=\"diary.html\" target=\"new\">"+j+"</a></td>");cnt++;
}
else
{
document.write("<td><a href=\"diary.html\" target=\"new\">"+j+"</a></td>");
cnt++;
}
}
document.write("</tr></table>");
}
</script>
</head>
<body bgcolor="orange">
<form name="form1">
<select name="qual">
<option>2018</option>
<option>2017</option>
<option>2016</option>
<option>2015</option>
<option> </option>
</select>
<select name="qual1">
<option>0</option>
<option>1</option>
<option>2</option>
<option>3</option>
<option> </option>
</select>
<input type="button" value="ok" onclick=my()></input></form>
</body>
</html>

Q5) Change background color using JavaScript.

A)
<html>
<head>
<script type="text/javascript">

function get_random_color() 
{
var letters = '0123456789ABCDEF'.split('');
var color = '#';
for (var i = 0; i < 6; i++ ) 
{
color += letters[Math.round(Math.random() * 15)];
}
document.body.style.background= color;
}

</script>
</head>
<body onclick="get_random_color()">
<b>Click me to change my color!</b>
</body>
</html>

Q6) Change text color using JavaScript.

A)
<html>
<head>
  <title>getElementById example</title>
</head>
<script>
function changeColor(newColor) {
  var elem = document.getElementById('para');
  elem.style.color = newColor;
}
</script>
<body>
  <p id="para">Some text here</p>
  <button onclick="changeColor('blue');">blue</button>
  <button onclick="changeColor('red');">red</button>
</body>
</html>

Q7) Validate registration using JavaScript.

A)
<html>

<script >

function reset1()
{
x=confirm("It will clear all the text entered")
if(x==true)
{
document.form1.t1.value=""
document.form1.t2.value=""
document.form1.ta.value=""
document.form1.t3.value=""
document.form1.r1[0].checked=false
document.form1.r1[1].checked=false
document.form1.c1.checked=false
document.form1.c2.checked=false
document.form1.c3.checked=false
document.form1.c4.checked=false
document.form1.c5.checked=false
document.form1.c6.checked=false
document.form1.t1.focus()
}
}

function check()
{
if((document.form1.t1.value=="")||(!(isNaN(document.form1.t1.value))))
{
document.form1.t1.value=""
document.form1.t1.focus()
}
else if((document.form1.t2.value=="")||(isNaN(document.form1.t2.value)))
{
alert("please enter the age correctly")
document.form1.t2.value=""
document.form1.t2.focus()
}
else if(document.form1.t2.value>40)
{
alert("Sorry you age is beyound the limit")
document.form1.t2.value=""
document.form1.t2.focus()
}
else if(document.form1.ta.value=="")
{
alert("please enter the address")
document.form1.ta.focus()
}
else if((document.form1.r1[0].checked==false)&&(document.form1.r1[1].checked==false))
{
alert("please select the radio button")
document.form1.r1[0].focus()
}
else if((document.form1.c1.checked==false)&&(document.form1.c2.checked==false)&&(document.form1.c3.checked==false)&&(document.form1.c4.checked==false)&&(document.form1.c5.checked==false))
{
alert("please select the the languages known")
document.form1.c1.focus()
}
else if(document.form1.t3.value=="")
{
alert("please enter the password")
document.form1.t3.focus()
}
else if((document.form1.t1.value!="")&&(document.form1.t2.value!="")&&(document.form1.t3.value!="")&&(document.form1.ta.value!="")&&((document.form1.r1[0].checked!=false)||(document.form1.r1[0].checked!=false))&&((document.form1.c1.checked!=false)||(document.form1.c2.checked!=false)||(document.form1.c3.checked!=false)||(document.form1.c4.checked!=false)||(document.form1.c5.checked!=false)))
{
x=confirm("you have entered the datas correctly,want to submit the form")
if(x)
{
document.lay.visibility="show"
}
}
}

</script>


<body bgcolor="lightblue" text="red" style="font-size:15pt;font-family:Garamond" onload=document.form1.t1.focus()><center>
<h2>ENTRY FORM</h2></center>
<form name=form1 method=post >
<table name=tab cellspacing=30pt>
<tr><td align=left><h2>Enter your Name :</h2> </td><td align=right><input type=text name=t1 size=18>
<tr><td align=left><h2>Enter your Age :</h2> </td><td align=right><input type=text name=t2 maxlength=3 size=18>
<tr><td align=left><h2>Enter your Address :</h2> </td><td align=right><textarea name=ta rows=5 cols=15></textarea>
<tr><td align=left><h2>Sex :</h2> </td><td align=left><input type=radio name=r1 value="female">Female<br>
<input type=radio name=r1 value=male>Male</td>
<tr><td align=left><h2>Languages Known :</h2> </td><td align=left><center>(select more than one)</center>
<input type=checkbox name=c1 value=c>C<br>
<input type=checkbox name=c2 value=c++>C++<br>
<input type=checkbox name=c3 value=vb>VB<br>
<input type=checkbox name=c4 value=java>JAVA<br>
<input type=checkbox name=c5 value=asp>ASP<br>
<input type=checkbox name=c6 value=others>OTHERS<br></td>
<tr><td align=left><h2>Enter your Password :</h2> </td><td align=right><input type=password name=t3 size=18>
</table><center>
<input type=button value=" reset " onClick=reset1()>
<input type=button value=" check " onClick=check()>
<h3>Before submitting the datas please click the check Button</h3>
<input type="submit" value=" submit "></center>
</form>
</body>
</html> 










