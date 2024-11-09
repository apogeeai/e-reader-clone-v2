export default function Navigation() {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-[#E5E5E5] border-t border-gray-300">
      <div className="max-w-[1260px] min-w-[420px] mx-auto flex justify-around py-4">
        <div className="text-center">
          <div className="font-medium border-b-2 border-gray-900 pb-2">Home</div>
        </div>
        <div className="text-center">
          <div className="text-gray-500">Library</div>
        </div>
      </div>
    </div>
  );
}