import { createContext, ReactNode, useContext, useState } from "react";
import { Comment, Reply, User } from "../types";

import data from "../../data.json";

interface CommentProviderProps {
  children: ReactNode;
}

interface CommentProviderContextData {
  currentUser: User;
  comments: Comment[];
  updateScore: ({ commentId, score, replyingTo }: UpdateScoreProps) => void;
  createComment: (comment: Comment) => void;
  createReply: (reply: Reply) => void;
}

interface UpdateScoreProps {
  commentId: String;
  score: Number;
  replyingTo?: {
    commentId: String;
    username: String;
  };
}

const CommentContext = createContext({} as CommentProviderContextData);

export function CommentProvider({ children }: CommentProviderProps) {
  const { currentUser } = data;

  const [comments, setComments] = useState<Comment[]>(data.comments);

  function updateScore({ commentId, score, replyingTo }: UpdateScoreProps) {
    const updateComments = [...comments];

    if(replyingTo) {
      const comment = updateComments.find(comment => comment.id === replyingTo.commentId)
      const commentIndex = comment.replies.findIndex(comment => comment.id === commentId);
      comment.replies[commentIndex].score = score;
      setComments(updateComments);
      return;
    }

    const commentIndex = updateComments.findIndex(comment => comment.id === commentId);
    updateComments[commentIndex].score = score;
    setComments(updateComments);
  }

  function createComment(comment: Comment) {
    const updateComments = [...comments];
    updateComments.push(comment);
    setComments(updateComments);
  }

  function createReply(reply: Reply) {
    console.log(reply);
  }

  return (
    <CommentContext.Provider value={{
      currentUser,
      comments,
      updateScore,
      createComment,
      createReply,
    }}>
      {children}
    </CommentContext.Provider>
  );
}

export function useComment() {
  return useContext(CommentContext);
}