import React from "react";
import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import Header from "../components/Header/Header";
export default function Calendar()
  {
    return (
      <>
      <Header/>
      <FullCalendar plugins={[dayGridPlugin]} initialView="dayGridMonth" />
      </>
    );
  
}
