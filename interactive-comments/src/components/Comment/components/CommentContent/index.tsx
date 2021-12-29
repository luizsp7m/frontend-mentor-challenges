import { Reply } from "../Reply";
import styles from "./styles.module.scss";
import data from "../../../../../data.json"; 
import { InputComment } from "../../../InputComment";
import { useComment } from "../../../../contexts/CommentContext";
import { FormEvent, useState } from "react";
;

type User = {
  username: String;
  image: {
    png: String;
    webp: String;
  },
}

type CommentContentProps = {
  id: String;
  content: String;
  createdAt: String;
  user: User;
  replyingTo?: String;
  handleShowInputUpdateComment: () => void;
  showInputUpdateComment: Boolean;
  replyingToId?: String;
}

export function CommentContent({
  id,
  user,
  createdAt,
  content,
  replyingTo,
  handleShowInputUpdateComment,
  showInputUpdateComment,
  replyingToId,
}: CommentContentProps) {
  const { currentUser } = data;

  const { updateComment } = useComment();

  const [contentValue, setContentValue] = useState(content);

  function handleDeleteComment() {
    
  }

  function handleUpdateComment(event: FormEvent) {   
    event.preventDefault();
    updateComment(contentValue, id, replyingToId);
    handleShowInputUpdateComment();
  }

  return (
    <>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.user}>
            <img src={`${user.image.png}`} alt={`${user.username}`} />
            <h5>{user.username}</h5>
            {currentUser.username === user.username && <span>you</span>}
            <time>2 weeks ago</time>
          </div>

          {currentUser.username === user.username ? (
            <div className={styles.optionGroup}>
              <span onClick={() => handleDeleteComment()}>
                <img src="/images/icon-delete.svg" alt="Delete" /> Delete
              </span>

              <span onClick={() => handleShowInputUpdateComment()}>
                <img src="/images/icon-edit.svg" alt="Edit" /> Edit
              </span>
            </div>
          ) : <Reply />}
        </div>

        <div className={styles.content}>
          {!showInputUpdateComment ? (
            <p><b>{replyingTo}</b> {content}</p>
          ) : (
            <form onSubmit={handleUpdateComment} className={styles.updateComment}>
              <textarea value={String(contentValue)} onChange={({ target }) => setContentValue(target.value)} rows={4}>{content}</textarea>
              <button type="submit">Update</button>
            </form>
          )}
        </div>
      </div>
    </>
  );
}