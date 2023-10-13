import EventItem from "./event-item";
function EventList(props) {
  //得到数据
  const { items } = props;

  return (
    //遍历数据
    <ul>
      {items.map((event) => (
        <EventItem
          key={event.id}
          id={event.id}
          title={event.title}
          location={event.location}
          date={event.date}
          image={event.image}
        />
      ))}
    </ul>
  );
}

export default EventList;
