'use client'

import { Book } from '@/types/book';
import Image from 'next/image';
import Link from 'next/link';

interface BookSliderProps {
  books: Book[];
}

export default function BookSlider({ books }: BookSliderProps) {
  return (
    <div className="flex gap-4 overflow-x-auto pb-4 pt-[60px] scrollbar-hide">
      {books.map((book) => (
        <Link href={`/reader/${book.id}`} key={book.id} className="flex-shrink-0">
          <div className="w-[233px]">
            <img
              src={book.cover}
              alt={book.title}
              className="w-full h-[308px] object-cover grayscale hover:grayscale-0 transition-duration-300"
            />
            <div className="mt-2">
              <h3 className="text-sm font-medium">{book.title}</h3>
              <p className="text-xs text-gray-600">{book.author}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}