import "./singlePost.css";

export default function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          alt=""
          className="singlePostImg"
        />
        <h1 className="singlePostTitle">
          Lorem ipsum, dolor sit amet .
          <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit"></i>
            <i className="singlePostIcon far fa-trash-alt"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author: <b>Safak</b>
          </span>
          <span className="singlePostDate">1 hour ago</span>
        </div>
        <p className="singlePostDesc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
          ipsam quidem commodi illo nobis molestiae facere, cupiditate vero et,
          iusto doloribus corporis quasi eius inventore veritatis vel! Provident
          quas minima perspiciatis quod fuga aliquam qui excepturi nostrum
          natus. Mollitia deleniti tempora dolorem dolores eaque soluta
          assumenda voluptate repellendus eligendi minus. Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Voluptatum ipsam quidem commodi
          illo nobis molestiae facere, cupiditate vero et, iusto doloribus
          corporis quasi eius inventore veritatis vel! Provident quas minima
          perspiciatis quod fuga aliquam qui excepturi nostrum natus. Mollitia
          deleniti tempora dolorem dolores eaque soluta assumenda voluptate
          repellendus eligendi minus. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Voluptatum ipsam quidem commodi illo nobis molestiae
          facere, cupiditate vero et, iusto doloribus corporis quasi eius
          inventore veritatis vel! Provident quas minima perspiciatis quod fuga
          aliquam qui excepturi nostrum natus. Mollitia deleniti tempora dolorem
          dolores eaque soluta assumenda voluptate repellendus eligendi minus.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
          ipsam quidem commodi illo nobis molestiae facere, cupiditate vero et,
          iusto doloribus corporis quasi eius inventore veritatis vel! Provident
          quas minima perspiciatis quod fuga aliquam qui excepturi nostrum
          natus. Mollitia deleniti tempora dolorem dolores eaque soluta
          assumenda voluptate repellendus eligendi minus. Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Voluptatum ipsam quidem commodi
          illo nobis molestiae facere, cupiditate vero et, iusto doloribus
          corporis quasi eius inventore veritatis vel! Provident quas minima
          perspiciatis quod fuga aliquam qui excepturi nostrum natus. Mollitia
          deleniti tempora dolorem dolores eaque soluta assumenda voluptate
          repellendus eligendi minus. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Voluptatum ipsam quidem commodi illo nobis molestiae
          facere, cupiditate vero et, iusto doloribus corporis quasi eius
          inventore veritatis vel! Provident quas minima perspiciatis quod fuga
          aliquam qui excepturi nostrum natus. Mollitia deleniti tempora dolorem
          dolores eaque soluta assumenda voluptate repellendus eligendi minus.
        </p>
      </div>
    </div>
  );
}
