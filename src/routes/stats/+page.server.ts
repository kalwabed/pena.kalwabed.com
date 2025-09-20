import { error } from '@sveltejs/kit';

import type { PageServerLoad } from './$types';
import { db } from '$lib/server/db';
import { views } from '$lib/server/db/schema';
import { desc } from 'drizzle-orm';

export const load = (async () => {
  try {
    const postViewsCount = await db.query.views.findMany({ orderBy: [desc(views.counter)] });

    return { stats: postViewsCount };
  } catch (err) {
    console.error(err);
    error(500, 'Internal Server Error');
  }
}) satisfies PageServerLoad;
