import { JSX, useState } from "react";
import "@fullcalendar/react/dist/vdom"; // ref: https://github.com/fullcalendar/fullcalendar/issues/6371#issuecomment-1062978833
import FullCalendar, { DateSelectArg, EventApi, EventClickArg, formatDate } from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import {
  Box,
  List,
  ListItem,
  ListItemText,
  Typography,
  useTheme
} from "@mui/material";
import Header from "../../components/Header";
import { tokens } from "../../theme";

export default function Calendar(): JSX.Element {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [currentEvents, setCurrentEvents] = useState<EventApi[]>([]);

  function handleDateClick(selected: DateSelectArg): void {
    const title = prompt("Please enter a new title for your event");
    const calendarApi = selected.view.calendar;
    calendarApi.unselect();

    if (title) {
      calendarApi.addEvent({
        id: selected.startStr+"-"+title,
        title,
        start: selected.startStr,
        end: selected.endStr,
        allDay: selected.allDay,
      });
    }
  }

  function handleEventClick(selected: EventClickArg): void {
    if (window.confirm(`Are you sure you want to delete the event '${selected.event.title}'`)) {
      selected.event.remove();
    }
  }

  return (
    <Box
      m="20px"
    >
      <Header title="CALENDAR" subTitle="Full Calendar Interactive Page" />

      <Box
        display="flex"
        justifyContent="space-between"
      >
        {/* CALENDAR SIDEBAR */}
        <Box
          flex="1 1 20%"
          p="15px"
          borderRadius="4px"
          sx={{
            backgroundColor: colors.primary[400]
          }}
        >
          <Typography variant="h5">Events</Typography>
          <List>
            {currentEvents.map((event: EventApi) => {
              const eventStart = event.start;
              if (eventStart === null) return null;

              return (
                <ListItem
                  key={event.id}
                  sx={{
                    backgroundColor: colors.greenAccent[500],
                    margin: "10px 0",
                    borderRadius: "2px",
                  }}
                >
                  <ListItemText
                    primary={event.title}
                    secondary={
                      <Typography>
                        {formatDate(eventStart, {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                        })}
                      </Typography>
                    }
                  />
                </ListItem>
              );
            })}
          </List>
        </Box>

        {/* CALENDAR */}
        <Box flex="1 1 100%" ml="15px">
          <FullCalendar
            height="75vh"
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin, listPlugin]}
            headerToolbar={{
              left: "prev,next today",
              center: "title",
              right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth"
            }}
            initialView="dayGridMonth"
            editable={true}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
            select={handleDateClick}
            eventClick={handleEventClick}
            eventsSet={(events) => setCurrentEvents(events)}
            initialEvents={[
              {
                id: "1234",
                title: "All Day Event",
                date: "2024-09-14",
              },
              {
                id: "4321",
                title: "Timed Event",
                date: "2024-09-28",
              },
            ]}
          />
        </Box>
      </Box>
    </Box>
  );
}
