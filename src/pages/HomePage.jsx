import { useEffect, useState } from "react";
import { Link } from "react-router";
import NavBar from "../components/NavBar";
import ContentCard from "../components/ContentCard";
import { getFeatured, loadPosts } from "../storage";

const CATEGORIES = ["movies", "games", "audio", "art"];

function HomePage() {
  const [featured, setFeatured] = useState({});

  useEffect(() => {
    // Build an object where each key is a category and each value is an array of up to 4 posts.
    const data = {};
    CATEGORIES.forEach((cat) => {
      data[cat] = getFeatured(cat, 4);
    });
    setFeatured(data);
  }, []);

  return (
    <div>
      <NavBar />
      <div className="container" style={{ paddingTop: "2rem" }}>
        <div style={{ marginBottom: "2rem" }}>
          <h1 style={{ margin: "0 0 0.5rem" }}>The creative community.</h1>
          <p style={{ color: "var(--muted)", margin: 0 }}>
            Movies, games, audio, and art — rated by the community.
          </p>
        </div>

        {/* Featured sections — one per category */}
        {CATEGORIES.map((cat) => (
          <div key={cat}>
            <div className="section-header">
              <h2 className="section-title">Featured {cat}</h2>
              <Link to={`/category/${cat}`} className="btn btn-ghost" style={{ fontSize: "0.8rem" }}>
                More {cat} →
              </Link>
            </div>
            {featured[cat] && featured[cat].length > 0 ? (
              <div className="grid-4">
                {featured[cat].map((post) => (
                  <ContentCard key={post.id} post={post} />
                ))}
              </div>
            ) : (
              <p style={{ color: "var(--muted)", fontSize: "0.9rem" }}>
                No {cat} yet.{" "}
                <Link to="/submit" style={{ color: "var(--accent)" }}>Be the first →</Link>
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;