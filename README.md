# Pena

Website coordinates Kalwabed's abstract writings in Indonesia.

## Demo

[https://pena.kalwabed.com](https://pena.kalwabed.com)

## Tech Stack

- SvelteKit
- TypeScript
- Uno CSS
- Drizzle + Turso

## Getting Started

To get started running the project locally, please follow the steps below.

First, clone the repository.

```bash
git clone https://github.com/kalwabed/pena.kalwabed.com.git
```

Then, install dependencies and fetch data to your local machine. **Note that we use PNPM.**

```bash
cd pena.kalwabed.com
pnpm install
```

Finally, run the development server.

```bash
pnpm dev
```

Open [http://127.0.0.1:5173](http://127.0.0.1:5173) with your browser to see the result.

## Environment Variables

To run this project, you will need to add the following environment variables to your `.env` file.

`DATABASE_URL`: Turso database URL.

`DATABASE_ACCESS_TOKEN`: Turso database access token.

`BOT_TOKEN`: (optional) Telegram bot token.

`BOT_GROUP_ID`: (optional) Telegram bot group id.

## Learn More

To learn more about Sveltekit, take a look at the following resources:

- [Svelte Kit Documentation](https://kit.svelte.dev/docs/introduction) - learn about Svelte Kit features and API.
- [Learn Svelte](https://learn.svelte.dev/tutorial/welcome-to-svelte) - an interactive Svelte tutorial.

## Authors

- [@kalwabed](https://www.github.com/kalwabed)

## License

[MIT](https://choosealicense.com/licenses/mit/)
