export async function getEventsData() {
  const response = await fetch(
    "https://central.wordcamp.org/wp-json/wp/v2/wordcamps"
  );
  const responseData = await response.json();

  if (!response.ok) {
    throw new Error(responseData.message || "Could not fetch data.");
  }

  const eventDetails = responseData.map((data) => {
    const StartutcSeconds = data["Start Date (YYYY-mm-dd)"];
    const start = new Date(0);
    start.setUTCSeconds(StartutcSeconds);

    const EndutcSeconds = data["End Date (YYYY-mm-dd)"];
    const end = new Date(0);
    end.setUTCSeconds(EndutcSeconds);

    return {
      key: data.id,
      eventId: data.id,
      title: data.title.rendered,
      venue: data["Venue Name"],
      coordinates: [
        data._host_coordinates.longitude,
        data._host_coordinates.latitude,
      ],
      start: start,
      end: end,
    };
  });
  console.log(eventDetails);
  return eventDetails;
}
