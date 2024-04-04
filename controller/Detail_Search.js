import { conn } from "../config/config.js";
import url from "url";

export const Detail_Search = (req,res)=>
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
}