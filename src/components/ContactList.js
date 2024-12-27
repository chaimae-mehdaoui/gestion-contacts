import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const ContactList = ({ contacts, setContacts }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isAdding, setIsAdding] = useState(false);
  const [newContact, setNewContact] = useState({ name: "" });
  const navigate = useNavigate();

  // Filtrer les contacts en fonction de la recherche.
  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Fonction pour ajouter un contact.
  const handleAddContact = () => {
    if (newContact.name.trim() === "") {
      alert("Contact name cannot be empty!");
      return;
    }
    const newId = (contacts.length + 1).toString();
    const newContactDetails = {
      id: newId,
      name: newContact.name,
      username: newContact.name.toLowerCase().replace(/\s/g, ""),
      description: "No description provided",
      image: "https://via.placeholder.com/150",
    };
    setContacts([...contacts, newContactDetails]);
    setNewContact({ name: "" });
    setIsAdding(false);
    navigate(`/contacts/${newId}`);  // Correction ici
  };

  // Fonction pour supprimer un contact.
  const handleDelete = (id) => {
    const updatedContacts = contacts.filter((contact) => contact.id !== id);
    setContacts(updatedContacts);
    alert("Contact deleted!");
  };

  // Fonction pour rediriger vers la page d'édition.
  const handleEdit = (id) => {
    navigate(`/contacts/${id}/edit`);  // Correction ici
  };

  return (
    <nav style={{ width: "250px", padding: "1rem", borderRight: "1px solid #ccc" }}>
      {/* Barre de recherche */}
      <input
        type="text"
        placeholder="Search contacts..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        style={{
          width: "100%",
          padding: "0.5rem",
          marginBottom: "1rem",
          border: "1px solid #ccc",
          borderRadius: "4px",
        }}
      />

      {/* Bouton "New" */}
      <button
        onClick={() => setIsAdding(!isAdding)}
        style={{
          width: "100%",
          padding: "0.5rem",
          marginBottom: "1rem",
          background: "#007bff",
          color: "white",
          border: "none",
          borderRadius: "4px",
        }}
      >
        {isAdding ? "Cancel" : "New"}
      </button>

      {/* Formulaire d'ajout d'un contact */}
      {isAdding && (
        <div style={{ marginBottom: "1rem" }}>
          <input
            type="text"
            placeholder="Enter contact name"
            value={newContact.name}
            onChange={(e) => setNewContact({ ...newContact, name: e.target.value })}
            style={{
              width: "100%",
              padding: "0.5rem",
              marginBottom: "0.5rem",
              border: "1px solid #ccc",
              borderRadius: "4px",
            }}
          />
          <button
            onClick={handleAddContact}
            style={{
              width: "100%",
              padding: "0.5rem",
              background: "#28a745",
              color: "white",
              border: "none",
              borderRadius: "4px",
            }}
          >
            Add Contact
          </button>
        </div>
      )}

      {/* Liste des contacts */}
      {filteredContacts.length > 0 ? (
        <ul style={{ listStyle: "none", padding: 0 }}>
          {filteredContacts.map((contact) => (
            <li key={contact.id} style={{ marginBottom: "1rem" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                {/* Nom du contact (lien) */}
                <Link to={`/contacts/${contact.id}`} style={{ textDecoration: "none", flex: 1 }}>
                  {contact.name}
                </Link>

                {/* Bouton Edit */}
                <button
                  onClick={() => handleEdit(contact.id)}
                  style={{
                    padding: "0.25rem 0.5rem",
                    marginLeft: "0.5rem",
                    background: "#ffc107",
                    color: "white",
                    border: "none",
                    borderRadius: "4px",
                    cursor: "pointer",
                  }}
                >
                  Edit
                </button>

                {/* Bouton Delete */}
                <button
                  onClick={() => handleDelete(contact.id)}
                  style={{
                    padding: "0.25rem 0.5rem",
                    marginLeft: "0.5rem",
                    background: "#dc3545",
                    color: "white",
                    border: "none",
                    borderRadius: "4px",
                    cursor: "pointer",
                  }}
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p style={{ color: "red", textAlign: "center" }}>No contacts found</p>
      )}
    </nav>
  );
};

export default ContactList;
