import mysql from 'mysql';

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

conn.connect(function(err)
{
    if(err)
        console.log(err);
    else
        console.log("Database connected successfully !!")
})

export {conn}