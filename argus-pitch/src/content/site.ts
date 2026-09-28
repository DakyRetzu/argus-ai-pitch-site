/**
 * All page copy, taken verbatim from ARGUS_FINAL_REVISION_PROMPT.md.
 * Edit wording here only; components contain no copy of their own.
 */

export const links = {
  portfolio: "https://danijeltupajicportfolio.vercel.app/",
  linkedin: "https://www.linkedin.com/in/danijel-tupaji%C4%87-a1a3b63a1/",
  email: "danijeltupajic7@gmail.com",
};

export const hero = {
  label: "REAL-TIME VISUAL INTELLIGENCE",
  primary:
    "ARGUS is a real-time visual intelligence system designed to detect, track and interpret people and objects from a live camera feed.",
  secondary:
    "Instead of treating video as a sequence of isolated frames, ARGUS follows entities over time, maintains temporary tracking identities and converts visual activity into structured information.",
  capabilities: "Detect · Track · Interpret · Record",
  primaryCta: "VIEW PROJECT",
  secondaryCta: "WATCH DEMO",
};

export const about = {
  heading: "About ARGUS",
  paragraphs: [
    "ARGUS is a real-time computer vision project built to transform live camera footage into usable visual data.",
    "The system combines object detection, tracking, open-vocabulary recognition and local visual AI to identify visible entities, maintain temporary identities across frames and record what happens in the scene over time.",
  ],
};

export const demo = {
  heading: "ARGUS in operation",
  description:
    "The prototype processes a live webcam feed in real time and combines detection, tracking, object recognition and local AI inference.",
  meta: "Live camera input · Local AI inference · Real-time tracking",
};

export const tracking = {
  heading: "Persistent entity tracking",
  paragraphs: [
    "ARGUS assigns temporary IDs to visible entities, such as PERSON #01 or WATCH #06, and maintains those identities while the subject moves through the frame.",
    "Tracking and classification are handled separately. This allows ARGUS to preserve the same entity identity while additional visual evidence is collected and the object classification is refined over time.",
  ],
  technical: "Stable ID · Confidence · Classification · Multi-frame evidence",
  alt: "ARGUS debug panel showing PERSON #01, WATCH #06 locked with high confidence and RING #07, with the evidence behind each classification.",
};

export const events = {
  heading: "Structured visual events",
  paragraphs: [
    "ARGUS records when tracked entities appear, how long they remain visible and when they leave the scene.",
    "This turns a live camera feed into a structured event history instead of leaving the user with raw footage that must be reviewed manually.",
  ],
  technical: "Appearances · Visibility duration · Exit events · Session history",
  alt: "ARGUS recent events log: RING #07 and WATCH #06 left the frame after 5.5 s and 6.3 s, OBJECT #07 and OBJECT #06 appeared, SMARTPHONE #05 left the frame after 3.4 s.",
};

export const applications = {
  heading: "Designed for real-world visual monitoring",
  intro: "ARGUS is built as an adaptable visual intelligence platform rather than a system limited to a single industry.",
  areas: [
    { name: "Retail", text: "Product interaction, shelf activity and customer movement." },
    { name: "Warehousing & Logistics", text: "Visible inventory, object movement and activity across defined work areas." },
    { name: "Industrial Environments", text: "Equipment visibility, workflow observation and operational activity." },
    { name: "UAV & Robotics", text: "Visual intelligence for drones, mobile cameras and autonomous systems." },
  ],
};

export const cameraQuality = {
  heading: "Better input produces better visual results",
  paragraphs: [
    "Computer vision is only as strong as the visual information available to it.",
    "Higher-quality cameras, better lighting, clearer viewing angles and larger visible objects provide the models with more useful detail and can improve detection and classification reliability.",
    "Small objects, poor lighting, motion blur, occlusion and low-resolution footage naturally make recognition more difficult.",
  ],
  factors: "Camera quality · Lighting · Distance · Angle · Object size",
};

export const technology = {
  heading: "What ARGUS is built with",
  stack: [
    { layer: "Frontend", tools: "Next.js · TypeScript · Tailwind CSS" },
    { layer: "Backend", tools: "Python · FastAPI · WebSockets" },
    { layer: "Computer Vision", tools: "YOLO · YOLOE · ByteTrack · OpenCV" },
    { layer: "Local Visual AI", tools: "Qwen2.5-VL · Ollama" },
  ],
  explanation:
    "ARGUS combines a browser-based interface with a Python computer-vision backend. Video frames are processed in real time, detections are associated with tracked entities and additional visual models provide deeper object interpretation.",
  pipeline: ["Camera", "Detection", "Tracking", "Visual Analysis", "Structured Events"],
};

export const contact = {
  name: "Danijel Tupajić",
  role: "Software Engineering · Computer Vision · AI",
  links: [
    { label: "Portfolio", href: links.portfolio, display: "danijeltupajicportfolio.vercel.app", external: true },
    { label: "LinkedIn", href: links.linkedin, display: "linkedin.com/in/danijel-tupajić", external: true },
    { label: "Email", href: `mailto:${links.email}`, display: links.email, external: false },
  ],
};

export const media = {
  logo: { src: "/assets/argus-logo.png", width: 2048, height: 682, alt: "ARGUS AI" },
  debugShot: { src: "/assets/argus-debug-tracking.png", width: 382, height: 712 },
  eventsShot: { src: "/assets/argus-recent-events.png", width: 1325, height: 305 },
  video: {
    width: 1836,
    height: 838,
    durationLabel: "0:46",
    poster: "/media/argus-demo-poster.jpg",
    /**
     * The supplied original comes first (HEVC: Safari and HEVC-capable browsers play it as is).
     * The other two are delivery encodes of the same recording for browsers without HEVC.
     */
    sources: [
      { src: "/assets/argus-demo.mov", type: 'video/mp4; codecs="hvc1.1.6.L123.B0"' },
      { src: "/media/argus-demo.webm", type: 'video/webm; codecs="vp9"' },
      { src: "/media/argus-demo.mp4", type: 'video/mp4; codecs="avc1.64002A"' },
    ],
    fallback: "/media/argus-demo.mp4",
  },
};
