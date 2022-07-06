import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
  {
    _id: uuid(),
    content:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    profile: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1148&q=80",
    username: "testuser",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    comments: [
      {
        _id: uuid(),
        username: "shubhamsoni",
        text: "Interesting",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
  {
    _id: uuid(),
    content:
      "Guddu Pandit Nam hai hamara.",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    profile: "https://images.indianexpress.com/2020/10/mirzapur-2-review-1200.jpg",
    username: "Gudu12",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    comments: [
      {
        _id: uuid(),
        username: "shubhamsoni",
        text: "Interesting",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
  {
    _id: uuid(),
    content:
      "Choti Ganga bolke Nale mai khuda diya.",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    profile: "https://spiderimg.amarujala.com/assets/images/2018/03/18/vijay-raj_1521391896.jpeg",
    username: "VijayR",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    comments: [
      {
        _id: uuid(),
        username: "shubhamsoni",
        text: "Interesting",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      
    ],
  },
  {
    _id: uuid(),
    content:
      "He He raha nhi Jata Tadap hi Esi Hai.",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    profile: "https://im.idiva.com/content/2021/Feb/rajpal-yadav-quiz_THUMB_601bc5de36d7a.jpg?w=790&h=590&cc=1",
    username: "RajpalY",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    comments: [
      {
        _id: uuid(),
        username: "shubhamsoni",
        text: "Interesting",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
  {
    _id: uuid(),
    content:
      "Ye Babu Rao Ka style Hai.",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    profile: "https://static.toiimg.com/photo/msid-87325917/87325917.jpg",
    username: "BabuR",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    comments: [
      {
        _id: uuid(),
        username: "shubhamsoni",
        text: "Interesting",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
];
