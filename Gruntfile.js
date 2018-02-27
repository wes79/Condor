module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    
    uglify: {
		 my_target: {
		  files: {
			'dest/output.min.js': ['js/bootstrap.min.js']
		  }
		},
      options: {
        compress: true
      },
    },

    qunit: {
      files: ['test/**/*.html']
    },
    jshint: {
      files: ['Gruntfile.js', 'js/application.js', 'test/**/*.js'],
      options: {
        // options here to override JSHint defaults
        globals: {
          jQuery: true,
          console: true,
          module: true,
          document: true
        }
      }
    },
    watch: {
      files: ['<%= jshint.files %>'],
      tasks: ['jshint', 'qunit']
    },
	cssmin: {
	  target: {
		files: [{
		  expand: true,
		  cwd: 'css',
		  src: ['*.css', '!*.min.css'],
		  dest: 'css',
		  ext: '.min.css'
		}]
	  }
	}
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-qunit');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-cssmin');


  grunt.registerTask('default', ['jshint', 'qunit', 'uglify', 'cssmin']);

};