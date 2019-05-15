import graphqlWorkshop from '../images/graphql/graphql-workshop.svg'
import graphqlForEveryone from '../images/graphql/graphql-for-everyone.svg'
import graphqlTheNextParts from '../images/graphql/graphql-the-next-parts.svg'
import usingGraphQL from '../images/graphql/using-graphql.svg'

export default [
  {
    title: 'GraphQL Kickoff',
    slug: 'graphql/kickoff',
    description: `Start your GraphQL journey here. This one day, hands on, course will give you everything that you need to start building your own GraphQL APIs.`,
    overview: `In GraphQL the "Q" stands for Query, which means to question. In this course, we're going to learn GraphQL, a special way to ask internet servers questions. We are going to learn how to ask these special servers all sorts of questions at once and allow them to provide all of the answers in a single response. We'll set up our own GraphQL servers that can answer questions that originate with any client. On this day, we're building GraphQL servers. We're building confidence. We're building better developers. Students will receive a copy of the new [Learning GraphQL](http://shop.oreilly.com/product/0636920137269.do) book from O'Reilly Media.`,
    thumb: `${graphqlWorkshop}`,
    button: 'View Full Description **→**',
    length: '1',
    tags: [
      'Query Language',
      'Schema Definition Language',
      'Apollo Server',
      'Build your own API',
    ],
  },
  {
    title: 'Fullstack GraphQL',
    slug: 'graphql/fullstack',
    description: `Now that you have a GraphQL API it's time to build a client that can ask the API for data. In this one day, hands on, course we will advance our GraphQL skills by solving problems associated with client side GraphQL.`,
    overview: `The GraphQL API is only half of the picture. Sure, it answers questions, but who is asking the questions? A client is any application that consumes data from your API. Today, we're going to build clients. We're gonna examine the challenges to building clients. And we're going to look at the tools that were designed to crush those challenges. Along the way you will learn more GraphQL, you will get stronger with JavaScript, and you're going to learn React.`,
    thumb: `${graphqlTheNextParts}`,
    button: 'View Full Description **→**',
    length: '1',
    tags: [
      'Unions & Interfaces',
      'Apollo Client',
      'Apollo & React',
      'Build your own Client',
    ],
  },
  {
    title: 'Production Ready GraphQL',
    slug: 'graphql/production',
    description: `Now it's time to take your GraphQL full stack applications and make them better. In this one day, hands on, course student will learn to work with real-time GraphQL, improve security, and scale GraphQL APIs.`,
    overview: `What makes an expert? Is it working on the bleeding edge? Is it knowing the tools? Is it having strong opinions? On this day, the journey to a greater GraphQL begins. We are going to introduce the challenges exist out there on the bleeding edge. We are going to introduce the swords that can be used to slay those challenges. We are going to fuel you with the knowledge to develop your own strong opinions. We are going to learn to gracefully orchestrate hundreds (thousands?) of different services and APIs. Everyone seems to want to know about schema stitching, so we are going to make sure you do that before you leave too.`,
    thumb: `${graphqlForEveryone}`,
    button: 'View Full Description **→**',
    length: '1',
    tags: [
      'Membership and Authorization',
      'Subscriptions',
      'GraphQL Tools',
      'Practice Schema Stitching',
    ],
  },
  {
    title: 'GraphQL For Everyone',
    slug: 'graphql/everyone',
    description: `Your entire team needs to be on the same page. Interacting with a GraphQL API using the Playground is not just for developers and engineers. Project Managers, Product Owners, and Administrators can communicate with their business domain using GraphQL too.`,
    overview: `In GraphQL the "Q" stands for Query, which means to question. Developers and Engineers are not the only people with questions. Everyone has questions, everyone needs answers. In this course, everyone learns GraphQL, a special way to ask the internet questions. We are going to learn how to ask the internet all sorts of questions at once and allow it to provide all of the answers in a single response. We'll also learn how to design a schema, the rules that a server must follow when answering questions. This morning, or afternoon, or evening but preferably morning... on this morning everyone learns to communicate with APIs, everyone learns how to retrieve and change domain data, everyone learns to be more effective.`,
    thumb: `${usingGraphQL}`,
    button: 'View Full Description **→**',
    length: '1/2',
    tags: [
      'Playground & Graphiql',
      'Query Language',
      'Schema Definition Language',
      'Introspection',
    ],
  },
]
