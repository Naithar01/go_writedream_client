import PageHeader from "../components/Layouts/Header/PageHeader";

import styles from "../styles/Main.module.css";

const MainPage = () => {
  return (
    <div className="main_page">
      <PageHeader text="郑浩的独白" />
      <div className="main_page_my_Info_list">
        <div className={styles.main_page_my_Info}>
          <h2>个人信息</h2>
          <p>Zl존정호</p>
          <p>2004.07.30</p>
          <p>010-9026-9857</p>
        </div>
        <div className={styles.main_page_my_Info}>
          <h2>毕业学校</h2>
          <p>서울언주초등학교</p>
          <p>은성중학교</p>
          <p>서울전자고등학교</p>
        </div>
        <div className={styles.main_page_my_Info}>
          <h2>在职公司</h2>
          <div className={styles.main_page_my_Info_default_Info}>
            <p>지테크시스템 2022.09.13 ~ 2022.11.29</p>
            <small>제조기술부 - 에이징팀 - 사원</small>
          </div>
          <div className={styles.main_page_my_Info_default_Info}>
            <p>모아소프트 2023.01.09 ~ </p>
            <small>
              스마트사업개발본부 - AI Data Science 연구소 - 선임연구원
            </small>
          </div>
        </div>
        <div className={styles.main_page_my_Info}>
          <h2>其他博客</h2>
          <div className={styles.main_page_my_Info_default_Info}>
            <a href="https://github.com/Naithar01">Github</a>
          </div>
          <div className={styles.main_page_my_Info_default_Info}>
            <a href="https://naithar01.tistory.com/">Blog</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
