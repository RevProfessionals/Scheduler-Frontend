import { Calendar as BigCalendar, CalendarProps, luxonLocalizer } from "react-big-calendar";
import { DateTime } from "luxon";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = luxonLocalizer(DateTime);

export const Wrapper = (props: Omit<CalendarProps, "localizer">) => {
  return (
    <BigCalendar
      {...props}
      localizer={localizer}
    />
  );
};
export { BigCalendar };
