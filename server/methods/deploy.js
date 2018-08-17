(function() {
  'use strict';

  // require('dotenv').config();

  const path = require('path');

  const express = require('express');
  const morgan = require('morgan');
  const bodyParser = require('body-parser');
  const compression = require('compression');

  // const apiRouter = require('../routers/api.v1.js');
  const assetRouter = require('../routers/asset.js');
  const navRouter = require('../routers/nav.js');

  const SOL = express();

  SOL.set('port', process.env.SOL_PORT || 3012)
    .use(morgan('dev'))
    .use(bodyParser.json())
    .use(
      bodyParser.urlencoded({
        extended: true,
      })
    )
    .use(compression())
    // .use('/api/v1', apiRouter)
    .use('/', assetRouter)
    .use('/', navRouter);

  SOL.listen(SOL.get('port'), () => {
    console.log(`App server listening on port ${SOL.get('port')}`);
  });
})();
