import { Comment } from "../components/Comment";
import { DeleteModal } from "../components/DeleteModal";
import { InputComment } from "../components/InputComment";
import { useComment } from "../contexts/CommentContext";
import Head from "next/head";
import Link from "next/link";
import styles from "../styles/home.module.scss";

export default function Home() {
  const { comments } = useComment();

  return (
    <>
      <Head>
        <title>Interactive Comments</title>
      </Head>

      <div className={styles.container}>
        <div className={styles.comments}>
          {comments.map((comment, index) => (
            <div className={styles.comment} key={index}>
              <div>
                <Comment
                  id={comment.id}
                  content={comment.content}
                  createdAt={comment.createdAt}
                  score={comment.score}
                  user={comment.user}
                />
              </div>

              {comment.replies.length > 0 && (
                <div className={styles.replys}>
                  {comment.replies.map((reply, index) => (
                    <Comment
                      key={index}
                      id={reply.id}
                      content={reply.content}
                      createdAt={reply.createdAt}
                      score={reply.score}
                      user={reply.user}
                      replyingToUsername={reply.replyingTo}
                      replyingTo={{
                        commentId: comment.id,
                        username: comment.user.username,
                      }}
                    />
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        <InputComment />
      </div>

      <div className={styles.attribution}>
        Challenge by <Link href="https://www.frontendmentor.io?ref=challenge" passHref >Frontend Mentor</Link>.
        Coded by <Link href="https://github.com/luizsp7m" passHref>Luiz</Link>.
      </div>
    </>
  );
}