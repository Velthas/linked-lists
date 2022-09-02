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
  // Make it point to our method object literal for inheritance
  const node = Object.create(nodeMethods);

  // Initial values null per specifications
  node.value = null;
  node.next = null;

  return node;
}
