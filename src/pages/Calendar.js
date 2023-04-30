import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import FullCalendar from "@fullcalendar/react"; // must go before plugins
import React from "react";
import Layout from "../components/Layout";
import { Button, Card } from 'antd';
export default function Calendar() {
  return (
    <>
      <Layout>
      <div className="d-flex f-space-between header-button">
          <h3>Calendar Events</h3>
          <Button type="primary">Add Event +</Button>

        </div>
      <Card  bordered={false} style={{ width: '100%', height:'100%' }}>
        <FullCalendar
          plugins={[dayGridPlugin]}
          initialView="dayGridMonth"
          style={{height:'100%'}}
          events={[
            { title: 'event 1', date: '2023-04-01' },
            { title: 'event 2', date: '2019-04-02' }
          ]}
        />
        </Card>
      </Layout>

    </>
  );

}
