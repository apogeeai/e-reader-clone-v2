'use client'

import { Book } from '@/lib/types'
import { useState } from 'react'
import Link from 'next/link'

interface BookPageProps {
  book: Book
}

export default function BookPage({ book }: BookPageProps) {
  const [currentPage, setCurrentPage] = useState(1)

  const pages = [
    // Page 1
    `The circus arrives without warning. No announcements precede it, no paper notices on downtown 
    posts and billboards, no mentions or advertisements in local newspapers. It is simply there, 
    when yesterday it was not.

    The towering tents are striped in white and black, no golds and crimsons to be seen as there 
    are in other traveling shows. Black-and-white stripes on grey sky; countless tents of varying 
    shapes and sizes, with an elaborate wrought-iron fence encasing them in a colorless world. 
    Even what little ground is visible from outside is black or white, painted or powdered, or 
    treated with some other circus trick.

    But it is not open for business. Not just yet.

    Within hours everyone in town has heard about it. By afternoon the news has spread several towns over. 
    Word of mouth is a more effective method of advertisement than typeset words and exclamation points on paper 
    pamphlets or posters. It is impressive and unusual news, the sudden appearance of a mysterious circus. 
    People crowd around the gates, watching workers quietly raise the tents.`,

    // Page 2
    `The circus tents are striped in white and black, no golds and crimsons to be seen as there 
    are in other traveling shows. Black-and-white stripes on grey sky; countless tents of varying 
    shapes and sizes, with an elaborate wrought-iron fence encasing them in a colorless world.

    Even what little ground is visible from outside is black or white, painted or powdered, or 
    treated with some other circus trick. No color mars the monochromatic spectacle.

    People gather around the fence to watch as the circus rises before them, but no one 
    attempts to enter. There are no gaps in the fence, no gates that are not securely locked.

    The circus seems to consist of series of circles. Perhaps it is a tribute to the shape of a ring, 
    where performances are held, but it creates a complicated path for spectators to follow.`,
  ]

  return (
    <div className="bg-[#f4f4f4] min-h-screen px-24 py-12 max-w-[800px] mx-auto relative">
      {/* Home Button */}
      <Link 
        href="/"
        className="absolute left-8 top-8 text-gray-400 hover:text-gray-600"
        aria-label="Back to home"
      >
        ← Home
      </Link>

      {/* Previous Page Button */}
      <button 
        onClick={() => currentPage > 1 && setCurrentPage(currentPage - 1)}
        className={`absolute left-8 top-1/2 transform -translate-y-1/2 text-gray-400 text-6xl
          ${currentPage === 1 ? 'invisible' : 'hover:text-gray-600'}`}
        aria-label="Previous page"
      >
        ‹
      </button>

      <div className="space-y-8">
        <div className="text-center mb-16">
          <div className="text-gray-300 text-sm mb-2">― • ―</div>
          <h1 className="text-center uppercase text-sm tracking-[0.2em] font-light">
            {book.title}
          </h1>
          <div className="text-gray-300 text-sm mt-2">― • ―</div>
        </div>
        
        <div className="space-y-6 text-gray-800 leading-relaxed">
          <p className="whitespace-pre-line">
            {pages[currentPage - 1]}
          </p>
        </div>

        <div className="text-center text-sm text-gray-500 mt-16">
          {currentPage}
        </div>
      </div>

      {/* Next Page Button */}
      <button 
        onClick={() => currentPage < pages.length && setCurrentPage(currentPage + 1)}
        className={`absolute right-8 top-1/2 transform -translate-y-1/2 text-gray-400 text-6xl
          ${currentPage === pages.length ? 'invisible' : 'hover:text-gray-600'}`}
        aria-label="Next page"
      >
        ›
      </button>
    </div>
  );
} 