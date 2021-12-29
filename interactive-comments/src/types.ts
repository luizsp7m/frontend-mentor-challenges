export interface User {
  username: String;
  image: {
    png: String;
    webp: String;
  }
}

export interface Reply {
  id: String;
  content: String;
  createdAt: String;
  score: Number;
  user: User;
  replyingTo: String;
}

export interface Comment {
  id: String;
  content: String;
  createdAt: String; 
  score: Number;
  user: User;
  replies: Reply[];
}