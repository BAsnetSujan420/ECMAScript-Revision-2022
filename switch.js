const tech = "Learning React";
switch (tech) {
  case "Learning React":
  case "Learning CSS":
  case "Learning Web Development": {
    let message = "I am Frontend Developer.";
    console.log(message);
    break;
  }
  case "Learning Flutter": {
    let message = "I am Mobile Developer.";
    console.log(message);
  }
  case "Learning Python": {
    let message = "I am Data Engineer.";
    console.log(message);
    break;
  }
  default: {
    console.log("I am blue colar worker!!!");
    break;
  }
}
