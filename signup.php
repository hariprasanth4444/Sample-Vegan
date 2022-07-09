<?php 
session_start();

	include("connection.php");
	include("functions.php");


	if($_SERVER['REQUEST_METHOD'] == "POST")
	{
		//something was posted
		$user_name = $_POST['user_name'];
		$email=$_POST['email_id'];
		$password = $_POST['password'];
		
		if(!empty($user_name) && !empty($password) && ! is_numeric($user_name) && !empty($email))
		{

			//save to database
			$user_id = random_num(20);
			$query = "insert into login (user_id,user_name,email,password) values ('$user_id','$user_name','$email','$password')";

			mysqli_query($con, $query);

			header("Location: login.php");
			die;
		}
		else
		{
			echo "Please enter some valid information!";
		}
	}
?>


<!DOCTYPE html>   
<html>   
<head>  
<meta name="viewport" content="width=device-width, initial-scale=1">  
<title> SignUp Page </title>  
<style>
    Body {
    height: 100vh;
    background-image: url(images/bg2.jpg);
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
}

header {
    width: min(1100px, 100%);
    background: white;
    padding: 2px 10px;
    box-sizing: border-box;
}

form {
    width: 350px;
    background: white;
    box-shadow: 5px 5px 5px rgba(27, 9, 9, 0.8);
    margin-top: 100px;
}

form * {
    width: 310px;
}

h1 {
    color: rgb(70, 70, 252);
    letter-spacing: 2px;
    text-align: center;
    margin-left: 20px;
}

#box {
    height: fit-content;
    width: 350px;
    padding: 20px;
    box-sizing: border-box;
}

#box div {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    height: 125px;
    align-items: center;
}

button {
    background: linear-gradient(to right, rgb(117, 117, 245), rgb(237, 46, 237));
    width: 125px;
    height: 50px;
    border: none;
    cursor: pointer;
    border-radius: 10px;
    color: white;
    font-weight: 600;
    font-size: 16px;
}

/* input[type=text], input[type=password] ,input[type=email] {    */
input {
    width: 310px;
    margin: 8px 0;
    padding: 12px 20px;
    border: 2px solid rgb(248, 239, 2);
    box-sizing: border-box;
    border-radius: 5px;
}

button:hover {
    opacity: 0.7;
}

#link {
    text-align: center;
    color: black;
    text-decoration: none;
}

span {
    color: blue;
}

@media(max-width:425px) {
    body {
        background-image: url(images/bg3.jpg);
    }
}
</style>   
</head>    
<body>
    <form method="POST">  
    <h1> User signup</h1> 
        <div class="container" id="box" style="font-size: 20px;">
              
            <label style="text-align: auto;">Username : </label><br>
            <input id="user" type="text" placeholder="Enter your full name" name="user_name" required><br><br>
            <label style="text-align: auto;">Email Id : </label><br>
            <input type="email" name="email_id" placeholder="Enter your mail id." required><br><br>
            <label id="2">Password : </label><br>
            <input id="pass" type="password" placeholder="Enter Password" name="password" required><br><br>
            <a href="index.php">Click to Login</a><br><br>
            <button type="submit">create account</button>    
            <a href="index.php"><button type="button"> Cancel</button></a>   
            
        </div>   
    </form>
</body>     
</html> 