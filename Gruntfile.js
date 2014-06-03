module.exports = function(grunt) {

  grunt.initConfig({
    jshint: {
      browser: {
        src: ['mocofo-team-list.js'],
        options: {
          sub: true,
          globals: {
            _gaq: true,
            ga: true
          }
        }
      }
    },
    qunit: {
      src: ['tests/index.html']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-qunit');
  grunt.loadNpmTasks('grunt-contrib-jshint');

  grunt.registerTask('test', 'qunit:src');
  grunt.registerTask('lint', 'jshint');

  grunt.registerTask('default', ['jshint', 'qunit:src']);
};

