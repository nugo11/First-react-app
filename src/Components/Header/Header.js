import "./Header.css";
import Desc from "./Desc.js";
import Title from "./Title.js";

export default function Header({ style }) {
  return (
    <header className={style}>
      <Title value={"MY BLOG"} />
      <Desc value={"Welcome to the blog of"} span={"unknown"} />
    </header>
  );
}
