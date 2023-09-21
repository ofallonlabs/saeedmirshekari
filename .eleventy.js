const { DateTime} = require("luxon");

module.exports = function(eleventyConfig) {

    eleventyConfig.addPassthroughCopy('./_src/assets');
    eleventyConfig.addPassthroughCopy('./_src/admin');
    eleventyConfig.addPassthroughCopy('./_src/blog');
    eleventyConfig.addPassthroughCopy('./_src/winners.txt');
    // eleventyConfig.addPassthroughCopy('./_src/terms_of_service.txt');
    // eleventyConfig.addPassthroughCopy('./_src/terms_of_service.html');
    // eleventyConfig.addPassthroughCopy('./_src/privacy_policy.html');



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