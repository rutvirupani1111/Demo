import { conn } from "../config/config.js";
import md5 from "md5";

export const post_login = (req,res)=>
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
}

export const get_login = (req,res)=>
{
    res.render("login");
}