import express from 'express';
import url from 'url';
import bodyParser from 'body-parser';
import mysql from 'mysql';

const app = express();
const port = 4000;

app.use(bodyParser.urlencoded({extended:true}))

var conn = mysql.createConnection(
    {
        host: "localhost",
        user: "root",
        password: "rutvi",
        database: "nodesql"
    },
    { multipleStatements : true }
);

app.set("view engine", "ejs");
app.get("/", (req,res) =>
{
    const baseUrl = url.parse(req.url, true);
    let S = baseUrl.query.srch_SID;
    let currPage = baseUrl.query.pageID;
    // let col = baseUrl.query.colName;

    let srch_name = baseUrl.query.srch_name;
    let srch_surname = baseUrl.query.srch_surname;
    let srch_branch = baseUrl.query.srch_branch;
    let srch_DOB = baseUrl.query.srch_DOB;
    let ANDOR = baseUrl.query.ANDOR;

    if(S == undefined)
    {
        S = 1;
    }
    if(currPage == undefined)
    {
        currPage = 1;
    }
    // if(srch_name == undefined)
    // {
    //     srch_name = "Rutvi";
    // }
    if(srch_name==undefined){
        var sql = `SELECT * FROM Stu WHERE SID=${S}`
        var fullsql = sql+` LIMIT ${(currPage-1) * 10},${10};`
    }else{
        var sql = `SELECT * FROM Stu WHERE Name like '%${srch_name}%' ${ANDOR} Surname like '%${srch_surname}%' ${ANDOR} Branch like '%${srch_branch}%' ${ANDOR} DOB like '%${srch_DOB}%'`
        var fullsql = sql+` LIMIT ${(currPage-1) * 10},${10};`
    }


    ///Ex : SELECT * FROM Stu WHERE Name LIKE '%r%' OR Surname="Moghariya" OR Branch="Civil" OR DOB="1999-05-08";
    // Returns 107 records
    var len = 0;
    if(sql!=undefined)
    {
        conn.query(sql, function(err,result,fields)
        {
            if(err)
                console.log(err)
            else
            {
                console.log(sql);
                len=result.length;
            }
        })
    conn.query(fullsql, function(err,result,fields)
    {
        if(err)
        {
            console.log(err);
            res.render("Search_Detail.ejs",
            {
                PID: currPage,
                res : result,
                fields : fields,
                srch_SID: S,
                qulen :len,
                error : err,
                srch_name: srch_name,
                srch_surname: srch_surname,
                srch_branch: srch_branch,
                srch_DOB: srch_DOB,
                ANDOR: ANDOR
            })
        }
        else
        {
            console.log(sql);
            res.render("Search_Detail.ejs",
            {
                PID: currPage,
                res : result,
                fields : fields,
                srch_SID: S,
                srch_name: srch_name,
                srch_surname: srch_surname,
                qulen:len,
                error:undefined,
                srch_branch: srch_branch,
                srch_DOB: srch_DOB,
                ANDOR: ANDOR
            })
        }
    })
    }else
    {
        res.render("Search_Detail.ejs",
            {
                PID: 1,
                res : undefined,
                fields : fields,
                srch_SID: S,
                srch_name: srch_name,
                srch_surname: srch_surname,
                qulen:len,
                error:undefined,
                srch_branch: srch_branch,
                srch_DOB: srch_DOB,
                ANDOR: ANDOR
            })
    }
})


//     app.get("/Detail", (req,res) =>
//     {
//         const baseUrl = url.parse(req.url, true);
//         // let S = baseUrl.query.srch_SID;
//         let currPage = baseUrl.query.pageID;
//         // let col = baseUrl.query.colName;
//         let srch_name = baseUrl.query.Name;
    
//         // if(S == undefined)
//         // {
//         //     S = 1;
//         // }
//         if(currPage == undefined)
//         {
//             currPage = 1;
//         }
//         if(srch_name == undefined)
//         {
//             srch_name = "Rutvi";
//         }
//     var sql2 = `SELECT * FROM Stu WHERE Name=${srch_name} LIMIT ${(currPage-1) * 20},${20};`
//     conn.query(sql2, function(err,result,fields)
//     {
//         if(err)
//         {if(srch_name==undefined){
    //     var sql = `SELECT * FROM Stu WHERE SID=${S} LIMIT ${(currPage-1) * 20},${20};`
    // }else{
//             console.log(err);
//         }
//         else
//         {
//             console.log(result);
//             res.render("Search_Detail.ejs",?pageID=1&srch_ID=1&Name=
//             {
//                 PID: currPage,
//                 res : result,
//                 fields : fields,
//                 // srch_SID: S,
//                 srch_name: srch_name
//             })
//         }
//     })
// })

app.listen(port, function ()
{
    console.log("Listening on port "+port);
})
