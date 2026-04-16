import { createNews } from '../../actions/news';
import Link from 'next/link';

export default function CreateNews() {
  return (
    <main className="p-8 max-w-2xl mx-auto font-sans">
      <Link href="/" className="text-blue-500 mb-6 inline-block hover:underline font-medium">
        &larr; Back to Home
      </Link>
      
      <div className="bg-white border rounded-xl shadow-sm p-8">
        <h1 className="text-3xl font-bold mb-6 text-gray-900">Write a New Article</h1>
        
        {/* Next.js 15+ Server Action Form */}
        <form action={createNews} className="space-y-5 flex flex-col">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Headline</label>
            <input type="text" name="title" required placeholder="Enter breaking news headline..." 
                   className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
            <input type="text" name="category" required placeholder="Sports, Politics, Tech..." 
                   className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Full Story</label>
            <textarea name="content" required placeholder="Write the full news story here..." rows={6} 
                      className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"></textarea>
          </div>

          <button type="submit" className="bg-green-600 text-white font-bold text-lg px-4 py-3 rounded-lg hover:bg-green-700 transition shadow-md w-full mt-4">
            Publish Article
          </button>
        </form>
      </div>
    </main>
  );
}
