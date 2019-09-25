'use strict';

exports.hello = (event, context, callback) => {
  callback(null, {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: `It's currently ${Date()}`
      },
      null,
      2
    ),
  });
};
