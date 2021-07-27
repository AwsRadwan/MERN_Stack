const express = require("express");
const app = express();
const port = 8000;
var faker = require('faker');

app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

class User {
    constructor(){
        this.id = faker.datatype.uuid();
        this.first_name = faker.name.firstName();
        this.last_name = faker.name.lastName();
        this.phone_number = faker.phone.phoneNumber();
        this.email = faker.internet.email();
        this.password = faker.internet.password();
    }
}

class Company {
    constructor(){
        this.id = faker.datatype.uuid();
        this.name = faker.company.companyName();
        this.address = {
            "street": faker.address.streetName(),
            "city": faker.address.cityName(),
            "state": faker.address.state(),
            "zipCode": faker.address.zipCode(),
            "country": faker.address.county(),
        };
    }

}

app.get("/api/user", (req, res) => {
    // res.send("Our express api server is now sending this over to the browser... Hello Aws");
    res.json( new User );
    });


app.get("/api/company", (req, res) => {
    // res.send("Our express api server is now sending this over to the browser... Hello Aws");
    let x = new Company;
    res.json( x );
    });

app.get("/api/user/company", (req, res) => {
    // res.send("Our express api server is now sending this over to the browser... Hello Aws");
    let x = {"Company": new Company, "User": new User};
    res.json( x );
    });



const server = app.listen(8000, () =>
    console.log(`Server is locked and loaded on port ${server.address().port}!`)
);