import { Fragment } from "react";
import { useRouter } from "next/router";

// import { getAllEvents } from '../../dummy-data';
import { getAllEvents } from "../../helpers/api-util";
import EventList from "../../components/events/event-list";
import EventsSearch from "../../components/events/events-search";

// fwh-原先由虚拟获取data数据，改为getStaticsProps获取并传递到组件中
function AllEventsPage(props) {
  const router = useRouter();
  //   const events = getAllEvents();
  //   const events = events;
  //   fwh-正确的写法
  const { events } = props;

  function findEventsHandler(year, month) {
    // fwh-在搜索组件EventsSearch中，选择的条件会传递到onSearch属性中，在此接收作为URL路径参数
    const fullPath = `/events/${year}/${month}`;

    router.push(fullPath);
  }

  return (
    <Fragment>
      <EventsSearch onSearch={findEventsHandler} />
      <EventList items={events} />
    </Fragment>
  );
}

// fwh-异步获取数据-getstaticprops是优先于组件执行的
export async function getStaticProps() {
  const events = await getAllEvents();
  //fwh-注意此处是花括号处理数据。 revalidate用于部署时重新生成页面
  console.log("events", events);
  return {
    props: {
      events: events,
    },
    revalidate: 60,
  };
}

export default AllEventsPage;
