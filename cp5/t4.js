function kingSayd(string) {
    if (string.startsWith("Король сказал:")) {
        return string;
    }
    return "Король сказал: " + string;
}

string_1 = 'Захватите замок!';
console.log(kingSayd(string_1));

string_2 = 'Король сказал: Хватит!';
console.log(kingSayd(string_2));