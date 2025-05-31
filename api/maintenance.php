<?php
session_start();

require_once __DIR__ . '/config/database.php';

// Check if user is logged in
if (!isset($_COOKIE['user_id'])) {
    header('Location: /login.php'); // Update redirect path
    exit();
}

$user_id = $_COOKIE['user_id'];

// Fetch maintenance requests
$stmt = $pdo->prepare('SELECT * FROM maintenance_requests ORDER BY request_date DESC');
$stmt->execute();
$requests = $stmt->fetchAll();

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Maintenance Requests</title>
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
</head>
<body class="bg-gray-100">
    <div class="container mx-auto px-4 py-8">
        <h1 class="text-3xl font-bold mb-6">Maintenance Requests</h1>

        <a href="/api/strata-dashboard.php" class="text-blue-500 hover:underline mb-6 inline-block">Back to Dashboard</a>
        
        <?php if (count($requests) > 0): ?>
            <div class="bg-white p-6 rounded-lg shadow-md">
                <ul class="divide-y divide-gray-200">
                    <?php foreach ($requests as $request): ?>
                        <li class="py-4">
                            <div class="flex justify-between">
                                <p class="text-gray-800 font-semibold">Request ID: <?php echo htmlspecialchars($request['id']); ?></p>
                                <span class="text-sm text-gray-500"><?php echo htmlspecialchars($request['request_date']); ?></span>
                            </div>
                            <p class="text-gray-700 mt-2"><?php echo htmlspecialchars($request['description']); ?></p>
                            <p class="text-sm text-gray-600">Status: <?php echo htmlspecialchars($request['status']); ?></p>
                        </li>
                    <?php endforeach; ?>
                </ul>
            </div>
        <?php else: ?>
            <p class="text-gray-600">No maintenance requests found.</p>
        <?php endif; ?>
    </div>
</body>
</html> 