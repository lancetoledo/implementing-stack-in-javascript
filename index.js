// Import stylesheets
import "./style.css";

// ADD the Stack Class Here

class Stack {
  constructor(name) {
    this.name = name;
    this.data = [];
    this.top = 0;
  }

  push(element) {
    this.data.unshift(element);
    return "Added " + element + " to the top";
  }

  pop() {
    this.top--;
    return this.data.shift();
  }

  peek() {
    return this.data[0];
  }

  length() {
    return this.top;
  }

  print(element) {
    console.log(element);
  }

  isEmpty() {
    return this.top == 0;
  }
}

let test = new Stack("Lance's stack");

test.print(test.push(12));
test.print(test.push("You"));
test.print(test.push("Me"));
test.print(test.push("Lance"));
test.print(test.data);
test.print(test.length());
test.print(test.peek());
test.print(test.pop());

test.print(test.pop());
test.print(test.isEmpty());
test.print(test.pop());
test.print(test.pop());
test.print(test.isEmpty());
