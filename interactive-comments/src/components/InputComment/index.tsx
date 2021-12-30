import { FormEvent, useState } from "react";
import { useComment } from "../../contexts/CommentContext";
import { v4 as uuid } from "uuid";
import styles from "./styles.module.scss";

interface InputCommentProps {
  commentId?: String;
  replyingToUsername?: String;
  replyingTo?: {
    commentId: String;
    username: String;
  };
  closeInput?: () => void;
}

export function InputComment({ commentId, replyingTo, replyingToUsername, closeInput }: InputCommentProps) {
  const { currentUser, createComment, createReply } = useComment();

  const [content, setContent] = useState("");

  function onCreateComment(event: FormEvent) {
    event.preventDefault();

    const date = new Date();
    const createdAt = date.toISOString();

    if (commentId) {
      const reply = {
        id: uuid(),
        content,
        createdAt,
        score: 0,
        user: currentUser,
        replyingTo: replyingToUsername,
      };

      createReply({ commentId, replyingTo, reply });
      setContent("");
      closeInput();
      return;
    }

    const comment = {
      id: uuid(),
      content,
      createdAt,
      score: 0,
      user: currentUser,
      replies: [],
    };

    createComment(comment);
    setContent("");
  }

  return (
    <form onSubmit={onCreateComment} className={styles.container}>
      <img src={`${currentUser.image.png}`} alt={`${currentUser.username} Image`} />

      <textarea
        placeholder="Add a comment..."
        rows={3}
        value={content}
        onChange={({ target }) => setContent(target.value)}
        required={true}
      />

      <div>
        <img src={`${currentUser.image.png}`} alt={`${currentUser.username} Image`} />
        <button type="submit">{commentId ? "Reply" : "Send"}</button>
      </div>
    </form>
  );
}