module.exports = function(grunt) {
  grunt.initConfig({
    browserify: {
      dev: {
        // A single entry point for our app
        src: 'app/js/app.js',
        // Compile to a single file to add a script tag for in your HTML
        dest: 'dist/js/bundle.js',
	 bundleOptions:{
                debug: true
        }

      }
    },
    copy: {
      all: {
        // This copies all the html and css into the dist/ folder
        expand: true,
        cwd: 'app/',
        src: ['**/*.html', '**/*.css'],
        dest: 'dist/',
      },
    },
     express: {
    options: {
      // Override defaults here
	background: false
    },
    dev: {
      options: {
        script: 'server/server.js'
      }
    },
    prod: {
      options: {
        script: 'path/to/prod/server.js',
        node_env: 'production'
      }
    }
  }
  });

  // Load the npm installed tasks
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-express-server');
  // The default tasks to run when you type: grunt
  grunt.registerTask('default', ['browserify', 'copy', 'express:dev']);
};
