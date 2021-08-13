import "./post.css";

export default function Post() {
  return (
    <div className="post">
      <img
        src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        alt=""
        className="postImg"
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
        </div>
        <span className="postTitle">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, eius.
        </span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore modi
        fugit quidem magnam facere sapiente optio, nihil debitis aperiam rem
        recusandae quo voluptas sint harum fugiat numquam, laboriosam provident
        ullam enim. Nulla mollitia voluptates delectus cumque accusamus hic
        magnam reprehenderit obcaecati expedita, nihil itaque harum! Ut
        similique culpa optio molestiae!
      </p>
    </div>
  );
}
