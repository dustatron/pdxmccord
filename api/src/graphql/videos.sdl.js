export const schema = gql`
  type Video {
    id: Int!
    title: String!
    link: String!
    img: String
    type: String
    body: String
    year: String
    createdAt: DateTime!
  }

  type Query {
    videos: [Video!]!
    video(id: Int!): Video
  }

  input CreateVideoInput {
    title: String!
    link: String!
    img: String
    type: String
    body: String
    year: String
  }

  input UpdateVideoInput {
    title: String
    link: String
    img: String
    type: String
    body: String
    year: String
  }

  type Mutation {
    createVideo(input: CreateVideoInput!): Video!
    updateVideo(id: Int!, input: UpdateVideoInput!): Video!
    deleteVideo(id: Int!): Video!
  }
`
