import { Link } from "react-router";
import CategoryBadge from "./CategoryBadge";

function ContentCard({ post }) {
    // Average rating computed from the votes array.
    // If no votes exist yet, display nothing rather than "0.0".
    const avg = post.votes.length
    ? (post.votes.reduce((a, b) => a + b, 0) / post.votes.length).toFixed(1)
    : null;

    return (
         <Link to={`/content/${post.id}`} className="card" style={{ display: "block", textDecoration: "none"}}>
            {/* Thumbnail - either a saved image or a placeholder color block */}
            <div style={{ aspectRatio: "16/9", overflow: "hidden", background: "#333"}}>
                {post.thumbnail ? (
                    <img
                        src={post.thumbnail}
                        alt={post.title}
                        style={{ width: "100%", height: "100%", objectFit: "cover"}}
                    />
                ) : (
                    // Fallback when no thumbnail exists - show the category inital
                    <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "cemter", fontSize: "2rem", color: "#555"}}>
                        {post.category[0].toUpperCase()}
                    </div>
                )}
            </div>
            <div style={{ padding: "0.75rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "0.4rem"}}>
                    <CategoryBadge category={post.category} />
                    {avg && <small style={{ color: #e8a400}}>★ {avg}</small>}
                </div>
                <h3 style={{ margin: "0 0 0.25rem", fontSize: "0.95rem"}}>{post.title}</h3>
                <small style={{ color: "var(--muted)"}}>
                    by {post.author} · {post.votes.length} vote{post.votes.length !== 1 ? "s" : ""}
                </small>
            </div>
         </Link>
    );
}

export default ContentCard;  