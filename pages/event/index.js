import EventList from "../../components/enents/event-list";
import { getAllEvents } from "../../dummy-data";
function AllEventsPage(){
    const events= getAllEvents();

    return(
        <>
        <span>事件首页</span>        
         <EventList items={events}/>
        </>
    )
}
export default AllEventsPage;