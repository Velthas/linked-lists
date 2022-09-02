// Methods for inheritance
const linkedListMethods = {
  append(value) {
    // Save a reference to the head
    const head = this;

    // Function to recursively traverse list
    const traverseAndAppend = (node) => {
      if (node.next === null) {
        // If true we reached end of list
        // Use factory to create the node
        // and attach it its value
        const newNode = CreateNode();
        newNode.value = value;
        node.next = newNode; // New node already points to null
      } else traverseAndAppend(node.next); // Recursively traverse until null is found
    };

    // Start traversing from the head (duh)
    traverseAndAppend(head);
  },
  prepend(value) {
    const head = this; // Keep a reference to head for clarity
    const newNode = CreateNode(); // Create a new node

    newNode.value = head.value; // Make the new node be a copy of head
    newNode.next = head.next; // which will now be the second node in the list

    head.value = value; // Change the head value and next props.
    head.next = newNode; // this way linList methods are retained
  },
  size() {
    const size = (function traverseAndCount(node) {
      // Recursively traverse linked list
      if (node.next === null) return 1; // Base case will be reached at end of list
      return 1 + traverseAndCount(node.next); // after which we just add one for each node traversed
    }(this));
    return size;
  },
  head() {
    return this;
  },
  tail() {
    if (this.next === null) return this; // Head is tail if there is only one node
    let listNode = this; // Get a reference to head for clarity
    while (listNode.next !== null) {
      // Sprinkle in some iteration for good measure
      listNode = listNode.next;
    }
    return listNode; // Once the loop exits, the remaining node will be the tail
  },
  at(index) {
    // Recursively traverse the list until index is reached
    function returnAt(indexs, node) {
      if (indexs === 0) {
        return node; // When index = 0 we have the right node, which we return per specification
      } if (indexs > 0 && node.next === null) {
        return 'Sorry pal'; // Cheeky, just in case someone tries to look farther than they can
      } return returnAt(indexs - 1, node.next); // Recursive step
    }
    return returnAt(index, this); // Initiate recursion
  },
  pop() {
    const size = this.size(); // We can use our method to get the size
    let i = 1; // not strictly necessary but if it works don't break it, no?
    let currentNode = this;
    while (i < size - 1) {
      currentNode = currentNode.next; // With this iterative approach
      i++; // we stop at the penultimate node, then cut off reference to the next
    }
    currentNode.next = null; // Stray object will be garbage collected
  },
  contains(value) {
    function findValue(node) {
      if (node.value === value) return true; // If the value is found, return true
      if (node.next === null) { return false; } // If we reach end of list, we can assume false
      return findValue(node.next); // Recursively step through until false or true is returned.
    }
    return findValue(this); // Pass a reference to the head
  },
  find(value) {
    function returnIndex(node) {
      if (node.value === value) return 0; // When you hit the base case return
      if (node.next === null) return null; // When no hit is found, return null per specification
      return 1 + returnIndex(node.next); // Depending on how many steps this takes we will get index
    }
    return returnIndex(this);
  },
  toString() {
    let headString = `( ${this.value} )`; // The head is the only step not preceded by an arrow
    function stringifyLinkedList(node) {
      if (node.next === null) { // When the next node is null, append the value and '-> Null'
        headString = `${headString} -> ( ${node.value} )` + ' -> Null';
        return headString; // Then return the string
      }

      headString = `${headString} -> ( ${node.value} )`; // Otherwise just append the value
      return stringifyLinkedList(node.next); // then call again until the final string bubbles up
    }
    return stringifyLinkedList(this.next);
  },
  insertAt(value, index) {
    if (index === 0) this.prepend(value); // Use existing method for head replacement
    // Prepare variables to keep track of nodes as we move through the loop
    let currentNode = this;
    let previousNode = null;
    // Creat ethe new node and assign it the new value
    const newNode = CreateNode();
    newNode.value = value;
    // Iteratively reach the index for insertion
    for (let i = 1; i <= index; i++) {
      // All while keeping track of nodes as we move through
      previousNode = currentNode;
      currentNode = currentNode.next;
    }
    // Once loop has exited we have the node
    // that precedes the one to insert, and
    // the one that should follow it.
    previousNode.next = newNode;
    newNode.next = currentNode;
    // Return the list
    return this;
  },
  removeAt(index) {
    // Create variables to keep track of nodes
    let currentNode = this;
    let previousNode = null;
    let nextNode = this.next; // This time we also need to know which node follows the current one
    // We iterate until the proper index is reached
    for (let i = 1; i <= index; i++) {
      previousNode = currentNode;
      currentNode = currentNode.next;
      nextNode = currentNode.next;
    }
    // We simply cut off the 'current node'
    // by liking the one preceding it to the one following it
    // Once that object is not referred by anything else in code,
    // it automatically gets collected by JS garbage collection.
    previousNode.next = nextNode;
    // Return the list once done
    return this;
  },
};

// Factory for linked list
function LinkedList(headValue) {
  // Make it point to our method object literal for inheritance
  const linkList = Object.create(linkedListMethods);

  linkList.value = headValue;
  linkList.next = null;

  return linkList;
}

// Factory for linked list node
function CreateNode() {
  // Our nodes actually don't need inheritance
  const node = Object.create({});

  // Initial values null per specifications
  node.value = null;
  node.next = null;

  return node;
}
