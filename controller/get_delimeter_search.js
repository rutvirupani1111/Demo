import { conn } from "../config/config.js";
import url from "url";
export const get_delimeter_search = (req,res)=>
{
    const baseUrl = url.parse(req.url,true);
    let srch = baseUrl.query.srch;
    let srch_string = srch;

    console.log(srch);

    if(srch == undefined)
    {
        srch = "_rutvi^bedi";
    }
        let ss = srch;

        function split_str(ss)
        {
            if(ss.match("_"))
            {
                ss = ss.replace("_","-_");
            }

            if(ss.match("^"))
            {
                ss = ss.replace("^","-^");
            }
            
            if(ss.match("$"))
            {
                ss = ss.replace("$","-$");
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
                }

            }


        function createSubQ(fieldname, arr)
        {
            let str = "";
            for(let f of arr)
            {
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
}