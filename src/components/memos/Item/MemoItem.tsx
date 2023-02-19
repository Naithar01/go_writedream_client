import { MemoModel } from "../../../Lib/memo";

import styles from "../../../styles/memos/memos.module.css";

interface Props {
  memo: MemoModel;
}

const MemoItem = ({ memo }: Props) => {
  const DeleteMemo = (event: React.MouseEvent<HTMLButtonElement>) => {
    const id = event.currentTarget.name;

    if (!id) {
      return;
    }

    // 대충 여기 Remove 해주는 코드
  };

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
          onClick={DeleteMemo}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default MemoItem;
