<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: *");


include 'DatabaseConfig.php';

$objDB = new DbConnect();
$conn = $objDB->connect();

$method = $_SERVER['REQUEST_METHOD'];

switch($method){

    case "POST":
       
        $user = json_decode(file_get_contents('php://input'));

        
       $sql = "SELECT * FROM user WHERE username = :username AND password = :password"; 
            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':username', $user->username);
            $stmt->bindParam(':password', $user->password);
            $stmt->execute();
            $users = $stmt->fetchAll(PDO::FETCH_ASSOC);

            if(isset($user)){
                $response = $users;
            }
            else{
                $response = ['status' => 0, 'message' => "Failed to created successfully"];
            }


            echo json_encode($response);
        
        break;

    }