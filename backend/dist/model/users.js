"use strict";
exports.__esModule = true;
var User = /** @class */ (function () {
    function User(email, name, password) {
        this.email = email;
        this.name = name;
        this.password = password;
    }
    User.prototype.matches = function (another) {
        return another !== undefined && another.email === this.email && another.password === this.password;
    };
    return User;
}());
exports.User = User;
exports.users = {	
	'mdsaifalam96@gmail.com': new User('mdsaifalam96@gmail', 'Saif Alam', '123456'),
    'backupsaif01@gmail.com': new User('backupsaif01@gmail.com', 'Kaif', '123456'),
    'backupsaif02@gmail.com': new User('backupsaif02@gmail.com', 'Saif Alam2', '123456')
	
};
