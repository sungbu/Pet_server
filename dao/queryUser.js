var mysql = require("mysql");

function createConnection () {
    var connection = mysql.createConnection({
        host: "106.13.111.39",
        port: "3306",
        user: "pets",
        password: "pets20010623",
        database: "pets"
    })
    return connection
}
function queryUser (phone,success) {
    var querySql = "select * from users where phone = ?;";
    var connection = createConnection();
    connection.connect();
	// connection = mysql.createConnection(connection.config)
    connection.query(querySql,[phone],function (error,result) {
        if(error){
            console.log(error);
        }else{
            success(result);
        }
    });
    connection.end();
}
function insetUser(success,user,email,phone,psw) {
    var querySql = "insert into users(`phone`,`user`,`email`,`password`) values (?,?,?,?);";
    var connection = createConnection();
    connection.connect();
	// connection = mysql.createConnection(connection.config)
    connection.query(querySql,[phone,user,email,psw],function (error,result) {
        if(error){
            console.log(error);
        }else{
            success(result);
        }
    });
    connection.end();
}
module.exports = {
    queryUser : queryUser,
    insetUser : insetUser
}