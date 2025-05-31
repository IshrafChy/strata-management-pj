<?php
// Database configuration
$db_config = [
    'host' => getenv('DB_HOST') ?: 'localhost',
    'dbname' => getenv('DB_NAME') ?: 'strata_management',
    'user' => getenv('DB_USER') ?: 'root',
    'password' => getenv('DB_PASSWORD') ?: '',
    'port' => getenv('DB_PORT') ?: '5432' // Default PostgreSQL port
];

// Construct the connection string for pg_connect
$connection_string = "host={$db_config['host']} port={$db_config['port']} dbname={$db_config['dbname']} user={$db_config['user']} password={$db_config['password']} sslmode=require";

// Attempt to connect using pg_connect
$dbconn = pg_connect($connection_string);

if (!$dbconn) {
    // Log error and show user-friendly message
    $error_message = pg_last_error();
    error_log("Database connection failed: " . $error_message);
    // Temporarily display the detailed error message for debugging
    die("Database connection failed: " . $error_message);
}

// Store the connection resource if needed elsewhere (optional, depends on further usage)
// global $dbconn; // Or pass it as an argument to functions

// Note: Queries will now use pg_query(), pg_prepare(), pg_execute(), etc.
// Example: $result = pg_query($dbconn, 'SELECT * FROM users'); 