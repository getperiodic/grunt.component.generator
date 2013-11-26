/*
 * grunt-client-module-template
 * http://github.amexpub.com/AmexPub/grunt-client-module-template-generator
 *
 * Copyright (c) 2013 AmexPub. All rights reserved.
 */

'use strict';

exports.description = 'Create a default Amex Pub package module';
exports.notes = '';
exports.warnOn = '';
exports.template = function(grunt, init, done) {
  init.process({ type: 'node' }, [
    init.prompt('name'),
    init.prompt('description'),
  ], function(err, props) {
    props.keywords = ['Amex Pub', 'amexpub', 'package', 'library'];
    props.main = 'index.js';
    props.version = '0.0.1';
    props.node_version = '>=0.10.x';
    props.npm_test = 'mocha -R spec --recursive';
    props.dependencies = {
    };
    props.devDependencies = {
      "chai": "1.5.0",
      'grunt': '0.4.1',
      'grunt-contrib-jshint': '0.4.3',
      'grunt-contrib-copy': '0.4.1',
      'grunt-simple-mocha': '0.4.0',
      'grunt-jsbeautifier': '0.1.7',
      'mocha': '1.9.0'
    };

    var files = init.filesToCopy(props);

    init.copyAndProcess(files, props);
    init.writePackageJSON('package.json', props);

    done();
  });
};
