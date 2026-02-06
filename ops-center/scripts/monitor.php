<?php
// ~/.agent/skills/ops-center/scripts/monitor.php

echo "\n🪐 SOVEREIGN OS - MISSION CONTROL CENTER 🪐\n";
echo str_repeat("=", 50) . "\n";

// 1. Health Check
echo " [ HEALTH CHECK ]\n";
$checks = [
    'Profile' => $_SERVER['HOME'] . '/.agent/profile.md',
    'Rules' => $_SERVER['HOME'] . '/.agent/rules.md',
    'Pillars' => $_SERVER['HOME'] . '/.agent/pillars.md',
    'Workflow' => $_SERVER['HOME'] . '/.agent/workflow.md',
];

foreach ($checks as $name => $path) {
    if (file_exists($path)) {
        echo "  ✅ $name Found\n";
    } else {
        echo "  ❌ $name MISSING!\n";
    }
}
echo "\n";

// 2. Skill Arsenal
echo " [ SKILL ARSENAL ]\n";
$skills = glob($_SERVER['HOME'] . '/.agent/skills/*', GLOB_ONLYDIR);
foreach ($skills as $skill) {
    echo "  🚀 " . basename($skill) . "\n";
}
echo "\n";

// 3. Task Radar (Today)
echo " [ TASK RADAR ]\n";
$today = date('Y-m-d');
$taskFiles = glob($_SERVER['HOME'] . '/.agent/local/*/*/tasks/' . date('Y/m-M') . '/' . $today . '.md');

if (empty($taskFiles)) {
    echo "  ⚠️ No active tasks found for today ($today).\n";
} else {
    foreach ($taskFiles as $file) {
        // Extract project name from path
        preg_match('/local\/([^\/]+)\/([^\/]+)\//', $file, $matches);
        $project = $matches[2] ?? 'Unknown';

        echo "  📂 Project: " . strtoupper($project) . "\n";

        $content = file_get_contents($file);
        $lines = explode("\n", $content);
        foreach ($lines as $line) {
            if (strpos($line, '| **[') !== false) {
                // Simple regex to parse Jira row table
                preg_match('/\| \*\*\[(.*?)\]\*\* \| (.*?) \| (.*?) \|/', $line, $m);
                if ($m) {
                    $status = trim($m[3]);
                    echo "     • " . $m[1] . ": " . $m[2] . " -> " . $status . "\n";
                }
            }
        }
    }
}

echo str_repeat("=", 50) . "\n";
echo "Powered by Antigravity (Sovereign OS)\n\n";
