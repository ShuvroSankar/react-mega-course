const data = [
    {
        id: 1,
        title: "The Lord of the Rings",
        publicationDate: "1954-07-29",
        author: "J. R. R. Tolkien",
        genres: [
            "fantasy",
            "high-fantasy",
            "adventure",
            "fiction",
            "novels",
            "literature",
        ],
        hasMovieAdaptation: true,
        pages: 1216,
        translations: {
            spanish: "El señor de los anillos",
            chinese: "魔戒",
            french: "Le Seigneur des anneaux",
        },
        reviews: {
            goodreads: {
                rating: 4.52,
                ratingsCount: 630994,
                reviewsCount: 13417,
            },
            librarything: {
                rating: 4.53,
                ratingsCount: 47166,
                reviewsCount: 452,
            },
        },
    },
    {
        id: 2,
        title: "The Cyberiad",
        publicationDate: "1965-01-01",
        author: "Stanislaw Lem",
        genres: [
            "science fiction",
            "humor",
            "speculative fiction",
            "short stories",
            "fantasy",
        ],
        hasMovieAdaptation: false,
        pages: 295,
        translations: {},
        reviews: {
            goodreads: {
                rating: 4.16,
                ratingsCount: 11663,
                reviewsCount: 812,
            },
            librarything: {
                rating: 4.13,
                ratingsCount: 2434,
                reviewsCount: 0,
            },
        },
    },
    {
        id: 3,
        title: "Dune",
        publicationDate: "1965-01-01",
        author: "Frank Herbert",
        genres: ["science fiction", "novel", "adventure"],
        hasMovieAdaptation: true,
        pages: 658,
        translations: {
            spanish: "",
        },
        reviews: {
            goodreads: {
                rating: 4.25,
                ratingsCount: 1142893,
                reviewsCount: 49701,
            },
        },
    },
    {
        id: 4,
        title: "Harry Potter and the Philosopher's Stone",
        publicationDate: "1997-06-26",
        author: "J. K. Rowling",
        genres: ["fantasy", "adventure"],
        hasMovieAdaptation: true,
        pages: 223,
        translations: {
            spanish: "Harry Potter y la piedra filosofal",
            korean: "해리 포터와 마법사의 돌",
            bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
            portuguese: "Harry Potter e a Pedra Filosofal",
        },
        reviews: {
            goodreads: {
                rating: 4.47,
                ratingsCount: 8910059,
                reviewsCount: 140625,
            },
            librarything: {
                rating: 4.29,
                ratingsCount: 120941,
                reviewsCount: 1960,
            },
        },
    },
    {
        id: 5,
        title: "A Game of Thrones",
        publicationDate: "1996-08-01",
        author: "George R. R. Martin",
        genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
        hasMovieAdaptation: true,
        pages: 835,
        translations: {
            korean: "왕좌의 게임",
            polish: "Gra o tron",
            portuguese: "A Guerra dos Tronos",
            spanish: "Juego de tronos",
        },
        reviews: {
            goodreads: {
                rating: 4.44,
                ratingsCount: 2295233,
                reviewsCount: 59058,
            },
            librarything: {
                rating: 4.36,
                ratingsCount: 38358,
                reviewsCount: 1095,
            },
        },
    },
];

function getBooks() {
    return data;
}

function getBook(id) {
    return data.find((d) => d.id === id);
}
// const books = getBooks();
// books
// const book = getBook(3)
// book
// const title = book.title
// title
// const author = book.author
// author
// const { title, author, publicationDate, genres, pages, hasMovieAdaptation } = book
// console.log(title, author, publicationDate);
// const [primaryGenres, secondaryGenres] = genres
// console.log(primaryGenres, secondaryGenres);
// const newGenres = ["epic fantacy", ...genres]
// console.log(newGenres);
// const updateGenres = {
//     ...book,
//     // Adding new property
//     moviePublicationDate: "21-1-23",
//     // updating property
//     pages: 1245
// }
// updateGenres
// console.log(updateGenres);
// function getTotalReviewCount(book) {
//     const goodreads = book?.reviews?.goodreads?.reviewsCount ?? 0
//     const librarything = book?.reviews.librarything?.reviewsCount ?? 0
//     return goodreads + librarything
// }
// // getTotalReviewCount(book)
// // console.log(getTotalReviewCount(book));

// const books = getBooks()
// books
// const x = [1, 2, 3, 4, 5, 6, 7, 8,].map((e) => e * 2)
// x
// title = books.map((book) => book.title)
// title
// const essentialData = books.map((book) => (
//     {
//         title: book.title,
//         author: book.author,
//         reviewsCount: getTotalReviewCount(book)
//     }
// ))
// essentialData
// longBooks = books.filter((book) => book.pages > 500).filter((book) => book.hasMovieAdaptation)
// longBooks
// adventureBooks = books.filter((book) => book.genres.includes("adventure")).map((book) => book.title)
// adventureBooks
// const pagesAllBooks = books.reduce((acc, book) => acc + book.pages, 0)
// pagesAllBooks
// const arr = [3, 7, 1, 9, 6]
// // sort = arr.sort((a, b) => a-b)
// sort = arr.slice().sort((a, b) => b - a)

// sort
// const sortedByPages = books.slice().sort((a, b) => b.pages - a.pages)
// sortedByPages
// // 1) Add book obj to array
// const newBook = {
//     id: 6,
//     title: "Harry Poter and Chamber of Secrets",
//     author: "J.K.Rowling"
// }
// const bookAfterAdd = [...books, newBook]
// bookAfterAdd

// // 2) Delete book obj from array
// booksAfterDelete = bookAfterAdd.filter(book => book.id !== 3)
// booksAfterDelete

// // 3) Update book obj in the array
// const booksAfterUpdate = booksAfterDelete.map((book) => book.id === 1 ? { ...book, pages: 1 } : book)

// booksAfterUpdate

// fetch('https://jsonplaceholder.typicode.com/todos/1')
//     .then(response => response.json())
//     .then(json => console.log(json))

async function getTodos() {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    const data = await res.json()
    return data
    // console.log(data);
}
const todos = getTodos()
console.log(todos);
console.log("shuvro");