import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const EditContact = ({ contacts, setContacts }) => {
  const { id } = useParams(); // Récupérer l'ID du contact à partir de l'URL.
  const navigate = useNavigate();

  // Initialiser l'état avec le contact à éditer ou null si non trouvé.
  const [editedContact, setEditedContact] = useState({
    name: "",
    description: "",
  });

  useEffect(() => {
    const contactToEdit = contacts.find((contact) => contact.id === id);
    if (contactToEdit) {
      setEditedContact(contactToEdit);
    } else {
      navigate("/404"); // Redirige vers une page 404 si le contact n'existe pas.
    }
  }, [id, contacts, navigate]);

  // Fonction pour mettre à jour les informations.
  const handleSave = () => {
    if (!editedContact.name.trim()) {
      alert("Contact name cannot be empty!");
      return;
    }

    if (!editedContact.description.trim()) {
      alert("Description cannot be empty!");
      return;
    }

    const updatedContacts = contacts.map((contact) =>
      contact.id === id ? editedContact : contact
    );

    setContacts(updatedContacts); // Mettre à jour la liste des contacts.
    navigate(`/contacts/${id}`); // Rediriger vers la page du contact avec l'ID dynamique.
  };

  // Fonction pour annuler l'édition.
  const handleCancel = () => {
    navigate(`/contacts/${id}`); // Retourner à la page du contact avec l'ID dynamique.
  };

  return (
    <div style={{ padding: "1rem" }}>
      <h2>Edit Contact</h2>
      <div style={{ marginBottom: "1rem" }}>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          type="text"
          value={editedContact.name}
          onChange={(e) =>
            setEditedContact({ ...editedContact, name: e.target.value })
          }
          style={{
            width: "100%",
            padding: "0.5rem",
            marginBottom: "0.5rem",
            border: "1px solid #ccc",
            borderRadius: "4px",
          }}
          aria-label="Contact Name"
        />
      </div>
      <div style={{ marginBottom: "1rem" }}>
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          value={editedContact.description}
          onChange={(e) =>
            setEditedContact({ ...editedContact, description: e.target.value })
          }
          style={{
            width: "100%",
            padding: "0.5rem",
            border: "1px solid #ccc",
            borderRadius: "4px",
          }}
          aria-label="Contact Description"
        />
      </div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <button
          onClick={handleSave}
          style={{
            padding: "0.5rem 1rem",
            background: "#28a745",
            color: "white",
            border: "none",
            borderRadius: "4px",
          }}
        >
          Save
        </button>
        <button
          onClick={handleCancel}
          style={{
            padding: "0.5rem 1rem",
            background: "#dc3545",
            color: "white",
            border: "none",
            borderRadius: "4px",
          }}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default EditContact;
