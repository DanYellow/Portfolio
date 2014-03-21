module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    meta : {
      dev: {
        path: 'dev/',
        vendorsJS: 'dev/javascripts/vendors/',
        bowerPath: './bower_components/'
      },
      prod: {
        path: 'prod/',
        vendorsJS: 'prod/javascripts/vendors/',
        bowerPath: './bower_components/'
      }
    },
/*    swig: {
      development: {
        init: {
            autoescape: false
        },
        dest: 'prod',
        src: 'dev/*.swig',
        generateSitemap: false,
        generateRobotstxt: false,
        siteUrl: 'http://www.jeanlouisdanielo.fr',
        production: true
      }
    },*/
    tasty_swig: {
      index: {
        src: ['<%= meta.dev.path %>views/*.swig'],
        dest: 'prod'
      }
    },
    less: {
      development: {
        options: {
          compress: false,
          cleancss: false,
          outputSourceFiles: true,
          sourceMap: true,
          sourceMapFilename: '<%= meta.prod.path %>stylesheets/main.css.map', // where file is generated and located
          sourceMapURL: '/stylesheets/main.css.map', // the complete url and filename put in the compiled css file
          sourceMapBasepath: '<%= meta.prod.path %>' // Sets sourcemap base path, defaults to current working directory.
        },
        files: {
          '<%= meta.prod.path %>stylesheets/style.css': "<%= meta.dev.path %>stylesheets/style.less"
        }
      }
    },

    concat: {
      lessDev: {
          src: [
                '<%= meta.dev.path %>stylesheets/style.less'
          ],
          dest: '<%= meta.dev.path %>stylesheets/style.final.less'
        }
    },

    copy: {
      vendorsBowerJS: {
        files: [
          { src: '<%= meta.dev.bowerPath %>backbone/backbone.js', dest: '<%= meta.prod.vendorsJS %>backbone.js' },
          { src: '<%= meta.dev.bowerPath %>jquery/dist/jquery.min.js', dest: '<%= meta.prod.vendorsJS %>jquery.min.js' },
          { src: '<%= meta.dev.bowerPath %>modernizr/modernizr.js', dest: '<%= meta.prod.vendorsJS %>modernizr.js' },
          { src: '<%= meta.dev.bowerPath %>requirejs/require.js', dest: '<%= meta.prod.vendorsJS %>require.js' },
          { src: '<%= meta.dev.bowerPath %>underscore/underscore.js', dest: '<%= meta.prod.vendorsJS %>underscore.js' },
          { src: '<%= meta.dev.bowerPath %>require-handlebars-plugin/hbs.js', dest: '<%= meta.prod.vendorsJS %>hbs.js' }
        ]
      },

      hbsRequire : {
        files: [{
              expand: true,
              flatten: true,
              src: ['<%= meta.dev.bowerPath %>require-handlebars-plugin/hbs/**'],
              dest: '<%= meta.prod.vendorsJS %>hbs/',
              filter: 'isFile'
        }]
      },

      images: {
        files: [
          {
            expand: true,
            cwd: '<%= meta.dev.path %>images/',
            src: ['**/*.{png,jpg,svg}'],
            dest: '<%= meta.prod.path %>images/'
          }
        ]
      },

      misc: {
        files: [
          { src: '<%= meta.dev.path %>stylesheets/owl.carousel.css', dest: '<%= meta.prod.path %>stylesheets/owl.carousel.css' },
          { src: '<%= meta.dev.path %>stylesheets/owl.theme.css', dest: '<%= meta.prod.path %>stylesheets/owl.theme.css' },
          { src: '<%= meta.dev.path %>stylesheets/owl.transitions.js', dest: '<%= meta.prod.path %>stylesheets/owl.transitions.js' },
          { src: '<%= meta.dev.path %>stylesheets/AjaxLoader.gif', dest: '<%= meta.prod.path %>stylesheets/AjaxLoader.gif' },
          { src: '<%= meta.dev.path %>stylesheets/grabbing.png', dest: '<%= meta.prod.path %>stylesheets/grabbing.png' }
        ]
      },

      fonts: {
        files: [
          {
            expand: true,
            cwd: '<%= meta.dev.path %>stylesheets/fonts/',
            src: ['**/*'],
            dest: '<%= meta.prod.path %>stylesheets/fonts/'
          }
        ]
      },

      javascripts: {
        files: [
          {
            expand: true,
            cwd: '<%= meta.dev.path %>javascripts/',
            src: ['**/*'],
            dest: '<%= meta.prod.path %>javascripts/'
          }
        ]
      }
    },

    clean: {
      build: {
        src: ["prod/*"]
      }
    },

    watch: {
      images: {
        files: ['<%= meta.dev.path %>images/**/*.{png,jpg,svg}'],
        tasks: ['copy:images'],
        options: {
          spawn: false
        },
      },

      configFiles: {
        files: [ 'Gruntfile.js', 'app.js' ],
        options: {
          reload: true
        }
      },

      swigTpl: {
        files: ['<%= meta.dev.path %>views/*.swig'],
        tasks: ['tasty_swig:index'],
        options: {
          livereload: 35729
        }
      },

      less: {
        files: ['<%= meta.dev.path %>stylesheets/style.less'],
        tasks: ['concat:lessDev', 'less:development'],
        options: {
          livereload: 35729
        }
      },

      javascripts: {
        files: ['<%= meta.dev.path %>javascripts/**/*'],
        tasks: ['copy:javascripts'],
        options: {
          livereload: 35729
        }
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-tasty-swig');
  // grunt.loadNpmTasks('grunt-swig-compile');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-watch');


  // Default task(s).
  grunt.registerTask('default', ['clean', 'concat', 'less', 'tasty_swig', 'copy']);
  grunt.registerTask('watcher', ['watch']);

};