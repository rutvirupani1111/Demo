import express from 'express';
import url from 'url';
import mysql from 'mysql';
import bodyParser from 'body-parser';
import result from 'express-validator';
import md5 from 'md5';
// import {randomString} from 'https://jslib.k6.io/k6-utils/1.2.0/index.js';

// ALTER TABLE Users ADD Column CreatedAt TIMESTAMP default Current_Timestamp();
//ALTER TABLE Users auto_increment = 5;


const app = express();
const port = 4000;

app.use(bodyParser.urlencoded({extended : true}));
app.use(express.static('public'))

app.set('view engine','ejs');

var conn = mysql.createConnection(
    {
        host: "localhost",
        user: "root",
        password: "rutvi",
        database: "Cred",
        dateStrings: true,
        multipleStatements: true,
    }
);

function randomString(length,chars)
{
    var result = '';
    for(var i=length;i>0;--i)
        result += chars[Math.floor(Math.random() * chars.length)];
    return result;
}

app.get("/",(req,res) =>
{
    res.render("reg.ejs");
})

app.post('/',(req,res)=>
{
    console.log(req.body);
    var data = req.body;
    var Hlink = randomString(30, "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ");
    
    var Email_ID = req.body.Email_ID;

    var sql = `SELECT COUNT(*) AS COUNT FROM Users WHERE Email_ID="${Email_ID}";`
    conn.query(sql,(err,result)=>
    {
        var count = 0;
        if(err)
        {
            console.log(err);
        }
        else
        {
            console.log(result);
            count = result[0].COUNT;
            console.log("Count =" +count);

            // var emailExists = count ===1;
            // if(count > 0)
            // {
            //     console.log("User Already Exists !! ");
            // }
            // else
            // {
            //     var sql2 = `INSERT INTO Users(Name,Surname,Email_ID,HLink) VALUES("${data.Name}","${data.Surname}","${data.Email_ID}","${Hlink}");`
            //     conn.query(sql2, (err,result)=>
            //     {
            //         if(err)
            //         {
            //             console.log(err)
            //         }
            //     })  
            //     res.render('active',{'hlink': Hlink});
            // }
            // console.log("emailExists"+emailExists);

            if(count == 0)
            {
                var sql2 = `INSERT INTO Users(Name,Surname,Email_ID,HLink) VALUES("${data.Name}","${data.Surname}","${data.Email_ID}","${Hlink}");`
                conn.query(sql2, (err,result)=>
                {
                    if(err)
                    {
                        console.log(err)
                    }
                })  
                // res.render('active',{'hlink': Hlink});
            }
        }

    if(count == 0)
    {
        res.render('active',{'hlink': Hlink});
    }
    else
    {
        console.log("User Already Exists !!!");
        res.send("<br/><br/><p id='print' style='background-color: #e96767; font-size: 30px; text-align: center; padding: 15px; font-weight:bolder;'> Oops !! User Already Exists !!     <br/><br/>Click here to Register Again : <a href='http://localhost:4000'> http://localhost:4000 </a></p>");
        // res.render("reg.ejs");
    }   
})
})  

// app.post("/register",(req,res)=>
// {
//     var Hlink = randomString(30, "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ");
//     var data = req.body;

//     var pd = data.Password;
//     var pds = pd + `${Salt}`;
//     var Pwd = md5(pds);

//     var sql = `INSERT INTO Users(Name,Password,Email_ID,Salt,HLink,Status) VALUES("${data.Name}","${Pwd}","${data.Email_ID}","${Salt}","${Hlink}");`

//     conn.query(sql, (err,result,fields)=>
//     {
//         if(err)
//         {
//             console.log(err);
//         }
//         else
//         {
//             res.render("active.ejs",
//             {
//                 hlink: Hlink,
//             })
//         }
//     })
// })

app.get("/createpsw/:hlink",(req,res)=>
{
    // var link = req.params.hlink;

    var hbefore = req.params.hlink;
    var h = hbefore.split(":")[1] ;
    console.log(h);
    var sql = `SELECT CreatedAt FROM Users WHERE Hlink = "${h}";`
    conn.query(sql, (err,result)=>
    {
        console.log(sql)
        if(err)
        {
            console.log(err)
        }

        console.log(result);
        var t = JSON.stringify(result);
        console.log("t");
        console.log(result,"time")
        var currTime = new Date().toTimeString();
        console.log("currTime = "+currTime);

        var time = new Date(new Date(result[0].CreatedAt).getTime() + 1 * 60000).toTimeString();
        console.log("Time = "+time)
        if(currTime < time)
        {
            res.render('createpsw');
        }
        else{
            res.send("<br/><br/><p id='print' style='background-color: #e96767; font-size: 30px; text-align: center; padding: 15px; font-weight:bolder;'> Oops !! Link is Expired now !! <br/><br/>You need to Register yourself again : <a href='http://localhost:4000'> http://localhost:4000 </a></p>");

            var sql2 = `DELETE FROM Users WHERE Hlink = "${h}";`;
            conn.query(sql2, (err,rst) =>
            {
                if(err)
                    throw err;
                console.log(sql2);
                console.log(rst);
            })
        }
    }) 
})

app.post("/createpsw/:hlink",(req,res)=>
{
    var data = req.body;
    var hbefore = req.params.hlink;
    var h = hbefore.split(":")[1] ;
    console.log(h)
    var Salt = randomString(4, "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ");

    let pd = data.Password;
    let pds = pd+`${Salt}`;
    let Pwd = md5(pds);

    console.log("Password : "+Pwd);
    // var sql = `UPDATE Users SET Status = "Active" AND Password = "${Pwd}" AND Salt = "${Salt}" WHERE Hlink = "${h}";`;
    var sql = `UPDATE Users SET Status = "Active",password = "${Pwd}",Salt = "${Salt}" WHERE Hlink = "${h}";`;

    console.log("Query : "+sql)
    conn.query(sql, (err,result) =>
    {
        if(err)
        {
            console.log(err);
        }
        else
        {
            console.log(result)
            res.send("<br/><br/><p id='print' style='background-color: beige; font-size: 30px; text-align: center; padding: 15px;'> You're Active Now, Click here to Login : <a href='http://localhost:4000/login'> http://localhost:4000/login </a></p>");
        }
    })
})

app.get('/tasks', (req,res)=>
{
    res.render("tasks");
})

app.get('/login',(req,res)=>
{
    res.render("login");
})

app.get('/kuku',(req,res)=>
{
    res.render("Kuku_Cube.ejs");
})

app.get('/t3', (req,res)=>
{
    res.render("Tic_Tac_Toe");
})

app.get('/dynamo',(req,res)=>
{
    res.render("dynamotbl");
})

app.get('/sorting', (req,res)=>
{
    res.render("Sorting");
})

app.get('/jsevents',(req,res) =>
{
    res.render("JS_EventTable");
})

app.get('/dynamic_query',(req,res)=>
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
app.get('/search_detail',(req,res)=>
{
    // res.render("Search_Detail")
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

app.get('/delimeter_search',(req,res)=>
{
    const baseUrl = url.parse(req.url,true);
    let srch = baseUrl.query.srch;
    let srch_string = srch;

    console.log(srch);

    if(srch == undefined)
    {
        srch = "_rutvi^bedi";
    }
        // var sql = `SELECT * FROM Stu WHERE SID=${srch};`;
        // var consol = parse(`SID=${srch}`);
        // console.log(consol);

        let ss = srch;

        function split_str(ss)
        {
            if(ss.match("_"))
            {
                ss = ss.replace("_","-_");
                // fnames = ss.split("-");
            }

            if(ss.match("^"))
            {
                ss = ss.replace("^","-^");
                // lnames = ss.split("-");
            }
            
            if(ss.match("$"))
            {
                ss = ss.replace("$","-$");
                // email_ids = ss.split("-");
            }
            if(ss.match("}"))
            {
                ss = ss.replace("}","-}");
                console.log(" } Branch", ss);
            }
            if(ss.match("{"))
            {
                ss = ss.replace("{","-{");
                console.log(" { Address", ss);
            }
            if(ss.match(":"))
            {
                ss = ss.replace(":","-:");
                console.log(": Phone", ss);
            }

            let splitted = ss.split("-");
            console.log("split_2",splitted);

            return splitted
        }

        const str_arr = split_str(ss);

        function create_arr(str_arr)
        {
            const fname_arr = [];
            const lname_arr = [];
            const email_arr = [];
            const branch_arr = [];
            const address_arr = [];
            const phone_arr = [];

            for(let S of str_arr)
            {
                if(S.match("_"))
                {
                    const fnames = S.split("_");
                    for(let i=1; i<fnames.length; i++)
                    {
                        fname_arr.push(fnames[i]);
                    }
                }
                if(S.match("^"))
                {
                    const lnames = S.split("^");
                    for(let i=1; i<lnames.length; i++)
                    {
                        lname_arr.push(lnames[i]);
                    }
                }
                if(S.match("$"))
                {
                    const email_ids = S.split("$");
                    for(let i=1; i<email_ids.length; i++)
                    {
                        email_arr.push(email_ids[i]);
                    }
                }
                if(S.match("}"))
                {
                    const branch = S.split("}");
                    for(let i=1; i<branch.length; i++)
                    {
                        branch_arr.push(branch[i]);
                    }
                }
                if(S.match("{"))
                {
                    const address = S.split("{");
                    for(let i=1; i<address.length; i++)
                    {
                        address_arr.push(address[i]);
                    }
                }
                if(S.match(":"))
                {
                    const phone = S.split(":");
                    for(let i=1; i<phone.length; i++)
                    {
                        phone_arr.push(phone[i]);
                    }
                }
                else
                {
                    console.log("Delimeter not defined ");
                    
                        // alert("Delimeter not defined");
            
                }

            }


        function createSubQ(fieldname, arr)
        {
            let str = "";
            for(let f of arr)
            {
                // if(arr.length > 1)
                // {
                //     str += `${fieldname} = "${f}" OR `
                // }
                // else
                // {
                //     str += `${fieldname} = "${f}" `
                // }
                if(arr.length > 1)
                {
                    str += `${fieldname} LIKE "%${f}%" OR `
                }
                else
                {
                    str += `${fieldname} LIKE "%${f}%" `
                }
            }

            if(arr.length>1)
            {
                str = str.trimEnd();
                str = str.substring(0, str.lastIndexOf(" "));
            }
            return str;
        }

        let fname = createSubQ("Name", fname_arr);
        let lname = createSubQ("Surname", lname_arr);
        let email = createSubQ("Email_ID", email_arr);
        let br = createSubQ("Branch", branch_arr);
        let add = createSubQ("Address", address_arr);
        let ph = createSubQ("Phone", phone_arr);

        fname_arr.length == 0 ? fname = true : fname;
        lname_arr.length == 0 ? lname = true : lname;
        email_arr.length == 0 ? email = true : email;
        branch_arr.length == 0 ? br = true : br;
        address_arr.length == 0 ? add = true : add;
        phone_arr.length == 0 ? ph = true : ph;


        let qu = `SELECT * FROM Stu WHERE ${fname} AND ${lname} AND ${email} AND ${br} AND ${add} AND ${ph};`;
        console.log(qu);

        return qu;

    }
        //trial

        // const str = '_a^b_c';
        // const str_res = str.split(/[_\^]/);
        // let first_res = str.split(/[_]/);
        // let sec_res = str.split(/[\^/]/);

        // console.log(str_res);
        // console.log(first_res);
        // console.log(sec_res);

        // const char_1 = '_';
        // const char_2 = '^';
        // console.log(str.indexOf(char_1));
        // let count = parseInt(str.indexOf(char_1));
        // const str_res2 = str.charAt(count);
        // console.log("String : "+str_res2);
        // console.log(str.indexOf(char_2))

    const query  = create_arr(str_arr);
        
    conn.query(query, function(err,result,fields)
    {
        if(err)
        {
            console.log(err);
        }

        else
        {
            console.log(query);
            res.render("Delimeter_Search.ejs",
            {
                res : result,
                error : undefined,
                fields : fields,
                srch: srch_string
            })
        }
    })
})

app.get('/attendance_report',(req,res)=>
{
    const baseUrl = url.parse(req.url, true);
    console.log(baseUrl);
    console.log(baseUrl.query);
    let currPage = baseUrl.query.pageID;
    let month = baseUrl.query.month;
    let col = baseUrl.query.colName;
    let order = baseUrl.query.orderby;
    
    if (month == undefined)
    {
        month = 12;
    } 
    if((currPage&&col&&order) == undefined)
    {
        col = "Sid",
        order = "asc",
        currPage = 1
    }

    const sql1 = `SELECT Attendance_Master.SID as Sid, Stu.Name as Name, SUM(Attendance) as pDays,((SUM(Attendance)*100)/COUNT(Attendance)) as Average_Att FROM Stu RIGHT JOIN Attendance_Master ON Stu.SID = Attendance_Master.SID where month(Att_Date)='${month}' group by Attendance_Master.SID,Stu.Name ORDER BY ${col} ${order}  LIMIT  ${(currPage-1) * 20},${20};` 
    // const sql2 =  (sql1*100)/30; 
    // console.log(sql2);


    // const sql = `SELECT 
    //             Attendance_Master.SID AS Sid,
    //             Stu.Name AS FName,
    //             SUM(Attendance_Master.Attendance) AS pDays,
    //             (SUM(Attendance_Master.Attendance) * 100) / COUNT(Attendance_Master.Attendance) AS percent
    //         FROM
    //             Stu
    //                 LEFT JOIN
    //             Attendance_Master ON Attendance_Master.SID = Stu.SID
    //         WHERE
    //             MONTH(Attendance_Master.Att_Date) = '1'
    //         GROUP BY Attendance_Master.SID, Stu.Name;`
    
    conn.query(sql1, function (err, result, fields) {
        if (err) {
            console.log(err);
        }
        else {
            console.log(result);
            res.render("Attendance.ejs",
                {
                    PID: currPage,
                    res: result,
                    fields: fields,
                    month: month,
                    col: col,
                    order: order
                })
        }
    });
})

app.get('/result_report',(req,res)=>
{
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

app.get('/result_report/AttDetails', (req,res)=>
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
})

/////////////////////////////////////////// JOB Application Form CRUD using AJAX
app.get('/jobapp_ajax',(req,res)=>
{
    const baseUrl = url.parse(req.url, true);
    res.render("p.ejs");
})

app.get("/jobapp_ajax/update", (req, res) => {
    res.render("p.ejs");
  });
  
  app.post("/jobapp_ajax/update/basic", (req, res) => {
    let data = req.body;
    let id = req.body.id;
    console.log(id)
    console.log(data)
    var query_1 = `UPDATE Basic_Deets SET FName="${data.FirstName}",LName="${data.LastName}",Dsg="${data.Dsg}",Add1="${data.Add1}",Add2="${data.Add2}",Email_ID="${data.Email_ID}",Phone_No="${data.Phone_No}",City="${data.City}",State="${data.State}",Gender="${data.Gender}",Zip_Code="${data.Zip_Code}",Rel_Status="${data.Rel_Status}",DOB="${data.yr}-${data.mnth}-${data.dt}" WHERE EID = ${id};`
    // var query_2 = `UPDATE School_Deets SET Board_Name="${data.Course}",Passing_Yr="${data.Passing_Yr}",Percentage="${data.Percentage}" WHERE EID = ${id};`;
    // var query_3 = `UPDATE Work_Exp SET Company_Name="${data.Company}",Dsg="${data.Dsg}",Exp_From="${data.expfryr}-${data.expfrmnth}-${data.expfrdt}",Exp_To="${data.exptoyr}-${data.exptomnth}-${data.exptodt}" WHERE EID = ${id};`
    // // var query_4 = `UPDATE Tech_Known SET Tech_Name="${data.Tech}",Tech_Exp="${data[level0]}" WHERE EID=${id};`
    // var query_5 = `UPDATE Lang_Known SET Lang_Name="${data.Language}",LRead="${data.Read}",LWrite="${data.Write}",LSpeak="${data.Speak}" WHERE EID=${id};`
    // var query_6 = `UPDATE Ref_Contact SET RFName="${data.RefName}",Contact_No="${data.RefContact_No}",Relation="${data.RefRelation}" WHERE EID=${id};`
    // var query_7 = `UPDATE Preferences SET Pref_Loc="${data.Pref_Loc}",Notice_Period="${data.Notice}",Expected_CTC="${data.Exp_CTC}",Current_CTC="${data.Cur_CTC}",Department="${data.Dept}" WHERE EID=${id};`
    conn.query(query_1, (err,result)=>
    {
        if(err)
        {
            console.log(err);
        }
        else
        {
            res.json(result);
            console.log("Basic Details Updated");
        }
    })
  });
  
  app.post("/jobapp_ajax/update/edu", (req, res) => {
    let data = req.body;
    let id = req.body.id;
    console.log("Data:"+JSON.stringify(data));
    var C = data.Course;
    var PY = data.Passing_Yr;
    var P = data.Percentage;
  
    for(let i=0;i<C.length;i++)
    {
      if(C[i]!="")
      {
  
        var query_2 = `UPDATE School_Deets SET Board_Name="${C[i]}",Passing_Yr="${PY[i]}",Percentage="${P[i]}" WHERE EID = ${id};`;
       
        conn.query(query_2, (err,result)=>
        {
            if(err)
            {
                console.log(err);
            }
            else
            {
                console.log("Education Details Updated");
            }
        })
      }
    }
    res.end()
  });
  
  app.post("/jobapp_ajax/update/work", (req, res) => {
    let data = req.body;
    let id = req.body.id;
    
    var query_3 = `UPDATE Work_Exp SET Company_Name="${data.Company}",Dsg="${data.Dsg}",Exp_From="${data.expfryr}-${data.expfrmnth}-${data.expfrdt}",Exp_To="${data.exptoyr}-${data.exptomnth}-${data.exptodt}" WHERE EID = ${id};`
    
    conn.query(query_3, (err,result)=>
    {
        if(err)
        {
            console.log(err);
        }
        else
        {
            res.json(result);
            console.log("Work Experience Details Updated");
        }
    })
  });
  
  app.post("/jobapp_ajax/update/lang", (req, res) => {
    let data = req.body;
    let id = req.body.id;
   
  
    var query_5 = `UPDATE Lang_Known SET Lang_Name="${data.Language}",LRead="${data.Read}",LWrite="${data.Write}",LSpeak="${data.Speak}" WHERE EID=${id};`
    
    conn.query(query_5, (err,result)=>
    {
        if(err)
        {
            console.log(err);
        }
        else
        {
            res.json(result);
            console.log("Langauge Details Updated");
        }
    })
  });
  
  app.post("/jobapp_ajax/update/tech", (req, res) => {
    let data = req.body;
    let id = req.body.id;
    
    var query_4 = `UPDATE Tech_Known SET Tech_Name="${data.Tech}",Tech_Exp="${data[level0]}" WHERE EID=${id};`
    
    conn.query(query_4, (err,result)=>
    {
        if(err)
        {
            console.log(err);
        }
        else
        {
            res.json(result);
            console.log("Technology Details Updated");
        }
    })
  });
  
  app.post("/jobapp_ajax/update/pref", (req, res) => {
    let data = req.body;
    let id = req.body.id;
   
    var query_7 = `UPDATE Preferences SET Pref_Loc="${data.Pref_Loc}",Notice_Period="${data.Notice}",Expected_CTC="${data.Exp_CTC}",Current_CTC="${data.Cur_CTC}",Department="${data.Dept}" WHERE EID=${id};`
    conn.query(query_7, (err,result)=>
    {
        if(err)
        {
            console.log(err);
        }
        else
        {
            res.json(result);
            console.log("Preference Details Updated");
        }
    })
  });
  
  app.post("/jobapp_ajax/update/ref", (req, res) => {
    let data = req.body;
    let id = req.body.id;
   
    var query_6 = `UPDATE Ref_Contact SET RFName="${data.RefName}",Contact_No="${data.RefContact_No}",Relation="${data.RefRelation}" WHERE EID=${id};`
    
    conn.query(query_6, (err,result)=>
    {
        if(err)
        {
            console.log(err);
        }
        else
        {
            res.json(result);
            console.log("Reference Details Updated");
        }
    })
  });
  
  app.get("/jobapp_ajax/dbfetch", (req, res) => {
    let id = req.query.id;
  
    var sql_1 = `SELECT FName,LName,Dsg,Add1,Add2,Email_ID,Phone_No,City,State,Gender,Zip_Code,Rel_Status,DOB FROM Basic_Deets WHERE EID=${id};SELECT Board_Name,Passing_Yr,Percentage FROM School_Deets WHERE EID=${id};SELECT EID,Company_Name,Dsg,Exp_From,Exp_To FROM Work_Exp WHERE EID=${id};SELECT Tech_Name,Tech_Exp FROM Tech_Known WHERE EID=${id};SELECT Lang_Name,LRead,LWrite,LSpeak FROM Lang_Known WHERE EID=${id};SELECT RFName,Contact_No,Relation FROM Ref_Contact WHERE EID=${id};SELECT Pref_Loc,Notice_Period,Expected_CTC,Current_CTC,Department FROM Preferences WHERE EID=${id};`;
    // var sql_2= ';`;'
    // var sql_3 = ``;
    // var sql_4 = ``;
    // var sql_5 = ``;
    // var sql_6 = ``;
    // var sql_7 = ``;
  
    // var sql =  `${sql_1} ${sql_2} ${sql_3} ${sql_4} ${sql_5} ${sql_6} ${sql_7}`;
    // let sql = `${sql_1};${sql_2}`;
    // conn.query(sql, [1,2,3,4,5,6,7], function(err,result,fields)
    conn.query(sql_1, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        // res.json([result[0],result[1],result[2],result[3],result[4],result[5],result[6]]);
        res.send(result);
        // res.send({res:result})
        // res.render("p.ejs");
      }
    });
  });
  
  app.post("/jobapp_ajax/insert/basic", (req, res) => {
    // res.send("HELLo");
    let data = req.body;
    // var sql2 = `INSERT INTO Basic_Deets(FName,LName,Dsg,Add1,Add2,Email_ID,Phone_No,City,State,Gender,Zip_Code,Rel_Status,DOB) VALUES("${data.FirstName}","${data.LastName}","${data.Designation}", "${data.Email_ID}", "${data.Add1}", "${data.Add2}", "${data.City}", "${data.Phone_No}", "${data.State}", "${data.Gender}", "${data.Zip_Code}", "${data.Rel_Status}","${data.yr}-${data.mnth}-${data.dt}");`
    var sql2 = `INSERT INTO Basic_Deets(FName,LName,Dsg,Add1,Add2,Email_ID,Phone_No,City,State,Gender,Zip_Code,Rel_Status,DOB) VALUES("${data.FirstName}","${data.LastName}","${data.Designation}", "${data.Add1}", "${data.Add2}", "${data.Email_ID}", "${data.Phone_No}","${data.City}", "${data.State}", "${data.Gender}", "${data.Zip_Code}", "${data.Rel_Status}", "${data.yr}-${data.mnth}-${data.dt}");`;
    conn.query(sql2, function (err, result) {
      if (err) {
        console.log(err);
      } else {
        res.json({ id: result.insertId });
        console.log("basic details inserted");
      }
    });
  
    // function insertId()
    // {
    //     const myPr = new Promise((resolve,reject)=>
    //     {
    //             conn.query(sql2, function(err,result)
    //             {
    //                 if(err)
    //                 {
    //                     console.log("Error = " + err)
    //                     console.log("HELLO from if error")
    //                 }
    //                 else
    //                 {
    //                     lastInsertedID = result.insertId;
    //                     console.log("HELLO FROM else")
    //                     console.log("Inserted Successfully");
  
    //                     resolve();
    //                 }
    //             })
    //     })
    //     return myPr;
    // }
    // insert_data()
  });
  
  app.post("/jobapp_ajax/insert/edu", (req, res) => {
    let data = req.body;
    // var sql2 = `INSERT INTO Basic_Deets(FName,LName,Dsg,Add1,Add2,Email_ID,Phone_No,City,State,Gender,Zip_Code,Rel_Status,DOB) VALUES("${data.FirstName}","${data.LastName}","${data.Designation}", "${data.Email_ID}", "${data.Add1}", "${data.Add2}", "${data.City}", "${data.Phone_No}", "${data.State}", "${data.Gender}", "${data.Zip_Code}", "${data.Rel_Status}","${data.yr}-${data.mnth}-${data.dt}");`
    // var sql2 = `INSERT INTO Basic_Deets(FName,LName,Dsg,Add1,Add2,Email_ID,Phone_No,City,State,Gender,Zip_Code,Rel_Status,DOB) VALUES("${data.FirstName}","${data.LastName}","${data.Designation}", "${data.Add1}", "${data.Add2}", "${data.Email_ID}", "${data.Phone_No}","${data.City}", "${data.State}", "${data.Gender}", "${data.Zip_Code}", "${data.Rel_Status}", "${data.yr}-${data.mnth}-${data.dt}");`
    let lastInsertedID = req.body.id;
    // let lastInsertedID = undefined;
  
    console.log(data);
  
    // res.render("form")
  
    async function insert_data() {
      //await insertId()
      console.log("lastInsertedID : " + lastInsertedID);
      // sql2="";
      for (let i = 0; i < data.Course.length; i++) {
        if (data.Course[i] != "") {
          var sql2 = `INSERT INTO School_Deets(EID,Board_Name,Passing_Yr,Percentage) VALUES("${lastInsertedID}","${data.Course[i]}","${data.Passing_Yr[i]}","${data.Percentage[i]}");`;
          conn.query(sql2, function (err, result) {
            if (err) {
              console.log(err);
            } else {
              console.log("Edu Inserted");
            }
          });
        }
      }
    }
    insert_data();
  });
  // FOR WORK Experience
  app.post("/jobapp_ajax/insert/work", (req, res) => {
    let data = req.body;
    // var sql2 = `INSERT INTO Basic_Deets(FName,LName,Dsg,Add1,Add2,Email_ID,Phone_No,City,State,Gender,Zip_Code,Rel_Status,DOB) VALUES("${data.FirstName}","${data.LastName}","${data.Designation}", "${data.Email_ID}", "${data.Add1}", "${data.Add2}", "${data.City}", "${data.Phone_No}", "${data.State}", "${data.Gender}", "${data.Zip_Code}", "${data.Rel_Status}","${data.yr}-${data.mnth}-${data.dt}");`
    //var sql2 = `INSERT INTO Basic_Deets(FName,LName,Dsg,Add1,Add2,Email_ID,Phone_No,City,State,Gender,Zip_Code,Rel_Status,DOB) VALUES("${data.FirstName}","${data.LastName}","${data.Designation}", "${data.Add1}", "${data.Add2}", "${data.Email_ID}", "${data.Phone_No}","${data.City}", "${data.State}", "${data.Gender}", "${data.Zip_Code}", "${data.Rel_Status}", "${data.yr}-${data.mnth}-${data.dt}");`
  
    let lastInsertedID = req.body.id;
  
    console.log(data);
  
    // res.render("form")
  
    async function insert_data() {
      // await insertId()
      console.log("lastInsertedID : " + lastInsertedID);
  
      for (let i = 0; i < data.Company.length; i++) {
        if (data.Company[i] != "") {
          var sql2 = `INSERT INTO Work_Exp(EID,Company_Name,Dsg,Exp_From,Exp_To) VALUES("${lastInsertedID}", "${data.Company[i]}","${data.Dsg[i]}","${data.expfryr[i]}-${data.expfrmnth[i]}-${data.expfrdt}","${data.exptoyr[i]}-${data.exptomnth[i]}-${data.exptodt}");`;
          conn.query(sql2, function (err, result) {
            if (err) {
              console.log(err);
            } else {
              console.log("Work Inserted");
            }
          });
        }
      }
    }
    insert_data();
  });
  
  ////////FOR Technologies Known
  
  app.post("/jobapp_ajax/insert/tech", (req, res) => {
    let data = req.body;
    // var sql2 = `INSERT INTO Basic_Deets(FName,LName,Dsg,Add1,Add2,Email_ID,Phone_No,City,State,Gender,Zip_Code,Rel_Status,DOB) VALUES("${data.FirstName}","${data.LastName}","${data.Designation}", "${data.Email_ID}", "${data.Add1}", "${data.Add2}", "${data.City}", "${data.Phone_No}", "${data.State}", "${data.Gender}", "${data.Zip_Code}", "${data.Rel_Status}","${data.yr}-${data.mnth}-${data.dt}");`
    // var sql2 = `INSERT INTO Basic_Deets(FName,LName,Dsg,Add1,Add2,Email_ID,Phone_No,City,State,Gender,Zip_Code,Rel_Status,DOB) VALUES("${data.FirstName}","${data.LastName}","${data.Designation}", "${data.Add1}", "${data.Add2}", "${data.Email_ID}", "${data.Phone_No}","${data.City}", "${data.State}", "${data.Gender}", "${data.Zip_Code}", "${data.Rel_Status}", "${data.yr}-${data.mnth}-${data.dt}");`
  
    let lastInsertedID = req.body.id;
  
    console.log(data);
  
    // res.render("form")
  
    async function insert_data() {
      // await insertId()
      console.log("lastInsertedID : " + lastInsertedID);
  
      for (let i = 0; i < data.Tech.length; i++) {
        if (data.Tech[i] != "") {
          var sql2 =
            `INSERT INTO Tech_Known(EID,Tech_Name,Tech_Exp) VALUES("${lastInsertedID}","${data.Tech[i]}", '` +
            data["level" + i] +
            `');`;
          conn.query(sql2, function (err, result) {
            if (err) {
              console.log(err);
            } else {
              console.log("Tech Inserted");
            }
          });
        }
      }
    }
    insert_data();
  });
  
  app.post("/jobapp_ajax/insert/lang", (req, res) => {
    let data = req.body;
    // var sql2 = `INSERT INTO Basic_Deets(FName,LName,Dsg,Add1,Add2,Email_ID,Phone_No,City,State,Gender,Zip_Code,Rel_Status,DOB) VALUES("${data.FirstName}","${data.LastName}","${data.Designation}", "${data.Email_ID}", "${data.Add1}", "${data.Add2}", "${data.City}", "${data.Phone_No}", "${data.State}", "${data.Gender}", "${data.Zip_Code}", "${data.Rel_Status}","${data.yr}-${data.mnth}-${data.dt}");`
    //var sql2 = `INSERT INTO Basic_Deets(FName,LName,Dsg,Add1,Add2,Email_ID,Phone_No,City,State,Gender,Zip_Code,Rel_Status,DOB) VALUES("${data.FirstName}","${data.LastName}","${data.Designation}", "${data.Add1}", "${data.Add2}", "${data.Email_ID}", "${data.Phone_No}","${data.City}", "${data.State}", "${data.Gender}", "${data.Zip_Code}", "${data.Rel_Status}", "${data.yr}-${data.mnth}-${data.dt}");`
  
    let lastInsertedID = req.body.id;
  
    console.log(data);
  
    // res.render("form")
  
    async function insert_data() {
      // await insertId()
      console.log("lastInsertedID : " + lastInsertedID);
  
      ///FOR Languages Known
      for (let i = 0; i < data.Language.length; i++) {
        if (data.Language[i] != "") {
          var sql2 = `INSERT INTO Lang_Known(EID,Lang_Name,LRead,LWrite,LSpeak) VALUES("${lastInsertedID}","${data.Language[i]}","${data.Read[i]}","${data.Write[i]}","${data.Speak[i]}");`;
          conn.query(sql2, function (err, result) {
            if (err) {
              console.log(err);
            } else {
              console.log("Language Inserted");
            }
          });
        }
      }
    }
    insert_data();
  });
  
  // FOR Reference Details
  app.post("/jobapp_ajax/insert/ref", (req, res) => {
    let data = req.body;
    // var sql2 = `INSERT INTO Basic_Deets(FName,LName,Dsg,Add1,Add2,Email_ID,Phone_No,City,State,Gender,Zip_Code,Rel_Status,DOB) VALUES("${data.FirstName}","${data.LastName}","${data.Designation}", "${data.Email_ID}", "${data.Add1}", "${data.Add2}", "${data.City}", "${data.Phone_No}", "${data.State}", "${data.Gender}", "${data.Zip_Code}", "${data.Rel_Status}","${data.yr}-${data.mnth}-${data.dt}");`
    //var sql2 = `INSERT INTO Basic_Deets(FName,LName,Dsg,Add1,Add2,Email_ID,Phone_No,City,State,Gender,Zip_Code,Rel_Status,DOB) VALUES("${data.FirstName}","${data.LastName}","${data.Designation}", "${data.Add1}", "${data.Add2}", "${data.Email_ID}", "${data.Phone_No}","${data.City}", "${data.State}", "${data.Gender}", "${data.Zip_Code}", "${data.Rel_Status}", "${data.yr}-${data.mnth}-${data.dt}");`
  
    let lastInsertedID = req.body.id;
  
    console.log(data);
  
    // res.render("form")
  
    async function insert_data() {
      // await insertId()
      console.log("lastInsertedID : " + lastInsertedID);
  
      for (let i = 0; i < data.RefName.length; i++) {
        if (data.RefName[i] != "") {
          var sql2 = `INSERT INTO Ref_Contact(EID,RFName,Contact_No,Relation) VALUES("${lastInsertedID}","${data.RefName[i]}","${data.RefContact_No[i]}","${data.RefRelation[i]}");`;
          conn.query(sql2, function (err, result) {
            if (err) {
              console.log(err);
            } else {
              console.log("Ref Inserted");
            }
          });
        }
      }
    }
    insert_data();
  });
  
  app.post("/jobapp_ajax/insert/pref", (req, res) => {
    let data = req.body;
    // var sql2 = `INSERT INTO Basic_Deets(FName,LName,Dsg,Add1,Add2,Email_ID,Phone_No,City,State,Gender,Zip_Code,Rel_Status,DOB) VALUES("${data.FirstName}","${data.LastName}","${data.Designation}", "${data.Email_ID}", "${data.Add1}", "${data.Add2}", "${data.City}", "${data.Phone_No}", "${data.State}", "${data.Gender}", "${data.Zip_Code}", "${data.Rel_Status}","${data.yr}-${data.mnth}-${data.dt}");`
    // var sql2 = `INSERT INTO Basic_Deets(FName,LName,Dsg,Add1,Add2,Email_ID,Phone_No,City,State,Gender,Zip_Code,Rel_Status,DOB) VALUES("${data.FirstName}","${data.LastName}","${data.Designation}", "${data.Add1}", "${data.Add2}", "${data.Email_ID}", "${data.Phone_No}","${data.City}", "${data.State}", "${data.Gender}", "${data.Zip_Code}", "${data.Rel_Status}", "${data.yr}-${data.mnth}-${data.dt}");`
  
    let lastInsertedID = req.body.id;
  
    console.log(data);
  
    // res.render("form")
  
    async function insert_data() {
      // await insertId()
      console.log("lastInsertedID : " + lastInsertedID);
  
      // FOR Preferences
      if ("Pref_Loc" in data) {
        if (typeof data.Pref_Loc === "string") {
          var sql2 = `INSERT INTO Preferences(EID,Pref_Loc,Notice_Period,Expected_CTC,Current_CTC,Department) VALUES ("${lastInsertedID}","${data.Pref_Loc}","${data.Notice}","${data.Exp_CTC}","${data.Cur_CTC}","${data.Dept}");`;
          conn.query(sql2, function (err, result) {
            if (err) {
              console.log(err);
            } else {
              console.log("Pref Inserted");
            }
          });
        } else {
          for (let i = 0; i < data.Pref_Loc.length; i++) {
            if (data.Pref_Loc[i] != "") {
              var sql2 = `INSERT INTO Preferences(EID,Pref_Loc,Notice_Period,Expected_CTC,Current_CTC,Department) VALUES ("${lastInsertedID}","${data.Pref_Loc[i]}","${data.Notice}","${data.Exp_CTC}","${data.Cur_CTC}","${data.Dept}");`;
              conn.query(sql2, function (err, result) {
                if (err) {
                  console.log(err);
                } else {
                  console.log("Pref Inserted");
                }
              });
            }
          }
        }
      }
    }
    insert_data();
  });


///////////////////////////////////////////////////////////
app.post('/login',(req,res)=>
{
    var data = req.body;
    var sql =  `SELECT Salt FROM Users;`;

    conn.query(sql, (err,result)=>
    {
        result.forEach(element =>
            {
                if(err)
                {
                    console.log(err);
                } 
           
            console.log(element, "[][")
            var sql2 = `SELECT COUNT(*) AS COUNT FROM Users WHERE Email_ID = "${data.Email_ID}" AND Password = "${md5(data.Psw+element.Salt)}";`
            conn.query(sql2, (err,rst)=>
            {
                if(err) 
                {
                    // throw err;
                    console.log(err);
                }
                console.log("Result = "+JSON.stringify(rst[0]));
                console.log("Result Count = "+rst[0].COUNT);
                var cnt = rst[0].COUNT;
                console.log("Count = "+cnt);
                if(cnt == 1)
                {
                    //res.send("<br/><br/><p id='print' style='background-color: #86e692; font-size: 30px; text-align: center; padding: 15px; font-weight:bolder;'> Congratulations !! You've Successfully Logged-in !</p>");
                    res.render("tasks");
                }
                // if(cnt == 0)
                // {
                //     res.send("Incorrect");
                // }
                
                // if(cnt == 0)
                // {

              
                //     // else
                //     // {
                //         res.send("<br/><br/><p id='print' style='background-color: #e96767; font-size: 30px; text-align: center; padding: 15px; font-weight:bolder;'> OOps !! Incorrect Credentials !! Please Try to Login Again !! <br/><br/><a href ='http://localhost:4000/login'> http://localhost:4000/login </a></p>");
                        
                //     //     // res.redirect("login.ejs")
                //     // }
                // }
            })
         });
    })
})

app.listen(port, ()=>
{
    console.log("Listening on Port "+port)
});