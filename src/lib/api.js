export async function getEventsData() {
  const response = await fetch(
    'https://central.wordcamp.org/wp-json/wp/v2/wordcamps'
  );
  const responseData = await response.json();

  if (!response.ok) {
    throw new Error(responseData.message || 'Could not fetch data.');
  }

  const eventDetails = responseData.map((data) => {
    const startEventEpoch = data['Start Date (YYYY-mm-dd)'];
    const startEventDate = new Date(0);
    startEventDate.setUTCSeconds(startEventEpoch);

    const endEventEpoch = data['End Date (YYYY-mm-dd)'];
    const endEventDate = new Date(0);
    endEventDate.setUTCSeconds(endEventEpoch);

    let coordinates = [];

    if (data?._host_coordinates === '') {
      coordinates = [
        data?._venue_coordinates?.longitude,
        data?._venue_coordinates?.latitude,
      ];
    } else {
      coordinates = [
        data?._host_coordinates?.longitude,
        data?._host_coordinates?.latitude,
      ];
    }

    return {
      key: data?.id,
      eventId: data?.id,
      title: data?.title?.rendered,
      venue: data?.Location,
      coordinates: coordinates,
      link: data?.link,
      startEventDate: startEventDate,
      endEventDate: endEventDate,
    };
  });

  return eventDetails;
}
