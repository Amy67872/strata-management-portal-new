export default function Home() {
  return (
    <main style={{ padding: "2rem", fontFamily: "Arial, sans-serif", maxWidth: "800px", margin: "0 auto" }}>
      <header>
        <h1 style={{ color: "#2c3e50" }}>Strata Management Portal</h1>
        <p style={{ fontSize: "1.2rem", color: "#555" }}>
          Welcome to the portal for managing our strata-titled building, following the NSW Strata Schemes Management Act (2015).
        </p>
        <a
          href="https://classic.austlii.edu.au/au/legis/nsw/consol_act/ssma2015242/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#0070f3", textDecoration: "underline" }}
        >
          View the full legislation
        </a>
        <img
          src="/assets/strata-building.jpg"
          alt="Strata building"
          style={{ marginTop: "1rem", width: "100%", borderRadius: "10px" }}
        />
      </header>

      <section style={{ marginTop: "2.5rem" }}>
        <h2>About This Site</h2>
        <p>
          In New South Wales, strata-titled apartment buildings are governed by the Strata Schemes Management Act (2015).
          Each building is subdivided into units, or lots, and these are collectively part of the Owners Corporation (also known
          as the body corporate). The corporation is responsible for maintaining common areas, insuring the building, and
          managing administrative and capital works funds funded through owner levies.
        </p>
        <p>
          The Act outlines the roles and responsibilities of the Strata Committee — elected representatives of the owners.
          Every committee must include a Chairperson, Secretary, and Treasurer, with up to 9 members in total. This portal
          is designed to assist committee members and residents in the smooth management of the building.
        </p>
      </section>

      <section style={{ marginTop: "2.5rem" }}>
        <h2>Serving on a Strata Committee</h2>
        <p>
          The strata committee is elected at the Annual General Meeting and consists of key roles: Chairperson,
          Secretary, and Treasurer. Additional members may be elected (up to 9 total). Committee members help
          make decisions about common property, finances, and building maintenance.
        </p>
        <img
          src="/assets/committee-meeting.jpg"
          alt="Strata committee meeting"
          style={{ marginTop: "1rem", width: "100%", borderRadius: "10px" }}
        />
        <a
          href="https://www.nsw.gov.au/housing-and-construction/strata/serving-on-a-committee"
          target="_blank"
          rel="noopener noreferrer"
          style={{ display: "block", marginTop: "1rem", color: "#0070f3" }}
        >
          Learn more about serving on a strata committee
        </a>
      </section>

      <section style={{ marginTop: "2.5rem" }}>
        <h2>What You Can Do Here</h2>
        <ul style={{ lineHeight: "1.8" }}>
          <li>📋 Submit and track maintenance requests</li>
          <li>📢 View announcements from the committee</li>
          <li>💰 Check levy contributions and financial updates</li>
          <li>👥 Meet your committee: Chairperson, Treasurer, Secretary</li>
          <li>📎 Access bylaws and important documents</li>
        </ul>
      </section>

      <section style={{ marginTop: "2.5rem" }}>
        <h2>Contact the Committee</h2>
        <p>
          Have a question or issue? Reach out to the committee via the contact form (coming soon).
        </p>
      </section>
    </main>
  );
}
