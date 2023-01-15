## Dependencies

[NodeJs](https://nodejs.org/en/) - A JavaScript runtime environment\
[Express](https://expressjs.com/) - A NodeJs framework\
[MongoDB](https://www.mongodb.com/) - A NoSQL database

## Setup and run

to setup this project, run the following commands on your terminal

```bash
1. to clone the project `git clone`
2. navigate to the project directory `cd node-crud`
3. install cesary packages, modules `npm install`
4. to run the project `npm start`
5. using POSTMAN you can use this default url of `http://localhost:3000`
```

## emi API
```
curl --location --request GET 'http://localhost:3000/emi/get-emi?currency=NGN&rate=2&month=10&principal=200'
```

## duplicates API

```
curl --location --request POST 'http://localhost:3000/util/has-duplicates' \
--header 'Content-Type: application/json' \
--data-raw '{
    "str1": "dsd",
    "str2": "dsd"
}'



```