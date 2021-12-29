import { useState } from "react";
import { useComment } from "../../contexts/CommentContext";
import { User } from "../../types";
import { InputComment } from "../InputComment";
import styles from "./styles.module.scss";

interface CommentProps {
  id: String;
  content: String;
  createdAt: String;
  score: Number;
  user: User;
  replyingTo?: {
    commentId: String;
    username: String;
  };
}

export function Comment({
  id, content, createdAt, score, user, replyingTo = null,
}: CommentProps) {
  const [showInputComment, setShowInputComment] = useState(false);

  const { currentUser, updateScore } = useComment();

  function onUpdateScore(score: Number) {
    updateScore({ commentId: id, score, replyingTo });
  }

  return (
    <>
      <div className={styles.container}>
        <div className={styles.buttonGroup}>
          <div className={styles.vote}>
            <button onClick={() => onUpdateScore(Number(score) + 1)}>
              <img src="/images/icon-plus.svg" alt="Plus" />
            </button>

            <button>
              {score}
            </button>

            <button onClick={() => onUpdateScore(Number(score) - 1)}>
              <img src="/images/icon-minus.svg" alt="Minus" />
            </button>
          </div>

          {currentUser.username !== user.username ? (
            <div className={styles.reply} onClick={() => setShowInputComment(!showInputComment)}>
              <img src="/images/icon-reply.svg" alt="Reply" /> Reply
            </div>
          ) : (
            <div className={styles.optionGroup}>
              <div className={styles.delete}>
                <img src="/images/icon-delete.svg" alt="Reply" /> Delete
              </div>

              <div className={styles.edit}>
                <img src="/images/icon-edit.svg" alt="Reply" /> Edit
              </div>
            </div>
          )}
        </div>

        <div className={styles.commentContainer}>
          <div className={styles.commentHeader}>
            <div className={styles.user}>
              <img src={`${user.image.png}`} alt={`${user.username} Image`} />
              <h5>{user.username}</h5>
              {currentUser.username === user.username && <label>you</label>}
              <time>{createdAt}</time>
            </div>

            {currentUser.username !== user.username ? (
              <div className={styles.reply} onClick={() => setShowInputComment(!showInputComment)}>
                <img src="/images/icon-reply.svg" alt="Reply" /> Reply
              </div>
            ) : (
              <div className={styles.optionGroup}>
                <div className={styles.delete}>
                  <img src="/images/icon-delete.svg" alt="Reply" /> Delete
                </div>

                <div className={styles.edit}>
                  <img src="/images/icon-edit.svg" alt="Reply" /> Edit
                </div>
              </div>
            )}
          </div>

          <div className={styles.commentBody}>
            <p>{replyingTo && <b>{replyingTo.username}</b>} {content}</p>
          </div>
        </div>
      </div>

      {showInputComment && <InputComment isReply={true} />}
    </>
  );
}