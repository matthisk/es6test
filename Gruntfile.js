var fs = require('fs');

var dir = './in/';

module.exports = function(grunt) {
	grunt.loadNpmTasks('grunt-6to5');
	grunt.loadNpmTasks('grunt-traceur');

	var files = fs.readdirSync( dir );
	var sixToFive = {};

	files.forEach(function( file ) {
		sixToFive['out/6to5/' + file] = dir + file;
	});

	grunt.initConfig({
		
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
		}

	});

	grunt.registerTask('default', ['6to5', 'traceur']);
};