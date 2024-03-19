import Posts from "./PostForm/Posts";
import Sidebar from "./Sidebar/Sidebar";
import "./main.css";

export default function Mine({ style }) {
  return (
    <main className={style}>
      <Posts style={"posts"} />
      <Sidebar style={"sidebar"} />
    </main>
  );
}
