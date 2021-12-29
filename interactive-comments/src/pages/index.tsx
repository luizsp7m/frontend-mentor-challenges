import Head from "next/head";
import styles from "./home.module.scss";
import { InputComment } from "../components/InputComment";
import { Comment } from "../components/Comment";
import { useComment } from "../contexts/CommentContext";

export default function Home() {
  const { comments } = useComment();

  return (
    <>
      <Head>
        <title>Interactive Comments</title>
      </Head>

      <div className={styles.container}>
        {comments.map((comment, index) => (
          <div key={index} className={styles.containerComment}>
            <div className={styles.comment}>
              <Comment
                id={comment.id}
                user={comment.user}
                createdAt={comment.createdAt}
                content={comment.content}
                score={comment.score}
              />
            </div>

            <div key={index} className={styles.subComment}>
              {comment.replies.map((reply, index) => (
                <div className={styles.comment} key={index}>
                  <Comment
                    id={reply.id}
                    user={reply.user}
                    createdAt={reply.createdAt}
                    content={reply.content}
                    score={reply.score}
                    replyingTo={reply.replyingTo}
                    replyingToId={comment.id}
                  />
                </div>
              ))}

              {/* <InputComment reply={true} /> */}
            </div>
          </div>
        ))}

        <InputComment reply={false} />
      </div>
    </>
  );
}