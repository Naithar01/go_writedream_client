import { MemoModel } from "../../Lib/memo";
import MemoItem from "./Item/MemoItem";

import styles from "../../styles/memos/memos.module.css";

interface Props {
  memos: MemoModel[];
}

const MemoList = ({ memos }: Props) => {
  return (
    <div className={styles.memo_list}>
      {memos &&
        memos.length &&
        memos.map((memo) => <MemoItem key={memo.id} memo={memo} />)}
    </div>
  );
};

export default MemoList;
