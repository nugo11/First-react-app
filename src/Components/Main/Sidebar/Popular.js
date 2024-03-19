function PopularPosts({ src, h1, p }) {
  return (
    <div>
      <img src={src}></img>
      <div>
        <h2>{h1}</h2>
        <p>{p}</p>
      </div>
    </div>
  );
}

export default function Popular({ style, h1 }) {
  return (
    <div className={style}>
      <h1>{h1}</h1>
      <PopularPosts
        src={"https://www.w3schools.com/w3images/workshop.jpg"}
        h1={"Lorem"}
        p={"Sed mattis nunc"}
      />
      <PopularPosts
        src={"https://www.w3schools.com/w3images/gondol.jpg"}
        h1={"Ipsum"}
        p={"Praes tinci sed"}
      />
      <PopularPosts
        src={"https://www.w3schools.com/w3images/skies.jpg"}
        h1={"Dorum"}
        p={"Ultricies congue"}
      />
      <PopularPosts
        src={"https://www.w3schools.com/w3images/skies.jpg"}
        h1={"Mingsum"}
        p={"Lorem ipsum dipsum"}
      />
    </div>
  );
}
