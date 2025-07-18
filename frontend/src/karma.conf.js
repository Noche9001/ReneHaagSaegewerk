// karma.conf.js
module.exports = function (config) {
  config.set({
    basePath: "",

    frameworks: ["jasmine", "@angular-devkit/build-angular"],

    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,

    autoWatch: true,
    browsers: ["Edge"], // Use 'Chrome' if you want the full browser UI

    singleRun: false,
    restartOnFileChange: true,
  });
};
