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
        task: 'Select the birds',
        description: {
            selectorName: 'Type Selector',
            title: 'Select elements by their type',
            syntax: 'X',
            hint: 'Selects all elements of type <tag>X</tag>. Type refers to the type of tag, so div, p and ul are all different element types.',
            examples: ['<tag>div</tag> selects all <tag>&lt;div&gt;</tag> elements.', '<tag>p</tag> selects all <tag>&lt;p&gt;</tag> elements.']
        },
        answer: 2
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
        task: 'Select the red bird',
        description: {
            selectorName: 'Class Selector',
            title: 'Select elements by their class',
            syntax: '.classname',
            hint: 'The class selector selects all elements with that class attribute. Elements can only have one ID, but many classes.',
            examples: ['<tag>.neato</tag> selects all elements with <tag>class="neato"</tag>']
        },
        answer: 1
    }
];

export default levelsData;