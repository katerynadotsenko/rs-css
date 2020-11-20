const levelsData = [
    {
        level: 1,
        nodes: ['branch', 
            [
                {
                    type:'bird',
                    className: ['dance']
                }, 
                {
                    type:'bird',
                    className: ['dance']
                }
            ]
        ],
        selector: ['bird'],
        task: 'Select the birds',
        description: {
            selectorName: 'Type Selector',
            title: 'Select elements by their type',
            syntax: 'X',
            hint: 'Selects all elements of type <tag>X</tag>. Type refers to the type of tag, so div, p and ul are all different element types.',
            examples: ['<tag>div</tag> selects all <tag>&lt;div&gt;</tag> elements.', '<tag>p</tag> selects all <tag>&lt;p&gt;</tag> elements.']
        }
    },
    {
        level: 2,
        nodes: ['branch', 
            [
                {
                    type:'bird',
                    className: ['dance', 'red']
                }, 
                {
                    type:'nest'
                },
                {
                    type:'bird'
                }
            ]
        ],
        selector: ['bird'],
        task: 'Select the red bird',
        description: {
            selectorName: 'ID Selector',
            title: 'Select elements with an ID',
            syntax: '#id',
            hint: 'Selects the element with a specific <tag>id</tag>. You can also combine the ID selector with the type selector.',
            examples: ['<tag>#cool</tag> selects any element with <tag>id="cool"</tag>', '<tag>ul#long</tag> selects <tag>&lt;ul id="long"&gt;</tag>']
        }
    }
];

export default levelsData;