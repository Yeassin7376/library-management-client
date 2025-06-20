
export const categoryBooksPromise = ( category) => {
    return fetch(`${import.meta.env.VITE_API_URL}/categoryBooks?category=${category}`)
        .then((res) => res.json())
}

