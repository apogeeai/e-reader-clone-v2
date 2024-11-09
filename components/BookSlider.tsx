import Link from 'next/link';
import { Book } from '@/lib/types';

export default function BookSlider({ books }: { books: Book[] }) {
  return (
    <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
      {books.map((book) => (
        <Link href={`/reader/${book.id}`} key={book.id} className="flex-shrink-0">
          <div className="w-[233px]">
            <img
              src={book.cover}
              alt={book.title}
              className="w-full h-[308px] object-cover grayscale"
            />
          </div>
        </Link>
      ))}
    </div>
  );
}