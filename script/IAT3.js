define(['pipAPI', 'https://cdn.jsdelivr.net/gh/baranan/minno-tasks@0.*/IAT/qualtrics/quiat9.js'], function(APIConstructor, iatExtension){
    var API = new APIConstructor();

	return iatExtension({
		category1 : {
			name : 'Civilian', //Will appear in the data.
			title : {
				media : {word : 'Civilian'}, //Name of the category presented in the task.
				css : {color:'#31940F','font-size':'2em'}, //Style of the category title.
				height : 4 //Used to position the "Or" in the combined block.
			}, 
			stimulusMedia : [ //Stimuli content as PIP's media objects
                {word: 'lawyer'},
                {word: 'doctor'},
                {word: 'teacher'},
                {word: 'secretary'},
                {word: 'firefighter'},
                {word: 'chef'}
			], 
			//Stimulus css (style)
			stimulusCss : {color:'#31940F','font-size':'1.8em'}
		},	
		category2 :	{
			name : 'Inmate', //Will appear in the data.
			title : {
				media : {word : 'Inmate'}, //Name of the category presented in the task.
				css : {color:'#31940F','font-size':'2em'}, //Style of the category title.
				height : 4 //Used to position the "Or" in the combined block.
			}, 
			stimulusMedia : [ //Stimuli content as PIP's media objects
                {word: 'convict'},
                {word: 'criminal'},
                {word: 'detainee'},
                {word: 'prisoner'},
                {word: 'offender'},
                {word: 'culprit'}
				], 
			//Stimulus css
			stimulusCss : {color:'#31940F','font-size':'1.8em'}
		},
			attribute1 :
			{
				name : 'Reward',
				title : {
					media : {word : 'Reward'},
					css : {color:'#0000FF','font-size':'1.8em'},
					height : 4 //Used to position the "Or" in the combined block.
				},
				stimulusMedia : [ //Stimuli content as PIP's media objects
					{word: 'prize'},
					{word: 'benefit'},
					{word: 'winning'},
					{word: 'award'},
					{word: 'advantage'},
					{word: 'bonus'}
				],
				//Stimulus css
				stimulusCss : {color:'#0000FF','font-size':'2.3em'}
			},
		attribute2 :
			{
				name : 'Punishment',
				title : {
					media : {word : 'Punishment'},
					css : {color:'#0000FF','font-size':'1.8em'},
					height : 4 //Used to position the "Or" in the combined block.
				},
				stimulusMedia : [ //Stimuli content as PIP's media objects
					{word: 'penalty'},
					{word: 'sanction'},
					{word: 'discipline'},
					{word: 'retribution'},
					{word: 'sentence'},
					{word: 'forfeit'}
				],
				//Stimulus css
				stimulusCss : {color:'#0000FF','font-size':'2.3em'}
			},

		base_url : {//Where are your images at?
			image : 'https://teri-trevains.github.io/IAT1/images/'
		} 
	});
});
