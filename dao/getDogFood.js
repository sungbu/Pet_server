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
//狗狗主粮热门
function queryDogFoodAll (success) {
    var querySql = "select * from dogProducts where classification = '进口狗粮' or classification = '国产狗粮' order by views desc limit 6;";
    var connection = createConnection();
    connection.connect();
	// connection = mysql.createConnection(connection.config)
    connection.query(querySql,function (error,result) {
        if(error){
            console.log(error);
        }else{
            success(result);
        }
    });
    connection.end();
}
//进口狗粮
function findImported (success) {
    var querySql = "select * from dogProducts where classification = '进口狗粮' order by views desc limit 8;";
    var connection = createConnection();
    connection.connect();
	// connection = mysql.createConnection(connection.config)
    connection.query(querySql,function (error,result) {
        if(error){
            console.log(error);
        }else{
            success(result);
        }
    });
    connection.end();
}
//国产狗粮
function findDomestic (success) {
    var querySql = "select * from dogProducts where classification = '国产狗粮' order by views desc limit 8;";
    var connection = createConnection();
    connection.connect();
	// connection = mysql.createConnection(connection.config)
    connection.query(querySql,function (error,result) {
        if(error){
            console.log(error);
        }else{
            success(result);
        }
    });
    connection.end();
}
//狗狗零食热门
function queryDogSnacks (success) {
    var querySql = "select * from dogProducts where classification = '磨牙洁齿' or classification = '肉制零食' order by views desc limit 6;";
    var connection = createConnection();
    connection.connect();
	// connection = mysql.createConnection(connection.config)
    connection.query(querySql,function (error,result) {
        if(error){
            console.log(error);
        }else{
            success(result);
        }
    });
    connection.end();
}
//磨牙洁齿
function dogTooth (success) {
    var querySql = "select * from dogProducts where classification = '磨牙洁齿' order by views desc limit 8;";
    var connection = createConnection();
    connection.connect();
	// connection = mysql.createConnection(connection.config)
    connection.query(querySql,function (error,result) {
        if(error){
            console.log(error);
        }else{
            success(result);
        }
    });
    connection.end();
}
//肉制零食
function dogSnacks (success) {
    var querySql = "select * from dogProducts where classification = '肉制零食' order by views desc limit 8;";
    var connection = createConnection();
    connection.connect();
	// connection = mysql.createConnection(connection.config)
    connection.query(querySql,function (error,result) {
        if(error){
            console.log(error);
        }else{
            success(result);
        }
    });
    connection.end();
}
//狗狗医疗热门
function queryDogCareAll (success) {
    var querySql = "select * from dogProducts where classification = '体内驱虫' or classification = '皮肤护理' order by views desc limit 6;";
    var connection = createConnection();
    connection.connect();
	// connection = mysql.createConnection(connection.config)
    connection.query(querySql,function (error,result) {
        if(error){
            console.log(error);
        }else{
            success(result);
        }
    });
    connection.end();
}
//体内驱虫
function insectRepellent (success) {
    var querySql = "select * from dogProducts where classification = '体内驱虫' order by views desc limit 8;";
    var connection = createConnection();
    connection.connect();
	// connection = mysql.createConnection(connection.config)
    connection.query(querySql,function (error,result) {
        if(error){
            console.log(error);
        }else{
            success(result);
        }
    });
    connection.end();
}
//皮肤护理
function dogNursing (success) {
    var querySql = "select * from dogProducts where classification = '皮肤护理' order by views desc limit 8;";
    var connection = createConnection();
    connection.connect();
	// connection = mysql.createConnection(connection.config)
    connection.query(querySql,function (error,result) {
        if(error){
            console.log(error);
        }else{
            success(result);
        }
    });
    connection.end();
}
//狗狗用品热门
function queryDogProductsAll (success) {
    var querySql = "select * from dogProducts where classification = '狗狗餐具' or classification = '狗狗住所' order by views desc limit 6;";
    var connection = createConnection();
    connection.connect();
	// connection = mysql.createConnection(connection.config)
    connection.query(querySql,function (error,result) {
        if(error){
            console.log(error);
        }else{
            success(result);
        }
    });
    connection.end();
}
//狗狗餐具
function dogTableware (success) {
    var querySql = "select * from dogProducts where classification = '狗狗餐具' order by views desc limit 8;";
    var connection = createConnection();
    connection.connect();
	// connection = mysql.createConnection(connection.config)
    connection.query(querySql,function (error,result) {
        if(error){
            console.log(error);
        }else{
            success(result);
        }
    });
    connection.end();
}
//狗狗住所
function dogResidence (success) {
    var querySql = "select * from dogProducts where classification = '狗狗住所' order by views desc limit 8;";
    var connection = createConnection();
    connection.connect();
	// connection = mysql.createConnection(connection.config)
    connection.query(querySql,function (error,result) {
        if(error){
            console.log(error);
        }else{
            success(result);
        }
    });
    connection.end();
}
function queryTabId(success,id){
    var querySql = "select * from dogProducts where id = ?";
    var connection = createConnection();
    connection.connect();
	// connection = mysql.createConnection(connection.config)
    connection.query(querySql,[id],function (error,result) {
        if(error){
            console.log(error);
        }else{
            success(result);
        }
    });
    connection.end();
}
//关键词搜索

function searchKey(success,key){
    var querySql = "select * from dogProducts where title like '%"+key+"%' limit 3;";
    var connection = createConnection();
    connection.connect();
	// connection = mysql.createConnection(connection.config)
    connection.query(querySql,[key],function (error,result) {
        if(error){
            console.log(error);
        }else{
            success(result);
        }
    });
    connection.end();
}
module.exports = {
    queryDogFoodAll : queryDogFoodAll,
    findImported : findImported,
    findDomestic : findDomestic,
    queryDogSnacks : queryDogSnacks,
    dogTooth : dogTooth,
    dogSnacks : dogSnacks,
    queryDogCareAll: queryDogCareAll,
    insectRepellent : insectRepellent,
    dogNursing : dogNursing,
    queryDogProductsAll : queryDogProductsAll,
    dogTableware : dogTableware,
    dogResidence : dogResidence,
    queryTabId : queryTabId,
    searchKey : searchKey
}