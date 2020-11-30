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
        answer: [3, 'bird']
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
        answer: [1, '.red']
    },
    {
        level: 3,
        nodes: ['branch', 
            [
                {
                    type:'house',
                    id: 'blue-house'
                },
                {
                    type:'bird'
                },
                {
                    type:'house',
                    className: ['dance'],
                    id: 'green-house'
                }
            ]
        ],
        task: 'Select the green house',
        description: {
            selectorName: 'ID Selector',
            title: 'Select elements with an ID',
            syntax: '#id',
            hint: 'Selects the element with a specific id. You can also combine the ID selector with the type selector.',
            examples: ['<tag>#cool</tag> selects any element with <tag>id="cool"</tag>', '<tag>ul#long</tag> selects <tag>&lt;ul id="long"&gt;</tag>']
        },
        answer: [1, '#green-house']
    },
    {
        level: 4,
        nodes: ['branch', 
            [
                {
                    type:'bird',
                    className: ['blue']
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
        answer: [1, 'egg:first-child']
    },
    {
        level: 5,
        nodes: ['branch', 
            [
                {
                    type:'egg',
                    className: ['pink']
                }, 
                {
                    type:'egg',
                    className: ['green']
                }, 
                {
                    type:'egg',
                    className: ['red']
                }, 
                {
                    type:'egg',
                    className: ['yellow']
                }, 
                {
                    type:'egg',
                    className: ['dance', 'green']
                }, 
                {
                    type:'egg',
                    className: [ 'purple']
                }
            ]
        ],
        task: 'Select the 5th egg',
        description: {
            selectorName: 'Nth Child Pseudo-selector',
            title: 'Select an element by its order in another element',
            syntax: ':nth-child(A)',
            hint: 'Selects the <tag>nth</tag> (Ex: 1st, 3rd, 12th etc.) child element in another element.',
            examples: ['<tag>:nth-child(8)</tag> selects every element that is the 8th child of another element.',
                        '<tag>div p:nth-child(2)</tag> selects the second <tag>p</tag> in every <tag>div</tag>']
        },
        answer: [1, 'egg:nth-child(5)']
    },
    {
        level: 6,
        nodes: ['branch', 
            [
                {
                    type:'bird',
                    className: ['yellow']
                }, 
                {
                    type:'bird',
                    className: ['dance','yellow']
                }, 
                {
                    type:'bird',
                    className: ['yellow']
                }, 
                {
                    type:'bird',
                    className: ['dance', 'yellow']
                }, 
                {
                    type:'bird',
                    className: ['yellow']
                }
            ]
        ],
        task: 'Select even birds',
        description: {
            selectorName: 'Nth Child Pseudo-selector',
            title: 'Select an element by its order in another element',
            syntax: ':nth-child(even)',
            hint: 'It can take the form not only of a number (integer), but and keywords (odd or even), or a calculation (expression).',
            examples: ['<tag>div p:nth-child(even)</tag> selects even <tag>p</tag> elements in every <tag>div</tag>']
        },
        answer: [2, 'bird:nth-child(even)']
    },
    {
        level: 7,
        nodes: ['branch', 
            [
                [
                    {
                        type:'nest'
                    },
                    [
                        {
                            type:'bird',
                            className: ['dance']
                        }
                    ]
                ], 
                [
                    {
                        type:'nest'
                    },
                    [
                        {
                            type:'bird',
                            className: ['dance', 'blue']
                        }
                    ]
                ],
                [
                    {
                        type:'nest'
                    },
                    [
                        {
                            type:'bird',
                            className: ['dance', 'yellow']
                        }
                    ]
                ]
            ]
        ],
        task: 'Select odd bird in every nest',
        description: {
            selectorName: 'Nth Child Pseudo-selector',
            title: 'Select an element by its order in another element',
            syntax: ':nth-child(odd)',
            hint: 'It can take the form not only of a number (integer), but and keywords (odd or even), or a calculation (expression).',
            examples: ['<tag>div p:nth-child(odd)</tag> selects odd <tag>p</tag> elements in every <tag>div</tag>']
        },
        answer: [3, 'nest bird:nth-child(odd)']
    },
    {
        level: 8,
        nodes: ['branch', 
            [
                {
                    type:'bird',
                    className: ['yellow']
                }, 
                {
                    type:'bird',
                    className: ['red']
                },
                {
                    type:'bird',
                    className: ['dance', 'blue']
                },
                {
                    type:'bird',
                    className: ['blue']
                }, 
                {
                    type:'bird',
                    className: ['yellow']
                },
                {
                    type:'bird',
                    className: ['dance', 'red']
                }
            ]
        ],
        task: 'Select every third bird',
        description: {
            selectorName: 'Nth Child Pseudo-selector Selector with Formula',
            title: 'Select an element by its order in another element.',
            syntax: ':nth-child(an+b)',
            hint: '<tag>a</tag> represents a cycle size, <tag>n</tag> is a counter (starts at 0), and <tag>b</tag> is an offset value',
            examples: ['<tag>p:nth-child(3n+0)</tag> selects every third <tag>&lt;p&gt;</tag> element.']
        },
        answer: [2, 'bird:nth-child(3n+0)']
    },
    {
        level: 9,
        nodes: ['branch', 
            [
                [
                    {
                        type:'nest'
                    },
                    [
                        {
                            type:'egg'
                        },
                        {
                            type:'egg'
                        }
                    ]
                ], 
                [
                    {
                        type:'nest'
                    },
                    [
                        {
                            type:'bird',
                            className: ['dance']
                        }
                    ]
                ],
                [
                    {
                        type:'nest'
                    },
                    [
                        {
                            type:'egg',
                            className: ['dance', 'purple']
                        }
                    ]
                ],
                {
                    type:'bird',
                    className: ['red']
                }
            ]
        ],
        task: 'Select the bird and the purple egg in the nest',
        description: {
            selectorName: 'Only Child Pseudo-selector',
            title: 'Select an element that are the only element inside of another one.',
            syntax: ':only-child',
            hint: 'You can select any element that is the only element inside of another one.',
            examples: ['<tag>span:only-child</tag> selects the <tag>&lt;span&gt;</tag> elements that are the only child of some other element.',
                        '<tag>ul li:only-child</tag> selects the only <tag>&lt;li&gt;</tag> element that are in a <tag>&lt;ul&gt;</tag>.']
        },
        answer: [2, 'nest *:only-child']
    }
];

export default levelsData;