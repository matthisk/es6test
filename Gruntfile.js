module.exports = function(grunt) {

	grunt.loadNpmTasks('grunt-6to5');
	grunt.loadNpmTasks('grunt-traceur');

	grunt.initConfig({
		
		'6to5' : {
			options : {},
			dist : {
				files : {
					'arrows.js' : 'out/6to5/arrows.js'
				}
			}
		},

		'traceur' : {
			options : {},
			custom : {
				files : [{
					expand : true,
					src : ['arrows.js'],
					dest : 'out/traceur'
				}]
			}
		}

	});

	grunt.registerTask('default', ['6to5', 'traceur']);

};