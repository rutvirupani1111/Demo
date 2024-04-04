import express from 'express';
import url from 'url';
import bodyParser from 'body-parser';
import mysql from 'mysql';

const port = 4800;

const app = express();

app.use(bodyParser.urlencoded({extended:false}));

var conn=mysql.createConnection(
    {
        host: "localhost",
        user: "root",
        password: "rutvi",
        database: "nodesql",
    },
    { multipleStatements : true}
);
app.set("view engine", "ejs");
app.get('/',(req,res) =>
{
    const baseUrl = url.parse(req.url,true);
    let currPage = baseUrl.query.pageID;
    let Qu = baseUrl.query.query; 
    let col = baseUrl.query.colName;
    let order = baseUrl.query.orderby;

    if((col&&order)==undefined)
    {
        col = "Sid",
        order = "asc"
    }
    let fullQu = Qu+` ORDER BY ${col} ${order} LIMIT ${(currPage-1)*20},${20};`;
    
    // const sql = "SELECT * FROM Attendance_Master LIMIT 10;"
    // const sql1 = `SELECT Attendance_Master.SID as Sid, Stu.Name as Name, SUM(Attendance) as pDays,((SUM(Attendance)*100)/COUNT(Attendance)) as Average_Att FROM Stu RIGHT JOIN Attendance_Master ON Stu.SID = Attendance_Master.SID where month(Att_Date)='${month}' group by Attendance_Master.SID,Stu.Name  LIMIT  ${(currPage-1) * 20},${20};` 

    // conn.query(sql1, function(err,result,fields)
    // {
    //     if(err)
    //         console.log(err)
    //     else
    //     {
    //         res.render("Dynamic",
    //         {
    //             PID: currPage,
    //             res: result,
    //             fields: fields,
    //             month: month
    //         })
    //     }
    // })

    if((currPage&&col&&order) == undefined)
    {
        currPage = 1;
    }
    var len = 0;
    if(Qu!=undefined){
        conn.query(Qu, function(err,result,fields)
        {
            if(err)
                console.log(err)
            else
            {
                console.log(Qu);
                len=result.length;
            }
        })
        conn.query(fullQu, function(err,result,fields)
        {
            if(err)
            {
                console.log(err)
                res.render("Dynamic",
                {
                    PID: currPage,
                    res: result,
                    fields: fields,
                    query:Qu,
                    qulen:len,
                    error:err,
                    col:col,
                    order : order
                })
            }
            else
            {
                console.log(Qu);
                res.render("Dynamic",
                {
                    PID: currPage,
                    res: result,
                    fields: fields,
                    query:Qu,
                    qulen:len,
                    error:undefined,
                    col : col,
                    order : order
                })
            }
        })
    }else{
        res.render("Dynamic",{PID:1,res:undefined,error:undefined,query:Qu,col:col,order:order});
    }
})
app.listen(port,function()
{
    console.log("Listening on port "+port);
})