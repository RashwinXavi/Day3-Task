let obj1 = { name: "Person 1", age: 5 };
let obj2 = { age: 5, name: "Person 1" };

// Convert objects to strings
let str1 = JSON.stringify(obj1);
let str2 = JSON.stringify(obj2);

if (str1 === str2) {
    console.log("obj1 and obj2 are the same");
} else {
    console.log("not the same");
}