'use strict';

const moment = require('moment');

exports.hello = (event, context, callback) => {
  callback(null, {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: `It's currently ${moment().format('llll')}`
      },
      null,
      2
    ),
  });
};
