<?php
$user_password = argv[1];
$user_salt = argv[2];

$hashed_password = crypt($user_password, $user_salt);

echo $hashed_password;
?>