import { createContext, ReactNode, useContext, useState } from "react";
import { v4 as uuid } from "uuid";
import data from "../../data.json";

interface CommentProviderProps {
  children: ReactNode;
}

type CommentProviderContextData = {
  comments: Comment[];
  createComment: (commentInput: CommentInput) => void;
  updateScore: (id: String, score: Number, replyingToId?: String) => void;
  updateComment: (content: String, id: String, reply: String) => void;
}

type User = {
  username: String;
  image: {
    png: String;
    webp: String;
  },
}

type Reply = {
  id: String;
  content: String;
  createdAt: String;
  score: Number;
  replyingTo: String;
  user: User;
}

type Comment = {
  id: String;
  content: String;
  createdAt: String;
  score: Number;
  user: User;
  replies?: Reply[];
}

type CommentInput = Comment;

const CommentContext = createContext({} as CommentProviderContextData);

export function CommentProvider({ children }: CommentProviderProps) {
  const [comments, setComments] = useState<Comment[]>(data.comments);

  function createComment(commentInput: CommentInput) {
    const updateComments = [...comments];
    updateComments.push(commentInput);
    setComments(updateComments);
  }

  function updateScore(id: String, score: Number, replyingToId?: String) {
    const updateComments = [...comments];

    if(replyingToId) {
      const updateCommentByIndex = updateComments.find(comment => comment.id === replyingToId);
      const commentIndex = updateCommentByIndex.replies.findIndex(comment => comment.id === id);
      updateCommentByIndex.replies[commentIndex].score = score;
      setComments(updateComments);
      return;
    } 

    const commentIndex = updateComments.findIndex(comment => comment.id === id);

    updateComments[commentIndex].score = score;

    setComments(updateComments);
  }

  function updateComment(content: String, id: String, reply?: String) {
    const updateComments = [...comments];
    
    if(reply) {
      const updateCommentByIndex = updateComments.find(comment => comment.id === reply);
      const commentIndex = updateCommentByIndex.replies.findIndex(comment => comment.id === id);
      updateCommentByIndex.replies[commentIndex].content = content;
      setComments(updateComments);
      return;
    }

    const commentIndex = updateComments.findIndex(comment => comment.id === id);
    updateComments[commentIndex].content = content;
    setComments(updateComments);
  }

  return (
    <CommentContext.Provider value={{ comments, createComment, updateScore, updateComment }}>
      {children}
    </CommentContext.Provider>
  );
}

export function useComment() {
  return useContext(CommentContext);
}