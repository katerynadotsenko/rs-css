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
    },
    {
        level: 3,
        nodes: ['branch', 
            [
                {
                    type:'bird',
                    className: ['red']
                }, 
                {
                    type:'nest'
                },
                [
                    {
                        type:'nest'
                    },
                    [
                        {
                            type:'egg',
                            className: ['dance']
                        },
                        {
                            type:'egg'
                        }
                    ]
                ]
            ]
        ],
        task: 'Select the top egg',
        description: {
            selectorName: 'First Child Pseudo-selector',
            title: 'Select a first child element inside of another element',
            syntax: ':first-child',
            hint: 'You can select the first child element. A child element is any element that is directly nested in another element. You can combine this pseudo-selector with other selectors.',
            examples: ['<tag>:first-child</tag> selects all first child elements.', '<tag>p:first-child</tag> selects all first child <tag>&lt;p&gt;</tag> elements.',
                        '<tag>div p:first-child</tag> selects all first child <tag>&lt;p&gt;</tag> elements that are in a <tag>&lt;div&gt;</tag>']
        },
        answer: 1
    }
];

export default levelsData;