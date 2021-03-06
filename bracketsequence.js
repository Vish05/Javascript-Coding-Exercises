class Stack {
    constructor() {
      this.data = [];
    }
  
    push(element) {
      this.data.push(element);
    }
  
    pop() {
      return this.data.pop();
    }
}
  
const bracketMap = {
    "(": ")",
    "[": "]",
    "{": "}"
};

const doBracketsBalance = str => {
    // Creating Stack
    const stack = new Stack();
    
    // Looping through each bracket in the string
    for (let bracket of str) {
      
        // If the bracket is an opening bracket push it onto the stack
        if (bracketMap[bracket]) {
            stack.push(bracket);
        } else {
            // If not, then pop a bracket off the stack.
            const poppedBracket = stack.pop();
            
            // Check to see if the popped bracket is the matching bracket
            if (bracketMap[poppedBracket] !== bracket) {
            return false;
            }
        }
    }
    return stack.data.length === 0;
};
  
 
console.log(doBracketsBalance('{}'));