<?php

require("BooksApiService.php");

$booksApiService = new BooksApiService();

list($statusCode, $res) = $booksApiService->getBookList();

header("Content-Type: application/json; charset=UTF-8");

http_response_code($statusCode);

print json_encode($res, JSON_PRETTY_PRINT);
