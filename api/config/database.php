<?php
// Database configuration
$db_config = [
    'host' => getenv('DB_HOST') ?: 'localhost',
    'dbname' => getenv('DB_NAME') ?: 'strata_management',
    'username' => getenv('DB_USER') ?: 'root',
    'password' => getenv('DB_PASSWORD') ?: '',
    'port' => getenv('DB_PORT') ?: '5432', // Default PostgreSQL port
    'charset' => 'utf8' // Use utf8 for Postgres
];

try {
    // Use pgsql driver for PostgreSQL
    $dsn = "pgsql:host={$db_config['host']};port={$db_config['port']};dbname={$db_config['dbname']};user={$db_config['username']};password={$db_config['password']};sslmode=require";
    $pdo = new PDO($dsn, null, null, [
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
        PDO::ATTR_EMULATE_PREPARES => false,
    ]);
} catch (PDOException $e) {
    // Log error and show user-friendly message
    error_log("Database connection failed: " . $e->getMessage());
    // Temporarily display the detailed error message for debugging
    die("Database connection failed: " . $e->getMessage());
} 