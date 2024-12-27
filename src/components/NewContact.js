import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const NewContact = ({ contacts, setContacts }) => {
  const [newContact, setNewContact] = useState({
    name: "",
    description: "",
    photo: "", // Champ photo optionnel
  });
  const navigate = useNavigate();

  // Fonction pour gérer les changements dans les champs de saisie
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewContact({ ...newContact, [name]: value });
  };

  // Fonction pour enregistrer le nouveau contact
  const handleSave = () => {
    if (!newContact.name.trim() || !newContact.description.trim()) {
      alert("Please fill in all fields.");
      return;
    }

    // Générer un ID unique pour chaque contact (par exemple, un ID simple basé sur l'index)
    const newId = contacts.length + 1;

    // Créer un objet de contact avec les informations saisies
    const newContactObject = {
      id: `${newId}`, // ID unique
      ...newContact,
      image: newContact.photo || "https://via.placeholder.com/150", // Image par défaut si aucune photo n'est fournie
    };

    // Ajouter le nouveau contact à la liste
    setContacts([...contacts, newContactObject]);

    // Réinitialiser le formulaire après l'ajout
    setNewContact({ name: "", description: "", photo: "" });

    // Rediriger vers la liste des contacts
    navigate("/");
  };

  // Fonction pour annuler et revenir à la page d'accueil
  const handleCancel = () => {
    navigate("/"); // Retourner à la page principale des contacts
  };

  return (
    <div style={{ padding: "1rem" }}>
      <h2>Create New Contact</h2>
      <div style={{ marginBottom: "1rem" }}>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          name="name"
          type="text"
          value={newContact.name}
          onChange={handleChange}
          style={{
            width: "100%",
            padding: "0.5rem",
            marginBottom: "0.5rem",
            border: "1px solid #ccc",
            borderRadius: "4px",
          }}
        />
      </div>

      <div style={{ marginBottom: "1rem" }}>
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          name="description"
          value={newContact.description}
          onChange={handleChange}
          style={{
            width: "100%",
            padding: "0.5rem",
            border: "1px solid #ccc",
            borderRadius: "4px",
          }}
        />
      </div>

      <div style={{ marginBottom: "1rem" }}>
        <label htmlFor="photo">Photo URL (optional):</label>
        <input
          id="photo"
          name="photo"
          type="text"
          value={newContact.photo}
          onChange={handleChange}
          placeholder="Enter the image URL (optional)"
          style={{
            width: "100%",
            padding: "0.5rem",
            marginBottom: "0.5rem",
            border: "1px solid #ccc",
            borderRadius: "4px",
          }}
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

export default NewContact;
