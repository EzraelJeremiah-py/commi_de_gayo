// pages/index.js
import { useEffect, useState } from "react";

export default function Home() {
  const [portfolio, setPortfolio] = useState(null);

  useEffect(() => {
    fetch("https://gayo-elias.onrender.com/api/portfolio")
      .then((res) => res.json())
      .then((data) => setPortfolio(data))
      .catch((err) => console.error("Error fetching portfolio:", err));
  }, []);

  if (!portfolio) return <p className="text-center mt-5">Loading...</p>;

  return (
    <div className="min-vh-100 bg-dark text-white">
      {/* Hero */}
      <header className="text-center py-5 shadow" style={{ backgroundColor: "magenta" }}>
        <h1 className="fw-bold">{portfolio.name}</h1>
        <h3 className="fw-light">{portfolio.title}</h3>
        <p className="mt-3">{portfolio.profile}</p>
      </header>

      <main className="container py-5">
        {/* Skills */}
        <section className="mb-5 text-center">
          <h2 className="text-info mb-3">Skills</h2>
          {portfolio.skills.map((s, i) => (
            <span
              key={i}
              className="badge rounded-pill me-2 mb-2 fs-6 shadow-sm"
              style={{ backgroundColor: "cyan", color: "black" }}
            >
              {s}
            </span>
          ))}
        </section>

        {/* Qualifications */}
        <section className="mb-5">
          <h2 className="text-warning mb-3 text-center">Qualifications</h2>
          <ul className="list-group">
            {portfolio.qualifications.map((q, i) => (
              <li key={i} className="list-group-item bg-dark text-white border-light">
                {q}
              </li>
            ))}
          </ul>
        </section>
          {/* Projects */}
<section className="mb-5">
  <h2 className="text-success mb-3 text-center">Projects</h2>
  <div className="row justify-content-center">
{portfolio.projects.map((p, i) => (
  <div key={i} className="col-md-6 mb-4">
  <div
  className="shadow-lg p-4 text-center"
  style={{
    backgroundColor: "#0d6efd",
    color: "white",
    borderRadius: "50px",   // pill shape
    boxShadow: "0 4px 12px rgba(0,0,0,0.4)"
  }}
>
  <h5 className="fw-bold mb-2">{p.title}</h5>
  <p className="mb-0">{p.description}</p>
  </div>
  </div>
  ))}
    </div>
    </section>


        {/* Contact */}
        <section className="text-center">
          <h2 className="text-danger mb-3">Contact</h2>
          <p>Email: {portfolio.contact.email}</p>
          <p>Phone: {portfolio.contact.phone}</p>
          <p>Location: {portfolio.contact.location}</p>
        </section>
      </main>

      <footer className="text-center py-3 bg-secondary text-white">
        <small>&copy; {new Date().getFullYear()} {portfolio.name} | Professional Portfolio</small>
      </footer>
    </div>
  );
}
