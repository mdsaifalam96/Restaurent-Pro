export class User {
    constructor(public email: string,
                public name: string,
                private password: string) {
    }

    matches(another: User): boolean {
        return another !== undefined && another.email === this.email && another.password === this.password;
    }
}

export const users: { [key: string]: User } = {	
	'mdsaifalam96@gmail.com': new User('mdsaifalam96@gmail', 'Saif Alam', '123456'),
    'backupsaif01@gmail.com': new User('backupsaif01@gmail.com', 'Kaif', '123456'),
    'backupsaif02@gmail.com': new User('backupsaif02@gmail.com', 'Saif Alam2', '123456')
};
