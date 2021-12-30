import { FormEvent, useState } from "react";
import { useComment } from "../../contexts/CommentContext";
import { v4 as uuid } from "uuid";
import styles from "./styles.module.scss";

interface InputCommentProps {
  isReply?: Boolean;
  replyingTo?: {
    commentId: String;
    username: String;
  };
}

export function InputComment({ isReply = false, replyingTo }: InputCommentProps) {
  const { currentUser, createComment, createReply } = useComment();

  const [content, setContent] = useState("");

  function onCreateComment(event: FormEvent) {
    event.preventDefault();

    if (isReply) {
      return;
    }

    const comment = {
      id: uuid(),
      content,
      createdAt: "1 hour ago",
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
        <button type="submit">{isReply ? "Reply" : "Send"}</button>
      </div>
    </form>
  );
}