<?php

require("DatabaseConnection.php");

class BooksApiService
{
    private $statusCode = 200;

    private $res = [];

    public function getBookList()
    {
        $dataBaseConnection = new DatabaseConnection();

        try {
            $sql = "SELECT * FROM books_table";
            $query = $dataBaseConnection->dbConnect()->query($sql);
            $this->res["status"] = "OK";
            $this->res["books"]  = $query->fetchAll(PDO::FETCH_ASSOC);
        } catch (Exception $e) {
            $this->statusCode = 500;
            $this->res["status"] = "NG";
            $this->res["message"] = $e->getMessage();
        }
        return [$this->statusCode, $this->res];
    }
}
