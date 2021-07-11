
//var example;
// console.log(example);
// example = "I'm the example!";

// console.log(example);
// let example = "I'm the example!";

/////////////////////////////////////////


//1
// var hello;
// console.log(hello);                                   
// hello = 'world';
// > undefined

//2
// var needle;
// function test(){
//     var needle;
//     needle = 'magnet';
//     console.log(needle);
// }
// needle = 'haystack';
// test();
// output> magnet

//3
// var brendan;
// function print(){
//     brendan = 'only okay';
//     console.log(brendan);
// }
// brendan = 'super cool';
// console.log(brendan);
// > super cool

//4
// var food;
// function eat(){
//     var food;
//     food = 'half-chicken';
//     console.log(food);
//     food = 'gone';
// }
// food = 'chicken';
// console.log(food);
// eat();
// > chicken
// > half-chicken

//5
// var mean;
// mean();
// console.log(food);
// var mean = function() {
//     var food;
//     food = "chicken";
//     console.log(food);
//     food = "fish";
//     console.log(food);
// }
// console.log(food);

// Error

//6
// var genre;
// function rewind() {
//     var genre;
//     genre = "rock";
//     console.log(genre);
//     genre = "r&b";
//     console.log(genre);
// }
// console.log(genre);
// genre = "disco";
// rewind();
// console.log(genre);

// undefined
// rock
// r&b
// disco

//7
// var dojo;
// function learn() {
//     var dojo;
//     dojo = "seattle";
//     console.log(dojo);
//     dojo = "burbank";
//     console.log(dojo);
// }
// dojo = "san jose";
// console.log(dojo);
// learn();
// console.log(dojo);
// >> output:
// san jose
// seattle
// burbank
// san jose


// 8
// function makeDojo(name, students){
//     const dojo = {};
//     dojo.name = name;
//     dojo.students = students;
//     if(dojo.students > 50){
//         dojo.hiring = true;
//     }
//     else if(dojo.students <= 0){
//         dojo = "closed for now";
//     }
//     return dojo;
// }
// console.log(makeDojo("Chicago", 65));
// console.log(makeDojo("Berkeley", 0));

// >> output
// { name: 'Chicago', students: 65, hiring: true }

//         dojo = "closed for now";
// TypeError: Assignment to constant variable.