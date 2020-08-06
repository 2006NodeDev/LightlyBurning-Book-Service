import axios from 'axios'

//an optional env for host address or localhost default
let baseURL = process.env['GOOGLE_BOOKS_HOST']


export const googleBooksBaseClient = axios.create({
    baseURL,
    headers:{
        'Content-Type': 'application/json',
        'Referer' : 'website.js-army.com'
    },
})