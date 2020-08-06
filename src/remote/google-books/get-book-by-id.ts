import {googleBooksBaseClient} from '.'



export const getBookById = async (bookId:string) => {
    try{
        let res = await googleBooksBaseClient.get(`/volumes/${bookId}?key=${process.env['GOOGLE_BOOKS_API_KEY']}`)
        return res.data
    }catch(e){
        console.log(e);
    }
}