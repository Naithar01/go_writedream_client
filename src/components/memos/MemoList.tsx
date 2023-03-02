import { MemoModel } from "../../Lib/memo";
import MemoItem from "./Item/MemoItem";

import styles from "../../styles/memos/memos.module.css";

interface Props {
  memos: MemoModel[];
  DeleteMemoHandler: (event: React.MouseEvent<HTMLButtonElement>) => void;
  ChangeCreateMemoHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
  CreateMemoHandler: () => void;
}

const MemoList = ({
  memos,
  DeleteMemoHandler,
  ChangeCreateMemoHandler,
  CreateMemoHandler,
}: Props) => {
  return (
    <div className={styles.memo_list}>
      <div className={styles.memo_list_new_memo}>
        <label htmlFor="memo">独白</label>
        <input
          type="text"
          name="memo"
          id="memo"
          placeholder="さとうもか"
          onChange={ChangeCreateMemoHandler}
          autoComplete="off"
        />
        <button type="button" onClick={CreateMemoHandler}>
          独白
        </button>
      </div>
      {memos && memos.length ? (
        memos
          .reverse()
          .map((memo) => (
            <MemoItem
              key={memo.id}
              memo={memo}
              DeleteMemoHandler={DeleteMemoHandler}
            />
          ))
      ) : (
        <p className={styles.memo_list_alter}>...</p>
      )}
    </div>
  );
};

export default MemoList;
