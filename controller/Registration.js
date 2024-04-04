import { randomStr } from "../public/js/randomStringGen.js";
import { conn } from "../config/config.js";

export const get_Registration = (req,res) =>
{
    res.render("reg.ejs");
}

export const post_Registration = (req,res)=>
{
    console.log(req.body);
    var data = req.body;
    var Hlink = randomStr(30, "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ");
    
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
}

export const get_createpswhlink = (req,res)=>
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
}

export const post_createpswhlink = (req,res)=>
{
    var data = req.body;
    var hbefore = req.params.hlink;
    var h = hbefore.split(":")[1] ;
    console.log(h)
    var Salt = randomStr(4, "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ");

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
}

