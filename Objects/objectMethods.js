let user = {
  name: "Tomek",
  age: 51,
  profession: "Mountaineering",

  showInfo() {
    console.log(`I am ${this.name} .I love to do ${this.profession}!!!`);
  },
};

user.showProfession(); //I am Tomek. I love to do Mountaineering!!!

// constructor and new keyword

function MyChoice(choice) {
  this.choice = choice;

  this.showChoice = function () {
    console.log("I love to learn " + this.choice);
  };
}

let topic = new MyChoice("CSS");

topic.showChoice(); // I love to learn CSS
