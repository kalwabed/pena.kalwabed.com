import { error, fail } from '@sveltejs/kit';
import { BOT_GROUP_ID, BOT_TOKEN } from '$env/static/private';

import type { PageServerLoad, Actions } from './$types';
import { prisma } from '$lib/providers/prisma';

export const load = (async () => {
  try {
    const guests = await prisma.guestBook.findMany({ orderBy: { created_at: 'desc' } });

    return { guests };
  } catch (err) {
    console.error(err);
    error(500, 'Internal Server Error');
  }
}) satisfies PageServerLoad;

export const actions = {
  default: async ({ request, fetch }) => {
    const data = await request.formData();
    const name = data.get('name') as string;
    const body = data.get('body') as string;
    const email = data.get('email') as string;

    if (!name || !body || !email) {
      return fail(400, { msg: 'Nama, Email, dan Pesan wajib diisi' });
    }

    try {
      await prisma.guestBook.create({
        data: {
          name,
          body,
          email,
        },
      });

      const escapedText = (text: string) => {
        // eslint-disable-next-line no-useless-escape
        return text.replace(/[\_\*\[\]\(\)\~\`\>\#\+\-\=\|\{\}\.]/g, '\\$&');
      };

      // reference https://core.telegram.org/bots/api#sendmessage
      const text = `
*New Guest Book Entry*
Name: ||${escapedText(name)}||
Email: ||${escapedText(email)}||
Message: ||${escapedText(body)}||
              `;

      if (BOT_TOKEN && BOT_GROUP_ID) {
        await fetch(
          `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage?chat_id=${BOT_GROUP_ID}&text=${encodeURIComponent(
            text
          )}&parse_mode=MarkdownV2`,
          {
            method: 'POST',
          }
        );
      }

      return { msg: 'Yayy' };
    } catch (err) {
      error(500, 'Internal Server Error');
    }
  },
} satisfies Actions;
