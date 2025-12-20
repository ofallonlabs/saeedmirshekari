const { DateTime } = require("luxon");

module.exports = function(eleventyConfig) {

    // Add a filter to format dates
    eleventyConfig.addFilter("truncate", (str, length, useWordBoundary, ending = "...")=> {
        if (!str) return "";
        if (str.length <= length) return str;
        const subString = str.substr(0, length - ending.length);
        return useWordBoundary
        ? subString.substr(0, subString.lastIndexOf(" ")) + ending
        : subString + ending;
    });

    // Adding the custom filter
    eleventyConfig.addFilter("dateFull", (dateObj) => {
        return DateTime.fromJSDate(dateObj, { zone: 'utc' }).toLocaleString(DateTime.DATE_FULL);
    });


    eleventyConfig.addLayoutAlias('default', 'base.njk');


    // Copy the `public` directory to the root of the output folder
    eleventyConfig.addPassthroughCopy({ "public": "." });
    // Watch the `public` directory for changes
    eleventyConfig.addWatchTarget("public");


    eleventyConfig.addPassthroughCopy('./_src/admin');
    eleventyConfig.addPassthroughCopy('./_src/badmin');

    eleventyConfig.addPassthroughCopy('./_src/404.html');
    eleventyConfig.addPassthroughCopy('./_src/terms_of_service.html');
    eleventyConfig.addPassthroughCopy('./_src/privacy_policy.html');


    eleventyConfig.addCollection("everything", function(collectionApi) {
        return collectionApi.getFilteredByTag("post");
    });

    eleventyConfig.addCollection("post", function(collectionApi) {
        return collectionApi.getAllSorted().filter((item) => item.data.tags && item.data.tags.includes("post"));
    });

    eleventyConfig.addCollection("career", function(collectionApi) {
        return collectionApi.getAllSorted().filter((item) => item.data.tags && item.data.tags.includes("career"));
    });
    eleventyConfig.addCollection("mentoring", function(collectionApi) {
        return collectionApi.getAllSorted().filter((item) => item.data.tags && item.data.tags.includes("mentoring"));
    });
    eleventyConfig.addCollection("projects", function(collectionApi) {
        return collectionApi.getAllSorted().filter((item) => item.data.tags && item.data.tags.includes("projects"));
    });
    eleventyConfig.addCollection("trends", function(collectionApi) {
        return collectionApi.getAllSorted().filter((item) => item.data.tags && item.data.tags.includes("trends"));
    });

    eleventyConfig.addCollection("feed", function (collectionApi) {
        return collectionApi.getAllSorted().slice(20, 25);
      });

    return {
        dir: {
            input: "_src",
            output: "_site"
        }
    };

}