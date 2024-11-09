import BookPage from '@/components/BookPage'
import { books } from '@/lib/books'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
  return books.map((book) => ({
    id: book.id,
  }))
}

export default function ReaderPage({ params }: { params: { id: string } }) {
  const book = books.find(b => b.id === params.id)
  
  if (!book) {
    return notFound()
  }

  return <BookPage book={book} />
}