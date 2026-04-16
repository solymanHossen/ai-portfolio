'use server';

import { db } from '../db';
import { news } from '../db/schema';
import { eq } from 'drizzle-orm';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

// CREATE News
export async function createNews(formData: FormData) {
  const title = formData.get('title') as string;
  const content = formData.get('content') as string;
  const category = formData.get('category') as string;

  await db.insert(news).values({ title, content, category });
  
  revalidatePath('/');
  redirect('/');
}

// DELETE News
export async function deleteNews(id: number) {
  await db.delete(news).where(eq(news.id, id));
  revalidatePath('/');
}
