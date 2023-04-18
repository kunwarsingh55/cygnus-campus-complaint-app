$(document).ready(function() {
    // if we click on forget button  
    $("#forgetlink").click(function() {
        var forg = document.getElementById("forgetlink");

        if (forg.className == "forget") {
            $("#signin").text("Find your Email"); // sign in will be changed to find your email
            $("#googleacc").text("Enter your phone number");
            $(" .forget,.learnmore, fieldset, #subline, .footer").animate({ // animation
                marginLeft: '-450px',

            }, 500);
            $("#next").addClass("forgetbuttonclicked");
            $("#next").removeClass("next_button"); // addition of new class in next button and removal of previous class

            $("#fieldset-Field").html("<fieldset id='fieldset2'><legend>Phone number</legend><input type='email' class='myinput' name='email_box2' value='' required></fieldset > ");
        } else if (forg.className == "passforget") {
            $("#signin").text("Find your Password"); // sign in will be changed to find your password
            $("#googleacc").text("Enter your password recovery phone number");
            $(" .passforget, fieldset").animate({ // animation
                marginLeft: '-450px',

            }, 500);
            $("#next").addClass("forgetpassclicked");
            $("#next").removeClass("successfull"); //adding and removing some classes


            $("#fieldset-Field").html("<fieldset id='fieldset4'><legend>Phone Number</legend><input type='email' class='myinput' name='email_box3' value='' required></fieldset > ");


        }

    });
    $(".createacc").click(function() {
        $(".createacc").hide();
        $("#signin").text("Create Account");
        $("#googleacc").text("Fill up the form");
        $(".forget,.learnmore,fieldset,#subline").animate({
            marginLeft: "-450px",
        }, 500);
        $("#next").addClass("createAccount");
        $("#next").removeClass("next_button");

        $("#fieldset-Field").html("<fieldset id='fieldset5'><legend>First Name</legend><input type='text' class='myinput' name='namebox' value='' required></fieldset ><fieldset id='fieldset6'><legend>Last Name</legend><input type='text' class='myinput' name='namebox2' value='' ></fieldset >");
        $("#fieldset-Field2").html("<fieldset id='fieldset7'><legend>Email Id</legend><input type='email' id='newemailid' class='myinput' name'newemailbox' value='' required></fieldset><fieldset id='fieldset8'><legend>Password</legend><input type='password' id='newpassbox' class='myinput' name='pasbox' value='' required></fieldset ><fieldset id='fieldset9'><legend>Confirm Password</legend><input type='password' id='confirmpass' class='myinput' name='passbox2' value='' required></fieldset >")
        $("#fieldset-Field").css({ "display": "flex" });
        $("#checkingpass").css({ "margin-bottom": "-6rem" });
        $("body").css({ "transition": "all 0.5s" });


    });



});







var emailid = ["cygnus@gmail.com"];
var passofemail = ["cygnus"];
var j = 0;



// Execute a function when the user releases a key on the keyboard
$(".myinput").keyup(function(event) {
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {

        // Cancel the default action, if needed
        event.preventDefault();
        // Trigger the button element with a click
        document.getElementById("next").click();
    }
});




function signinbuttoncheck() {
    var element = document.getElementById("next");
    // console.log(element.className)
    if (element.className == "next_button") {
        var varifyEmail = document.getElementById("emailvalue").value;
        var tru = false;
        for (var i = 0; i < emailid.length; i++) {
            if (varifyEmail == emailid[i]) {
                tru = true;
                j = i;
                $("#next").removeClass("next_button").addClass("successfull");
                $(".learnmore, fieldset, #subline, .footer").animate({
                    marginLeft: '-450px',
                }, 500);

                // another fieldset for password
                $("#forgetlink").removeClass("forget");
                $("#forgetlink").addClass("passforget");
                $("#forgetlink").html("<a href='#'>Forget Password ?</a>");

                $("#fieldset-Field").html("<fieldset id='fieldset3' ><legend>Password</legend><input type='password' id='passwordvalue' class='myinput' ></fieldset > ");

                break;
            }


        }

        if (tru == false) {
            alert("Invalid Email");
        }
    }
    // after forgettinf if we click on next button another fieldset shoud appear
    // this is the test case to check whether it work or not......this thing work when we type all this sepeartely on console only
    else if (element.className == "forgetbuttonclicked") {
        $("#signin").html("<p id='recoverymailid'>Email is sent to your phonenumber ended with ******2430</p>");
        $("fieldset,#googleacc").animate({
            marginLeft: '-450px',
        }, 500);
        $("#next,#googleacc").hide();
        setTimeout(function() {
            window.open("signin.html", "_self");
        }, 1500);

    } else if (element.className == "forgetpassclicked") {
        $("#signin").html("<p id='recoverymailid'>Password is sent to your phonenumber ended with ******2430</p>");
        $("fieldset,#googleacc").animate({
            marginLeft: '-450px',
        }, 500);
        $("#next,#googleacc").hide();
        setTimeout(function() {
            window.open("signin.html", "_self");
        }, 1500);
    } else if (element.className == "createAccount") {
        var confirmpass = document.getElementById("confirmpass").value;
        var newpass = document.getElementById("newpassbox").value;
        var newemail = document.getElementById("newemailid").value;
        if (newpass == confirmpass & (newemail != "" & newpass != "") & (newpass.length >= 8)) {
            emailid.push(newemail);
            passofemail.push(newpass);
            alert("Email id and password is saved successfully!!");
            $(".createacc").show();
            $("#fieldset-Field2").hide();
            $("#next").removeClass("createAccount");
            $("#next").addClass("next_button");
            $("#fieldset-Field").html("<fieldset id='fieldset1'><legend>Email</legend><input type='email' id='emailvalue' class='myinput' name='emailbox' value='' required></fieldset >");
            $("#signin").text("Sign in"); // sign in will be changed to find your email
            $("#googleacc").text("Use your Google Account");
            $("#forgetlink,#subline,.learnmore").css({
                "marginLeft": "0px",
            })
            $('#checkingpass').hide();

        } else if (newemail == "" || newpass == "") {
            $("#checkingpass").text("Complete the form please");
        } else if (newpass != confirmpass) {
            $("#checkingpass").text("Password don't match");
        } else if (newpass.length < 8) {
            $("#checkingpass").text("Password is too short");
        }

    } else if (element.className == "successfull") {


        // to verify the password 



        var pass1 = document.getElementById("passwordvalue").value;
        // console.log(pass1);



        if (pass1 == passofemail[j]) {
            $(" fieldset,#forgetlink").animate({
                marginLeft: '-500px',
            }, 500);

            $(" #googleacc,#next").hide();
            setTimeout(function() {
                
                window.open("http://127.0.0.1:8000/Cygnus/admin","_self");
                //window.open("{url 'home'}", "_self");
            }, 1500);
            
            $("#signin").html("<h1 id='loginsf'>Login <br>Successfully!!</h1>");
            
            
            
           





        } else {
            alert("Login unsuccessfull");
        }





    }

}
$("#main").mouseenter(function() {
    $("#box1").css({ "margin-top": "-30px", "margin-left": "-30px" });
    $("#box2").css({ "margin-top": "-15px", "margin-left": "335px" })
});
$("#main").mouseleave(function() {
    $("#box1").css({ "margin-top": "-15px", "margin-left": "-15px" });
    $("#box2").css({ "margin-top": "-30px", "margin-left": "320px" })
});