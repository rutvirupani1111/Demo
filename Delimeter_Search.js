import express from "express";
import url from 'url';
import bodyParser from 'body-parser';
import mysql from 'mysql';
import { parse } from 'querystring';
import { error } from 'console';
import { Script } from "vm";


const app = express();
const port = 5000;


app.use(bodyParser.urlencoded({extended:true}))

var conn = mysql.createConnection(
    {
        host: "localhost",
        user: "root",
        password: "rutvi",
        database: "nodesql"
    },
    {
        multipleStatements : true
    }
);

app.set("view engine", "ejs");

app.get("/", (req,res)=>
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

app.listen(port, function()
{
    console.log("Listening on port " +port);
})