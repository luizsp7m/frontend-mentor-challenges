import { useState } from "react";
import { InputComment } from "../InputComment";
import { CommentContent } from "./components/CommentContent";
import { Vote } from "./components/Vote";
import styles from "./styles.module.scss";

type User = {
  username: String;
  image: {
    png: String;
    webp: String;
  },
}

interface CommentProps {
  id: String;
  user: User;
  createdAt: String;
  content: String;
  score: Number;
  replyingTo?: String;
  replyingToId?: String;
}

export function Comment({
  id,
  user,
  createdAt,
  content,
  score,
  replyingTo,
  replyingToId,
}: CommentProps) {
  const [showInputUpdateComment, setShowInputUpdateComment] = useState(false);

  function handleShowInputUpdateComment() {
    setShowInputUpdateComment(!showInputUpdateComment);
  }

  return (
    <>
      <div className={styles.container}>
        <Vote
          score={score}
          id={id}
          replyingToId={replyingToId ? replyingToId : null}
        />

        <CommentContent
          id={id}
          user={user}
          createdAt={createdAt}
          content={content}
          replyingTo={replyingTo}
          replyingToId={replyingToId ? replyingToId : null}
          showInputUpdateComment={showInputUpdateComment}
          handleShowInputUpdateComment={handleShowInputUpdateComment}
        />
      </div>
    </>
  );
}