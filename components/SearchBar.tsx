import { Search, ShoppingCart, MoreVertical } from 'lucide-react';

export default function SearchBar() {
  return (
    <div className="relative mb-8">
      <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
      <input
        type="text"
        placeholder="Search Kindle"
        className="w-full py-2 px-12 rounded-full border border-gray-300 bg-white"
      />
      <div className="absolute right-4 top-1/2 transform -translate-y-1/2 flex items-center gap-4">
        <ShoppingCart className="w-5 h-5 text-gray-500" />
        <MoreVertical className="w-5 h-5 text-gray-500" />
      </div>
    </div>
  );
}