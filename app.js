function renderEvents(events) {
  const list = document.getElementById("events");
  const today = new Date().toISOString().slice(0, 10);
  list.innerHTML = upcoming(events, today)
    .map((e) => `<li class="card"><h3>${e.title}</h3><p>${formatDate(e.date)}, ${e.start}–${e.end} · ${e.location}</p></li>`)
    .join("");
}
renderEvents(EVENTS);
