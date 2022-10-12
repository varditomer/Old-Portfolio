'use strict'
const STORAGE_KEY = 'projectDB'


var gProjects

_createProjects()

function getProjects() {
    return gProjects
}

function _createProjects() {
    var projects = _loadProjectsFromStorage(STORAGE_KEY)
    if (!projects) {
        projects = [
            {
                id: "minesweeper",
                name: "Minesweeper",
                title: "Be careful, mines around! 💥",
                desc: "lorem ipsum lorem ipsum lorem ipsum",
                url: "projs/sokoban",
                publishedAt: 1448693940000,
                labels: ["Matrixes", "keyboard events"],
            },
            {
                id: "packman",
                name: "Packman",
                title: "Beware of those ghosts! 👻",
                desc: "lorem ipsum lorem ipsum lorem ipsum",
                url: "https://varditomer.github.io/Packman/",
                publishedAt: 1448693940000,
                labels: ["Matrixes", "keyboard events"],
            },
            {
                id: "ballboard",
                name: "Ballboard",
                title: "Youv'e to eat them all! 🍴",
                desc: "lorem ipsum lorem ipsum lorem ipsum",
                url: "https://varditomer.github.io/Ballboard/",
                publishedAt: 1448693940000,
                labels: ["Matrixes", "keyboard events"],
            },
            {
                id: "inpicture",
                name: "Guess the picture",
                title: "Recognize this F1 driver? 🚗",
                desc: "lorem ipsum lorem ipsum lorem ipsum",
                url: "https://varditomer.github.io/Guess-the-picture/",
                publishedAt: 1448693940000,
                labels: ["Matrixes", "keyboard events"],
            },
            {
                id: "bookshop",
                name: "My Bookshop",
                title: "Handeling your bookstore? 📚",
                desc: "lorem ipsum lorem ipsum lorem ipsum",
                url: "https://varditomer.github.io/My-Bookshop/",
                publishedAt: 1448693940000,
                labels: ["Matrixes", "keyboard events"],
            },
            {
                id: "touchnums",
                name: "Touch Nums",
                title: "Always remember! 🤔",
                desc: "lorem ipsum lorem ipsum lorem ipsum",
                url: "projs/sokoban",
                publishedAt: 1448693940000,
                labels: ["Matrixes", "keyboard events"],
            },
            

        ]
    }
    gProjects = projects
    _saveProjectsToStorage()
}

function _saveProjectsToStorage() {
    saveToStorage(STORAGE_KEY, gProjects)
}

function _loadProjectsFromStorage() {
    loadFromStorage(STORAGE_KEY, gProjects)
}


