const STORAGE_KEY = "portals:posts";

export function loadPosts() {
    const raw = localStorage.getItem(STORAGE_KEY);
    if(!raw) return[];
    try{
        return JSON.parse(raw);
    } catch {
        return [];
    }
}

function savePosts(posts){
    localStorage.setItem(STORAGE_KEY, JSON.stringify(posts));
}

export function addPost(post) {
    const posts = loadPosts();
    posts.unshift(post);
    savePosts(posts);
    return post;
}

export function updatePost(updatedPost) {
    const posts = loadPosts();
    const index = posts.findIndex((p) => p.id === updatedPost.id);
    if (index === -1) return;
    post[index] = updatedPost;
    savePosts(posts);
}

// Returns only posts in a given category.
export function getPostsByCategory(category) {
    return loadPosts().filter((p) => p.category === category);
}

// Returns the four most recently submitted posts for a given category -
// used to populate the homepage featured sections.
export function getFeatured(category, limit = 4) {
    return getPostsByCategory(category).slice(0, limit);
}