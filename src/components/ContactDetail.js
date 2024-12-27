// import React from "react";
// // import { useParams } from "react-router-dom";

// // const contacts = [
// //   { id: "1", name: "Henri Helvetica", username: "HenriHelvetica", description: "How To WebPageTest", image: "https://via.placeholder.com/150" },
// //   { id: "2", name: "Dennis Beatty", username: "DennisBeatty", description: "React Enthusiast", image: "https://via.placeholder.com/150" },
// // ];

// // function ContactDetail() {
// //   const { id } = useParams();
// //   const contact = contacts.find((contact) => contact.id === id);

// //   if (!contact) {
// //     return <div>Contact not found</div>;
// //   }

// //   return (
// //     <div style={{ textAlign: "center" }}>
// //       <img src={contact.image} alt={contact.name} style={{ borderRadius: "50%", marginBottom: "1rem" }} />
// //       <h2>{contact.name}</h2>
// //       <p>{contact.username}</p>
// //       <p>{contact.description}</p>
// //       <div>
// //         <button style={{ marginRight: "1rem", padding: "0.5rem 1rem", background: "#007bff", color: "white", border: "none", borderRadius: "4px" }}>
// //           Edit
// //         </button>
// //         <button style={{ padding: "0.5rem 1rem", background: "#dc3545", color: "white", border: "none", borderRadius: "4px" }}>
// //           Delete
// //         </button>
// //       </div>
// //     </div>
// //   );
// // }

// // export default ContactDetail;
import React from "react";
import { useParams, useNavigate } from "react-router-dom";

function ContactDetail({ contacts }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const contact = contacts.find((contact) => contact.id === id);

  if (!contact) {
    return (
      <div style={{ textAlign: "center", color: "red" }}>
        <h2>Contact not found</h2>
        <button
          onClick={() => navigate("/")}
          style={{
            padding: "0.5rem 1rem",
            background: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "4px",
          }}
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div style={{ textAlign: "center" }}>
      <img
        src={contact.image}
        alt={contact.name}
        style={{ borderRadius: "50%", marginBottom: "1rem" }}
      />
      <h2>{contact.name}</h2>
      <p>{contact.username}</p>
      <p>{contact.description}</p>
    </div>
  );
}

export default ContactDetail;