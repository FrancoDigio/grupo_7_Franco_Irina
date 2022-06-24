const fs = require('fs');
const fileName = require('../data/UsersDataBase.json');

const User = {
    //fileName : './data/UsersDataBase.json',
    
    getData: function () {
        return JSON.parse(fs.readFileSync(fileName, 'utf-8'));
    },

    create : function () {

    }
    

}

console.log(User.getData());