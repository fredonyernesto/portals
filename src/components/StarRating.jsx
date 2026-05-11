function StarRating({ votes, onVote, readonly = false }){
    // Compute the rounded average to determine how many stars to fill.
    const avg = votes.length
        ? votes.reduce((a, b) => a + b, 0) / votes.length
        : 0;

    return (
        <div className="stars">
            {/* [1,2,3,4,5] is a literal array used justto generate 5 elements. */}
            {[1, 2, 3, 4, 5].map((star) =>(
                <button
                    key={star}
                    className={`star-btn ${star <= Math.round(avg) ? "star-filled" : "star-empty"}`}
                    onClick={() => !readonly && onVote && onVote(star)}
                    style={{ cursor: readonly ? "default" : "pointer"}}
                    // Disable the button visually if readonly (like on the homepage display)
                    title={readonly ? `${avg.toFixed(1)} / 5` : `Rate ${star} stars`}
                >
                    ★
                </button>
            ))}
            <small style={{ color: "var(--muted)", marginLeft: "0.5rem"}}>
                {votes.length > 0
                    ? `${avg.toFixed(1)} (${votes.length} vote${votes.length !== 1 ? "s" : ""})`
                    : "No votes yet"
                }
            </small>
        </div>
    );
}

export default StarRating;