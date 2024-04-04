import { conn } from "../config/config.js";
import url from 'url';

export const get_result_report = (req,res)=>
{
    const baseUrl = url.parse(req.url, true);
  console.log(baseUrl);
  console.log(baseUrl.query);
  let currPage = Number(baseUrl.query.pageID) || 1;
  let col = baseUrl.query.colName;
  let order = baseUrl.query.orderby;
  console.log(baseUrl.query);

  if ((col && order && currPage) == undefined)
    {
        col = "SID";
        order = "asc";
        currPage = 1;
    }

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
}

export const get_result_report_attdetails = (req,res)=>
{   
    const baseUrl = url.parse(req.url, true);

    var currPage = baseUrl.query.pageID;
    var col = baseUrl.query.colName;
    var order = baseUrl.query.orderby;

    let sid = Number(baseUrl.query.SID);

    if (sid && col && order == undefined)
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
}