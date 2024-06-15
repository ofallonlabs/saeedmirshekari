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

    eleventyConfig.addCollection("career", function(collectionApi) {
        return collectionApi.getAllSorted().filter(item => item.data.tags && item.data.tags.includes("career"));
    });
    eleventyConfig.addCollection("mentoring", function(collectionApi) {
        return collectionApi.getAllSorted().filter(item => item.data.tags && item.data.tags.includes("mentoring"));
    });
    eleventyConfig.addCollection("projects", function(collectionApi) {
        return collectionApi.getAllSorted().filter(item => item.data.tags && item.data.tags.includes("projects"));
    });
    eleventyConfig.addCollection("trends", function(collectionApi) {
        return collectionApi.getAllSorted().filter(item => item.data.tags && item.data.tags.includes("trends"));
    });

    eleventyConfig.addCollection("feed", function (collectionApi) {
        return collectionApi.getAllSorted().slice(20, 25);
      });

    return {
        dir: {
            input: "_src",
            output: "_public"
        }
    };

}