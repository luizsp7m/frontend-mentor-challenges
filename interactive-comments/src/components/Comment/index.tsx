import { FormEvent, useState } from "react";
import { useComment } from "../../contexts/CommentContext";
import { User } from "../../types";
import { DeleteModal } from "../DeleteModal";
import { InputComment } from "../InputComment";
import styles from "./styles.module.scss";
import { formatDistanceToNowStrict } from "date-fns";

interface CommentProps {
  id: String;
  content: String;
  createdAt: String;
  score: Number;
  user: User;
  replyingToUsername?: String;
  replyingTo?: {
    commentId: String;
    username: String;
  };
}

export function Comment({
  id, content, createdAt, score, user, replyingTo = null, replyingToUsername,
}: CommentProps) {
  const [showInputComment, setShowInputComment] = useState(false);

  const { currentUser, updateScore, deleteComment, updateComment } = useComment();

  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  function onUpdateScore(score: Number) {
    updateScore({ commentId: id, score, replyingTo });
  }

  const [contentInput, setContentInput] = useState(content);
  const [editIsOpen, setEditIsOpen] = useState(false);

  function closeInput() {
    setEditIsOpen(false);
  }

  function onDeleteComment() {
    deleteComment({ commentId: id, replyingTo, closeModal });
  }

  function closeInputComment() {
    setShowInputComment(false);
  }

  function onUpdateComment(event: FormEvent) {
    event.preventDefault();
    updateComment({ commentId: id, replyingTo, contentInput, closeInput });
  }

  const dateFormatted = formatDistanceToNowStrict(new Date(`${createdAt}`), {
    
  })

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
              <div className={styles.delete} onClick={openModal}>
                <img src="/images/icon-delete.svg" alt="Reply" /> Delete
              </div>

              <div className={styles.edit} onClick={() => setEditIsOpen(!editIsOpen)}>
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
              <time>{dateFormatted} ago</time>
            </div>

            {currentUser.username !== user.username ? (
              <div className={styles.reply} onClick={() => setShowInputComment(!showInputComment)}>
                <img src="/images/icon-reply.svg" alt="Reply" /> Reply
              </div>
            ) : (
              <div className={styles.optionGroup}>
                <div className={styles.delete} onClick={openModal}>
                  <img src="/images/icon-delete.svg" alt="Reply" /> Delete
                </div>

                <div className={styles.edit} onClick={() => setEditIsOpen(!editIsOpen)}>
                  <img src="/images/icon-edit.svg" alt="Reply" /> Edit
                </div>
              </div>
            )}
          </div>

          <div className={styles.commentBody}>
            {editIsOpen ? (
              <form onSubmit={onUpdateComment} className={styles.inputGroup}>
                <textarea
                  placeholder="Add a comment..."
                  rows={3}
                  value={`${contentInput}`}
                  onChange={({ target }) => setContentInput(target.value)}
                  required={true}
                />
                <button type="submit">Update</button>
              </form>
            ) : (
              <p>{replyingTo && <b>@{replyingToUsername}</b>} {content}</p>
            )}
          </div>
        </div>
      </div>

      {showInputComment && <InputComment
        commentId={id}
        replyingTo={replyingTo}
        replyingToUsername={user.username}
        closeInput={closeInputComment}
      />}

      <DeleteModal
        closeModal={closeModal}
        modalIsOpen={modalIsOpen}
        onDelete={onDeleteComment}
      />
    </>
  );
}