import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from '@fullcalendar/daygrid';

const MainCalendar = () => {
  return (
    <FullCalendar
    viewClassNames='p-8'
      plugins={[ dayGridPlugin ]}
      initialView="dayGridMonth"
    />
  );
};

export default MainCalendar;