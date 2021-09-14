const { pick, isEmpty, isInteger } = require('lodash')
    , logger = require('loglevel')
    , stringSanitizer = require('string-sanitizer');


/**
 * Set default value if value is empty.
 * @param {string} value 
 * @param {string} defaultValue 
 */
exports.defaultToIfEmpty = (value, defaultValue) => {
    if( isEmpty(value) ) {
        return isInteger(value) ? value : defaultValue;
    };

    return value;
};

/**
 * Set Central Log
 * @param {Object} options 
 * @param {String} options.level
 * @param {String} options.method
 * @param {String} options.message
 * @param {Error=} options.error 
 * @param {String=} options.others
 */
exports.setLog = (options) => {
    const payload = pick(options, ['level', 'method', 'message', 'error', 'others']);

    let output = stringSanitizer.sanitize.keepSpace(`${payload.level}`);
    output += ':';
    output += stringSanitizer.sanitize.keepSpace(`${payload.method}`);
    output += '-> ';
    output += stringSanitizer.sanitize.keepSpace(`${payload.message}`);

    if(payload.others) output += ` (${stringSanitizer.sanitize.keepSpace(`${payload.others}`)})`;

    logger.info(output);
    console.log(output);

    if(payload.error) logger.warn(payload.error);
}


