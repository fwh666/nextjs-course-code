function EventItem(props) {
  /**
   * 1. 获取数据
   * 2. 数据放入样式中
   * 3. 样式:
   *  - 图片
   *  - 标题
   *  - 日期
   *  - 地址
   *  - 点击按钮
   */
  const { title, image, date, location, id } = props;
  const humanReadableDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const formattedAddress = location.replace(", ", "\n");
  const exploreLink = `/events/${id}`;
  return (
    <>
      <li>
        <img src={"/" + image} alt={title} />
        <div>
          <div>
            <h2>{title}</h2>
            <div>
              {/* todo-fwh-自定义time标签? */}
              <time>{humanReadableDate}</time>
            </div>
          </div>
        </div>
      </li>
    </>
  );
}

export default EventItem;
