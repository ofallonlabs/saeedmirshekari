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


    eleventyConfig.addCollection("all", function(collectionApi) {
        return collectionApi.getAllSorted().filter(item => item.data.tags && item.data.tags.includes("post"));
    });

    eleventyConfig.addCollection("feed", function (collectionApi) {
        return collectionApi.getAllSorted().slice(20, 25);
      });

    eleventyConfig.addCollection("tag", function(collectionApi) {
        return collectionApi.getFilteredByTags("post");
    });
    
    return {
        dir: {
            input: "_src",
            output: "_public"
        }
    };

}