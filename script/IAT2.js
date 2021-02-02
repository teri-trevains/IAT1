define(['pipAPI', 'https://cdn.jsdelivr.net/gh/baranan/minno-tasks@0.*/IAT/qualtrics/quiat9.js'], function(APIConstructor, iatExtension){
    var API = new APIConstructor();

	return iatExtension({
		category1 : {
            remindErrorText : '<p align="center" style="font-size:"1.0em"; font-family:arial">' +
                'If you make a mistake, a red <font color="#ff0000"><b>X</b></font> will appear. ' +
                'Press the <b>other key</b> to continue.<p/>',

            remindErrorTextTouch : '<p align="center" style="font-size:"1.4em"; font-family:arial">' +
                'If you make a mistake, a red <font color="#ff0000"><b>X</b></font> will appear. ' +
                'Touch the <b>other side</b> to continue.<p/>',
			name : 'Civilian', //Will appear in the data.
			title : {
				media : {word : 'Civilian'}, //Name of the category presented in the task.
				css : {color:'#31940F','font-size':'2em'}, //Style of the category title.
				height : 4 //Used to position the "Or" in the combined block.
			}, 
			stimulusMedia : [ //Stimuli content as PIP's media objects
    		    {image : 'civilian/civ1.jpg'},
    			{image : 'civilian/civ2.jpg'},
    			{image : 'civilian/civ3.jpg'},
    			{image : 'civilian/civ4.jpg'},
    			{image : 'civilian/civ5.jpg'},
    			{image : 'civilian/civ6.jpg'}
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
    		    {image : 'inmate/inmate1.jpg'},
    			{image : 'inmate/inmate2.jpg'},
    			{image : 'inmate/inmate3.jpg'},
    			{image : 'inmate/inmate4.jpg'},
    			{image : 'inmate/inmate5.jpg'},
    			{image : 'inmate/inmate6.jpg'}
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
