export async function fetchUpcomingLaunches() {
  const response = await fetch(
    "https://ll.thespacedevs.com/2.2.0/launch/upcoming/?limit=3"
  );

  if (!response.ok) {
    throw new Error("Failed to fetch launches");
  }

  const data = await response.json();
  return data.results;
}
