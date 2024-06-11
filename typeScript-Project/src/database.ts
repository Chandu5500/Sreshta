interface MongoDB{
    Url:string;
}
interface MySql{
    host:string;
    user:string;
    password:string;
    dbname:string
}
interface Oracle{
    username:string;
    password:string;
    database:string;
}
class Database{
    public Connection<T>(connectionString:T){
        for(var property in connectionString){
            console.log(`${property} : ${connectionString[property]}`);
        }
    }
}

console.log(`------------Connection with Oracle------------`)
let ora = new Database();
ora.Connection<Oracle>({username: "scott", password: "tiger", database:"empdb"});
console.log(`------------Connection with MySql------------`)
let mysql = new Database();
mysql.Connection<MySql>({host: "localhost", user:"root", password:"1234", dbname:"studb"});
