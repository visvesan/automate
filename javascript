  <!--<script>
        alert('Welcome To MTT from Script file')
    </script>
    <button value="Click Me" onclick="alert('Hi From button')">
        Click Me
    </button>-->
    <!--<script>
        var x = 10;
        document.write(x +"<br/>");

        x = 'Peter';
        document.write(x + "<br/>");

        a = 10; b = 20;
        c = a + b;
        document.write(c + "<br/>");

        c = a > b;

        document.write(c + "<br/>");

    </script>-->
    <!--<script>
        //var x = 15;
        //if (x < 10) {
        //    document.write("Good Morning");
        //}
        //else {
        //    document.write("Good Day!")
        //}

        //var a = 15;
        //var b = 20;

        //if (a > b) {
        //    document.write("Greater is " + a);
        //}
        //else {
        //    document.write("Greater is " + b);
        //}

        //document.write("<br/>")

        //var a = 15;
        //var b = 20;
        //var c = 103;

        //if (a > b && a > c) {
        //    document.write("Greatest is " + a);
        //}
        //else if (b > a && b > c) {
        //    document.write("Greatest is " + b);
        //}
        //else {
        //    document.write("Greatest is " + c);
        //}


        var M1 = 56, M2 = 47, M3 = 50;
        var avg = (M1 + M2 + M3) / 3;
        document.write(avg+"<br/>");

        if (avg < 35) {
            document.write("Fail");
        }
        else if (avg < 50) {
            document.write("Passed in 3rd Grade");
        }
        else if (avg < 60) {
            document.write("Passed in 2nd Grade");
        }
        else if (avg < 70) {
            document.write("Passed in 1st Grade");
        }
        else {
            document.write("Passed in Distinction");
        }

    </script>-->
    <!--<script>
        //var x = 2;

        //switch (x) {
        //    case 1:
        //        document.write("Monday");
        //        break;
        //    case 2:
        //        document.write("Tuesday");
        //        break;
        //    default:
        //        document.write("Invalid");
        //        break;
        //}

        //var a = 10, b = 5;
        //var ch =parseInt(prompt("Enter your option 1.Add 2.Sub", ""));

        //switch (ch) {
        //    case 1:
        //        document.write("Sum :"+(a + b));
        //        break;
        //    case 2:
        //        document.write("Difference :"+(a - b));
        //        break;
        //    default:
        //        document.write("Invalid");
        //        break;
        //}
    </script>-->
    <!--<script>
        //for (var i = 0; i < 10; i++) {
        //    document.write("MTT" + "<br/>");
        //}

        //var n = 5;
        //for (var i = 1; i <=10; i++) {
        //    document.write(n + "*" + i + "=" + n * i+"<br/>");
        //}

        //document.write("<table border='1'>");
        //for (var i = 0; i < 10; i++) {
        //    document.write("<tr>");
        //    for (var j = 0; j < 10; j++) {
        //        document.write("<td>");
        //        document.write("MTT");
        //        document.write("</td>");
        //    }

        //    document.write("</tr>");
        //}
        //document.write("</table>");

    </script>-->
    <!--<script>
        //var i = 0;
        //while (i<10) {
        //    document.write("MTT" + "<br/>");
        //    i++;
        //}

        var n = 23452; 
        //document.write((n % 10));
        //document.write("<br/>");
        //document.write(Math.floor(n / 10));

        var sum = 0;

        while (n!=0) {
            var r = n % 10;
            sum = sum + r;
            n = Math.floor(n / 10);
        }

        document.write("Sum is " + sum);

    </script>-->
    <!--<script>
        //var i = 0;
        //do {
        //    document.write("MTT" + "<br/>");
        //    i++;
        //} while (i<10);

        //do {
        //    var i = parseInt(window.prompt("Enter a value", ""));
        //    document.write(i + "<br/>");
        //} while (i!=0);

    </script>-->   
    <!--<script>
        //var x = [23, 56, 78, "Peter"];
        //x.push(12.7);
        //x.reverse();
        //document.write(x.length+"<br/>");
        //document.write(x[0] + "<br/>");
        //document.write(x[1] + "<br/>");
        //document.write(x[2] + "<br/>");
        //document.write(x[3] + "<br/>");
        //document.write(x[4] + "<br/>");

        //document.write(x.toString());

        //for (var i in x) {
        //    document.write(x[i] + "<br/>");
        //}


        //var x = [23, 56, 78, 23, 104, 67, 90, 12];
        //var max = x[0];

        //for (var i in x) {
        //    if (x[i] > max) {
        //        max = x[i];
        //    }
        //}

        //document.write("Max is " + max);
    </script>-->
    <!--<script>
        //document.write("I am not in function Test" + "<br\>");
        //Test();
        //document.write("I am not in function Test Again" + "<br\>");
        //Test();
        //Test();
        //document.write("I am not in function Test Again" + "<br\>");

        //function Test() {
        //    document.write("I am in test function" + "<br\>");
        //}

        var result = Test(23, 27);
        document.write(result);

        //function Test(a,b) {
        //    document.write("I am in test function Addition"+(a+b) + "<br\>");
        //}
        
        function Test(a, b) {
            document.write("I am in test function Addition"  + "<br\>");
            return  (a + b);
        }
    </script>-->


	<!--<script>
      var gVal = 20;

      myfunction1();
      myfunction2();
      myfunction1();

      function myfunction1() {
          var lVal = 79;
          document.write("Global From function 1 " + gVal + "<br\>");
          document.write("Local From function 1 " + lVal + "<br\>");
      }

      function myfunction2() {
          var lVal = 89;
          document.write("Global From function 2 " + gVal + "<br\>");
          document.write("Local of function 1 From function 2 " + lVal + "<br\>");
          gVal = 70;
      }

  </script>-->



  Window Event - onload and navigator object

  <!DOCTYPE html>
<html>
<head>
    <title></title>
	<meta charset="utf-8" />
    <script>
        function fun1() {
            //alert("Hi Page is loaded");

            //if (navigator.userAgent.indexOf("Chrome") != -1) {
            //    alert('Chrome');
            //}
            //else if (navigator.userAgent.indexOf("Firefox") != -1) {
            //    alert('Firefox');
            //}
            document.write(navigator.cookieEnabled);

        }
    </script>
</head>
<body onload="fun1()">
  
</body>
</html>


Form Events
<!DOCTYPE html>
<html>
<head>
    <title></title>
	<meta charset="utf-8" />
    <script>
        var txtEmail;
        var ddlDepartment;

        function getElements() {
            txtEmail = document.getElementById("txtEmail");
            ddlDepartment = document.getElementById("ddlDepartment");
        }

        function fnClear() {            
            if (txtEmail.value == "Enter Your Email") {
                txtEmail.value = "";
                txtEmail.style.backgroundColor = "yellow";
            }
        }

        function fnIsEmpty() {
            if (txtEmail.value == "") {
                alert("Email cannot be empty");
                txtEmail.value = "Enter Your Email";
                txtEmail.style.backgroundColor = "white";
            }
        }
        function fnChangeColor() {
            txtEmail.style.backgroundColor = "white";
        }

        function fnDepartment() {
            alert(ddlDepartment.selectedIndex);
            alert(ddlDepartment.value);
            alert(ddlDepartment.options[ddlDepartment.selectedIndex].text);
        }

        function fnIsValid() {
            var reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

            if (reg.test(txtEmail.value) == false) {
                alert("Invalid Email");
                return false;
            }
            else if (ddlDepartment.selectedIndex == 0) {
                alert("Kindly Select a department!");
                return false;
            }
            else {
                return confirm("Are you sure you want to submit");
            }
        }
    </script>
</head>
<body onload="getElements()">
    <form onsubmit="return fnIsValid()" method="get">
        <input type="text"
               id="txtEmail"
               name="txtEmail"
               value="Enter Your Email"
               onfocus="fnClear()"
               onblur="fnIsEmpty()"
               onchange="fnChangeColor()" />
        <br />
        <select id="ddlDepartment" name="ddlDepartment" onchange="fnDepartment()">
            <option value="0">Select Department</option>
            <option value="100">Admin</option>
            <option value="101">HR</option>
            <option value="102">QA</option>
            <option value="103">Development</option>
        </select>
        <br />
        <input type="submit" value="Submit" />
    </form>
    
</body>
</html>

Key board events

<!DOCTYPE html>
<html>
<head>
    <title></title>
	<meta charset="utf-8" />    
    <script>
        function fnCount() {

            var divCounter = document.getElementById("divCounter");
            var count = parseInt(divCounter.innerText);

            if (count > 0) {
                var txtMsg = document.getElementById("txtMsg");
                divCounter.innerText = count - 1;
            }
            else {
                return false;
            }
        }
    </script>
</head>
<body>
    <textarea id="txtMsg" onkeypress="return fnCount()"></textarea>
    <br />
    <div id="divCounter">10</div>
</body>
</html>

<!DOCTYPE html>
<html>
<head>
    <title></title>
	<meta charset="utf-8" />  
    <script>
        function BlackMe() {
            var btn = document.getElementById("btnClickMe");
            btn.style.backgroundColor = "black";
            btn.style.color = "white";
        }
        function RedMe() {
            var btn = document.getElementById("btnClickMe");
            btn.style.backgroundColor = "Red";
            btn.style.color = "white";
        }
        function ClickMe() {
            alert("You Have Clicked Me!");
        }
    </script>
</head>
<body>
    <marquee onmouseover="stop()" onmouseout="start()">
        Welcome to <a href="http://www.manzoorthetrainer.com">www.ManzoorTheTrainer.com</a>
    </marquee>    
    <input type="button" id="btnClickMe" value="ClickMe"
           onmouseover="BlackMe()"
           onmouseout="RedMe()"
           onclick="ClickMe()" />
</body>
</html>

<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <title>My Calculator</title>
    <style>
        body {
            background-color: black;
        }

        .box {
            background-color: white;
            height: 270px;
            width: 250px;
            border-radius: 10px;
            position: relative;
            top: 80px;
            left: 40%;
        }

        .display {
            background-color: #bccd95;
            width: 225px;
            position: relative;
            left: 15px;
            top: 20px;
            height: 40px;
        }

            .display input {
                position: relative;
                left: 2px;
                top: 2px;
                height: 35px;
                color: black;
                background-color: #bccd95;
                font-size: 21px;
                text-align: right;
            }

        .keys {
            position: relative;
            top: 15px;
        }

        .button {
            width: 40px;
            height: 30px;
            border: none;
            border-radius: 8px;
            margin-left: 17px;
            cursor: pointer;
            border-top: 2px solid transparent;
        }

            .button.black {
                color: white;
                background-color: #000000;
                border-bottom: black 2px solid;
                border-top: 2px #6f6f6f solid;
            }

            .button.yellow {
                color: black;
                background-color: #ffd800;
                border-bottom: black 2px solid;
            }
    </style>
    <script>
        function TakeValue(val) {
            document.getElementById("result").value += val;
        }
        function CalculateValue() {
            document.getElementById("result").value = eval(document.getElementById("result").value);
        }
        function ClearValue(val) {
            document.getElementById("result").value = val;
        }
    </script>
</head>
<body>
    <div class="box">
        <div class="display">
            <input type="text" readonly size="16" id="result">
        </div>
        <div class="keys">
            <p>
                <input type="button" class="button black" value="7" onclick='TakeValue("7")'>
                <input type="button" class="button black" value="8" onclick='TakeValue("8")'>
                <input type="button" class="button black" value="9" onclick='TakeValue("9")'>
                <input type="button" class="button yellow" value="*" onclick='TakeValue("*")'>
            </p>
            <p>
                <input type="button" class="button black" value="4" onclick='TakeValue("4")'>
                <input type="button" class="button black" value="5" onclick='TakeValue("5")'>
                <input type="button" class="button black" value="6" onclick='TakeValue("6")'>
                <input type="button" class="button yellow" value="-" onclick='TakeValue("-")'>
            </p>
            <p>
                <input type="button" class="button black" value="1" onclick='TakeValue("1")'>
                <input type="button" class="button black" value="2" onclick='TakeValue("2")'>
                <input type="button" class="button black" value="3" onclick='TakeValue("3")'>
                <input type="button" class="button yellow" value="+" onclick='TakeValue("+")'>
            </p>
            <p>
                <input type="button" class="button black" value="0" onclick='TakeValue("0")'>
                <input type="button" class="button black" value="C" onclick='ClearValue("")'>
                <input type="button" class="button orange" value="=" onclick='CalculateValue()'>
                <input type="button" class="button yellow" value="/" onclick='TakeValue("/")'>
            </p>
        </div>
    </div>
</body>
</html>

<!DOCTYPE html>
<html>
<head>
    <title></title>
	<meta charset="utf-8" />  
</head>
<body>
    <script>
        //var obj = { "RollNo": 1, "Name": "Manzoor", "M1": 78, "M2": 69 };
        //document.write(obj.RollNo + " " + obj.Name);  

        //var jsonString = JSON.stringify(obj);
        //var javascriptObj = JSON.parse(jsonString);


        function Result(valAvg) {
            if (valAvg >= 35)
                return "Pass";
            else
                return "Fail";
        }

        var lstObj = [{ "RollNo": 1, "Name": "Manzoor", "M1": 78, "M2": 69 },
        { "RollNo": 2, "Name": "Peter", "M1": 38, "M2": 63 },
        { "RollNo": 3, "Name": "Jack", "M1": 81, "M2": 59 },
        { "RollNo": 4, "Name": "Lilly", "M1": 6, "M2": 9 }];

        document.write(lstObj[2].Name);

        document.write("<table border=1>");
        document.write("<thead>");
        document.write("<td> RollNo </td>");
        document.write("<td> Name </td>");
        document.write("<td> Avg </td>");
        document.write("<td> Result </td>");
        document.write("</thead>");

        for (var i in lstObj) {
            document.write("<tr>");
            document.write("<td>" + lstObj[i].RollNo + "</td>");
            document.write("<td>" + lstObj[i].Name + "</td>");
            document.write("<td>" + (lstObj[i].M1 + lstObj[i].M2) / 2 + "</td>");
            document.write("<td>" + Result((lstObj[i].M1 + lstObj[i].M2) / 2) + "</td>");
            document.write("</tr>");
        }


        document.write("</table>");


    </script>
</body>
</html>


<!DOCTYPE html>
<html>
<head>
    <title></title>
	<meta charset="utf-8" />  
</head>
<body>
    <script>
        function student(r,n,m1,m2) {
            this.RollNo = r;
            this.Name = n;
            this.M1 = m1;
            this.M2 = m2;

            this.result = function (valAvg) {
                if (valAvg >= 35)
                    return "Pass";
                else
                    return "Fail";
            };
        }

        var lstObj = new Array();
        lstObj.push(new student(1, "Manzoor", 56, 78));
        lstObj.push(new student(2, "Peter", 54, 97));
        lstObj.push(new student(3, "Jack", 24, 29));


        for (var i in lstObj) {
            document.write(lstObj[i].result((lstObj[i].M1 + lstObj[i].M2) / 2) + "<br/>");
        }

        //var s = new student(1,"Manzoor",56,78);
        //document.write(s.RollNo + "<br/>");
        //document.write(s.Name + "<br/>");
        //document.write((s.M1 + s.M2) / 2 + "<br/>");
        //document.write(s.result((s.M1 + s.M2) / 2)+"<br/>");

        //var s2 = new student(2, "Peter", 54, 97);
        //document.write(s2.RollNo + "<br/>");
        //document.write(s2.Name + "<br/>");
        //document.write((s2.M1 + s.M2) / 2 + "<br/>");
        //document.write(s2.result((s.M1 + s.M2) / 2));





        //function student() {
        //    this.RollNo = 1;
        //    this.Name = "Manzoor";
        //    this.M1 = 78;
        //    this.M2 = 69;

        //    this.result = function (valAvg) {
        //        if (valAvg >= 35)
        //            return "Pass";
        //        else
        //            return "Fail";
        //    };
        //}

        //var s = new student();
        //document.write(s.RollNo + "<br/>");
        //document.write(s.Name + "<br/>");
        //document.write((s.M1 + s.M2) / 2+"<br/>");
        //document.write(s.result((s.M1 + s.M2) / 2));


        //var Obj = { "RollNo": 1, "Name": "Manzoor", "M1": 78, "M2": 69 };

        //function Result(valAvg) {
        //    if (valAvg >= 35)
        //        return "Pass";
        //    else
        //        return "Fail";
        //}

        //document.write(Obj.RollNo + "<br/>");
        //document.write(Obj.Name + "<br/>");
        //document.write((Obj.M1 + Obj.M2) / 2 + "<br/>");
        //document.write(Result((Obj.M1 + Obj.M2) / 2) + "<br/>");


        //document.write("Independent Function"+Result(5));
    </script>
</body>
</html>

