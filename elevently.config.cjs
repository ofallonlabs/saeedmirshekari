const { DateTime } = require("luxon");
module.exports = function(eleventyConfig) {

    eleventyConfig.addLayoutAlias('default', 'base.njk');

    eleventyConfig.addPassthroughCopy('./_src/admin');
    eleventyConfig.addPassthroughCopy('./_src/blog');
    // eleventyConfig.addPassthroughCopy('./_src/terms_of_service.txt');
    eleventyConfig.addPassthroughCopy('./_src/terms_of_service.html');
    eleventyConfig.addPassthroughCopy('./_src/privacy_policy.html');

    eleventyConfig.addFilter("datona", (dateObj) => {
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