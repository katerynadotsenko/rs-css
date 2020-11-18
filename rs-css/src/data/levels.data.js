const levelsData = [
    {
        level: 1,
        nodes: ['branch', 
            [
                {
                    name:'bird',
                    className: 'dance'
                }, 
                {
                    name:'bird',
                    className: 'dance'
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
    }
];

export default levelsData;