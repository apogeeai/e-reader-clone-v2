// Dynamic fetching from Open Library API
export async function fetchBookByISBN(isbn: string): Promise<Book> {
  const response = await fetch(`https://openlibrary.org/api/books?bibkeys=ISBN:${isbn}&format=json&jscmd=data`);
  const data = await response.json();
  const bookData = data[`ISBN:${isbn}`];
  
  return {
    id: bookData.key,
    cover: bookData.cover?.large || '',
    title: bookData.title,
    author: bookData.authors?.[0]?.name || 'Unknown Author',
    isbn: isbn,
    publishYear: bookData.publish_date ? new Date(bookData.publish_date).getFullYear() : undefined
  };
} 