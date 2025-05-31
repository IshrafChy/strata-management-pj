<?php
session_start();

// Database connection removed for static demo
// require_once __DIR__ . '/config/database.php';

// Check if user is logged in (based on static cookie)
if (!isset($_COOKIE['user_id'])) {
    header('Location: /api/login.php'); // Updated redirect path
    exit();
}

$user_id = $_COOKIE['user_id']; // Still get the cookie value for demonstration

// Database query removed for static demo
// $query = 'SELECT COUNT(*) AS open_requests FROM maintenance_requests WHERE status = \'Open\'';
// $result = pg_query($dbconn, $query);
// ... fetch logic ...

$open_requests_count = "(Static Count)"; // Static placeholder

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Strata Management Dashboard (Static)</title>
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
</head>
<body class="bg-gray-100">
    <div class="container mx-auto px-4 py-8">
        <h1 class="text-3xl font-bold mb-6">Strata Management Dashboard (Static Demo)</h1>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg::grid-cols-3 gap-6">
            <!-- Maintenance Requests -->
            <div class="bg-white p-6 rounded-lg shadow-md">
                <h2 class="text-xl font-semibold mb-4">Maintenance Requests</h2>
                <p class="text-gray-600">You have <span class="font-bold"><?php echo $open_requests_count; ?></span> open maintenance request<?php echo $open_requests_count == 1 ? '' : 's'; ?>.</p>
                <a href="/api/maintenance.php" class="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">View Requests</a>
            </div>

            <!-- Financial Overview -->
            <div class="bg-white p-6 rounded-lg shadow-md">
                <h2 class="text-xl font-semibold mb-4">Financial Overview</h2>
                <p class="text-gray-600">Access strata fees, expenses, and financial reports.</p>
                <a href="/api/finance.php" class="mt-4 inline-block bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">View Finances</a>
            </div>

            <!-- Resident Directory -->
            <div class="bg-white p-6 rounded-lg shadow-md">
                <h2 class="text-xl font-semibold mb-4">Resident Directory</h2>
                <p class="text-gray-600">Manage resident information and contact details.</p>
                <a href="/api/residents.php" class="mt-4 inline-block bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600">View Directory</a>
            </div>
        </div>
    </div>
</body>
</html> 