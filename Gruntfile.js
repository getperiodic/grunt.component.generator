/*
 * {%= name %}
 * https://github.amexpub.com/modules/{%= name %}
 *
 * Copyright (c) 2013 AmexPub. All rights reserved.
 */

'use strict';

module.exports = function(grunt) {
  grunt.initConfig({
    simplemocha: {
      options: {
        globals: ['should'],
        timeout: 3000,
        ignoreLeaks: false,
        ui: 'bdd',
        reporter: 'tap'
      },
      all: {
        src: 'test/**/*.js'
      }
    },
    jshint: {
      options: {
        jshintignore: '.jshintignore',
        jshintrc: '.jshintrc'
      },
      all: [
        'Gruntfile.js',
        'root/**/*.js',
        'test/**/*.js'
      ]
    }
  });

  grunt.loadNpmTasks('grunt-simple-mocha');
  grunt.loadNpmTasks('grunt-contrib-jshint');

  grunt.registerTask('default', ['jshint', 'simplemocha']);
  grunt.registerTask('lint', 'jshint');
  grunt.registerTask('test', 'simplemocha');
};
