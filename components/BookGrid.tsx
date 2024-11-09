import Link from 'next/link';
import { Book } from '@/lib/types';

export default function BookGrid({ books }: { books: Book[] }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {books.map((book) => (
        <Link href={`/reader/${book.id}`} key={book.id}>
          <div className="space-y-2">
            <div className="relative">
              {book.progress && (
                <div className="absolute top-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded">
                  {book.progress}%
                </div>
              )}
              <img
                src={book.cover}
                alt={book.title}
                className="w-full h-auto aspect-[225/365] object-cover grayscale"
              />
            </div>
            <h3 className="text-sm font-medium">{book.title}</h3>
            <p className="text-xs text-gray-600">{book.author}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}