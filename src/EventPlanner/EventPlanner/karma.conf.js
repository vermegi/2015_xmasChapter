module.exports = function (config) {
    config.set({
        frameworks: ['jasmine'],
        reporters: ['spec'],
        browsers: [
            'PhantomJS',
            'Chrome',
            'IE8',
            'IE9',
            'IE10',
            'IE',
            'Firefox'
        ],
        files: [
          'Scripts/lib/jquery/dist/jquery.js',
          'jasmine/src/**/*.js',
          'jasmine/spec/**/*.js'
        ],
        customLaunchers: {
            IE10: {
                base: 'IE',
                'x-ua-compatible': 'IE=EmulateIE10'
            },
            IE9: {
                base: 'IE',
                'x-ua-compatible': 'IE=EmulateIE9'
            },
            IE8: {
                base: 'IE',
                'x-ua-compatible': 'IE=EmulateIE8'
            }
        }
    });
};
