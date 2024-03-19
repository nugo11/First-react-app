import Postform from "./Postform";
import "./post.css";

export default function Posts({ style }) {
  return (
    <div className={style}>
      <Postform
        style={"postform"}
        img={"https://www.w3schools.com/w3images/woods.jpg"}
        titleStyle={"titlestyle"}
        title={"TITLE HEADING"}
        titleDesc={"Title description"}
        date={"April 7, 2014"}
        fullDesc={
          "Mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem euismod placerat. Vivamus porttitor magna enim, ac accumsan tortor cursus at. Phasellus sed ultricies mi non congue ullam corper. Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla."
        }
        fotStyle={"fotstyle"}
        butText={"READ MORE »"}
        comNum={"0"}
      />

      <Postform
        style={"postform"}
        img={"https://www.w3schools.com/w3images/bridge.jpg"}
        titleStyle={"titlestyle"}
        title={"BLOG ENTRY"}
        titleDesc={"Title description"}
        date={"April 2, 2014"}
        fullDesc={
          "Mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem euismod placerat. Vivamus porttitor magna enim, ac accumsan tortor cursus at. Phasellus sed ultricies mi non congue ullam corper. Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla."
        }
        fotStyle={"fotstyle"}
        butText={"READ MORE »"}
        comNum={"2"}
      />
    </div>
  );
}
