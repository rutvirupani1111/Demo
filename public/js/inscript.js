var now = new Date();
var datetime = now.toLocaleString();

// Insert date and time into HTML
// document.getElementById("datetime").innerHTML = datetime;

// document.getElementById("datetime").style.color = "violet";
// document.getElementById("datetime").style.marginLeft = "45%";



function rst()
{
  alert("Form is successfully Reset !!");
}
function sub()
{
  alert("Form is successfully Submitted on "+ datetime);
}

function testResults (form) {
  var inputValue = form.FirstName.value;
  alert ("Hey " + inputValue);
}

const email = document.getElementById("Email_ID");
const messagePara = document.getElementById("msg");
//   email.addEventListener('change', () => {
//            //messagePara.innerHTML = "Email input changed";
//            alert("Email Input changed");
//   });
               

////////USING AJAX
let id=undefined
async function job_ajax()
{
// var forms = document.querySelectorAll("job_app");
var forms = document.getElementById("form");
    
    const obj = new URLSearchParams(new FormData(forms));
    console.log(obj)

    let res1 = await fetch("http://localhost:4000/job_app/insert/basic",
    {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        method : 'POST',
        body: obj
    })
    .then((response)=>{
        return response.json()
    })
    id=res1.id
    console.log("id = "+id);
}

async function job_ajax_edu()
{
// var forms = document.querySelectorAll("job_app");
var forms = document.getElementById("form");
    
    const obj = new URLSearchParams(new FormData(forms));

    obj.append('id', id);
    console.log(obj)

    let res1 = await fetch("http://localhost:4000/job_app/insert/edu",
    {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        method : 'POST',
        body: obj
    })
    .then((response)=>{
        return response.json()
    })
    id=res1.id
}
async function job_ajax_work()
{
// var forms = document.querySelectorAll("job_app");
var forms = document.getElementById("form");                
    const obj = new URLSearchParams(new FormData(forms));
    obj.append('id', id);
    console.log(obj)
    let res1 = await fetch("http://localhost:4000/job_app/insert/work",
    {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        method : 'POST',
        body: obj
    })
    .then((response)=>{
        return response.json()
    })
    id=res1.id
}
async function job_ajax_tech()
{
// var forms = document.querySelectorAll("job_app");
var forms = document.getElementById("form");
    
    const obj = new URLSearchParams(new FormData(forms));
    obj.append('id', id);
    console.log(obj)

    let res1 = await fetch("http://localhost:4000/job_app/insert/tech",
    {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        method : 'POST',
        body: obj
    })
    .then((response)=>{
        return response.json()
    })
    id=res1.id
}
async function job_ajax_lang()
{
// var forms = document.querySelectorAll("job_app");
var forms = document.getElementById("form");
    
    const obj = new URLSearchParams(new FormData(forms));
    obj.append('id', id);
    console.log(obj)

    let res1 = await fetch("http://localhost:4000/job_app/insert/lang",
    {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        method : 'POST',
        body: obj
    })
    .then((response)=>{
        return response.json()
    })
    id=res1.id
}
async function job_ajax_ref()
{
// var forms = document.querySelectorAll("job_app");
var forms = document.getElementById("form");
    
    const obj = new URLSearchParams(new FormData(forms));
    obj.append('id', id);
    console.log(obj)

    let res1 = await fetch("http://localhost:4000/job_app/insert/ref",
    {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        method : 'POST',
        body: obj
    })
    .then((response)=>{
        return response.json()
    })
    id=res1.id
}
async function job_ajax_pref()
{
// var forms = document.querySelectorAll("job_app");
var forms = document.getElementById("form");
    
    const obj = new URLSearchParams(new FormData(forms));
    obj.append('id', id);
    console.log(obj)

    let res1 = await fetch("http://localhost:4000/job_app/insert/pref",
    {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        method : 'POST',
        body: obj
    })
    .then((response)=>{
        return response.json()
    })
    id=res1.id
}
// job_ajax()  
var pg=0
                    // function onload()
                    // {
                    //     for(var i=0;i<6;i++)
                    //     {
                    //         // var field_id = document.querySelector("forms[i]");
                    //         var field_id = forms[i];
                    //         console.log(field_id);
                    //         console.log(forms[i]);
                    //     }
                    
                    // }
                    let p1 = document.getElementById("Basic_Details");
                    let p2 = document.getElementById("Education_Details");
                    
                    let p3 = document.getElementById("Work_Exp");
                    let p4 = document.getElementById("Lang_Known");
                    let p5 = document.getElementById("Tech_Known");
                    let p6 = document.getElementById("Ref_Contact");
                    let p7 = document.getElementById("Pref");
                
                    // for(i=2;i<8;i++)
                    // {
                    //     p+i.setAttribute("hide", true);
                    // console.log(pi);
                    // }
                
                    // for(let i=2;i<8;i++)
                    // {
                    //     console.log("p"+i.removeAttribute("hidden"));
                    // }
                    const url1 = window.location.href;

                    if(url1.includes("id"))
                    {
                        console.log(url1.split("=")[1])
                        basicShow(url1.split("=")[1]);
                        // eduShow();
                        // workShow();
                        // langShow();
                        // techShow();
                        // refShow();
                        // prefShow();
                    }
                    
                    async function update_basic()
                    {
                        var forms = document.getElementById("form");
                        if(url1.includes("id"))
                        {
                            let id = url1.split("=")[1];
                            const obj = new URLSearchParams(new FormData(forms));
                            obj.append('id', id);

                            let up1 = await fetch("http://localhost:4000/job_app/update/basic",{
                                method:"post",
                                body:obj,
                                // id:id,
                                headers: {
                                    'Content-Type': 'application/x-www-form-urlencoded'
                                }   
                            })
                            .then((response) => {
                                return response.json();
                            })
                        }                                
                    }
                    async function update_edu()
                    {
                        var forms = document.getElementById("form");
                        if(url1.includes("id"))
                        {
                            let id = url1.split("=")[1];
                            const obj = new URLSearchParams(new FormData(forms));
                                obj.append('id', id);
                                // obj.append('SchID', SchID);

                            let up1 = await fetch("http://localhost:4000/job_app/update/edu",{
                                method:"post",
                                body:obj,
                                headers: {
                                    'Content-Type': 'application/x-www-form-urlencoded'
                                }   
                            })
                            .then((response) => {
                                return response.json();
                            })

                        }                                
                    }
                    async function update_work()
                    {
                        var forms = document.getElementById("form");
                        if(url1.includes("id"))
                        {
                            let id = url1.split("=")[1];
                            const obj = new URLSearchParams(new FormData(forms));
                                obj.append('id', id);

                            let up1 = await fetch("http://localhost:4000/job_app/update/work",{
                                method:"post",
                                body:obj,
                                headers: {
                                    'Content-Type': 'application/x-www-form-urlencoded'
                                }   
                            })
                            .then((response) => {
                                return response.json();
                            })

                        }                                
                    }
                    async function update_lang()
                    {
                        var forms = document.getElementById("form");
                        if(url1.includes("id"))
                        {
                            let id = url1.split("=")[1];
                            const obj = new URLSearchParams(new FormData(forms));
                                obj.append('id', id);

                            let up1 = await fetch("http://localhost:4000/job_app/update/lang",{
                                method:"post",
                                body:obj,
                                headers: {
                                    'Content-Type': 'application/x-www-form-urlencoded'
                                }   
                            })
                            .then((response) => {
                                return response.json();
                            })

                        }                                
                    }
                    async function update_tech()
                    {
                        var forms = document.getElementById("form");
                        if(url1.includes("id"))
                        {
                            let id = url1.split("=")[1];
                            const obj = new URLSearchParams(new FormData(forms));
                                obj.append('id', id);

                            let up1 = await fetch("http://localhost:4000/job_app/update/tech",{
                                method:"post",
                                body:obj,
                                headers: {
                                    'Content-Type': 'application/x-www-form-urlencoded'
                                }   
                            })
                            .then((response) => {
                                return response.json();
                            })

                        }                                
                    }
                    async function update_pref()
                    {
                        var forms = document.getElementById("form");
                        if(url1.includes("id"))
                        {
                            let id = url1.split("=")[1];
                            const obj = new URLSearchParams(new FormData(forms));
                                obj.append('id', id);

                            let up1 = await fetch("http://localhost:4000/job_app/update/pref",{
                                method:"post",
                                body:obj,
                                headers: {
                                    'Content-Type': 'application/x-www-form-urlencoded'
                                }   
                            })
                            .then((response) => {
                                return response.json();
                            })

                        }                                
                    }
                    async function update_ref()
                    {
                        var forms = document.getElementById("form");
                        if(url1.includes("id"))
                        {
                            let id = url1.split("=")[1];
                            const obj = new URLSearchParams(new FormData(forms));
                                obj.append('id', id);

                            let up1 = await fetch("http://localhost:4000/job_app/update/ref",{
                                method:"post",
                                body:obj,
                                headers: {
                                    'Content-Type': 'application/x-www-form-urlencoded'
                                }   
                            })
                            .then((response) => {
                                return response.json();
                            })

                        }                                
                    }


                    /////POPULATE DATA LOGIC


                       
                    async function basicShow(id)
                    {
                        var forms = document.getElementById("form");
    
                        // const obj = new URLSearchParams(new FormData(forms));
                        // obj.append('id', id);
                        // console.log(obj)

                        let res1 = await fetch("http://localhost:4000/job_app/dbfetch?id="+id)
                        .then((response)=>{
                            return response.json()
                        })
                        // FirstName = res1[0].FirstName;
                        // LastName = res1[0].LastName;

                        document.getElementById("FirstName").setAttribute("value",res1[0][0].FName);
                        document.getElementById("LastName").setAttribute("value", res1[0][0].LName);
                        document.getElementById("Designation").setAttribute("value",res1[0][0].Dsg);
                        document.getElementById("Add1").innerText= res1[0][0].Add1
                        document.getElementById("Add2").innerText= res1[0][0].Add2 
                        document.getElementById("Email_ID").setAttribute("value", res1[0][0].Email_ID);
                        document.getElementById("Phone_No").setAttribute("value", res1[0][0].Phone_No);
                        
                        document.getElementById("City").setAttribute("value",res1[0][0].City);
                        // document.getElementById("State").setAttribute("value",res1[0][0].State);
                        document.getElementById("State").value = res1[0][0].State
                        // document.getElementById("Gender").setAttribute("value",res1[0][0].Gender);
                        if (res1[0][0].Gender == 'M') {
                            document.getElementById('Male').checked = true
                        } else {
                            document.getElementById('Female').checked = true
                        }
                        document.getElementById("Zip_Code").setAttribute("value",res1[0][0].Zip_Code);
                        document.getElementById("Rel_Status").value = res1[0][0].Rel_Status;
                        var date = res1[0][0].DOB.split("T")
                        var d = date[0].split("-")
                        document.getElementById("yr").value = d[0]
                        document.getElementById("mnth").value = d[1]
                        document.getElementById("dt").value = d[2]

                        for(let i=0;i<res1[1].length;i++)
                        {
                            // console.log("Board".value)
                            document.getElementById("Board"+i).value = res1[1][i].Board_Name;
                            document.getElementById("Passing_Yr"+i).setAttribute("value",res1[1][i].Passing_Yr);
                            document.getElementById("Percentage"+i).setAttribute("value",res1[1][i].Percentage);
                        }
                        // document.getElementById("Board").value = res1[1][0].Board_Name;
                        // document.getElementById("Passing_Yr").setAttribute("value",res1[1][0].Passing_Yr);
                        // document.getElementById("Percentage").setAttribute("value",res1[1][0].Percentage);

                        // console.log("RESULT - 2 "+res1[2][0].Company_Name);
                        for(let i=0;i<res1[2].length;i++)
                        {    
                            document.getElementById("Company"+i).setAttribute("value",res1[2][i].Company_Name);
                            document.getElementById("Dsg"+i).setAttribute("value",res1[2][i].Dsg);

                                var expfrdate = res1[2][i].Exp_From.split("T");
                                var d1 = expfrdate[0].split("-");
                                console.log("date = " +expfrdate[0].split("-"))
                                document.getElementById("expfryr"+i).value = d1[0]
                                document.getElementById("expfrmnth"+i).value = d1[1]
                                document.getElementById("expfrdt"+i).value = d1[2]

                                var exptodate = res1[2][i].Exp_To.split("T");
                                var d2 = exptodate[0].split("-");
                                document.getElementById("exptoyr"+i).value = d2[0]
                                document.getElementById("exptomnth"+i).value = d2[1]
                                document.getElementById("exptodt"+i).value = d2[2]
                        }

                        console.log(res1[3][1])
                        console.log("res1[5][0]  "+res1[5]);
                        console.log("Lang_Name = "+res1[4][0].Lang_Name)
                        // console.log("res1[6][0]  "+stringify(res1[6]));
                        res1[3].forEach((ele,index,arr)=>{
                            if(ele.Tech_Name == "PHP") 
                        {
                            document.getElementById("PHP").checked = true;
                            
                            if(ele.Tech_Exp == "Beginner")
                            {
                                document.getElementById("Beginner").removeAttribute("disabled");
                                document.getElementById("Beginner").checked = true;
                            }
                            if(ele.Tech_Exp == "Mediator")
                            {
                                document.getElementById("Mediator").removeAttribute("disabled");
                                document.getElementById("Mediator").checked = true;
                            }
                            if(ele.Tech_Exp == "Expert")
                            {
                                document.getElementById("Expert").removeAttribute("disabled");
                                document.getElementById("Expert").checked = true;
                            }
                        }
                        if(ele.Tech_Name == "MySQL") 
                        {
                            document.getElementById("MySQL").checked = true;
                            if(ele.Tech_Exp == "Beginner")
                            {
                                document.getElementById("Beginner2").removeAttribute("disabled");
                                document.getElementById("Beginner2").checked = true;
                            }
                            if(ele.Tech_Exp == "Mediator")
                            {
                                document.getElementById("Mediator2").removeAttribute("disabled");
                                document.getElementById("Mediator2").checked = true;
                            }
                            if(ele.Tech_Exp == "Expert")
                            {
                                document.getElementById("Expert2").removeAttribute("disabled");
                                document.getElementById("Expert2").checked = true;
                            }
                        }
                        if(ele.Tech_Name == "Laravel") 
                        {
                            document.getElementById("Laravel").checked = true;
                            if(ele.Tech_Exp == "Beginner")
                            {
                                document.getElementById("Beginner3").removeAttribute("disabled");
                                document.getElementById("Beginner3").checked = true;
                            }
                            if(ele.Tech_Exp == "Mediator")
                            {
                                document.getElementById("Mediator3").removeAttribute("disabled");
                                document.getElementById("Mediator3").checked = true;
                            }
                            if(ele.Tech_Exp == "Expert")
                            {
                                document.getElementById("Expert3").removeAttribute("disabled");
                                document.getElementById("Expert3").checked = true;
                            }
                        }
                        if(ele.Tech_Name == "Oracle") 
                        {
                            document.getElementById("Oracle").checked = true;
                            if(ele.Tech_Exp == "Beginner")
                            {
                                document.getElementById("Beginner4").removeAttribute("disabled");
                                document.getElementById("Beginner4").checked = true;
                            }
                            if(ele.Tech_Exp == "Mediator")
                            {
                                document.getElementById("Mediator4").removeAttribute("disabled");
                                document.getElementById("Mediator4").checked = true;
                            }
                            if(ele.Tech_Exp == "Expert")
                            {
                                document.getElementById("Expert4").removeAttribute("disabled");
                                document.getElementById("Expert4").checked = true;
                            }
                        }
                        })
                        console.log("Tech_Name[1] = "+res1[3][1].Tech_Name);
                        
                        // if(document.getElementById("Hindi").checked == true)
                        // {
                        //     document.getElementById("HRead").checked
                        // }
                        res1[4].forEach((ele,index,arr)=>{
                            console.log("Lang_name = "+ele.Lang_Name)
                            var lang = ele.Lang_Name;                            
                            if(ele.Lang_Name == "Hindi")
                            {
                                console.log("HELELLLLELLELo")
                                document.getElementById("Hindi").setAttribute("checked","true");
                                // document.getElementById("HRead").setAttribute("disabled","false");
                                document.getElementById("HRead").removeAttribute("disabled");
                                document.getElementById("HWrite").removeAttribute("disabled");
                                document.getElementById("HSpeak").removeAttribute("disabled");
                                document.getElementById("HRead").setAttribute("checked","true");
                                document.getElementById("HWrite").checked = true;
                                document.getElementById("HSpeak").checked = true;
                            }
                            if(ele.Lang_Name == "English")
                            {
                                console.log("Lang : English")
                                document.getElementById("English").setAttribute("checked","true");
                                // document.getElementById("HRead").setAttribute("disabled","false");
                                document.getElementById("ERead").removeAttribute("disabled");
                                document.getElementById("EWrite").removeAttribute("disabled");
                                document.getElementById("ESpeak").removeAttribute("disabled");
                                document.getElementById("ERead").checked = true;
                                document.getElementById("EWrite").checked = true;
                                document.getElementById("ESpeak").checked = true;
                            }

                            if(ele.Lang_Name == "Gujarati")
                            {
                                console.log("Lang : Gujarati")
                                document.getElementById("Gujarati").setAttribute("checked","true");
                                // document.getElementById("HRead").setAttribute("disabled","false");
                                document.getElementById("GRead").removeAttribute("disabled");
                                document.getElementById("GWrite").removeAttribute("disabled");
                                document.getElementById("GSpeak").removeAttribute("disabled");
                                document.getElementById("GRead").checked = true;
                                document.getElementById("GWrite").checked = true;
                                document.getElementById("GSpeak").checked = true;
                            }

                            if(ele.Lang_Name == "Spanish")
                            {
                                console.log("Lang : Spanish")
                                document.getElementById("Spanish").setAttribute("checked","true");
                                // document.getElementById("HRead").setAttribute("disabled","false");
                                document.getElementById("SRead").removeAttribute("disabled");
                                document.getElementById("SWrite").removeAttribute("disabled");
                                document.getElementById("SSpeak").removeAttribute("disabled");
                                document.getElementById("SRead").checked = true;
                                document.getElementById("SWrite").checked = true;
                                document.getElementById("SSpeak").checked = true;
                            }
                        })
                        
                        
                        console.log(res1[5][0]);

                        for(let i=0;i<res1[5].length;i++)
                        {
                            document.getElementById("RefName"+i).setAttribute("value",res1[5][i].RFName);
                            document.getElementById("RefContact_No"+i).setAttribute("value",res1[5][i].Contact_No);
                            document.getElementById("RefRelation"+i).setAttribute("value",res1[5][i].Relation);
                        }
                        res1[6].forEach((ele,index,arr)=>{
                            if (ele.Pref_Loc == "Ahmedabad")
                            {
                                document.getElementById("Pref_Loc").value = "Ahmedabad";
                            }
                            if(ele.Pref_Loc == "Surat")
                            {
                                document.getElementById("Pref_Loc").value = "Surat";
                            }
                            if(ele.Pref_Loc == "Mumbai")
                         {
                            document.getElementById("Pref_Loc").value = "Mumbai";
                         }
                        })                             
                        
                        document.getElementById("Notice").setAttribute("value",res1[6][0].Notice_Period);
                        document.getElementById("Exp_CTC").setAttribute("value",res1[6][0].Expected_CTC);
                        document.getElementById("Cur_CTC").setAttribute("value",res1[6][0].Current_CTC);
                        
                        document.getElementById("Dept").value = res1[6][0].Department;
                        // document.getElementById("Dept").value = res1[6][1].Department;

                    }
                    function onnext()
                    {
                        pg++;
                        console.log("pg + "+pg);
                        if(pg<=0)
                        {         
                            pg=0;                                                       
                        
                            p1.removeAttribute("hidden");

                        }
                        if(pg==1){
                            // console.log(p1)
                            if(!url1.includes("id"))
                            {
                                job_ajax()
                            }
                            else
                            {
                                update_basic()
                            }
                            
                           
                            // if(url1.includes("id"))
                            // {
                            //     basicShow();
                            //     // eduShow();
                            //     // workShow();
                            //     // langShow();
                            //     // techShow();
                            //     // refShow();
                            //     // prefShow();
                            // }
                            p1.setAttribute("hidden","true")
                            p2.removeAttribute("hidden");   
                        }
                        if(pg==2)
                        {   
                            if(!url1.includes("id"))
                            {
                                job_ajax_edu()
                            }
                            else
                            {
                                update_edu()
                            }
                            
                            p2.setAttribute("hidden","true");
                            p3.removeAttribute("hidden");
                        }
                        if(pg==3)
                        {
                            if(!url1.includes("id"))
                            {
                                job_ajax_work()
                            }
                            else
                            {
                                update_work()
                            }
                            p3.setAttribute("hidden", "true");
                            p4.removeAttribute("hidden");
                        }
                        if(pg==4)
                        {
                            if(!url1.includes("id"))
                            {
                                job_ajax_lang()
                            }
                            else{
                                update_lang()
                            }
                            p4.setAttribute("hidden","true");
                            p5.removeAttribute("hidden");
                        }
                        if(pg==5)
                        {
                            if(!url1.includes("id"))
                            {
                                job_ajax_tech()
                            }
                            else{
                                update_tech()
                            }
                            
                            console.log("working pg 5")
                            // console.log(p5.id+"hide")
                            // console.log(p6.id+"show")
                            p5.setAttribute("hidden","true");
                            p6.removeAttribute("hidden");
                        }
                        if(pg==6)
                        {
                            if(!url1.includes("id"))
                            {
                                job_ajax_ref()
                            }
                            else
                            {
                                update_ref()
                            }
                            
                            p6.setAttribute("hidden","true");
                            p7.removeAttribute("hidden");
                        }
                        if(pg==7)
                        {
                            if(!url1.includes("id"))
                            {
                                job_ajax_pref()
                            }
                            else
                            {
                                update_pref()
                            }
                            p7.removeAttribute("hidden");
                        }
                    }
                
                    function onprev()
                    {
                        pg--;
                        // p1.removeAttribute("hidden",true);
                        // p2.setAttribute("hidden", true);


                        // for(let i=p2;i<8;i++)
                        // {
                        //     i.removeAttribute("hidden");
                        // }
                        console.log("pg -" +pg);
                        if(pg==7)
                        {
                            p7.removeAttribute("hidden");
                        }
                        if(pg==6)
                        {
                            p7.removeAttribute("hidden");
                            // p8.setAttribute("hidden","true");
                        }
                        if(pg==5)
                        {
                            p6.removeAttribute("hidden");
                            p7.setAttribute("hidden","true");
                        }
                        if(pg==4)
                        {
                            p5.removeAttribute("hidden");
                            p6.setAttribute("hidden","true");
                        }
                        if(pg==3)
                        {
                            p4.removeAttribute("hidden");
                            p5.setAttribute("hidden", "true");
                        }
                        if(pg==2)
                        {   
                            p3.removeAttribute("hidden");
                            p4.setAttribute("hidden","true");
                        }
                        if(pg==1){
                            console.log(p1)
                            
                            p3.setAttribute("hidden","true");
                            p2.removeAttribute("hidden");
                            // p1.setAttribute("hidden","true")
                            // p2.removeAttribute("hidden");   
                        }
                        if(pg==0){
                            p2.setAttribute("hidden","true")
                            p1.removeAttribute("hidden")
                        }

                        if(pg<=0)
                        {
                            pg=0
                        }
                    }
   