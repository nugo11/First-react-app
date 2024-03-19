import Popular from "./Popular";
import Sidepost from "./Sidepost";
import Tags from "./Tags";
import "./sidebar.css";

export default function Sidebar({ style }) {
  return (
    <div className={style}>
      <Sidepost
        style={"popular"}
        src={"https://www.w3schools.com/w3images/avatar_g.jpg"}
        h1={"My Name"}
        p={
          "Just me, myself and I, exploring the universe of uknownment. I have a heart of love and a interest of lorem ipsum and mauris neque quam blog. I want to share my world with you."
        }
      />

      <Popular style={"popularposts"} h1={"Popular Posts"} />
      <Tags style={"tags"} h1={"Tags"} />
    </div>
  );
}
