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
// function isShoppingCar(success,tabId) {
    // var querySql = "select * from shoppingCar where tabId = ?;";
    // var connection = createConnection();
    // connection.connect();
    // // connection = mysql.createConnection(connection.config)
    // connection.query(querySql,[tabId],function (error,result) {
    //     if(error){
    //         console.log(error);
    //     }else{
    //         success(result[0]);
    //     }
    // });
    // connection.end();
// }
function postShopping (success,tabId,userId,num) {
    // isShoppingCar(function (lock) {
    //     console.log(lock)
    // },tabId);
    var querySql = "insert into shoppingCar(`userId`,`tabId`,`number`) values (?,?,?);";
    var connection = createConnection();
    connection.connect();
	// connection = mysql.createConnection(connection.config)
    connection.query(querySql,[userId,tabId,num],function (error,result) {
        if(error){
            console.log(error);
        }else{
            success(result);
        }
    });
    connection.end();
    // console.log(tabId,num)
}
function shoppingCarNum (success,userId) {
    var querySql = "select * from shoppingCar where userId = ?";
    var connection = createConnection();
    connection.connect();
	// connection = mysql.createConnection(connection.config)
    connection.query(querySql,[userId],function (error,result) {
        if(error){
            console.log(error);
        }else{
            success(result);
        }
    });
    connection.end();
}
function addDomShoopingCar (success,tabId){
    var querySql = "select * from dogProducts where id = ?";
    var connection = createConnection();
    connection.connect();
	// connection = mysql.createConnection(connection.config)
    connection.query(querySql,[tabId],function (error,result) {
        if(error){
            console.log(error);
        }else{
            success(result);
        }
    });
    connection.end();
}
module.exports = {
    postShopping : postShopping,
    shoppingCarNum : shoppingCarNum,
    addDomShoopingCar : addDomShoopingCar
}