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
};

const nodeMethods = {};

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
