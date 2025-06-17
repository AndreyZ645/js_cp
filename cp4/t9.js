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


class Contact extends Email {
  constructor(email, phone) {
    super(email);
    this.phone = phone;
  }

  get phoneType() {
    if (!this.phone.startsWith('+')) {
      return 'Неизвестный';
    }
    
    const number = this.phone.slice(1);
    const length = number.length;
    
    if (length == 12) return 'Мобильный';
    if (length == 18) return 'Городской';
    return 'Неизвестный';
  }
}

let contact_1 = new Contact('$email@mail.ru', '+790012345678');
console.log('Телефон 1:', contact_1.phone);
console.log('Тип телефона 1:', contact_1.phoneType);

console.log('--------------');

let contact_2 = new Contact('email@mail.ru', '88005553535');
console.log('Телефон 2:', contact_2.phone);
console.log('Тип телефона 2:', contact_2.phoneType);

console.log('--------------');

console.log('Валидность email:', contact_1.isValid);
contact_1.setEmail = ['new', 'gmail', 'com'];
console.log('Новый email:', contact_1.email);