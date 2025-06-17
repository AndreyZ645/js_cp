let users = [
    {id: 1, name: 'Alex', lastname: 'Wilyam', age: 20},
    {id: 2, name: 'Steven', lastname: 'King', age: 34} 
]


function addUser(name, lastname, age) {
    let newId = users.length + 1;
    users.push({
        id: newId,
        name: name,
        lastname: lastname,
        age: age
    });
}

function updateUser(id, name, lastname, age) {
    const user = users.find(user => user.id === id);
    if (user) {
        user.name = name;
        user.lastname = lastname;
        user.age = age;
    }
}

function deleteUser(id) {
    users = users.filter(user => user.id !== id);
}

addUser("Sally", "Watter", 100);
updateUser(1, "Alex", "Wilyam", 21);
deleteUser(2);

console.log(users);