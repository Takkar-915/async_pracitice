const getBooksInformation = async() => {
    try{
        const response = await fetch(url);
        if (response.ok){
            const body = await response.json()
            const books = body.books
            return books
        }else{
            throw new Error("リクエスト失敗")
        }
    }catch(error){
        console.error(error)
    }
};

const renderBooks = async (url) => {
    const books = await getBooksInformation(url);
    let body = document.getElementsByTagName("body")[0];

    let tbl = document.createElement("table");
    let tblBody = document.createElement("tbody");

    let rowLen = books.length;
    let columnsLen = 4;

    for (let i = 0; i < rowLen; i++){
        let row = document.createElement("tr");

        for (let j = 0; j < columnsLen; j++){
            let cell = document.createElement("td");
            if (j == 0){
                let cellText = document.createTextNode(books[i].id);
                cell.appendChild(cellText);
                row.appendChild(cell);
                tblBody.appendChild(row);
            }else if (j == 1){
                let cellText = document.createTextNode(books[i].book_name);
                cell.appendChild(cellText);
                row.appendChild(cell);
                tblBody.appendChild(row);
            }else if (j == 2){
                let cellText = document.createTextNode(books[i].author_name);
                cell.appendChild(cellText);
                row.appendChild(cell);
                tblBody.appendChild(row);
            }else if (j == 3){
                let cellText = document.createTextNode(books[i].date_of_issue);
                cell.appendChild(cellText);
                row.appendChild(cell);
                tblBody.appendChild(row);
            }
        }
    }
    tbl.appendChild(tblBody);
    body.appendChild(tbl);
    tbl.setAttribute("border","2");
    
}

const url = "http://localhost/PHP/front-back/backend/books.php";

renderBooks(url);
