// Netlify functions require the exports.handler function wrapper
exports.handler = async function (event, context) {

  // Construct the required building blocks
  const rssFeed = `<?xml version="1.0"?>
  <rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>saeedmirshekari.com</title>
    <link>https://saeedmirshekari.com</link>
    <description>saeedmirshekari.com/blog is a lightweight microblogging site powered by Contentful and vanilla HTML, CSS and JavaScript.</description>

// We’ll get to this bit later!
  ${buildRssItems(await getPosts())}

 </channel>
</rss>`;

  // Return the string in the body as type “text/xml”
  return {
    statusCode: 200,
    contentType: "text/xml",
    body: rssFeed,
  };
};
