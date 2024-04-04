import exp from "constants";
import url from "url";
import { conn } from "../config/config.js";

export const jobapp_ajax = (req,res)=>
{
    const baseUrl = url.parse(req.url, true);
    res.render("p.ejs");
}

export const jobapp_ajax_update = (req, res) => {
    res.render("p.ejs");
  }

export const jobapp_ajax_update_basic = (req, res) => {
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
  }

export const jobapp_ajax_update_edu = (req, res) => {
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
  }

export const jobapp_ajax_update_work = (req, res) => {
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
  }

export const jobapp_ajax_update_lang = (req, res) => {
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
  }

export const jobapp_ajax_update_tech = (req, res) => {
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
  }

export const jobapp_ajax_update_pref = (req, res) => {
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
  }

export const jobapp_ajax_update_ref = (req, res) => {
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
  }

export const jobapp_ajax_dbfetch = (req, res) => {
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
  }

export const jobapp_ajax_insert_basic = (req, res) => {
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
  }

export const jobapp_ajax_insert_edu = (req, res) => {
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
  }

export const jobapp_ajax_insert_work = (req, res) => {
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
  }


export const jobapp_ajax_insert_tech = (req, res) => {
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
  }

export const jobapp_ajax_insert_lang = (req, res) => {
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
  }

export const jobapp_ajax_insert_ref = (req, res) => {
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
  }

export const jobapp_ajax_insert_pref = (req, res) => {
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
  }

