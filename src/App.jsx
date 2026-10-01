import { useState } from "react";

const pages = ["Destinations","Tour Packages","Package Details","Offers","Gallery","Blog"];
const cards = ["Goa","Manali","Kerala","Dubai"];

function App() {
  const [rows, setRows] = useState([
    { a: "Rahul", b: cards[0], c: "Pending" },
    { a: "Priya", b: cards[1], c: "Done" }
  ]);

  function addRow(e) {
    e.preventDefault();
    const f = e.target;
    setRows([...rows, { a: f.a.value, b: f.b.value, c: f.c.value }]);
    f.reset();
  }

  return (
    <div className="travel">
      <header>
        <h1>Dream Travel Agency</h1>
        <p>Tours and holiday packages</p>
      </header>
      <nav>{pages.map((x) => <a key={x}>{x}</a>)}</nav>
      <section className="hero">
        <div>
          <h2>Book Package</h2>
          <p>This is a basic beginner React frontend. Backend will be added later.</p>
          <button>Open</button>
        </div>
        <div className="badge">Dream Travel Agency</div>
      </section>
      <section>
        <h2>Main Pages</h2>
        <div className="chips">{pages.map((x) => <span key={x}>{x}</span>)}</div>
      </section>
      <section>
        <h2>Items</h2>
        <div className="grid">{cards.map((x) => <div className="card" key={x}><h3>{x}</h3><p>Simple dummy details for {x}.</p><button>Details</button></div>)}</div>
      </section>
      <section className="two">
        <div>
          <h2>Book Package</h2>
          <form onSubmit={addRow}>
            <input name="a" placeholder="Customer Name" required />
            <input name="b" placeholder="Package" required />
            <input name="c" placeholder="Travel Date" required />
            <button>Submit</button>
          </form>
        </div>
        <div>
          <h2>Login</h2>
          <input placeholder="Username" />
          <input placeholder="Password" type="password" />
          <button>Login</button>
        </div>
      </section>
      <section>
        <h2>Admin Records</h2>
        <table><thead><tr><th>Customer Name</th><th>Package</th><th>Travel Date</th></tr></thead><tbody>{rows.map((r, i) => <tr key={i}><td>{r.a}</td><td>{r.b}</td><td>{r.c}</td></tr>)}</tbody></table>
      </section>
      <footer>Dream Travel Agency - frontend only</footer>
    </div>
  );
}

export default App;
