
import styles from "./page.module.css";
import HomePage from "./components/sample/home/home";
import AboutMe from "./components/sample/aboutMe/aboutMe";
import Header from "./components/organism/Header/header";



export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Header></Header>
        <HomePage></HomePage>
        <AboutMe></AboutMe>
      </main>
    </div>
  );
}
