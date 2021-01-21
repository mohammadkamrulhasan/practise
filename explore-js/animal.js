//var depth=50;
// var animal=50;


function animalCount(depth) {
    if (depth <= 10) {
        var totalAnimal = depth * 50;
        //console.log("Number of Animal is:", totalAnimal);
        return totalAnimal;

    } else if (depth <= 20) {
        var firstPart = 10;
        var secondPart = depth - 10;
        totalAnimal = ((secondPart * 100) + (firstPart * 50));
        //console.log(" Number of Animal is:", totalAnimal);
        return totalAnimal;



    } else {
        var firstPart = 10;
        var secondPart = 10;
        var thirdPart = depth - 20;
        totalAnimal = ((thirdPart * 300) + (secondPart * 100) + (firstPart * 50));
        // console.log(" Number of Animal is:", totalAnimal);
        return totalAnimal;

    }
}
var resultAnimal = animalCount(21);
console.log("Number of Animal:", resultAnimal);