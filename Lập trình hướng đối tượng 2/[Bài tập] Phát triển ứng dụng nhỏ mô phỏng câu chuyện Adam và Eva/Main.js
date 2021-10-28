let apple = new Apple(10);
let human = new Human("Như Anh", "Male", 50);

function test() {
    console.log(apple.getWeight())
    console.log(human.getWeight())
    human.eat(apple)
    console.log(apple.getWeight())
    console.log(human.getWeight())
}

test()