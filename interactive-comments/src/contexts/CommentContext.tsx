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
  createReply: (reply: Reply) => void; // TO DO
  deleteComment: ({ commentId, replyingTo, closeModal }: DeleteCommentProps) => void;
  updateComment: ({ commentId, replyingTo, contentInput, closeInput }: UpdateCommentProps) => void;
}

interface UpdateScoreProps {
  commentId: String;
  score: Number;
  replyingTo?: {
    commentId: String;
    username: String;
  };
}

interface DeleteCommentProps {
  commentId: String;
  replyingTo?: {
    commentId: String;
    username: String;
  };
  closeModal: () => void;
}

interface UpdateCommentProps {
  commentId: String;
  replyingTo?: {
    commentId: String;
    username: String;
  };
  contentInput: String;
  closeInput: () => void;
}

const CommentContext = createContext({} as CommentProviderContextData);

export function CommentProvider({ children }: CommentProviderProps) {
  const { currentUser } = data;

  const [comments, setComments] = useState<Comment[]>(data.comments);

  function updateScore({ commentId, score, replyingTo }: UpdateScoreProps) {
    const updateComments = [...comments];

    if (replyingTo) {
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
    // TO DO
  }

  function deleteComment({ commentId, replyingTo, closeModal }: DeleteCommentProps) {
    const updateComments = [...comments];

    if (replyingTo) {
      const comment = updateComments.find(comment => comment.id === replyingTo.commentId);
      const commentIndex = comment.replies.findIndex(comment => comment.id === commentId);
      comment.replies.splice(commentIndex, 1);
      setComments(updateComments);
      closeModal();
      return;
    }

    const commentIndex = updateComments.findIndex(comment => comment.id === commentId);
    updateComments.splice(commentIndex, 1);
    setComments(updateComments);
    closeModal();
  }

  function updateComment({ commentId, replyingTo, contentInput, closeInput }: UpdateCommentProps) {
    const arrayComment = [...comments];

    if(replyingTo) {
      const comment = arrayComment.find(comment => comment.id === replyingTo.commentId);
      const commentIndex = comment.replies.findIndex(comment => comment.id === commentId);
      comment.replies[commentIndex].content = contentInput;
      setComments(arrayComment);
      closeInput();
      return;
    }

    const commentIndex = arrayComment.findIndex(comment => comment.id === commentId);
    arrayComment[commentIndex].content = contentInput;
    setComments(arrayComment);
    closeInput();
  }

  return (
    <CommentContext.Provider value={{
      currentUser,
      comments,
      updateScore,
      createComment,
      createReply,
      deleteComment,
      updateComment,
    }}>
      {children}
    </CommentContext.Provider>
  );
}

export function useComment() {
  return useContext(CommentContext);
}