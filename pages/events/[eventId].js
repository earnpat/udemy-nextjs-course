import { Fragment } from 'react'
import { useRouter } from 'next/router'
import { getEventById } from '../../dummy'
import EventSummary from '../../components/event-detail/event-summary'
import EventLogistics from '../../components/event-detail/event-logistics'
import EventContent from '../../components/event-detail/event-content'
import ErrorAlert from '../../components/ui/error-alert'

export default function EventDetailPage() {
  const router = useRouter()

  let eventId = router.query.eventId
  let event = getEventById(eventId)

  if (!event) {
    return <ErrorAlert>
      <p>No Event Found</p>
    </ErrorAlert>
  }

  return (
    <Fragment>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </Fragment>
  )
}