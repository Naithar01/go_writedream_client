import { DeleteMemo, MemoModel } from "../../../Lib/memo";

import styles from "../../../styles/memos/memos.module.css";

interface Props {
  memo: MemoModel;
  DeleteMemoHandler: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const MemoItem = ({ memo, DeleteMemoHandler }: Props) => {
  return (
    <div className={styles.memo_item}>
      <header className="memo_item_header">
        <p className={styles.memo_item_header_text}>{memo.text}</p>
        <span className={styles.memo_item_header_create_at}>
          Create: {new Date(memo.created_at).toLocaleString()}
        </span>
      </header>
      <div className="memo_item_actions">
        <button
          type="button"
          name={String(memo.id)}
          className="memo_item_actions_delete"
          onClick={DeleteMemoHandler}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default MemoItem;
