import { db } from '../db';
import { news } from '../db/schema';
import { deleteNews } from '../actions/news';
import Link from 'next/link';
import { desc } from 'drizzle-orm';

export default async function Home() {
  // Fetch all news from database ordered by latest
  const allNews = await db.select().from(news).orderBy(desc(news.createdAt));

  return (
    <main className="p-8 max-w-4xl mx-auto font-sans">
      <div className="flex justify-between items-center mb-10 border-b pb-4">
        <h1 className="text-4xl font-bold text-gray-900">📰 Daily News Portal</h1>
        <Link href="/create" className="bg-blue-600 text-white font-semibold px-5 py-2 rounded-lg shadow hover:bg-blue-700 transition">
          + Publish News
        </Link>
      </div>

      <div className="space-y-6">
        {allNews.map((item) => (
          <article key={item.id} className="border p-6 rounded-xl shadow-sm bg-white flex justify-between items-start">
            <div className="space-y-2">
              <span className="text-xs font-bold text-blue-600 uppercase tracking-wider bg-blue-50 px-2 py-1 rounded">
                {item.category}
              </span>
              <h2 className="text-2xl font-semibold text-gray-800">{item.title}</h2>
              <p className="text-gray-600 leading-relaxed">{item.content}</p>
              <p className="text-xs text-gray-400 mt-2">
                Published: {item.createdAt?.toLocaleDateString()}
              </p>
            </div>
            
            {/* DELETE BUTTON (Using Server Action inline) */}
            <form action={async () => {
              'use server';
              await deleteNews(item.id);
            }}>
              <button type="submit" className="text-red-500 hover:text-red-700 hover:bg-red-50 px-3 py-1 rounded transition font-medium">
                Delete
              </button>
            </form>
          </article>
        ))}

        {allNews.length === 0 && (
          <div className="text-center py-10 text-gray-500 bg-gray-50 rounded-xl border border-dashed">
            No news found. Be the first to publish something!
          </div>
        )}
      </div>
    </main>
  );
}
