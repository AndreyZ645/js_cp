class Email {
    constructor(email) {
        this.email = email;
    }

    get isValid() {
        if (this.email.includes('@')) {
                let parts = this.email.split('@');
                let login = parts[0];
                if (parts[1].includes('.')) {
                    let domainParts = parts[1].split('.');
                    let badSymbols = ['*', '#', '$', '%', '^'];
                    
                    for (let i = 0; i < badSymbols.length; i++) {
                        if (login.indexOf(badSymbols[i]) !== -1) {
                            return false;
                        }
                    }
                    
                    return domainParts[1].length <= 3;
                }
                else {
                    return false;
                }
            }

            else {
                return false;
            }
    }

    set setEmail(parts) {
        this.email = parts[0] + '@' + parts[1] + '.' + parts[2];
    }
}

let email_1 = new Email('email@gmail.com');
console.log('Правильный email:', email_1.isValid);

let email_2 = new Email('$email@mail.ru');
console.log('Правильный email:', email_2.isValid);

email_2.setEmail = ['vasyapupkin', 'gmail', 'com'];
console.log('После сеттера:', email_2.email);