const getBooksInformation = async() => {
    // 本の一覧の取得
    const url = "http://localhost/PHP/front-back/backend/books.php";

    const json = await fetch(url)   
        .then(res => {
            console.log("取得成功")
            return res
        }).catch(error => {
            console.log("取得失敗")
            return null
    });
};

const generate_table = ($booksInformation) => {
    let body = document.getElementsByTagName("body")[0];

    let tbl = document.createElement("table");
    let tblBody = document.createElement("tbody");

    let len = Object.keys($booksInformation).length;

    for (let i = 0; i < len; i++){
        let row = document.createElement("tr");

        for (let j = 0; j < len; j++){
            let cell = document.createElement("td");
            let cellText = document.createTextNode("test");
            cell.appendChild(cellText);
            row.appendChild(cell);
        }
        tblBody.appendChild(row);
    }
    tbl.appendChild(tblBody);
    body.appendChild(tbl);
    tbl.setAttribute("border","2");
};
