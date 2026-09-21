// Ana sayfadaki ikonlarla aynı çizim dili: 24'lük ızgara, çizgi tabanlı.

const paths = {
  phone:
    '<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2Z" />',
  whatsapp:
    '<path d="M4 20l1.3-3.9A8.5 8.5 0 1 1 8 19Z" /><path d="M9.2 8.6c0 3.4 2.8 6.2 6.2 6.2l.9-1.6-1.9-.9-.9.8a4.4 4.4 0 0 1-2-2l.8-.9-.9-1.9Z" />',
  pin: '<path d="M12 21s7-5.2 7-12a7 7 0 1 0-14 0c0 6.8 7 12 7 12Z" /><circle cx="12" cy="9" r="2.5" />',
  clock: '<circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" />',
  user: '<circle cx="12" cy="8" r="4" /><path d="M4 21a8 8 0 0 1 16 0" />',
  oilcan:
    '<path d="M3 11h2.5l1-1h6l1.5 1.5L21 9v1.2l-6.8 6.3H6.5L5 15v-2.5H3Z" /><path d="M9.5 10V8M8 8h3" /><path d="M20.5 13.8c0 .8-.5 1.4-1 1.4s-1-.6-1-1.4.5-1.3 1-2.1c.5.8 1 1.3 1 2.1Z" />',
  engine:
    '<path d="M6.5 9.5 8 8h2V6.5h4V8h2.5l1.5 2h1.5V8.5H21V16h-1.5v-2H18v2l-2 2H9.5L8 16.5H6.5v-2h-2V16H3V9h1.5v2.5h2Z" />',
  brake:
    '<circle cx="12" cy="12" r="6.5" /><path d="M5.2 5.8a9 9 0 0 0 0 12.4M18.8 5.8a9 9 0 0 1 0 12.4M12 8.7v4.1M12 15.4v.1" />',
  sound: '<path d="M4 9.5h3l4.5-3.5v12L7 14.5H4Z" /><path d="M15.5 9a4 4 0 0 1 0 6M18 6.5a7.5 7.5 0 0 1 0 11" />',
  gauge:
    '<path d="M4.5 17a7.5 7.5 0 1 1 15 0" /><path d="M12 14 8.2 10.8" /><circle cx="12" cy="14" r="1.3" /><path d="M6.8 12.2l1 .4M12 7v1.2M17.2 12.2l-1 .4" />',
  coolant:
    '<path d="M10.2 13.3V5.3a1.8 1.8 0 0 1 3.6 0v8a3 3 0 1 1-3.6 0Z" /><path d="M12 8.5v6.5M14 6.5h2.5M14 9.5h2" /><path d="M3 20.5c1.5 1 3 1 4.5 0s3-1 4.5 0 3 1 4.5 0 3-1 4.5 0" />',
  wrench:
    '<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.8-3.8a6 6 0 0 1-7.9 7.9l-6.9 6.9a2.1 2.1 0 0 1-3-3l6.9-6.9a6 6 0 0 1 7.9-7.9l-3.8 3.8Z" />',
  scanner:
    '<rect x="3" y="4" width="11" height="16" rx="2" /><path d="M5.5 7h6v4h-6ZM6 14.5h1.5M9.5 14.5H11M14 12h3a2 2 0 0 1 2 2v2.5" /><path d="M17 16.5h4V20h-4Z" />',
  gearbox:
    '<circle cx="6" cy="5" r="1.8" /><circle cx="12" cy="5" r="1.8" /><circle cx="18" cy="5" r="1.8" /><circle cx="6" cy="19" r="1.8" /><circle cx="12" cy="19" r="1.8" /><path d="M6 6.8v10.4M12 6.8v10.4M18 6.8V12H6" />',
  mobile: '<rect x="6.5" y="2.5" width="11" height="19" rx="2" /><path d="M11 18.5h2M9.5 7h5M9.5 10h3.5" />',
  clipboard:
    '<path d="M9 4.5H6.5A1.5 1.5 0 0 0 5 6v14a1.5 1.5 0 0 0 1.5 1.5h11A1.5 1.5 0 0 0 19 20V6a1.5 1.5 0 0 0-1.5-1.5H15" /><rect x="9" y="3" width="6" height="3" rx="1" /><path d="m9 13.5 2 2 4-4.5" />',
  carkey:
    '<circle cx="15.5" cy="8.5" r="5" /><circle cx="15.5" cy="8.5" r="1.5" /><path d="M11.9 12.1 3.5 20.5M6 18l2 2M8.5 15.5l2 2" />',
  car:
    '<path d="M5 16.5h14M3.5 16.5v-3.2l1.8-4.6A2 2 0 0 1 7.2 7.5h9.6a2 2 0 0 1 1.9 1.2l1.8 4.6v3.2" /><path d="M3.5 13.5h17" /><circle cx="7.5" cy="16.5" r="1.8" /><circle cx="16.5" cy="16.5" r="1.8" />',
  van:
    '<path d="M2.5 16.5V7.5a1.5 1.5 0 0 1 1.5-1.5h10v10.5M14 9h3.8l3.7 4v3.5h-2" /><path d="M9.3 16.5h5.4" /><circle cx="7.5" cy="16.5" r="1.8" /><circle cx="17" cy="16.5" r="1.8" /><path d="M2.5 16.5h3.2" />',
  book: '<path d="M4 5.5A1.5 1.5 0 0 1 5.5 4H11v16H5.5A1.5 1.5 0 0 1 4 18.5Z" /><path d="M20 5.5A1.5 1.5 0 0 0 18.5 4H13v16h5.5a1.5 1.5 0 0 0 1.5-1.5Z" />',
  warning: '<path d="M12 3.5 2.5 20h19Z" /><path d="M12 10v4.5M12 17v.1" />',
  arrow: '<path d="M4 10h12M11 5l5 5-5 5" />',
  arrowLeft: '<path d="M16 10H4m5-5-5 5 5 5" />',
  external: '<path d="M7 17 17 7M9 7h8v8" />'
};

export const icon = (name, extra = "") => {
  const body = paths[name];
  if (!body) throw new Error(`Bilinmeyen ikon: ${name}`);
  const viewBox = name === "arrow" || name === "arrowLeft" ? "0 0 20 20" : "0 0 24 24";
  return `<svg aria-hidden="true" viewBox="${viewBox}"${extra}>${body}</svg>`;
};
