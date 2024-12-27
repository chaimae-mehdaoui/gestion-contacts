import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ContactList from "./components/ContactList";
import ContactDetail from "./components/ContactDetail";
import EditContact from "./components/EditContact";
import "./App.css";
const initialContacts = [
  { id: "1", name: "Henri Helvetica", username: "HenriHelvetica", description: "How To WebPageTest", image: "https://via.placeholder.com/150" },
  { id: "2", name: "Dennis Beatty", username: "DennisBeatty", description: "React Enthusiast", image: "https://via.placeholder.com/150" },
  { id: "3", name: "Ryan Dahl", username: "RyanDahl", description: "Creator of Node.js", image: "https://via.placeholder.com/150" },
];

function App() {
  const [contacts, setContacts] = useState(initialContacts);

  return (
    <Router>
      <div style={{ display: "flex", height: "100vh" }}>
        <ContactList contacts={contacts} setContacts={setContacts} />
        <Routes>
          <Route path="/contacts/:id" element={<ContactDetail contacts={contacts} />} />
          <Route
            path="/contacts/:id/edit"
            element={<EditContact contacts={contacts} setContacts={setContacts} />}
          />
          <Route path="/" element={<div>Select a contact</div>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;