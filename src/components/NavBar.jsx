import { Link, useNavigate } from "react-router";
import { useState } from "react";

const CATEGORIES = ["movies", "games", "audio", "art"];

function NavBar() {
    const [search, setSearch] = useState("");
    const navigate = useNavigate();

    function handleSearch(e) {
        e.preventDefault();
        if(search.trim()) {
            // Pas the search term as a URL query parameter so PortalPage can read it.
            navigate(`/portal?q=${encodeURIComponent(search.trim())}`);
            setSearch("");
        }
    }

    return (
        <nav className="nav">
            <Link to="/" className="nav-log">⚡ Portals</Link>
            {CATEGORIES.map((cat) => (
                <Link key={cat} to={`/category/${cat}`} className="nav-link" style={{ textTransform: "capitalize" }}>
                    {cat}
                </Link>
            ))}
            <Link to="/portal" className="nav-link">Portal</Link>
            <div className="nav-spacer"/>
            <form onSubmit={handleSearch} style={{ display: "flex", gap: "0.5rem"}}>
                <input
                    className="input"
                    style={{ width: "200px" }}
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search Portals..."
                />
                <Link to="/submit" className="btn btn-primary" style={{ marginLeft: "1rem"}}>
                    + Submit
                </Link>
            </form>
        </nav>
    )
}

export default NavBar;