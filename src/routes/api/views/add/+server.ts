import { db } from '$lib/server/db';
import { views } from '$lib/server/db/schema';
import { error, json, type RequestHandler } from '@sveltejs/kit';
import { sql } from 'drizzle-orm';

export const POST = (async ({ request }) => {
  const req = await request.json();
  const slug = req.slug as string;

  if (!slug) {
    error(400, 'slug is required');
  }

  try {
    const postViewsCount = await db
      .insert(views)
      // @ts-expect-error nothing, just ts dumb or its just me
      .values({ slug, counter: 1 })
      // @ts-expect-error nothing, just ts dumb or its just me
      .onConflictDoUpdate({ target: views.slug, set: { counter: sql`${views.counter} + 1` } });

    return json(postViewsCount, { status: 201 });
  } catch (error) {
    console.error(error);
    throw error(500, 'Internal Server Error');
  }
}) satisfies RequestHandler;
