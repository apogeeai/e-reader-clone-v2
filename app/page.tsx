import Link from 'next/link';
import { Search, ShoppingCart, MoreVertical, ChevronRight } from 'lucide-react';
import { books } from '@/lib/data';
import BookGrid from '@/components/BookGrid';
import BookSlider from '@/components/BookSlider';
import StatusBar from '@/components/StatusBar';
import SearchBar from '@/components/SearchBar';
import Navigation from '@/components/Navigation';

export default function Home() {
  return (
    <main className="mx-auto min-h-screen bg-[#E5E5E5] text-gray-900 p-4 min-w-[420px] max-w-[1260px]">
      <div className="max-w-full mx-auto">
        <StatusBar />
        <SearchBar />

        {/* Library Sections */}
        <div className="space-y-8 mb-20">
          <section>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold">YOUR LIBRARY</h2>
              <ChevronRight className="w-5 h-5" />
            </div>
            <BookGrid books={books.slice(0, 4)} />
          </section>

          <section>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold">AMAZON ORIGINAL STORIES</h2>
              <ChevronRight className="w-5 h-5" />
            </div>
            <BookSlider books={books.slice(4)} />
          </section>
        </div>

        <Navigation />
      </div>
    </main>
  );
}