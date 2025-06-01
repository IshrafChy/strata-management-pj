<?php
header('Content-Type: application/json');

$response = [
    'message' => 'Hello from PHP Serverless Function!',
    'timestamp' => date('Y-m-d H:i:s'),
    'status' => 'success'
];

echo json_encode($response);
?> 