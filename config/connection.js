var mysql = require("mysql");
var connection;
if(process.env.JAWSBD_URL){
  connection = mysql.createConnection(process.env.JAWSBD_URL);
}
else{
  connection = mysql.createConnection({
    port: 3306,
  host: "ffn96u87j5ogvehy.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  user: "hvs9npf4zai6cxl0",
  password: "qo46x544n7ewjp1f",
  database: "kz6mv1qoax1bwwlt"
  });
}


connection.connect(function(err){
  if (err) throw err;

  console.log("connected as id " + connection.threadId);
});

module.exports = connection;
