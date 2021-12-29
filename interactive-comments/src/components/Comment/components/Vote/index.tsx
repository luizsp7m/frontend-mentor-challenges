import { useComment } from "../../../../contexts/CommentContext";
import { Reply } from "../Reply";
import styles from "./styles.module.scss";

interface VoteProps {
  score: Number;
  id: String;
  replyingToId: String;
}

export function Vote({ score, id, replyingToId }: VoteProps) {
  const { updateScore } = useComment();

  function handleUpdateScore(param: String) {
    if(param === "increase") {
      updateScore(id, Number(score) + 1, replyingToId);
    } else {
      if(Number(score) - 1 >= 0) {
        updateScore(id, Number(score) - 1, replyingToId);
      }
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.buttonGroup}>
        <button className={styles.plus} onClick={() => handleUpdateScore('increase')}>
          <img src="/images/icon-plus.svg" alt="Plus" />
        </button>

        <button>
          {score}
        </button>

        <button onClick={() => handleUpdateScore('decrease')}>
          <img src="/images/icon-minus.svg" alt="Minus" />
        </button>
      </div>

      {/* <Reply /> */}
    </div>
  );
}