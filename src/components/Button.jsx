// The variant prop controls which CSS class gets applied.
// Default is "primary" - callers can override: <Button variant="secondary">
// The `as` prop lets it render as a Link or an anchor if needed.
function Button({ children, variant = "primary", onClick, type = "button", className = ""}) {
    return (
        <button
        type={type}
        onClick={onClick}
        className={`btn btn-${variant} ${className}`}
        >
            {children}
        </button>
    );
}

export default Button;