// Derives its color class from the category string.
// Pass category="movies" and you get className="badge badge-movies".
function CategoryBadge({ category }) {
    return (
        <span className={`badge badge-${category}`}>
            {category}
        </span>
    );
}

export default CategoryBadge; 