import { Wrapper } from "./Wrapper";
import { DateTime } from "luxon";

const events = [
  {
    start: DateTime.fromJSDate(new Date("2023-07-24T14:00:00")).toJSDate(),
    end: DateTime.fromJSDate(new Date("2023-07-24T16:00:00")).toJSDate(),
    title: "Event Example",
    data: {
      type: "Example",
      desc: "An example",
    },
  },
];

const components = {
  event: (props: any) => {
    const type = props?.event?.data?.type;

    switch (type) {
      case "Example":
        return (
          <div className="whatever">
            {props.title}
            <div className="another">{props?.event?.data?.desc}</div>
          </div>
        );
      default:
        return (
          <div className="event">
            {props.title}
            <div className="event-desc">{props?.event?.data?.desc}</div>
          </div>
        );
    }
  },
};

export const Calendar = () => {
  return <Wrapper events={events} components={components} />;
};
