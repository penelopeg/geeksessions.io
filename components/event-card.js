import React from "react";
import Image from 'next/image'

const truncateText = (text, length) => {
  if (text?.length > length) {
    return `${text.substring(0, length)}...`;
  }

  return text;
};

const EventCard = (props) => {
  return (
    <article className="bg-gray-700 bg-opacity-90 p-6 rounded-lg flex flex-col">
      <h3 className="font-bold tracking-wider text-xl mb-2">
        {truncateText(props.event.title, 30)}
      </h3>
      <p className="mb-2 font-light flex-grow">
        {truncateText(props.event.description, 240)}
      </p>
      <div className="flex mb-2">
        <Image
          alt="event location"
          className="w-6 h-6 mr-2"
          src="/assets/icon_marker.svg"
          width={24}
          height={24}
        />
        <a
          href={`https://maps.google.com/?q=${props.event.location}`}
          rel="noopener"
          target="_blank"
        >
          {truncateText(props.event.location, 30)}
        </a>
      </div>
      <time
        dateTime={props.event.startTimeISO}
        className="flex flex-col md:flex-row md:space-x-6"
      >
        <div className="flex mb-2 md:mb-0">
          <Image
            alt="event date"
            className="w-6 h-6 mr-2"
            src="/assets/icon_calendar.svg"
            width={24}
            height={24}
          />
          {props.event.date}
        </div>
        <div className="flex">
          <Image
            alt="event time"
            className="w-6 h-6 mr-2"
            src="/assets/icon_clock.svg"
            width={24}
            height={24}
          />
          {props.event.startTime} - {props.event.endTime}
        </div>
      </time>
    </article>
  );
};

export default EventCard;
