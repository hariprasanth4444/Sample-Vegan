<?php 
session_start();

	include("connection.php");
	include("functions.php");


	if($_SERVER['REQUEST_METHOD'] == "POST")
	{
		//something was posted
        $user_name = $_POST['user_name'];
		$item = $_POST['item'];
		$quantity=$_POST['quantity'];
		$price = $_POST['price'];
        $total_price = $_POST['total_price'];

        $user_data = mysqli_fetch_assoc($result);
        $_SESSION['user_id'] = $user_data['user_id'];

        $query = "insert into items (user_name,item,quantity,price,total_price) values ('$user_data['user_name']','$item','$quantity','$price','$total_price')";
        mysqli_query($con, $query);
    }

?>

