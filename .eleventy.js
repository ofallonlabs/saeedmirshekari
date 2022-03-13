const { DateTime} = require("luxon");

module.exports = function(eleventyConfig) {

    eleventyConfig.addPassthroughCopy('./_src/assets');
    eleventyConfig.addPassthroughCopy('./_src/admin');
    eleventyConfig.addPassthroughCopy('./_src/blog');


    eleventyConfig.addFilter("postDate", (dateObj) => {
        return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED)
    });

    eleventyConfig.addCollection("feed", collection => {
        return collection
          .getFilteredByTag("post")
          .reverse()
          .slice(0, 5);
      });

    return {
        dir: {
            input: "_src",
            output: "_public"
        }
    };
}