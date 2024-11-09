import Image from 'next/image';

export default function BookThumbnail({ book }: { book: Book }) {
  return (
    <div className="relative w-[259px] h-[399px]">
      <Image
        src={book.coverImage}
        alt={`Cover for ${book.title}`}
        fill
        className="object-cover rounded-lg"
        sizes="310px"
        priority={false}
      />
    </div>
  );
} 