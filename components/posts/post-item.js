import Link from 'next/link';
import Image from 'next/image';

import classes from './post-item.module.css';
function PostItem(props) {
  //获取字段信息
  const { title, image, excerpt, date, slug } = props.post;

  const imagePath = `/images/posts/${slug}/${image}`; //todo-fwh-为什么???

  //详情数据展示
  return (
    <li>
      <div>
        <Image
          src={imagePath}
          alt={title}
          width={300}
          height={200}
          layout="responsive" //todo-fwh-?????
        />
      </div>
      <div className={classes.content}>
        <h3>{title}</h3>
        {/* <time>{formattedDate}</time> */}
        <p>{excerpt}</p>
      </div>
    </li>
  );
}
export default PostItem;
