import React, { useState } from "react";
import "../Certificate/certificate.css";

import nptel from "/images/nptel.png";
import learntube from "/images/learntube.jpeg";
import postman from "/images/postman.png";
import hackerrank from "/images/hackerrank.png";
import badge from "/images/postbadge.png";
import wandhani from "/images/wandhani.png";

function Certificate() {
  const [selectedCert, setSelectedCert] = useState(null);

  const certificates = [
    { id: 1, title: "NPTEL", image: nptel },
    { id: 2, title: "Java", image: learntube },
    { id: 3, title: "POSTMAN API", image: postman },
    { id: 5, title: "JAVA BASIC", image: hackerrank },
    { id: 6, title: "POSTMAN API badge", image: badge },
    { id: 7, title: "Wandhani Foundation", image: wandhani },
  ];

  return (
    <div>
      <div id="certificates" className="certificates-section">
        <h2>My Certifications</h2>
        <div className="certificates-container">
          {certificates.map((cert) => (
            <div key={cert.id} className="certificate-card">
              <img
                src={cert.image}
                alt={cert.title}
                className="certificate-thumbnail"
              />
              <div className="text">
                <h4>{cert.title}</h4>
                <button onClick={() => setSelectedCert(cert.image)}>
                  Preview
                </button>
              </div>
            </div>
          ))}
        </div>

        {selectedCert && (
          <div className="modal" onClick={() => setSelectedCert(null)}>
            <img
              src={selectedCert}
              alt="Certificate Preview"
              className="modal-image"
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default Certificate;
