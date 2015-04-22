var fs = require('fs');

var dir = './in/';

module.exports = function(grunt) {

  require('load-grunt-tasks')(grunt);
  grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('regenerator', 'Runs the regenerator transformer', function() {
		var es6source = fs.readFileSync(dir + 'generators.js');
		var es5source = require('regenerator').compile(es6source).code;

		fs.writeFileSync('out/regenerator/generators.js', es5source);
	});

	var files = fs.readdirSync( dir );
	var sixToFive = {};

	files.forEach(function( file ) {
		if( file.match(/.swp/) ) { return; }
    sixToFive['out/6to5/' + file] = dir + file;
	});

  

	grunt.initConfig({
    'babel' : {
      options : {
        sourceMap : true
      },

      dist : {
        files : sixToFive
      }
    },
		
		'6to5' : {
			options : {},
			dist : {
				files : sixToFive
			}
		},

		'traceur' : {
			options : {},
			custom : {
				files : [{
					expand : true,
					cwd : 'in/',
					src : files,
					dest : 'out/traceur'
				}]
			}
		},

		'esnext' : {
			dist : {
				src : files.map(function(file) { return dir + file; }),
				dest : 'out/esnext'
			}

		},

		'watch' : {
			scripts : {
				files : ['in/*.js'],
				tasks : ['babel'],
				options : {}
			}
		}

	});

	//grunt.registerTask('default', ['babel', 'traceur', 'esnext','regenerator']);
  grunt.registerTask( 'default', ['babel']);
};
