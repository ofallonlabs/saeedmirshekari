const { DateTime } = require("luxon");


module.exports = function(eleventyConfig) {

    // Adding the custom filter
    eleventyConfig.addFilter("dateFull", (dateObj) => {
        return DateTime.fromJSDate(dateObj, { zone: 'utc' }).toLocaleString(DateTime.DATE_FULL);
    });


    eleventyConfig.addLayoutAlias('default', 'base.njk');


    eleventyConfig.addPassthroughCopy('./_src/admin');
    // eleventyConfig.addPassthroughCopy('./_src/blog');
    // eleventyConfig.addPassthroughCopy('./_src/terms_of_service.txt');
    eleventyConfig.addPassthroughCopy('./_src/terms_of_service.html');
    eleventyConfig.addPassthroughCopy('./_src/privacy_policy.html');


    eleventyConfig.addCollection("feed", function (collectionApi) {
        return collectionApi.getAllSorted().reverse().slice(20, 25);
      });

    eleventyConfig.addCollection("tagposts", function(collectionApi) {
        return collectionApi.getFilteredByTags("post").reverse().slice(0, 5);
    });

    return {
        dir: {
            input: "_src",
            output: "_public"
        }
    };

}