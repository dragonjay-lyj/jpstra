import rss, { pagesGlobToRssItems } from '@astrojs/rss';

export async function GET(context) {
  return rss({
    site: context.site,
    items: await pagesGlobToRssItems(
        import.meta.glob('./content/docs/*.{md,mdx}'),
      ),
  });
}