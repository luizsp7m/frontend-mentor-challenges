import { useComment } from "../../contexts/CommentContext";
import styles from "./styles.module.scss";
import { v4 as uuid } from "uuid";
import { FormEvent, useState } from "react";

interface InputCommentProps {
  reply: Boolean;
}

export function InputComment({ reply }: InputCommentProps) {
  const { createComment } = useComment();

  const [content, setContent] = useState('');

  function handleCreateNewComment(event: FormEvent) {
    event.preventDefault();

    const comment = {
      id: uuid(),
      content,
      createdAt: String(new Date()),
      score: 0,
      user: {
        username: "juliusomo",
        image: { 
          "png": "./images/avatars/image-juliusomo.png",
          "webp": "./images/avatars/image-juliusomo.webp"
        },
      },
      replies: [],
    };

    createComment(comment);

    setContent('');
  }

  return (
    <form className={styles.container} onSubmit={handleCreateNewComment}>
      <img src="https://github.com/luizsp7m.png" alt="Avatar" />
      <textarea
        rows={5}
        placeholder="Add a comment..."
        value={content}
        onChange={({ target }) => setContent(target.value)}
        required={true}
      />

      <div>
        <img src="https://github.com/luizsp7m.png" alt="Avatar" />
        <button type="submit">{reply ? "Reply" : "Send"}</button>
      </div>
    </form>
  );
}