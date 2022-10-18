

const obj = {
    name:"nik",
    age: 56,
    children: {
        name: "sara",
        age: 25,
        frends: {
            name: "rich",
            age: 15,
        }
    }
}

const obj2 = JSON.parse(JSON.stringify(obj))


obj2.children.age = 26
obj2.children.frends.name = "natasha"
console.log(obj);
console.log(obj2);