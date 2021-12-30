import { createContext, ReactNode, useContext, useEffect, useState } from "react";
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
  createReply: ({ commentId, reply, replyingTo }: CreateReply) => void;
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

interface CreateReply {
  commentId: String;
  replyingTo?: {
    commentId: String;
    username: String;
  };
  reply: Reply;
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

  const [comments, setComments] = useState<Comment[]>([]);

  useEffect(() => {
    const storageComments = localStorage.getItem("@FMC:comments");

    if(storageComments) {
      setComments(JSON.parse(storageComments));
      return;
    }

    setComments(data.comments);
  }, []);

  function updateScore({ commentId, score, replyingTo }: UpdateScoreProps) {
    const updateComments = [...comments];

    if (replyingTo) {
      const comment = updateComments.find(comment => comment.id === replyingTo.commentId)
      const commentIndex = comment.replies.findIndex(comment => comment.id === commentId);
      comment.replies[commentIndex].score = score;
      setComments(updateComments);
      localStorage.setItem("@FMC:comments", JSON.stringify(updateComments));
      return;
    }

    const commentIndex = updateComments.findIndex(comment => comment.id === commentId);
    updateComments[commentIndex].score = score;
    setComments(updateComments);
    localStorage.setItem("@FMC:comments", JSON.stringify(updateComments));
  }

  function createComment(comment: Comment) {
    const updateComments = [...comments];
    updateComments.push(comment);
    setComments(updateComments);
    localStorage.setItem("@FMC:comments", JSON.stringify(updateComments));
  }

  function createReply({ commentId, replyingTo, reply }: CreateReply) {
    const updateComments = [...comments];

    if(replyingTo) {
      const comment = updateComments.find(comment => comment.id === replyingTo.commentId);
      comment.replies.push(reply);
      setComments(updateComments);
      localStorage.setItem("@FMC:comments", JSON.stringify(updateComments));
      return;
    }
    
    const commentIndex = updateComments.findIndex(comment => comment.id === commentId);
    updateComments[commentIndex].replies.push(reply);
    setComments(updateComments);
    localStorage.setItem("@FMC:comments", JSON.stringify(updateComments));
  }

  function deleteComment({ commentId, replyingTo, closeModal }: DeleteCommentProps) {
    const updateComments = [...comments];

    if (replyingTo) {
      const comment = updateComments.find(comment => comment.id === replyingTo.commentId);
      const commentIndex = comment.replies.findIndex(comment => comment.id === commentId);
      comment.replies.splice(commentIndex, 1);
      setComments(updateComments);
      localStorage.setItem("@FMC:comments", JSON.stringify(updateComments));
      closeModal();
      return;
    }

    const commentIndex = updateComments.findIndex(comment => comment.id === commentId);
    updateComments.splice(commentIndex, 1);
    setComments(updateComments);
    localStorage.setItem("@FMC:comments", JSON.stringify(updateComments));
    closeModal();
  }

  function updateComment({ commentId, replyingTo, contentInput, closeInput }: UpdateCommentProps) {
    const arrayComment = [...comments];

    if (replyingTo) {
      const comment = arrayComment.find(comment => comment.id === replyingTo.commentId);
      const commentIndex = comment.replies.findIndex(comment => comment.id === commentId);
      comment.replies[commentIndex].content = contentInput;
      setComments(arrayComment);
      localStorage.setItem("@FMC:comments", JSON.stringify(arrayComment));
      closeInput();
      return;
    }

    const commentIndex = arrayComment.findIndex(comment => comment.id === commentId);
    arrayComment[commentIndex].content = contentInput;
    setComments(arrayComment);
    localStorage.setItem("@FMC:comments", JSON.stringify(arrayComment));
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