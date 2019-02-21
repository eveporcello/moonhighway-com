import javascriptKickoff from '../images/javascript-node/javascript-kickoff.svg'
import nodeKickoff from '../images/javascript-node/node-kickoff.svg'

export default [
  {
    title: 'Node.js Workshop',
    //slug: 'node-kickoff',
    description: `This course introduces the concepts of Node.js and is aimed at developers, engineers, creatives, and managers who have a basic understanding of the JavaScript language. In this course, we cover the core modules that ship with Node.js. We wrap this course up by introducing npm and using JavaScript modules that are developed by the community. Students leave this course with their environments setup for rapid development ready to build awesome apps.`,
    thumb: `${nodeKickoff}`,
    button: '',
    length: '2',
    tags: [
      'Environment Setup',
      'Node Core',
      'Building CLIs',
      'EventEmitter',
      'Using Node Modules',
      'NPM',
      'Unit Testing',
    ],
  },
  {
    title: 'JavaScript Workshop',
    //slug: 'javascript-workshop',
    description: `This course is designed for developers, engineers, creatives, and managers who have never had the chance to learn the core fundamentals of vanilla JavaScript. This course examines the core types available in JavaScript and how these types are used to create every library, framework, or application that uses the language. We examine JavaScript's quirks and discuss how JavaScript differs from other programming languages. Students leave this course with a solid understanding of the basics of vanilla JavaScript.`,
    thumb: `${javascriptKickoff}`,
    button: '',
    length: '2',
    tags: [
      'Primitives',
      'Flow Control',
      'Truthy/Falsy',
      'Arrays',
      'Objects',
      'Functions',
      'DOM Manipulation',
      'Debugging',
    ],
  },
]
