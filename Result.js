import mysql from "mysql";
import express from "express";
import bodyParser from "body-parser";
import url from "url";
import { write } from "fs";

const port = 3000;

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.static("public"))
var conn = mysql.createConnection(
  {
    host: "localhost",
    user: "root",
    password: "rutvi",
    database: "nodesql",
  },
  { multipleStatements: true }
);

app.set("view engine", "ejs");
app.get("/", (req, res) => {
  const baseUrl = url.parse(req.url, true);
  console.log(baseUrl);
  console.log(baseUrl.query);
  let currPage = baseUrl.query.pageID;
  let col = baseUrl.query.colName;
  let order = baseUrl.query.orderby;
  console.log(baseUrl.query);


  if ((col && order && currPage) == undefined)
    {
        col = "SID";
        order = "asc";
        currPage = 1;
    }
//   let month = baseUrl.query.month;

//   if (month == undefined) {
//     month = 12;
//   }

  const sql1 = `SELECT 
  Result.SID AS Sid,
  Stu.Name AS FName,
  Result.EID AS EID,
  SUM(Result.Theory_Marks) AS Theory_Marks,
  SUM(Result.Practical_Marks) AS Practical_Marks
FROM
  Stu
      LEFT JOIN
  Result ON Result.SID = Stu.SID
GROUP BY Result.SID, Stu.Name, Result.EID ORDER BY ${col} ${order} LIMIT ${(currPage - 1) * 60},${60};`;

        // const sql2 = `SELECT 
        //     SUM(Result.Theory_Marks) AS Theory2_Marks,
        //     SUM(Result.Practical_Marks) AS Practical2_Marks
        // FROM
        //     Stu
        //         LEFT JOIN
        //     Result ON Result.SID = Stu.SID
        // WHERE
        //     Result.EID='2'
        // GROUP BY Result.SID, Stu.Name, Result.EID  LIMIT  ${
        //     (currPage - 1) * 20
        // },${20};`;


        // const sql3 = "SELECT SID FROM Result LIMIT 10; SELECT Name FROM Stu LIMIT 10;"
        // const sql = sql1+sql2;
        // const sql4 = "SELECT * FROM Result LIMIT 10";

  // const sql2 =  (sql1*100)/30;
  // console.log(sql2);
  conn.query(sql1,function (err, result, fields) {
    if (err) {
      console.log(err);
    } else {
    console.log(result);
      res.render("Result", {
        PID: currPage,
        res: result,
        col: col,
        order: order
      });
    }
  });
});

app.get('/AttDetails', (req,res)=>
{   
    const baseUrl = url.parse(req.url, true);
    // console.log(baseUrl);
    // console.log(baseUrl.query);
    const currPage = baseUrl.query.pageID;
    const col = baseUrl.query.colName;
    const order = baseUrl.query.orderby;

    let sid = baseUrl.query.SID;

    if (sid&col&order == undefined)
    {
        sid = 1;
        col = "SID";
        order = "asc";
    }

    const sql = `SELECT Stu.Name,Result.Subj_Code, Result.Theory_Marks, Result.Practical_Marks FROM Result 
    inner join Stu on Result.SID = Stu.SID
    where Result.SID = ${sid} order by Result.Subj_Code,Result.EID;`
    //  res.write("<h1>HELLO</h1>");
    // res.end();
    conn.query(sql,function (err, result,fields) {
        if (err) {
          console.log(err);
        } else {
          
        // console.log(result);
          res.render("AttDetails", {
            SID:sid,
            res: result,
            col: col,
            order: order
          });
        }
      });
});
app.listen(port, function () {
  console.log("listening on port 3000");
});
