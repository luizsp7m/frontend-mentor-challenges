import { Comment } from "../components/Comment";
import { InputComment } from "../components/InputComment";
import { useComment } from "../contexts/CommentContext";
import styles from "../styles/home.module.scss";

export default function Home() {
  const { comments } = useComment();

  return (
    <div className={styles.container}>
      <div className={styles.comments}>
        {comments.map((comment, index) => (
          <div className={styles.comment} key={index}>
            <Comment
              id={comment.id}
              content={comment.content}
              createdAt={comment.createdAt}
              score={comment.score}
              user={comment.user}
            />

            <div className={styles.replys}>
              {comment.replies.map((reply, index) => (
                <Comment
                  key={index}
                  id={reply.id}
                  content={reply.content}
                  createdAt={reply.createdAt}
                  score={reply.score}
                  user={reply.user}
                  replyingTo={{
                    commentId: comment.id,
                    username: comment.user.username,
                  }}
                />
              ))}
            </div>
          </div>
        ))}
      </div>

      <InputComment />
    </div>
  );
}