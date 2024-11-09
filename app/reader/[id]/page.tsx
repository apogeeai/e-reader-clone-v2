"use client";

import { useState } from 'react';
import { ChevronLeft, Settings } from 'lucide-react';
import { books } from '@/lib/data';
import Link from 'next/link';

export default function Reader({ params }: { params: { id: string } }) {
  const [fontSize, setFontSize] = useState(18);
  const book = books.find((b) => b.id === params.id);

  if (!book) return <div>Book not found</div>;

  return (
    <main className="min-h-screen bg-[#F8F8F8] text-gray-900 min-w-[420px] max-w-[1260px] mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-300">
        <Link href="/">
          <ChevronLeft className="w-6 h-6" />
        </Link>
        <h1 className="text-sm font-medium">{book.title}</h1>
        <Settings className="w-6 h-6" />
      </div>

      {/* Content */}
      <div 
        className="max-w-[800px] mx-auto p-8"
        style={{ fontSize: `${fontSize}px` }}
      >
        <h2 className="text-center mb-12 text-gray-600 uppercase tracking-widest text-sm">
          {book.chapter || "Chapter 1"}
        </h2>
        
        <div className="space-y-6 leading-relaxed font-serif">
          {book.content.split('\n\n').map((paragraph, index) => (
            <p key={index} className="max-w-prose mx-auto">
              {paragraph}
            </p>
          ))}
        </div>

        {/* Reading Progress */}
        <div className="fixed bottom-4 left-4 text-xs text-gray-500">
          {book.progress || "1"}%
        </div>
      </div>
    </main>
  );
}