# grunt-package-template

The default Periodic Component grunt template

## Requirements

If you have installed grunt globally in the past, you will need to remove it with npm uninstall -g grunt first. [→ gruntjs wiki](https://github.com/gruntjs/grunt/wiki/Getting-started)

grunt-init > 0.2.x (bundles grunt 0.4.x) & grunt-cli

    $ npm install -g grunt-init
    $ npm install -g grunt-cli

## Usage

    $ git clone git@github.com:getperiodic/grunt.component.generator.git
    $ mkdir <project> && cd <project>
    $ grunt-init /path/to/grunt-client-module-template
    $ npm install
    $ node index

## Tasks

    $ grunt // default, runs linter and tests
    $ grunt lint // linter, alias for jshint
    $ grunt test // tests, alias for simplemocha
    $ grunt watch // watch all javascript and automatically test+lint on change
