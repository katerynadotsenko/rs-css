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
                [
                    {
                        type:'house',
                        id: ['purple-house']
                    },
                    [
                        {
                            type:'bird',
                            className: ['dance', 'pink']
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
                            className: ['pink']
                        }
                    ]
                ]
            ]
        ],
        task: 'Select the bird in the house',
        description: {
            selectorName: 'Descendant Selector',
            title: 'Select an element inside another element',
            syntax: 'X Y',
            hint: 'Selects all <tag>Y</tag> inside of <tag>X</tag>. <tag>Y</tag> is called a descendant because it is inside of another element.',
            examples: ['<tag>p strong</tag> selects all <tag>strong</tag> elements that are inside of any <tag>p</tag>']
        },
        answer: [1, 'house bird']
    },
    {
        level: 3,
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
        level: 4,
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
        level: 5,
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
        level: 6,
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
        level: 7,
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
        level: 8,
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
        level: 9,
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
        level: 10,
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
    },
    {
        level: 11,
        nodes: ['branch', 
            [
                [
                    {
                        type:'house',
                        className: ['dance'],
                        id: 'green-house'
                    },
                    [
                        {
                            type:'bird',
                            className: ['dance', 'yellow']
                        }
                    ]
                ], 
                {
                    type:'bird',
                    className: ['dance', 'red']
                },
                [
                    {
                        type:'nest',
                        className: ['dance']
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
                        type:'nest',
                        className: ['dance']
                    },
                    [
                        {
                            type:'egg',
                            className: ['dance', 'green']
                        }
                    ]
                ]
            ]
        ],
        task: 'Select all the elements!',
        description: {
            selectorName: 'The Universal Selector',
            title: 'You can select everything!',
            syntax: '*',
            hint: 'You can select all elements with the universal selector!',
            examples: ['<tag>p *</tag> selects any element inside all p elements.']
        },
        answer: [7, '*']
    },
    {
        level: 12,
        nodes: ['branch', 
            [ 
                {
                    type:'bird',
                    className: ['red']
                },
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
                {
                    type:'house',
                    id: 'blue-house'
                },
                [
                    {
                        type:'nest'
                    },
                    [
                        {
                            type:'egg',
                            className: ['dance', 'red']
                        }
                    ]
                ]
            ]
        ],
        task: 'Select everything on a nest',
        description: {
            selectorName: 'The Universal Selector',
            title: 'Combine the Universal Selector',
            syntax: 'X  *',
            hint: 'This selects all elements inside of <tag>X</tag>.!',
            examples: ['<tag>ul.fancy *</tag> selects every element inside all ul class="fancy" elements.']
        },
        answer: [2, 'nest *']
    },
    {
        level: 13,
        nodes: ['branch', 
            [ 
                [
                    {
                        type:'nest'
                    },
                    [
                        {
                            type:'bird',
                            className: ['blue']
                        }
                    ]
                ],
                {
                    type:'bird',
                    className: ['dance']
                },
                {
                    type:'bird',
                    className: ['yellow']
                },
                [
                    {
                        type:'nest'
                    },
                    [
                        {
                            type:'egg',
                            className: ['red']
                        }
                    ]
                ],
                {
                    type:'bird',
                    className: ['dance', 'orange']
                }
            ]
        ],
        task: 'Select every bird that\'s next to a nest',
        description: {
            selectorName: 'Adjacent Sibling Selector',
            title: 'Select an element that directly follows another element',
            syntax: 'X + Y',
            hint: 'This selects all <tag>Y</tag> elements that directly follow <tag>X</tag>. Elements that follow one another are called siblings. They\'re on the same level, or depth. In the HTML markup for this level, elements that have the same indentation are siblings.',
            examples: ['<tag>p + .intro</tag> selects every element with <tag>class="intro"</tag> that directly follows a <tag>p</tag>']
        },
        answer: [2, 'nest + bird']
    },
    {
        level: 14,
        nodes: ['branch', 
            [ 
                {
                    type:'bird',
                    className: ['yellow']
                },
                {
                    type:'egg',
                    className: ['dance', 'purple']
                },
                {
                    type:'egg',
                    className: ['dance', 'red']
                },
                {
                    type:'bird',
                    className: ['orange']
                },
                {
                    type:'egg',
                    className: ['dance', 'green']
                },
                [
                    {
                        type:'nest'
                    },
                    [
                        {
                            type:'egg',
                            className: ['pink']
                        }
                    ]
                ]
            ]
        ],
        task: 'Select the eggs beside the bird',
        description: {
            selectorName: 'General Sibling Selector',
            title: 'Select elements that follows another element',
            syntax: 'X ~ Y',
            hint: 'You can select all siblings of an element that follow it. This is like the Adjacent Selector (X + Y) except it gets all of the following elements instead of one.',
            examples: ['<tag>X ~ Y</tag> selects all <tag>Y</tag> that follow a <tag>X</tag>']
        },
        answer: [3, 'bird ~ egg']
    },
    {
        level: 15,
        nodes: ['branch', 
            [ 
                [
                    {
                        type:'house',
                        id: ['green-house']
                    },
                    [
                        {
                            type:'bird',
                            className: ['dance', 'yellow']
                        }
                    ]
                ],
                {
                    type:'bird',
                    className: ['yellow']
                },
                [
                    {
                        type:'house',
                        id: ['blue-house']
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
        task: 'Select the bird directly in a house',
        description: {
            selectorName: 'Child Selector',
            title: 'Select direct children of an element',
            syntax: 'X > Y',
            hint: 'You can select elements that are direct children of other elements. A child element is any element that is nested directly in another element. Elements that are nested deeper than that are called descendant elements.',
            examples: ['<tag>X > Y</tag> selects all <tag>Y</tag> that are a direct children <tag>X</tag>']
        },
        answer: [2, 'house > bird']
    },
    {
        level: 16,
        nodes: ['branch', 
            [ 
                {
                    type:'egg',
                    className: ['dance', 'pink']
                },
                {
                    type:'house',
                    className: ['dance'],
                    id: ['green-house']
                },
                {
                    type:'bird',
                    className: ['red']
                },
                {
                    type:'bird',
                    className: ['dance', 'yellow']
                },
                {
                    type:'egg',
                    className: ['red']
                }
            ]
        ],
        task: 'Select elements that are not red',
        description: {
            selectorName: 'Negation Pseudo-class',
            title: 'Select all elements that don\'t match the negation selector',
            syntax: ':not(X)',
            hint: 'You can use this to select all elements that do not match selector <tag>"X"</tag>.',
            examples: ['<tag>:not(#fancy)</tag> selects all elements that do not have id="fancy".',
                        '<tag>:not(.big, .medium)</tag> selects all elements that do not have <tag>class="big"</tag> or <tag>class="medium"</tag>.']
        },
        answer: [3, '*:not(.red)']
    },
    {
        level: 17,
        nodes: ['branch', 
            [ 
                {
                    type:'house',
                    className: ['dance'],
                    id: ['green-house']
                },
                [
                    {
                        type:'house',
                        id: ['purple-house']
                    },
                    [
                        {
                            type:'bird',
                            className: ['pink']
                        }
                    ]
                ],
                {
                    type:'house',
                    className: ['dance'],
                    id: ['blue-house']
                },
                {
                    type:'bird',
                    className: ['yellow']
                }
            ]
        ],
        task: 'Select the empty houses',
        description: {
            selectorName: 'Empty Selector',
            title: 'Select elements that don\'t have children',
            syntax: ':empty',
            hint: 'Selects elements that don\'t have any other elements inside of them.',
            examples: ['<tag>div:empty</tag> selects all empty div elements.']
        },
        answer: [2, 'house:empty']
    },
    {
        level: 18,
        nodes: ['branch', 
            [ 
                {
                    type:'bird',
                    className: ['blue']
                },
                {
                    type:'bird',
                    className: ['dance', 'yellow'],
                    attributeName: 'Leila'
                },
                {
                    type:'bird',
                    className: ['dance', 'pink'],
                    attributeName: 'Ricky'
                },
                {
                    type:'bird',
                    className: ['red']
                }
            ]
        ],
        task: 'Select the birds with name',
        description: {
            selectorName: 'Attribute Selector',
            title: 'Select all elements that have a specific attribute',
            syntax: '[attribute]',
            hint: 'Attributes appear inside the opening tag of an element, like this: <tag>span attribute="value"</tag>. An attribute does not always have a value, it can be blank!',
            examples: ['<tag>a[href]</tag> selects all <tag>a</tag> elements that have a <tag>href="anything"</tag> attribute.',
                        '<tag>[type]</tag> selects all elements that have a <tag>type="anything"</tag> attribute.']
        },
        answer: [2, '[name]']
    },
    {
        level: 19,
        nodes: ['branch', 
            [ 
                {
                    type:'bird',
                    className: ['blue'],
                    attributeName: 'Rita'
                },
                {
                    type:'bird',
                    className: ['yellow'],
                    attributeName: 'Leila'
                },
                {
                    type:'bird',
                    className: ['pink'],
                    attributeName: 'Ricky'
                },
                {
                    type:'bird',
                    className: ['dance', 'red'],
                    attributeName: 'Kesha'
                }
            ]
        ],
        task: 'Select the bird with the name Kesha',
        description: {
            selectorName: 'Attribute Value Selector',
            title: 'Select all elements that have a specific attribute value',
            syntax: '[attribute="value"]',
            hint: 'Attribute selectors are case sensitive, each character must match exactly.',
            examples: ['<tag>input[type="checkbox"]</tag> selects all checkbox input elements.']
        },
        answer: [1, '[name="Kesha"]']
    },
    {
        level: 20,
        nodes: ['branch', 
            [ 
                {
                    type:'bird',
                    className: ['dance', 'blue'],
                    attributeName: 'Rita'
                },
                {
                    type:'bird',
                    className: ['yellow'],
                    attributeName: 'Leila'
                },
                {
                    type:'bird',
                    className: ['dance', 'pink'],
                    attributeName: 'Ricky'
                },
                {
                    type:'bird',
                    className: ['red'],
                    attributeName: 'Kesha'
                }
            ]
        ],
        task: 'Select the birds whose name starts with \'Ri\'',
        description: {
            selectorName: 'Attribute Starts With Selector',
            title: 'Select all elements with an attribute value that starts with specific characters',
            syntax: '[attribute^="value"]',
            hint: '',
            examples: ['<tag>.toy[category^="Swim"]</tag> selects elements with class <tag>toy</tag> and either <tag>category="Swimwear</tag> or <tag>category="Swimming"</tag>.']
        },
        answer: [2, '[name^="Ri"]']
    }
];

export default levelsData;