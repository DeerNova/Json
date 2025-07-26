
import json
from pprint import pprint
# Dictionary
name = 'Sara'
contact_book = {
    "contacts": [
        {
            'name': name,
            "age": 27,
            "email": "Sara@example.com"
        },
        {
            "name": "Sam",
            "age": 30,
            "email": "Sam@example.com"
        }
    ]
}


# DICTIONARY to STRING
json_string = json.dumps(contact_book, indent=2)
# print(json_string)


# Add new contact
new_contact = {
    "name": "Chris",
    "age": 31,
    "email": "Chris@example.com"
}

if "contacts" not in contact_book:
  contact_book["contacts"] = []
contact_book["contacts"].append(new_contact)

# 2  

# new_contacts = contact_book.get("contacts", [])
# new_contacts.append(new_contact)
# contact_book["contacts"] = new_contacts

# pprint(contact_book)


# Add delete contact

for contact in contact_book["contacts"]:
  if contact['name'] == "Sam":
    contact_book["contacts"].remove(contact)
    break
pprint(contact_book)

# Update
for contact in contact_book["contacts"]:
  if contact['name'] == "Sara":
    contact['email'] = "Sara99@gmail.com"

pprint(contact_book)
  