

//  JavaScript Object Notation(json)


// Object
const contactBook = {
  contacts: [
    {
      name: "Sara",
      age: 27,
      email: "Sara@example.com"
    },
    {
      name: "Sam",
      age: 30,
      email: "Sam@example.com"
    }
  ]
};


// Object to String
const jsonString = JSON.stringify(contactBook, null, 2);
console.log(jsonString);

// Add new contact

const newContact = {
  name: "Chris",
  age: 31,
  email: "Chris@example.com"
};

contactBook.contacts.push(newContact);
console.log(contactBook);

// delete
// filter only works on array and returns a new array
// let r = ["a", "b", "c"]
// r.filter((contact, inx, array) => contact == "a")


// contactBook.contacts = contactBook.contacts.filter((contact) => contact.name !== 'Sam')

// findIndex  returns index
const ind = contactBook.contacts.findIndex((contact) => {
  return contact.name == 'Sam'
})
// splice updates our array 
contactBook.contacts.splice(ind, 1);

console.log(contactBook);


// update 
const ind1 = contactBook.contacts.findIndex((contact) => {
  return contact.name == 'Sara'
})
contactBook.contacts[ind1].email = "Sara99@gmail.com"

console.log(contactBook);