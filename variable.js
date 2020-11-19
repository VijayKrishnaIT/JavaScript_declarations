// var wish = "welcome to nodejs";

// console.log(wish); //welcome to nodejs

var tbl_name = "employees";

var sal = 50000;

var sql_query = `select * from ${tbl_name} where esal>${sal}`;

// console.log(sql_query); //select * from employees where esal>50000

var u_name = "admin";

var u_pwd = "test123";

var login_query = `select * from ${tbl_name} where uname='${u_name}' and upwd='${u_pwd}'`;

console.log(login_query); //select * from employees where uname='admin' and upwd = "test123";

var decimal = 100;

var double = 100.12345;

var hexadecimal = 0x123abc;

var octal = 0o123;

var binary = 0b1010;

console.log(decimal, double, hexadecimal, octal); //100 100.12345 1194684 83

var flag = "true";

console.log(flag); //true
