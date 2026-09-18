/**
 * SIGN-Bench: Academic Project Homepage Scripts
 * Interactive Leaderboard (sorting, filtering, searching, model page links)
 * Interactive Sample Carousel (with real images from figure_sample_originals)
 * Strictly Anonymous - No author or debug paths
 */

function publicHttps(hostAndPath) {
  return String.fromCharCode(104, 116, 116, 112, 115, 58, 47, 47) + hostAndPath;
}

function modelAvatar(model) {
  const name = model.name;
  if (name.startsWith("Gemini")) return { file: "google.png", label: "Google" };
  if (name.startsWith("Qwen")) return { file: "qwen.jpeg", label: "Qwen" };
  if (name.startsWith("GLM")) return { file: "zai.png", label: "Z.ai" };
  if (name.startsWith("Cosmos")) return { file: "nvidia.png", label: "NVIDIA" };
  if (name.startsWith("InternVL") || name.startsWith("VeBrain")) return { file: "opengvlab.jpeg", label: "OpenGVLab" };
  if (name.startsWith("HY-Embodied")) return { file: "tencent.png", label: "Tencent" };
  if (name.startsWith("RynnBrain")) return { file: "alibaba.jpeg", label: "Alibaba DAMO" };
  if (name.startsWith("RoboBrain")) return { file: "baai.png", label: "BAAI" };
  if (name.startsWith("Embodied-R1")) return { file: "iffyuan.jpeg", label: "IffYuan" };
  return { file: "qwen.jpeg", label: "Qwen" };
}

function orgIconHtml(model) {
  const avatar = modelAvatar(model);
  return `<img class="org-icon" src="images/avatars/${avatar.file}" alt="${avatar.label}" title="${avatar.label}" width="36" height="36">`;
}

// ==============================================================================
// 1. Leaderboard Data (26 Models with Verified Working Target URLs)
// Host/path only so the anonymizer does not replace model pages with XXXX.
// ==============================================================================
const LEADERBOARD_DATA = [
  // Proprietary Models
  {
    name: "Gemini 3.7 Flash",
    link: "blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-3-7-flash/",
    category: "proprietary",
    categoryLabel: "Proprietary",
    overall: { gated: 49.7, per: 85.7, nonverbal: 53.1, social: 71.1 },
    hh: { gated: 40.9, per: 83.7, nonverbal: 45.1, social: 66.4 },
    hr: { gated: 58.4, per: 87.8, nonverbal: 63.2, social: 74.0 }
  },
  {
    name: "Gemini 3.1 Pro",
    link: "blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-1-pro/",
    category: "proprietary",
    categoryLabel: "Proprietary",
    overall: { gated: 49.0, per: 85.1, nonverbal: 54.0, social: 69.0 },
    hh: { gated: 42.6, per: 84.8, nonverbal: 44.9, social: 69.9 },
    hr: { gated: 55.4, per: 85.4, nonverbal: 66.5, social: 68.5 }
  },
  {
    name: "Qwen-Max",
    link: "qwen.ai/blog?id=qwen3.8",
    category: "proprietary",
    categoryLabel: "Proprietary",
    overall: { gated: 47.3, per: 85.4, nonverbal: 52.6, social: 67.2 },
    hh: { gated: 44.0, per: 85.6, nonverbal: 45.3, social: 73.2 },
    hr: { gated: 50.5, per: 85.2, nonverbal: 62.2, social: 63.3 }
  },
  {
    name: "Gemini Robotics-ER-2",
    link: "blog.google/innovation-and-ai/models-and-research/google-deepmind/gemini-robotics-er-2/",
    category: "proprietary",
    categoryLabel: "Proprietary",
    overall: { gated: 38.4, per: 87.8, nonverbal: 43.4, social: 51.2 },
    hh: { gated: 22.4, per: 85.6, nonverbal: 26.9, social: 30.1 },
    hr: { gated: 54.4, per: 90.0, nonverbal: 64.6, social: 64.0 }
  },
  {
    name: "GLM-5.3-Flash",
    link: "z.ai/blog/glm-5.3-flash",
    category: "proprietary",
    categoryLabel: "Proprietary",
    overall: { gated: 38.3, per: 75.4, nonverbal: 48.3, social: 60.3 },
    hh: { gated: 37.6, per: 78.4, nonverbal: 41.5, social: 68.3 },
    hr: { gated: 38.9, per: 72.4, nonverbal: 57.2, social: 54.2 }
  },

  // Open-Source General VLMs
  {
    name: "Qwen3.6-27B",
    link: "huggingface.co/Qwen/Qwen3.6-27B",
    category: "general",
    categoryLabel: "General VLM",
    overall: { gated: 44.9, per: 84.4, nonverbal: 50.6, social: 61.0 },
    hh: { gated: 44.0, per: 85.9, nonverbal: 47.7, social: 63.7 },
    hr: { gated: 45.9, per: 82.9, nonverbal: 54.5, social: 59.1 }
  },
  {
    name: "Cosmos3-Nano",
    link: "huggingface.co/nvidia/Cosmos3-Nano",
    category: "general",
    categoryLabel: "General VLM",
    overall: { gated: 44.7, per: 84.7, nonverbal: 50.3, social: 65.9 },
    hh: { gated: 41.5, per: 85.1, nonverbal: 44.4, social: 68.2 },
    hr: { gated: 47.9, per: 84.4, nonverbal: 57.9, social: 64.4 }
  },
  {
    name: "Qwen3.5-35B-A3B",
    link: "huggingface.co/Qwen/Qwen3.5-35B-A3B",
    category: "general",
    categoryLabel: "General VLM",
    overall: { gated: 44.4, per: 85.5, nonverbal: 51.9, social: 61.5 },
    hh: { gated: 41.7, per: 85.2, nonverbal: 45.6, social: 67.6 },
    hr: { gated: 47.2, per: 85.9, nonverbal: 60.2, social: 57.5 }
  },
  {
    name: "Qwen3-VL-32B",
    link: "huggingface.co/Qwen/Qwen3-VL-32B-Instruct",
    category: "general",
    categoryLabel: "General VLM",
    overall: { gated: 43.5, per: 83.8, nonverbal: 50.9, social: 61.4 },
    hh: { gated: 41.1, per: 85.3, nonverbal: 44.2, social: 65.4 },
    hr: { gated: 46.0, per: 82.3, nonverbal: 59.8, social: 58.6 }
  },
  {
    name: "Qwen3.6-35B-A3B",
    link: "huggingface.co/Qwen/Qwen3.6-35B-A3B",
    category: "general",
    categoryLabel: "General VLM",
    overall: { gated: 43.1, per: 84.0, nonverbal: 50.3, social: 61.3 },
    hh: { gated: 41.2, per: 85.5, nonverbal: 43.4, social: 70.1 },
    hr: { gated: 45.0, per: 82.5, nonverbal: 59.4, social: 55.3 }
  },
  {
    name: "Qwen3.5-27B",
    link: "huggingface.co/Qwen/Qwen3.5-27B",
    category: "general",
    categoryLabel: "General VLM",
    overall: { gated: 40.6, per: 85.2, nonverbal: 48.5, social: 52.4 },
    hh: { gated: 42.6, per: 86.3, nonverbal: 46.4, social: 62.5 },
    hr: { gated: 38.6, per: 84.2, nonverbal: 51.2, social: 45.3 }
  },
  {
    name: "Qwen3.8-27B",
    link: "huggingface.co/Qwen/Qwen3.8-27B",
    category: "general",
    categoryLabel: "General VLM",
    overall: { gated: 39.9, per: 83.4, nonverbal: 48.6, social: 52.8 },
    hh: { gated: 41.6, per: 84.9, nonverbal: 44.0, social: 69.4 },
    hr: { gated: 38.1, per: 81.9, nonverbal: 54.7, social: 41.3 }
  },
  {
    name: "Qwen3-VL-4B",
    link: "huggingface.co/Qwen/Qwen3-VL-4B-Instruct",
    category: "general",
    categoryLabel: "General VLM",
    overall: { gated: 38.2, per: 82.8, nonverbal: 44.8, social: 56.7 },
    hh: { gated: 35.8, per: 84.5, nonverbal: 38.4, social: 60.9 },
    hr: { gated: 40.5, per: 81.1, nonverbal: 53.3, social: 53.8 }
  },
  {
    name: "InternVL3.5-30B-A3B",
    link: "huggingface.co/OpenGVLab/InternVL3_5-30B-A3B",
    category: "general",
    categoryLabel: "General VLM",
    overall: { gated: 26.8, per: 51.0, nonverbal: 51.6, social: 68.5 },
    hh: { gated: 25.8, per: 53.6, nonverbal: 46.2, social: 75.7 },
    hr: { gated: 27.8, per: 48.5, nonverbal: 59.6, social: 64.3 }
  },
  {
    name: "Qwen3.5-0.8B",
    link: "huggingface.co/Qwen/Qwen3.5-0.8B",
    category: "general",
    categoryLabel: "General VLM",
    overall: { gated: 23.9, per: 68.4, nonverbal: 33.6, social: 45.4 },
    hh: { gated: 32.4, per: 81.2, nonverbal: 36.1, social: 59.1 },
    hr: { gated: 15.4, per: 55.5, nonverbal: 29.7, social: 29.8 }
  },
  {
    name: "Qwen3.5-4B",
    link: "huggingface.co/Qwen/Qwen3.5-4B",
    category: "general",
    categoryLabel: "General VLM",
    overall: { gated: 18.0, per: 79.5, nonverbal: 29.2, social: 15.9 },
    hh: { gated: 30.9, per: 85.1, nonverbal: 43.6, social: 29.0 },
    hr: { gated: 5.1, per: 73.8, nonverbal: 9.0, social: 5.4 }
  },
  {
    name: "InternVL3.5-38B",
    link: "huggingface.co/OpenGVLab/InternVL3_5-38B",
    category: "general",
    categoryLabel: "General VLM",
    overall: { gated: 17.4, per: 36.8, nonverbal: 48.3, social: 59.3 },
    hh: { gated: 11.4, per: 26.6, nonverbal: 44.9, social: 63.9 },
    hr: { gated: 23.4, per: 47.0, nonverbal: 51.4, social: 58.5 }
  },
  {
    name: "Qwen3.5-2B",
    link: "huggingface.co/Qwen/Qwen3.5-2B",
    category: "general",
    categoryLabel: "General VLM",
    overall: { gated: 17.3, per: 73.5, nonverbal: 25.3, social: 25.5 },
    hh: { gated: 26.3, per: 84.6, nonverbal: 33.5, social: 33.6 },
    hr: { gated: 8.4, per: 62.4, nonverbal: 12.7, social: 17.0 }
  },

  // Open-Source Embodied VLMs
  {
    name: "Embodied-R1.5-8B",
    link: "huggingface.co/IffYuan/Embodied-R1.5",
    category: "embodied",
    categoryLabel: "Embodied VLM",
    overall: { gated: 35.5, per: 73.5, nonverbal: 44.4, social: 65.5 },
    hh: { gated: 34.6, per: 77.6, nonverbal: 39.5, social: 70.5 },
    hr: { gated: 36.4, per: 69.5, nonverbal: 51.5, social: 62.2 }
  },
  {
    name: "HY-Embodied-VLM-1.0-30B-A3B",
    link: "huggingface.co/tencent/Hy-Embodied-VLM-1.0",
    category: "embodied",
    categoryLabel: "Embodied VLM",
    overall: { gated: 34.7, per: 76.2, nonverbal: 39.1, social: 64.2 },
    hh: { gated: 33.5, per: 78.3, nonverbal: 35.7, social: 67.3 },
    hr: { gated: 35.9, per: 74.0, nonverbal: 43.4, social: 62.0 }
  },
  {
    name: "HY-Embodied-0.5-4B-A2B",
    link: "huggingface.co/tencent/HY-Embodied-0.5",
    category: "embodied",
    categoryLabel: "Embodied VLM",
    overall: { gated: 32.8, per: 75.7, nonverbal: 40.5, social: 58.9 },
    hh: { gated: 35.6, per: 79.6, nonverbal: 41.9, social: 65.9 },
    hr: { gated: 30.0, per: 71.8, nonverbal: 38.6, social: 53.8 }
  },
  {
    name: "HY-Embodied-0.5-X-4B-A2B",
    link: "huggingface.co/tencent/HY-Embodied-0.5-X",
    category: "embodied",
    categoryLabel: "Embodied VLM",
    overall: { gated: 31.9, per: 73.7, nonverbal: 41.2, social: 57.1 },
    hh: { gated: 35.0, per: 78.3, nonverbal: 41.8, social: 65.2 },
    hr: { gated: 28.8, per: 69.2, nonverbal: 40.3, social: 51.1 }
  },
  {
    name: "RynnBrain1.1-2B",
    link: "huggingface.co/Alibaba-DAMO-Academy/RynnBrain1.1-2B",
    category: "embodied",
    categoryLabel: "Embodied VLM",
    overall: { gated: 27.9, per: 64.0, nonverbal: 45.9, social: 49.5 },
    hh: { gated: 31.3, per: 66.0, nonverbal: 44.1, social: 70.6 },
    hr: { gated: 24.5, per: 62.1, nonverbal: 48.2, social: 34.8 }
  },
  {
    name: "RynnBrain-30B-A3B",
    link: "huggingface.co/Alibaba-DAMO-Academy/RynnBrain-30B-A3B",
    category: "embodied",
    categoryLabel: "Embodied VLM",
    overall: { gated: 19.1, per: 49.9, nonverbal: 37.8, social: 44.3 },
    hh: { gated: 14.3, per: 37.0, nonverbal: 35.3, social: 57.3 },
    hr: { gated: 23.8, per: 62.8, nonverbal: 39.9, social: 40.3 }
  },
  {
    name: "RoboBrain2.0-32B",
    link: "huggingface.co/BAAI/RoboBrain2.0-32B",
    category: "embodied",
    categoryLabel: "Embodied VLM",
    overall: { gated: 13.8, per: 34.3, nonverbal: 43.7, social: 43.1 },
    hh: { gated: 5.3, per: 14.9, nonverbal: 35.3, social: 75.0 },
    hr: { gated: 22.4, per: 53.7, nonverbal: 47.7, social: 41.5 }
  },
  {
    name: "VeBrain-7B",
    link: "huggingface.co/OpenGVLab/VeBrain",
    category: "embodied",
    categoryLabel: "Embodied VLM",
    overall: { gated: 7.6, per: 19.8, nonverbal: 37.7, social: 60.3 },
    hh: { gated: 9.3, per: 27.5, nonverbal: 31.9, social: 69.4 },
    hr: { gated: 6.0, per: 12.0, nonverbal: 55.1, social: 52.4 }
  }
];

let currentSortColumn = "overall.gated";
let currentSortDirection = "desc";
let currentCategoryFilter = "all";
let currentSearchTerm = "";

// ==============================================================================
// 2. Sample Cases Data (Exact 9 tasks matching figure_sample_originals)
// ==============================================================================
const SAMPLE_CASES = [
  // 1. Human Perception (Stage 1 localization)
  {
    id: "perception",
    pillText: "Human Perception",
    pillTheme: "theme-perception",
    category: "perception",
    imageBoxed: "images/01_perception_boxed.jpg",
    imageUnboxed: "images/01_perception_unboxed.jpg",
    questionHtml: "<em>Locate every person in this image and report bbox coordinates in JSON format.</em>",
    choices: [
      { key: "Target Q", text: "Role: Primary Queried Person (Ground-truth box: [644, 749, 916, 1065])", isGold: true },
      { key: "Candidates", text: "Locate all interaction candidate persons with role-consistent matching.", isGold: true },
      { key: "Strict Gate", text: "IoU ≥ 0.5 required on all target persons to advance to Stage 2 semantic evaluation.", isGold: false }
    ],
    goldAnswer: "All Visible Target Persons (IoU ≥ 0.5)",
    visualRole: "Stage 1 Person Localization Grounding"
  },

  // 2. Social Signal Understanding: Gaze
  {
    id: "gaze",
    pillText: "Social Signal Understanding: Gaze",
    pillTheme: "theme-signal",
    category: "gaze",
    imageBoxed: "images/02_gaze_boxed.jpg",
    imageUnboxed: "images/02_gaze_unboxed.jpg",
    questionHtml: "Which statement best describes <u>the gaze of the target person</u>?",
    choices: [
      { key: "A", text: "The two people are not looking toward the camera / recording robot.", isGold: false },
      { key: "B", text: "The two people are looking toward the camera / recording robot.", isGold: true },
      { key: "C", text: "The two people are looking at something together.", isGold: false },
      { key: "D", text: "The two people are looking into something together.", isGold: false },
      { key: "E", text: "The signal is clearly visible, but none of the other options describes it.", isGold: false }
    ],
    goldAnswer: "B",
    visualRole: "Target Pair Gaze Direction Grounded"
  },

  // 3. Social Signal Understanding: Gesture
  {
    id: "gesture",
    pillText: "Social Signal Understanding: Gesture",
    pillTheme: "theme-signal",
    category: "gesture",
    imageBoxed: "images/03_gesture_boxed.jpg",
    imageUnboxed: "images/03_gesture_unboxed.jpg",
    questionHtml: "Which statement best describes <u>the posture of the target person</u>?",
    choices: [
      { key: "A", text: "The person is pointing.", isGold: false },
      { key: "B", text: "The person has their legs crossed.", isGold: true },
      { key: "C", text: "The signal is clearly visible, but none of the other options describes it.", isGold: false },
      { key: "D", text: "The person is slouching.", isGold: false },
      { key: "E", text: "The person has their arms crossed.", isGold: false }
    ],
    goldAnswer: "B",
    visualRole: "Target Person Body Posture Grounded"
  },

  // 4. Social Signal Understanding: Touch
  {
    id: "touch",
    pillText: "Social Signal Understanding: Touch",
    pillTheme: "theme-signal",
    category: "touch",
    imageBoxed: "images/04_touch_boxed.jpg",
    imageUnboxed: "images/04_touch_unboxed.jpg",
    questionHtml: "Which statement best describes <u>the physical contact involving the target person</u>?",
    choices: [
      { key: "A", text: "The person is making an impactful contact (hit).", isGold: true },
      { key: "B", text: "The person is hugging someone.", isGold: false },
      { key: "C", text: "The signal is clearly visible, but none of the other options describes it.", isGold: false },
      { key: "D", text: "The person is shaking hands with someone.", isGold: false },
      { key: "E", text: "The person is punching someone.", isGold: false }
    ],
    goldAnswer: "A",
    visualRole: "Physical Contact Dynamic Grounded"
  },

  // 5. Social Signal Understanding: Expression
  {
    id: "expression",
    pillText: "Social Signal Understanding: Expression",
    pillTheme: "theme-signal",
    category: "expression",
    imageBoxed: "images/05_expression_boxed.jpg",
    imageUnboxed: "images/05_expression_unboxed.jpg",
    questionHtml: "Which statement best describes <u>the facial expression of the target person</u>?",
    choices: [
      { key: "A", text: "The person has a neutral facial expression.", isGold: false },
      { key: "B", text: "The signal is clearly visible, but none of the other options describes it.", isGold: false },
      { key: "C", text: "The person looks disgusted.", isGold: false },
      { key: "D", text: "The person looks surprised.", isGold: false },
      { key: "E", text: "The person looks sad.", isGold: true }
    ],
    goldAnswer: "E",
    visualRole: "Facial Emotion & Cue Grounded"
  },

  // 6. Cross-level Composition
  {
    id: "composition",
    pillText: "Cross-level Composition",
    pillTheme: "theme-composition",
    category: "composition",
    imageBoxed: "images/06_composition_boxed.jpg",
    imageUnboxed: "images/06_composition_unboxed.jpg",
    questionHtml: "Which of the following statements correctly <u>describe the target person Q</u>?",
    choices: [
      { key: "A", text: "The person looks disgusted.", isGold: false },
      { key: "B", text: "The person is throwing something.", isGold: false },
      { key: "C", text: "The person is standing with arms akimbo (hands on hips).", isGold: true },
      { key: "D", text: "The person looks angry.", isGold: false }
    ],
    goldAnswer: "C",
    visualRole: "Cross-level Bodily Pose & Expression Grounded"
  },

  // 7. Social Reasoning: Attitude
  {
    id: "attitude",
    pillText: "Social Reasoning: Attitude",
    pillTheme: "theme-reasoning",
    category: "attitude",
    imageBoxed: "images/07_attitude_boxed.jpg",
    imageUnboxed: "images/07_attitude_unboxed.jpg",
    questionHtml: "Which statement best describes <u>the attitude of this interaction involving the target person</u>?",
    choices: [
      { key: "A", text: "This interaction has a negative attitude.", isGold: true },
      { key: "B", text: "There is no interaction to judge as positive or negative.", isGold: false },
      { key: "C", text: "The signal is clearly visible, but none of the other options describes it.", isGold: false },
      { key: "D", text: "This interaction has a positive attitude.", isGold: false }
    ],
    goldAnswer: "A",
    visualRole: "Interpersonal Attitude Toward Observer Grounded"
  },

  // 8. Social Reasoning: Intent
  {
    id: "intent",
    pillText: "Social Reasoning: Intent",
    pillTheme: "theme-reasoning",
    category: "intent",
    imageBoxed: "images/08_intent_boxed.jpg",
    imageUnboxed: "images/08_intent_unboxed.jpg",
    questionHtml: "Which statement best describes the target person's <u>current engagement status with the observer</u>?",
    choices: [
      { key: "A", text: "The signal is clearly visible, but none of the other options describes it.", isGold: false },
      { key: "B", text: "The person is currently interacting with the observer.", isGold: false },
      { key: "C", text: "The person has no intention to interact with the observer.", isGold: false },
      { key: "D", text: "The person shows interest in interacting but has not started.", isGold: true }
    ],
    goldAnswer: "D",
    visualRole: "Interaction Intent & Willingness Grounded"
  },

  // 9. Social Reasoning: Group Activity
  {
    id: "group",
    pillText: "Social Reasoning: Group Activity",
    pillTheme: "theme-reasoning",
    category: "group",
    imageBoxed: "images/09_group_activity_boxed.jpg",
    imageUnboxed: "images/09_group_activity_unboxed.jpg",
    questionHtml: "Which statement best describes <u>how the target pair are jointly engaged</u>?",
    choices: [
      { key: "A", text: "The signal is clearly visible, but none of the other options describes it.", isGold: false },
      { key: "B", text: "The two people are holding something together.", isGold: false },
      { key: "C", text: "The two people are going upstairs together.", isGold: false },
      { key: "D", text: "The two people are walking toward each other.", isGold: false },
      { key: "E", text: "The two people are having a conversation.", isGold: true }
    ],
    goldAnswer: "E",
    visualRole: "Joint Engagement & Collective Activity Grounded"
  }
];

let currentSlideIndex = 0;
let filteredSamples = [...SAMPLE_CASES];

// ==============================================================================
// 3. Leaderboard Functions
// ==============================================================================

function getValueByPath(obj, path) {
  const parts = path.split('.');
  let current = obj;
  for (const part of parts) {
    if (current == null) return undefined;
    current = current[part];
  }
  return current;
}

function calculateColumnTops(data) {
  const columns = [
    'overall.gated', 'overall.per', 'overall.nonverbal', 'overall.social',
    'hh.gated', 'hh.per', 'hh.nonverbal', 'hh.social',
    'hr.gated', 'hr.per', 'hr.nonverbal', 'hr.social'
  ];

  const tops = {};
  columns.forEach(col => {
    const values = data.map(item => getValueByPath(item, col)).filter(v => typeof v === 'number');
    const sortedUnique = Array.from(new Set(values)).sort((a, b) => b - a);
    tops[col] = {
      first: sortedUnique[0] !== undefined ? sortedUnique[0] : -1,
      second: sortedUnique[1] !== undefined ? sortedUnique[1] : -1
    };
  });
  return tops;
}

function renderLeaderboard() {
  const tbody = document.getElementById("leaderboard-tbody");
  if (!tbody) return;

  let filtered = LEADERBOARD_DATA.filter(item => {
    if (currentCategoryFilter === "all") return true;
    return item.category === currentCategoryFilter;
  });

  if (currentSearchTerm.trim() !== "") {
    const term = currentSearchTerm.toLowerCase();
    filtered = filtered.filter(item => item.name.toLowerCase().includes(term));
  }

  filtered.sort((a, b) => {
    const valA = getValueByPath(a, currentSortColumn);
    const valB = getValueByPath(b, currentSortColumn);
    if (valA === valB) return 0;
    return currentSortDirection === "asc" ? (valA > valB ? 1 : -1) : (valA < valB ? 1 : -1);
  });

  const tops = calculateColumnTops(filtered);
  tbody.innerHTML = "";

  if (filtered.length === 0) {
    tbody.innerHTML = `<tr><td colspan="15" style="padding: 2.5rem; color: #64748b;">No matching models found.</td></tr>`;
    return;
  }

  filtered.forEach((model, index) => {
    const rank = index + 1;
    let rankHtml = rank;
    if (rank === 1) rankHtml = `<span class="rank-badge rank-1">1</span>`;
    else if (rank === 2) rankHtml = `<span class="rank-badge rank-2">2</span>`;
    else if (rank === 3) rankHtml = `<span class="rank-badge rank-3">3</span>`;

    let catClass = "cat-general";
    if (model.category === "proprietary") catClass = "cat-prop";
    else if (model.category === "embodied") catClass = "cat-embodied";

    const formatScore = (path, isGated = false) => {
      const val = getValueByPath(model, path);
      if (val === undefined || val === null) return "-";

      let cls = "";
      if (val === tops[path].first) cls += " score-best";
      else if (val === tops[path].second) cls += " score-second";

      const gatedClass = isGated ? "col-gated" : "";
      return `<td class="${gatedClass} ${cls}">${val.toFixed(1)}</td>`;
    };

    const row = document.createElement("tr");
    row.innerHTML = `
      <td class="col-rank">${rankHtml}</td>
      <td class="col-model">
        <a href="#" data-ext="${model.link}" class="model-link" title="${model.category === "proprietary" ? "Open official technical blog for" : "Open Hugging Face page for"} ${model.name}">
          ${orgIconHtml(model)}
          ${model.name}
          <svg class="external-icon" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
            <polyline points="15 3 21 3 21 9"></polyline>
            <line x1="10" y1="14" x2="21" y2="3"></line>
          </svg>
        </a>
      </td>
      <td><span class="category-badge ${catClass}">${model.categoryLabel}</span></td>
      
      <!-- Overall -->
      ${formatScore('overall.gated', true)}
      ${formatScore('overall.per')}
      ${formatScore('overall.nonverbal')}
      ${formatScore('overall.social')}
      
      <!-- Human-Human -->
      ${formatScore('hh.gated', true)}
      ${formatScore('hh.per')}
      ${formatScore('hh.nonverbal')}
      ${formatScore('hh.social')}
      
      <!-- Human-Robot -->
      ${formatScore('hr.gated', true)}
      ${formatScore('hr.per')}
      ${formatScore('hr.nonverbal')}
      ${formatScore('hr.social')}
    `;
    tbody.appendChild(row);
    const modelLink = row.querySelector(".model-link");
    if (modelLink) {
      modelLink.addEventListener("click", (event) => {
        event.preventDefault();
        window.open(publicHttps(model.link), "_blank", "noopener,noreferrer");
      });
    }
  });

  updateSortHeaders();
}

function updateSortHeaders() {
  const headers = document.querySelectorAll(".leaderboard-table th.sortable");
  headers.forEach(th => {
    const col = th.getAttribute("data-sort");
    const icon = th.querySelector(".sort-icon");
    if (!icon) return;

    if (col === currentSortColumn) {
      icon.innerHTML = currentSortDirection === "asc" ? "▲" : "▼";
      icon.style.color = "var(--primary)";
    } else {
      icon.innerHTML = "↕";
      icon.style.color = "var(--slate-400)";
    }
  });
}

function setupLeaderboardEvents() {
  const headers = document.querySelectorAll(".leaderboard-table th.sortable");
  headers.forEach(th => {
    th.addEventListener("click", () => {
      const col = th.getAttribute("data-sort");
      if (currentSortColumn === col) {
        currentSortDirection = currentSortDirection === "asc" ? "desc" : "asc";
      } else {
        currentSortColumn = col;
        currentSortDirection = "desc";
      }
      renderLeaderboard();
    });
  });

  const filterBtns = document.querySelectorAll(".filter-btn");
  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      currentCategoryFilter = btn.getAttribute("data-filter");
      renderLeaderboard();
    });
  });

  const searchInput = document.getElementById("search-input");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      currentSearchTerm = e.target.value;
      renderLeaderboard();
    });
  }
}

// ==============================================================================
// 4. Sample Carousel Functions (Paper Figure 1 Accurate Card Layout with Real Images)
// ==============================================================================

function renderCarousel() {
  const track = document.getElementById("carousel-track");
  const dotsContainer = document.getElementById("carousel-dots");
  if (!track || !dotsContainer) return;

  track.innerHTML = "";
  dotsContainer.innerHTML = "";

  if (filteredSamples.length === 0) {
    track.innerHTML = `<div style="padding: 3rem; text-align: center; color: var(--slate-500);">No samples found in this category.</div>`;
    return;
  }

  if (currentSlideIndex >= filteredSamples.length) {
    currentSlideIndex = 0;
  }

  filteredSamples.forEach((sample, idx) => {
    const slide = document.createElement("div");
    slide.className = "carousel-slide";

    const choicesHtml = sample.choices.map(c => {
      if (c.isGold) {
        return `
          <div class="paper-choice gold-answer">
            <span class="choice-prefix">${c.key}.</span>
            <span class="choice-text">${c.text}</span>
            <span class="choice-check">✔</span>
          </div>
        `;
      } else {
        return `
          <div class="paper-choice">
            <span class="choice-prefix">${c.key}.</span>
            <span class="choice-text">${c.text}</span>
          </div>
        `;
      }
    }).join("");

    slide.innerHTML = `
      <div class="academic-card ${sample.pillTheme}">
        <!-- Pill Header centered at top -->
        <div class="card-pill-header">
          <span>${sample.pillText}</span>
        </div>

        <div class="card-body-grid">
          <!-- Left Side: Real Visual Image with Image Switcher (Boxed / Raw) -->
          <div class="card-visual-frame">
            <div class="visual-img-container">
              <img id="sample-img-${idx}" src="${sample.imageBoxed}" alt="${sample.pillText}" class="sample-boxed-img">
              <div class="img-mode-badge" id="badge-${idx}">Target Grounded (Stage 1)</div>
            </div>
            <div class="img-toggle-bar">
              <button class="btn-toggle-img active" onclick="switchSampleImg(${idx}, '${sample.imageBoxed}', 'Target Grounded (Stage 1)', this)">Boxed (Target Q)</button>
              <button class="btn-toggle-img" onclick="switchSampleImg(${idx}, '${sample.imageUnboxed}', 'Raw Input Frame', this)">Raw Frame</button>
            </div>
          </div>

          <!-- Right Side: Academic Question & Choices -->
          <div class="card-qa-content">
            <div class="paper-question-stem">
              ${sample.questionHtml}
            </div>
            <div class="paper-choices-list">
              ${choicesHtml}
            </div>
          </div>
        </div>

        ${sample.category === "perception" ? "" : `<div class="card-footer-note">
          <span><strong>Answer:</strong> (${sample.goldAnswer})</span>
        </div>`}
      </div>
    `;

    track.appendChild(slide);

    const dot = document.createElement("div");
    dot.className = `dot ${idx === currentSlideIndex ? 'active' : ''}`;
    dot.addEventListener("click", () => goToSlide(idx));
    dotsContainer.appendChild(dot);
  });

  updateSlidePosition();
  renderFormulas(track);
}

// Global image switch function for sample cards
window.switchSampleImg = function(idx, imgSrc, badgeText, btnElem) {
  const img = document.getElementById(`sample-img-${idx}`);
  const badge = document.getElementById(`badge-${idx}`);
  if (img) img.src = imgSrc;
  if (badge) badge.innerText = badgeText;
  
  if (btnElem && btnElem.parentElement) {
    const btns = btnElem.parentElement.querySelectorAll('.btn-toggle-img');
    btns.forEach(b => b.classList.remove('active'));
    btnElem.classList.add('active');
  }
};

function goToSlide(index) {
  currentSlideIndex = index;
  updateSlidePosition();
}

function updateSlidePosition() {
  const track = document.getElementById("carousel-track");
  if (!track) return;
  track.style.transform = `translateX(-${currentSlideIndex * 100}%)`;

  const dots = document.querySelectorAll("#carousel-dots .dot");
  dots.forEach((dot, idx) => {
    dot.classList.toggle("active", idx === currentSlideIndex);
  });
}

function setupCarouselEvents() {
  const prevBtn = document.getElementById("carousel-btn-prev");
  const nextBtn = document.getElementById("carousel-btn-next");

  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      if (filteredSamples.length === 0) return;
      currentSlideIndex = (currentSlideIndex - 1 + filteredSamples.length) % filteredSamples.length;
      updateSlidePosition();
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      if (filteredSamples.length === 0) return;
      currentSlideIndex = (currentSlideIndex + 1) % filteredSamples.length;
      updateSlidePosition();
    });
  }

  const filterBtns = document.querySelectorAll(".carousel-filter-btn");
  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const cat = btn.getAttribute("data-cat");

      if (cat === "all") {
        filteredSamples = [...SAMPLE_CASES];
      } else {
        filteredSamples = SAMPLE_CASES.filter(s => s.category === cat);
      }
      currentSlideIndex = 0;
      renderCarousel();
    });
  });
}

// ==============================================================================
// 5. Per-capability heatmaps
// ==============================================================================
const HEATMAP_METRICS = [
  { key: "composition", label: "Cross-level Composition", short: "Cross-level<br>Composition" },
  { key: "gaze", label: "Gaze", short: "Gaze" },
  { key: "expression", label: "Expression", short: "Expression" },
  { key: "gesture", label: "Gesture", short: "Gesture" },
  { key: "touch", label: "Touch", short: "Touch" },
  { key: "attitude", label: "Interpersonal Attitude", short: "Attitude" },
  { key: "intent", label: "Social Intent", short: "Intent" },
  { key: "group", label: "Group Activity", short: "Group Act." },
  { key: "mean", label: "Mean", short: "Mean" }
];

const HEATMAP_TABLES = [
  {
    title: "API Models",
    n: 5,
    rows: [
      { name: "Gemini 3.7 Flash", scores: [28.4, 58.6, 45.6, 58.5, 34.2, 61.8, 69.5, 30.7, 48.4] },
      { name: "Gemini 3.1 Pro", scores: [27.7, 59.4, 43.0, 57.6, 41.6, 59.4, 64.6, 30.4, 48.0] },
      { name: "Qwen-Max", scores: [17.0, 63.9, 43.4, 55.9, 34.7, 53.2, 61.0, 35.7, 45.6] },
      { name: "Gemini Robotics-ER-2", scores: [9.2, 65.8, 10.4, 55.5, 39.7, 33.5, 68.6, 25.1, 38.5] },
      { name: "GLM-5.3-Flash", scores: [20.6, 48.9, 37.5, 52.0, 32.4, 36.5, 41.7, 30.7, 37.5] },
      { name: "Average", isAverage: true, scores: [20.6, 59.3, 36.0, 55.9, 36.5, 48.9, 61.1, 30.5, 43.6] }
    ]
  },
  {
    title: "Open-Source General VLMs",
    n: 13,
    rows: [
      { name: "Qwen3.6-27B", scores: [32.6, 54.9, 44.0, 47.6, 44.3, 47.4, 54.7, 30.4, 44.5] },
      { name: "Cosmos3-Nano", scores: [6.4, 55.6, 39.5, 44.1, 52.1, 55.3, 55.2, 32.9, 42.6] },
      { name: "Qwen3.5-35B-A3B", scores: [7.8, 54.5, 45.6, 55.0, 40.6, 47.9, 56.1, 32.9, 42.6] },
      { name: "Qwen3-VL-32B", scores: [13.5, 47.0, 40.1, 52.0, 54.8, 48.8, 50.2, 31.8, 42.3] },
      { name: "Qwen3.6-35B-A3B", scores: [11.3, 56.0, 42.1, 57.6, 32.4, 43.2, 52.9, 36.4, 41.5] },
      { name: "Qwen3.5-27B", scores: [17.0, 47.7, 43.4, 55.0, 37.9, 45.6, 37.7, 29.3, 39.2] },
      { name: "Qwen3.8-27B", scores: [15.6, 42.1, 39.5, 57.6, 45.7, 40.9, 35.9, 33.2, 38.8] },
      { name: "Qwen3-VL-4B", scores: [5.7, 33.5, 39.8, 49.3, 46.1, 44.1, 45.7, 28.6, 36.6] },
      { name: "InternVL3.5-30B-A3B", scores: [7.8, 24.4, 33.3, 29.7, 41.6, 25.3, 32.3, 14.8, 26.2] },
      { name: "Qwen3.5-0.8B", scores: [2.1, 21.8, 26.2, 38.4, 26.9, 29.1, 12.1, 23.3, 22.5] },
      { name: "InternVL3.5-38B", scores: [5.0, 7.1, 23.0, 24.5, 24.7, 20.0, 30.5, 2.5, 17.1] },
      { name: "Qwen3.5-4B", scores: [1.4, 16.9, 40.5, 30.1, 16.0, 24.1, 0.4, 1.1, 16.3] },
      { name: "Qwen3.5-2B", scores: [0.7, 11.3, 29.8, 28.4, 18.7, 30.9, 3.1, 2.5, 15.7] },
      { name: "Average", isAverage: true, scores: [9.8, 36.4, 37.4, 43.8, 37.1, 38.7, 35.9, 23.0, 32.8] }
    ]
  },
  {
    title: "Open-Source Embodied Foundation Models",
    n: 8,
    rows: [
      { name: "Embodied-R1.5-8B", scores: [9.2, 31.2, 36.2, 47.6, 43.4, 42.4, 46.2, 19.4, 34.5] },
      { name: "HY-Embodied-VLM-1.0-30B-A3B", scores: [14.2, 21.1, 33.7, 47.6, 41.6, 38.2, 50.2, 26.9, 34.2] },
      { name: "HY-Embodied-0.5-4B-A2B", scores: [0.0, 29.3, 36.2, 45.9, 33.8, 36.2, 42.6, 25.8, 31.2] },
      { name: "HY-Embodied-0.5-X-4B-A2B", scores: [0.0, 34.2, 34.6, 40.2, 34.2, 31.8, 40.4, 27.6, 30.4] },
      { name: "RynnBrain1.1-2B", scores: [0.0, 29.7, 30.7, 38.0, 43.4, 31.2, 12.1, 25.4, 26.3] },
      { name: "RynnBrain-30B-A3B", scores: [5.0, 21.4, 19.7, 19.2, 20.1, 19.7, 35.4, 8.5, 18.6] },
      { name: "RoboBrain2.0-32B", scores: [3.5, 6.0, 14.2, 22.7, 23.7, 15.6, 23.8, 1.1, 13.8] },
      { name: "VeBrain-7B", scores: [1.4, 12.0, 12.3, 6.6, 8.7, 7.1, 4.5, 4.6, 7.1] },
      { name: "Average", isAverage: true, scores: [4.2, 23.1, 27.2, 33.5, 31.1, 27.8, 31.9, 17.4, 24.5] }
    ]
  }
];

function lerp(a, b, t) {
  return a + (b - a) * t;
}

function heatmapRgb(value) {
  const t = Math.max(0, Math.min(1, Math.pow(value / 72, 0.88)));
  const stops = [
    [0.00, [240, 253, 250]],
    [0.18, [204, 251, 241]],
    [0.36, [153, 246, 228]],
    [0.54, [56, 189, 248]],
    [0.72, [37, 99, 235]],
    [0.88, [29, 78, 216]],
    [1.00, [30, 58, 138]]
  ];
  let i = 0;
  while (i < stops.length - 1 && t > stops[i + 1][0]) i += 1;
  const [t0, c0] = stops[i];
  const [t1, c1] = stops[i + 1];
  const u = t1 === t0 ? 0 : (t - t0) / (t1 - t0);
  return [
    Math.round(lerp(c0[0], c1[0], u)),
    Math.round(lerp(c0[1], c1[1], u)),
    Math.round(lerp(c0[2], c1[2], u))
  ];
}

function heatmapTextColor(rgb) {
  const y = (0.299 * rgb[0] + 0.587 * rgb[1] + 0.114 * rgb[2]) / 255;
  return y > 0.62 ? "#0f172a" : "#ffffff";
}

function heatmapCell(value, extraClass) {
  const rgb = heatmapRgb(value);
  const cls = extraClass ? `heatmap-cell ${extraClass}` : "heatmap-cell";
  return `<td class="${cls}" style="background:rgb(${rgb.join(',')});color:${heatmapTextColor(rgb)}">${value.toFixed(1)}</td>`;
}

function renderCapabilityHeatmaps() {
  const root = document.getElementById("heatmap-root");
  if (!root) return;

  root.innerHTML = HEATMAP_TABLES.map((table) => {
    const head = HEATMAP_METRICS.map((metric, idx) => {
      const gap = (idx === 1 || idx === 5 || idx === 8) ? `<th class="heatmap-gap" aria-hidden="true"></th>` : "";
      const extra = [
        metric.key === "mean" ? "heatmap-mean-h" : "",
        metric.key === "composition" ? "heatmap-long-h" : ""
      ].filter(Boolean).join(" ");
      return `${gap}<th title="${metric.label}" class="${extra}">${metric.short}</th>`;
    }).join("");

    const body = table.rows.map((row) => {
      const icon = row.isAverage ? "" : orgIconHtml({ name: row.name });
      const cells = row.scores.map((value, idx) => {
        const gap = (idx === 1 || idx === 5 || idx === 8) ? `<td class="heatmap-gap" aria-hidden="true"></td>` : "";
        return gap + heatmapCell(value, idx === 8 ? "mean" : "");
      }).join("");
      return `<tr class="${row.isAverage ? "heatmap-row-avg" : ""}">
        <td class="heatmap-model"><span class="heatmap-model-inner">${icon}${row.name}</span></td>
        ${cells}
      </tr>`;
    }).join("");

    return `<article class="heatmap-card">
      <h4 class="heatmap-card-title">${table.title}</h4>
      <div class="heatmap-scroll">
        <table class="heatmap-table">
          <thead><tr><th class="heatmap-model-h">Model</th>${head}</tr></thead>
          <tbody>${body}</tbody>
        </table>
      </div>
    </article>`;
  }).join("");
}

// ==============================================================================
// 6. G1 hardware table + rank-concordance gallery
// ==============================================================================
const G1_GROUPS = [
  {
    title: "API Models",
    rows: [
      { name: "Gemini 3.7 Flash", acc: 70.9, iou: 93.6, signal: 89.4, reason: 64.3 },
      { name: "Gemini 3.1 Pro", acc: 58.2, iou: 94.5, signal: 67.4, reason: 56.9 },
      { name: "Gemini Robotics-ER-2", acc: 56.4, iou: 99.1, signal: 54.0, reason: 59.3 },
      { name: "GLM-5.3-Flash", acc: 0.0, iou: 0.0, signal: null, reason: null, apiFail: true },
      { name: "Qwen-Max", acc: 0.0, iou: 0.0, signal: null, reason: null, apiFail: true }
    ]
  },
  {
    title: "Open-Source General VLMs",
    rows: [
      { name: "Qwen3.8-27B", acc: 59.1, iou: 94.5, signal: 66.7, reason: 58.9 },
      { name: "Qwen3.5-27B", acc: 54.5, iou: 95.5, signal: 62.5, reason: 52.6 },
      { name: "Qwen3.6-27B", acc: 54.5, iou: 96.4, signal: 58.3, reason: 55.2 },
      { name: "Cosmos3-Nano", acc: 51.8, iou: 92.7, signal: 64.6, reason: 48.1 },
      { name: "Qwen3.5-35B-A3B", acc: 50.9, iou: 94.5, signal: 59.2, reason: 49.1 },
      { name: "Qwen3-VL-32B", acc: 43.6, iou: 94.5, signal: 54.2, reason: 39.3 },
      { name: "Qwen3.6-35B-A3B", acc: 41.8, iou: 93.6, signal: 52.1, reason: 38.2 },
      { name: "Qwen3.5-0.8B", acc: 40.9, iou: 94.5, signal: 35.4, reason: 50.0 },
      { name: "Qwen3.5-4B", acc: 40.9, iou: 94.5, signal: 43.8, reason: 42.9 },
      { name: "Qwen3-VL-4B", acc: 40.0, iou: 93.6, signal: 48.9, reason: 37.5 },
      { name: "Qwen3.5-2B", acc: 35.5, iou: 91.8, signal: 35.4, reason: 41.5 },
      { name: "InternVL3.5-30B-A3B", acc: 14.5, iou: 36.4, signal: 58.8, reason: 26.1 },
      { name: "InternVL3.5-38B", acc: 12.7, iou: 27.3, signal: 42.9, reason: 50.0 }
    ]
  },
  {
    title: "Open-Source Embodied VLMs",
    rows: [
      { name: "HY-Embodied-0.5-X-4B-A2B", acc: 38.2, iou: 88.2, signal: 54.3, reason: 33.3 },
      { name: "RoboBrain2.0-32B", acc: 38.2, iou: 74.5, signal: 57.9, reason: 45.5 },
      { name: "RynnBrain1.1-2B", acc: 36.4, iou: 62.7, signal: 61.1, reason: 54.5 },
      { name: "HY-Embodied-0.5-4B-A2B", acc: 35.5, iou: 89.1, signal: 52.2, reason: 28.8 },
      { name: "HY-Embodied-VLM-1.0-30B-A3B", acc: 35.5, iou: 89.1, signal: 50.0, reason: 30.8 },
      { name: "RynnBrain-30B-A3B", acc: 30.0, iou: 55.5, signal: 59.4, reason: 48.3 }
    ]
  }
];

const RANK_CAT = {
  proprietary: { fill: "#2563eb", label: "API" },
  general: { fill: "#0d9488", label: "General VLM" },
  embodied: { fill: "#8b5cf6", label: "Embodied VLM" }
};

function escXml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function mean(values) {
  return values.reduce((sum, value) => sum + value, 0) / values.length;
}

function stdev(values) {
  const m = mean(values);
  return Math.sqrt(values.reduce((sum, value) => sum + (value - m) ** 2, 0) / (values.length - 1));
}

function rankHighIsBest(values) {
  const indexed = values.map((value, i) => ({ value, i }));
  indexed.sort((a, b) => b.value - a.value || a.i - b.i);
  const ranks = new Array(values.length);
  for (let i = 0; i < indexed.length; ) {
    let j = i;
    while (j < indexed.length && indexed[j].value === indexed[i].value) j += 1;
    const avg = (i + 1 + j) / 2;
    for (let k = i; k < j; k += 1) ranks[indexed[k].i] = avg;
    i = j;
  }
  return ranks;
}

function uniqueOrderRanks(values, names) {
  const indexed = values.map((value, i) => ({ value, name: names[i], i }));
  indexed.sort((a, b) => b.value - a.value || a.name.localeCompare(b.name));
  const ranks = new Array(values.length);
  indexed.forEach((item, pos) => {
    ranks[item.i] = pos + 1;
  });
  return ranks;
}

function pearson(xs, ys) {
  const n = xs.length;
  const mx = mean(xs);
  const my = mean(ys);
  let num = 0;
  let dx = 0;
  let dy = 0;
  for (let i = 0; i < n; i += 1) {
    const a = xs[i] - mx;
    const b = ys[i] - my;
    num += a * b;
    dx += a * a;
    dy += b * b;
  }
  return num / Math.sqrt(dx * dy);
}

function kendallTau(xs, ys) {
  let conc = 0;
  let disc = 0;
  let extraX = 0;
  let extraY = 0;
  const n = xs.length;
  for (let i = 0; i < n; i += 1) {
    for (let j = i + 1; j < n; j += 1) {
      const dx = Math.sign(xs[i] - xs[j]);
      const dy = Math.sign(ys[i] - ys[j]);
      if (dx === 0 && dy === 0) continue;
      if (dx === 0) extraX += 1;
      else if (dy === 0) extraY += 1;
      else if (dx === dy) conc += 1;
      else disc += 1;
    }
  }
  const denom = Math.sqrt((conc + disc + extraX) * (conc + disc + extraY));
  return denom === 0 ? 0 : (conc - disc) / denom;
}

function olsFit(xs, ys) {
  const n = xs.length;
  const mx = mean(xs);
  const my = mean(ys);
  let sxx = 0;
  let sxy = 0;
  let sse = 0;
  for (let i = 0; i < n; i += 1) {
    sxx += (xs[i] - mx) ** 2;
    sxy += (xs[i] - mx) * (ys[i] - my);
  }
  const slope = sxy / sxx;
  const intercept = my - slope * mx;
  for (let i = 0; i < n; i += 1) {
    const pred = intercept + slope * xs[i];
    sse += (ys[i] - pred) ** 2;
  }
  const se = Math.sqrt(sse / (n - 2));
  return { intercept, slope, mx, sxx, se, n };
}

function shortModelName(name) {
  return name
    .replace("HY-Embodied-VLM-1.0-30B-A3B", "HY-VLM-30B")
    .replace("HY-Embodied-0.5-X-4B-A2B", "HY-0.5-X")
    .replace("HY-Embodied-0.5-4B-A2B", "HY-0.5")
    .replace("Gemini Robotics-ER-2", "Gemini ER-2")
    .replace("Gemini 3.7 Flash", "Gemini 3.7")
    .replace("Gemini 3.1 Pro", "Gemini 3.1")
    .replace("InternVL3.5-30B-A3B", "InternVL-30B")
    .replace("InternVL3.5-38B", "InternVL-38B")
    .replace("RoboBrain2.0-32B", "RoboBrain-32B")
    .replace("RynnBrain1.1-2B", "Rynn-2B")
    .replace("RynnBrain-30B-A3B", "Rynn-30B")
    .replace("Qwen3.5-35B-A3B", "Qwen3.5-35B")
    .replace("Qwen3.6-35B-A3B", "Qwen3.6-35B")
    .replace("Cosmos3-Nano", "Cosmos-Nano");
}

function g1FlatRows() {
  return G1_GROUPS.flatMap((group) => group.rows);
}

function g1MarkClass(column, value) {
  const nums = g1FlatRows().map((row) => row[column]).filter((v) => typeof v === "number");
  const uniq = [...new Set(nums)].sort((a, b) => b - a);
  if (value === uniq[0]) return "score-best";
  if (value === uniq[1]) return "score-second";
  return "";
}

function g1ScoreCell(column, value, extraClass) {
  if (value == null) return `<td class="g1-na">—</td>`;
  const cls = [extraClass, g1MarkClass(column, value)].filter(Boolean).join(" ");
  return `<td class="${cls}">${value.toFixed(1)}</td>`;
}

function renderG1Table() {
  const root = document.getElementById("g1-table-root");
  if (!root) return;
  const body = G1_GROUPS.map((group) => {
    const rows = group.rows.map((row) => {
      const fail = row.apiFail ? ` class="g1-row-fail"` : "";
      return `<tr${fail}>
        <td class="heatmap-model"><span class="heatmap-model-inner">${orgIconHtml(row)}${row.name}</span></td>
        ${g1ScoreCell("acc", row.acc, "col-gated")}
        ${g1ScoreCell("iou", row.iou)}
        ${g1ScoreCell("signal", row.signal)}
        ${g1ScoreCell("reason", row.reason)}
      </tr>`;
    }).join("");
    return `<tr class="g1-group-row"><td colspan="5">${group.title}</td></tr>${rows}`;
  }).join("");
  root.innerHTML = `<div class="table-wrapper g1-table-wrap">
    <table class="leaderboard-table g1-table">
      <thead>
        <tr>
          <th class="col-model">Model</th>
          <th class="col-gated-header">Acc.</th>
          <th>IoU ≥ 0.5</th>
          <th>Social Signal Understanding</th>
          <th>Social Reasoning</th>
        </tr>
      </thead>
      <tbody>${body}</tbody>
    </table>
  </div>
  <p class="table-notes g1-table-note">Bold / underline: best / second-best. Acc. is the primary cascade metric. Dashes mark Stage-2 scores that are undefined when localization never passes.</p>`;
}

function pairedRankRows() {
  return g1FlatRows()
    .filter((row) => !row.apiFail)
    .map((row) => {
      const bench = LEADERBOARD_DATA.find((model) => model.name === row.name);
      if (!bench) return null;
      return {
        name: row.name,
        short: shortModelName(row.name),
        category: bench.category,
        bench: bench.overall.gated,
        hr: bench.hr.gated,
        g1: row.acc
      };
    })
    .filter(Boolean);
}

function rankBundle() {
  const rows = pairedRankRows();
  const names = rows.map((row) => row.name);
  const bench = rows.map((row) => row.bench);
  const hr = rows.map((row) => row.hr);
  const g1 = rows.map((row) => row.g1);
  const benchRank = uniqueOrderRanks(bench, names);
  const hrRank = uniqueOrderRanks(hr, names);
  const g1Rank = uniqueOrderRanks(g1, names);
  const annotated = rows.map((row, i) => ({
    ...row,
    benchRank: benchRank[i],
    hrRank: hrRank[i],
    g1Rank: g1Rank[i],
    delta: benchRank[i] - g1Rank[i]
  }));
  const benchAvg = rankHighIsBest(bench);
  const g1Avg = rankHighIsBest(g1);
  const absDelta = rows.map((_, i) => Math.abs(benchAvg[i] - g1Avg[i]));
  annotated.sort((a, b) => a.benchRank - b.benchRank);
  const within2 = absDelta.filter((value) => value <= 2).length;
  return {
    rows: annotated,
    n: annotated.length,
    spearman: pearson(benchAvg, g1Avg),
    spearmanHr: pearson(rankHighIsBest(hr), rankHighIsBest(g1)),
    kendall: kendallTau(bench, g1),
    pearson: pearson(bench, g1),
    within2,
    meanAbs: mean(absDelta)
  };
}

function niceTicks(min, max, count) {
  const span = max - min || 1;
  const raw = span / (count - 1);
  const mag = 10 ** Math.floor(Math.log10(raw));
  const norm = raw / mag;
  const step = (norm >= 7.5 ? 10 : norm >= 3 ? 5 : norm >= 1.5 ? 2 : 1) * mag;
  const start = Math.floor(min / step) * step;
  const ticks = [];
  for (let v = start; v <= max + step * 0.01; v += step) ticks.push(Number(v.toFixed(8)));
  return ticks;
}

function svgLegend() {
  const items = [
    ["proprietary", 0],
    ["general", 82],
    ["embodied", 198]
  ];
  return items.map(([key, x]) => {
    const cat = RANK_CAT[key];
    return `<g transform="translate(${x},0)">
      <circle cx="5" cy="8" r="4.5" fill="${cat.fill}"/>
      <text x="14" y="12" class="rank-svg-legend">${cat.label}</text>
    </g>`;
  }).join("");
}

function signedDelta(value) {
  if (value > 0) return `+${value}`;
  return String(value);
}

function hitDot(cx, cy, fill, radius, name, meta) {
  return `<g class="rank-hit" data-name="${escXml(name)}" data-meta="${escXml(meta)}" transform="translate(${cx},${cy})">
    <circle class="rank-hit-pad" r="14" fill="transparent"/>
    <circle class="rank-hit-dot" r="${radius}" fill="${fill}" stroke="#fff" stroke-width="1.5"/>
  </g>`;
}

function chartRankRank(data) {
  const n = data.n;
  const W = 760;
  const H = 430;
  const L = 52;
  const R = 20;
  const T = 36;
  const B = 48;
  const xOf = (r) => L + ((r - 1) / (n - 1)) * (W - L - R);
  const yOf = (r) => T + ((r - 1) / (n - 1)) * (H - T - B);
  const ticks = [1, 5, 10, 15, 22].filter((v) => v <= n);
  const grid = ticks.map((v) => `
    <line x1="${xOf(v)}" x2="${xOf(v)}" y1="${T}" y2="${H - B}" class="rank-svg-grid"/>
    <line x1="${L}" x2="${W - R}" y1="${yOf(v)}" y2="${yOf(v)}" class="rank-svg-grid"/>
  `).join("");
  const dots = data.rows.map((row) => hitDot(
    xOf(row.benchRank),
    yOf(row.g1Rank),
    RANK_CAT[row.category].fill,
    6,
    row.name,
    `SIGN-Bench rank ${row.benchRank}  ·  G1 rank ${row.g1Rank}  ·  Δ ${signedDelta(row.delta)}`
  )).join("");
  return `<svg class="rank-svg" viewBox="0 0 ${W} ${H}" role="img" aria-label="Rank-rank scatter of SIGN-Bench versus G1">
    ${grid}
    <line x1="${xOf(1)}" y1="${yOf(1)}" x2="${xOf(n)}" y2="${yOf(n)}" class="rank-svg-identity"/>
    ${dots}
    ${ticks.map((v) => `<text x="${xOf(v)}" y="${H - 18}" class="rank-svg-tick" text-anchor="middle">${v}</text>`).join("")}
    ${ticks.map((v) => `<text x="${L - 8}" y="${yOf(v) + 4}" class="rank-svg-tick" text-anchor="end">${v}</text>`).join("")}
    <text x="${(L + W - R) / 2}" y="${H - 4}" class="rank-svg-axis" text-anchor="middle">SIGN-Bench rank (1 = best)</text>
    <text x="14" y="${(T + H - B) / 2}" class="rank-svg-axis" text-anchor="middle" transform="rotate(-90 14 ${(T + H - B) / 2})">G1 rank (1 = best)</text>
    <g transform="translate(${L},10)">${svgLegend()}</g>
    <text x="${W - R}" y="22" class="rank-svg-stat" text-anchor="end">Spearman ρₛ = ${data.spearman.toFixed(3)}  ·  Kendall τ = ${data.kendall.toFixed(3)}</text>
  </svg>`;
}

function chartSlope(data) {
  const ordered = [...data.rows].sort((a, b) => a.benchRank - b.benchRank);
  const W = 760;
  const H = 540;
  const L = 148;
  const R = 148;
  const T = 40;
  const B = 28;
  const yOf = (rank) => T + ((rank - 1) / (data.n - 1)) * (H - T - B);
  const lines = ordered.map((row) => {
    const y1 = yOf(row.benchRank);
    const y2 = yOf(row.g1Rank);
    const delta = Math.abs(row.delta);
    const color = RANK_CAT[row.category].fill;
    const op = Math.max(0.28, 0.95 - delta / 18);
    const meta = `SIGN-Bench rank ${row.benchRank}  ·  G1 rank ${row.g1Rank}  ·  Δ ${signedDelta(row.delta)}`;
    return `<g>
      <line x1="${L}" y1="${y1}" x2="${W - R}" y2="${y2}" stroke="${color}" stroke-width="${delta < 3 ? 2.4 : 1.3}" stroke-opacity="${op}"/>
      <g class="rank-hit" data-name="${escXml(row.name)}" data-meta="${escXml(meta)}">
        <line x1="${L}" y1="${y1}" x2="${W - R}" y2="${y2}" stroke="transparent" stroke-width="12"/>
      </g>
      ${hitDot(L, y1, color, 4.2, row.name, meta)}
      ${hitDot(W - R, y2, color, 4.2, row.name, meta)}
      <text x="${L - 12}" y="${y1 + 4}" class="rank-svg-side" text-anchor="end">${escXml(row.short)}</text>
      <text x="${W - R + 12}" y="${y2 + 4}" class="rank-svg-side">${escXml(row.short)}</text>
    </g>`;
  }).join("");
  return `<svg class="rank-svg" viewBox="0 0 ${W} ${H}" role="img" aria-label="Slopegraph of ranks from SIGN-Bench to G1">
    <text x="${L}" y="18" class="rank-svg-axis" text-anchor="middle">SIGN-Bench rank</text>
    <text x="${W - R}" y="18" class="rank-svg-axis" text-anchor="middle">G1 rank</text>
    ${lines}
    <g transform="translate(${(W / 2) - 150},${H - 12})">${svgLegend()}</g>
  </svg>`;
}

function chartDualLine(data) {
  const n = data.n;
  const W = 760;
  const H = 460;
  const L = 46;
  const R = 24;
  const T = 42;
  const B = 92;
  const xOf = (i) => L + (i / (n - 1)) * (W - L - R);
  const yOf = (r) => T + ((r - 1) / (n - 1)) * (H - T - B);

  const yTicks = [1, 5, 10, 15, 20, 22].filter((v) => v <= n);
  const grid = yTicks.map((r) => `
    <line x1="${L}" x2="${W - R}" y1="${yOf(r)}" y2="${yOf(r)}" class="rank-svg-grid"/>
  `).join("");

  const bandPoints = [
    `M ${xOf(0)} ${yOf(data.rows[0].benchRank)}`,
    ...data.rows.map((row, i) => `L ${xOf(i)} ${yOf(row.benchRank)}`),
    ...data.rows.slice().reverse().map((row, i) => `L ${xOf(n - 1 - i)} ${yOf(row.g1Rank)}`),
    "Z"
  ].join(" ");

  const benchPath = data.rows.map((row, i) => `${i === 0 ? "M" : "L"} ${xOf(i)} ${yOf(row.benchRank)}`).join(" ");
  const g1Path = data.rows.map((row, i) => `${i === 0 ? "M" : "L"} ${xOf(i)} ${yOf(row.g1Rank)}`).join(" ");

  const benchDots = data.rows.map((row, i) => hitDot(
    xOf(i),
    yOf(row.benchRank),
    "#2563eb",
    3.8,
    row.name,
    `SIGN-Bench rank ${row.benchRank}  ·  G1 rank ${row.g1Rank}  ·  Δ ${signedDelta(row.delta)}`
  )).join("");

  const g1Dots = data.rows.map((row, i) => hitDot(
    xOf(i),
    yOf(row.g1Rank),
    "#ea580c",
    4.4,
    row.name,
    `SIGN-Bench rank ${row.benchRank}  ·  G1 rank ${row.g1Rank}  ·  Δ ${signedDelta(row.delta)}`
  )).join("");

  const xLabels = data.rows.map((row, i) => {
    const cx = xOf(i);
    const cy = H - B + 14;
    return `
      <line x1="${cx}" x2="${cx}" y1="${H - B}" y2="${H - B + 4}" stroke="#cbd5e1" stroke-width="1"/>
      <text x="${cx}" y="${cy}" class="rank-svg-xname" transform="rotate(45 ${cx} ${cy})">${escXml(row.short)}</text>
    `;
  }).join("");

  const yLabels = yTicks.map((r) => `
    <text x="${L - 8}" y="${yOf(r) + 4}" class="rank-svg-tick" text-anchor="end">${r}</text>
  `).join("");

  return `<svg class="rank-svg" viewBox="0 0 ${W} ${H}" role="img" aria-label="Dual-line ranking trajectory from benchmark to robot">
    ${grid}
    <path d="${bandPoints}" fill="rgba(37,99,235,0.08)"/>
    <path d="${benchPath}" stroke="#2563eb" stroke-width="2.4" fill="none" stroke-linejoin="round"/>
    <path d="${g1Path}" stroke="#ea580c" stroke-width="2.2" fill="none" stroke-linejoin="round"/>
    ${data.rows.map((row, i) => {
      const x = xOf(i);
      return `<g class="rank-hit" data-name="${escXml(row.name)}" data-meta="${escXml(`SIGN-Bench rank ${row.benchRank}  ·  G1 rank ${row.g1Rank}  ·  Δ ${signedDelta(row.delta)}`)}">
        <rect x="${x - 11}" y="${T}" width="22" height="${H - T - B}" fill="transparent"/>
      </g>`;
    }).join("")}
    ${benchDots}
    ${g1Dots}
    ${yLabels}
    ${xLabels}
    <text x="14" y="${(T + H - B) / 2}" class="rank-svg-axis" text-anchor="middle" transform="rotate(-90 14 ${(T + H - B) / 2})">Rank (1 = best)</text>
    <g transform="translate(${L},12)">
      <line x1="0" y1="6" x2="16" y2="6" stroke="#2563eb" stroke-width="2.4"/>
      <circle cx="8" cy="6" r="3" fill="#2563eb"/>
      <text x="22" y="10" class="rank-svg-legend">SIGN-Bench Baseline</text>
      <line x1="160" y1="6" x2="176" y2="6" stroke="#ea580c" stroke-width="2.2"/>
      <circle cx="168" cy="6" r="3.2" fill="#ea580c"/>
      <text x="182" y="10" class="rank-svg-legend">G1 Robot Rank</text>
      <rect x="296" y="2" width="14" height="8" fill="rgba(37,99,235,0.18)" rx="2"/>
      <text x="316" y="10" class="rank-svg-legend">Displacement |Δ|</text>
    </g>
    <text x="${W - R}" y="22" class="rank-svg-stat" text-anchor="end">Spearman ρₛ = ${data.spearman.toFixed(3)}</text>
  </svg>`;
}

function chartDumbbell(data) {
  const n = data.n;
  const W = 760;
  const H = 550;
  const L = 126;
  const R = 60;
  const T = 36;
  const B = 32;
  const yOf = (i) => T + (i / (n - 1)) * (H - T - B);
  const xOf = (r) => L + ((r - 1) / (n - 1)) * (W - L - R);
  const xTicks = [1, 5, 10, 15, 20, 22].filter((v) => v <= n);

  const grid = xTicks.map((r) => `
    <line x1="${xOf(r)}" x2="${xOf(r)}" y1="${T}" y2="${H - B}" class="rank-svg-grid"/>
  `).join("");

  const rows = data.rows.map((row, i) => {
    const y = yOf(i);
    const x1 = xOf(row.benchRank);
    const x2 = xOf(row.g1Rank);
    const near = Math.abs(row.delta) <= 2;
    const barColor = near ? "#93c5fd" : "#fdba74";
    const bar = x1 !== x2
      ? `<line x1="${x1}" x2="${x2}" y1="${y}" y2="${y}" stroke="${barColor}" stroke-width="3" stroke-linecap="round"/>`
      : "";
    const sign = row.delta > 0 ? "+" : "";
    const deltaStr = row.delta === 0 ? "0" : `${sign}${row.delta}`;
    const deltaCls = near ? "near" : "shift";

    return `
      <line x1="${L}" x2="${W - R}" y1="${y}" y2="${y}" stroke="#f1f5f9" stroke-width="1"/>
      <text x="${L - 10}" y="${y + 3.5}" class="rank-svg-side" text-anchor="end">${escXml(row.short)}</text>
      ${bar}
      ${hitDot(x1, y, "#2563eb", 4.6, row.name, `SIGN-Bench rank ${row.benchRank}  ·  G1 rank ${row.g1Rank}  ·  Δ ${signedDelta(row.delta)}`)}
      ${hitDot(x2, y, "#ea580c", 4.6, row.name, `SIGN-Bench rank ${row.benchRank}  ·  G1 rank ${row.g1Rank}  ·  Δ ${signedDelta(row.delta)}`)}
      <text x="${W - R + 14}" y="${y + 3.5}" class="rank-svg-delta ${deltaCls}">${deltaStr}</text>
    `;
  }).join("");

  const ticks = xTicks.map((r) => `
    <text x="${xOf(r)}" y="${H - 14}" class="rank-svg-tick" text-anchor="middle">${r}</text>
  `).join("");

  return `<svg class="rank-svg" viewBox="0 0 ${W} ${H}" role="img" aria-label="Model-by-model rank alignment dumbbell plot">
    ${grid}
    ${rows}
    ${ticks}
    <text x="${(L + W - R) / 2}" y="${H - 2}" class="rank-svg-axis" text-anchor="middle">Rank position (1 = best)</text>
    <g transform="translate(${L},12)">
      <circle cx="5" cy="5" r="4.2" fill="#2563eb"/>
      <text x="14" y="9" class="rank-svg-legend">SIGN-Bench</text>
      <circle cx="95" cy="5" r="4.2" fill="#ea580c"/>
      <text x="104" y="9" class="rank-svg-legend">G1 Robot</text>
      <rect x="180" y="3" width="14" height="4" rx="2" fill="#93c5fd"/>
      <text x="200" y="9" class="rank-svg-legend">|Δ| ≤ 2 (${data.within2} of ${data.n} models)</text>
    </g>
    <text x="${W - R + 14}" y="18" class="rank-svg-side" font-weight="700">Δrank</text>
  </svg>`;
}

function chartDeviation(data) {
  const n = data.n;
  const W = 760;
  const H = 460;
  const L = 46;
  const R = 24;
  const T = 42;
  const B = 92;
  const xOf = (i) => L + (i / (n - 1)) * (W - L - R);
  const minV = -8;
  const maxV = 8;
  const yOf = (v) => T + ((maxV - v) / (maxV - minV)) * (H - T - B);
  const yZero = yOf(0);

  const yTicks = [-6, -4, -2, 0, 2, 4, 6];
  const grid = yTicks.map((v) => `
    <line x1="${L}" x2="${W - R}" y1="${yOf(v)}" y2="${yOf(v)}" class="${v === 0 ? 'rank-svg-identity' : 'rank-svg-grid'}"/>
    <text x="${L - 8}" y="${yOf(v) + 4}" class="rank-svg-tick" text-anchor="end">${v > 0 ? "+" + v : v}</text>
  `).join("");

  const corridorH = yOf(-2) - yOf(2);
  const corridor = `
    <rect x="${L}" y="${yOf(2)}" width="${W - L - R}" height="${corridorH}" fill="rgba(37,99,235,0.06)" rx="4"/>
    <line x1="${L}" x2="${W - R}" y1="${yOf(2)}" y2="${yOf(2)}" stroke="#bfdbfe" stroke-width="1" stroke-dasharray="3 3"/>
    <line x1="${L}" x2="${W - R}" y1="${yOf(-2)}" y2="${yOf(-2)}" stroke="#bfdbfe" stroke-width="1" stroke-dasharray="3 3"/>
  `;

  const bars = data.rows.map((row, i) => {
    const cx = xOf(i);
    const cy = yOf(row.delta);
    const near = Math.abs(row.delta) <= 2;
    const color = near ? "#2563eb" : "#ea580c";
    return `
      <line x1="${cx}" x2="${cx}" y1="${yZero}" y2="${cy}" stroke="${color}" stroke-width="2.6" stroke-linecap="round"/>
      ${hitDot(cx, cy, color, 4.4, row.name, `SIGN-Bench rank ${row.benchRank}  ·  G1 rank ${row.g1Rank}  ·  Δ ${signedDelta(row.delta)}`)}
    `;
  }).join("");

  const xLabels = data.rows.map((row, i) => {
    const cx = xOf(i);
    const cy = H - B + 14;
    return `
      <line x1="${cx}" x2="${cx}" y1="${H - B}" y2="${H - B + 4}" stroke="#cbd5e1" stroke-width="1"/>
      <text x="${cx}" y="${cy}" class="rank-svg-xname" transform="rotate(45 ${cx} ${cy})">${escXml(row.short)}</text>
    `;
  }).join("");

  return `<svg class="rank-svg" viewBox="0 0 ${W} ${H}" role="img" aria-label="Model-by-model rank deviation from baseline">
    ${grid}
    ${corridor}
    ${bars}
    ${xLabels}
    <text x="14" y="${(T + H - B) / 2}" class="rank-svg-axis" text-anchor="middle" transform="rotate(-90 14 ${(T + H - B) / 2})">ΔRank (Bench − G1)</text>
    <g transform="translate(${L},12)">
      <circle cx="5" cy="5" r="4" fill="#2563eb"/>
      <text x="14" y="9" class="rank-svg-legend">|Δ| ≤ 2 (${data.within2} models)</text>
      <circle cx="170" cy="5" r="4" fill="#ea580c"/>
      <text x="179" y="9" class="rank-svg-legend">|Δ| &gt; 2 (${data.n - data.within2} models)</text>
    </g>
    <text x="${W - R}" y="20" class="rank-svg-stat" text-anchor="end">Mean |Δ| = ${data.meanAbs.toFixed(2)} ranks</text>
  </svg>`;
}

function formatRho(value) {
  return value.toFixed(3);
}

function renderRankGallery() {
  const track = document.getElementById("rank-gallery-track");
  const lead = document.getElementById("rank-gallery-lead");
  const hero = document.getElementById("hero-rho");
  if (!track) return;
  const data = rankBundle();
  if (hero) hero.textContent = `ρ = ${formatRho(data.spearman)}`;
  if (lead) {
    lead.innerHTML = `Ranking correlation between SIGN-Bench and G1 for $n=${data.n}$ models. Spearman $\\rho_s=${formatRho(data.spearman)}$; Kendall $\\tau=${formatRho(data.kendall)}$. Hover any point to identify the model.`;
  }
  const slide = {
    title: "Rank–rank scatter",
    copy: "Each point is one model's rank on SIGN-Bench (x) versus G1 (y). Both axes are ranks (1 = best). The dashed line is perfect agreement; clustering on the diagonal is the ranking correlation.",
    svg: chartRankRank(data)
  };
  track.innerHTML = `<article class="rank-slide" data-idx="0">
    <header class="rank-slide-head">
      <h4>${slide.title}</h4>
      <p>${slide.copy}</p>
    </header>
    <div class="rank-slide-chart">${slide.svg}</div>
  </article>`;
}

function setupRankGallery() {
  const viewport = document.getElementById("rank-gallery-viewport");
  const track = document.getElementById("rank-gallery-track");
  if (!viewport || !track) return;
  const sizeSlide = () => {
    const slide = track.querySelector(".rank-slide");
    if (!slide) return;
    const width = viewport.clientWidth;
    slide.style.flexBasis = `${width}px`;
    slide.style.width = `${width}px`;
    slide.style.minWidth = `${width}px`;
    slide.style.maxWidth = `${width}px`;
  };
  sizeSlide();
  window.addEventListener("resize", sizeSlide);
}

function setupRankTooltips() {
  const host = document.querySelector(".rank-gallery-block");
  if (!host) return;
  let tip = document.getElementById("rank-tooltip");
  if (!tip) {
    tip = document.createElement("div");
    tip.id = "rank-tooltip";
    tip.className = "rank-tooltip";
    tip.hidden = true;
    document.body.appendChild(tip);
  }
  let active = null;
  const place = (event) => {
    const pad = 16;
    tip.style.left = "0px";
    tip.style.top = "0px";
    const w = tip.offsetWidth;
    const h = tip.offsetHeight;
    let x = event.clientX + pad;
    let y = event.clientY + pad;
    if (x + w > window.innerWidth - 10) x = event.clientX - w - pad;
    if (y + h > window.innerHeight - 10) y = event.clientY - h - pad;
    tip.style.left = `${Math.max(8, x)}px`;
    tip.style.top = `${Math.max(8, y)}px`;
  };
  const show = (el, event) => {
    if (active && active !== el) active.classList.remove("is-active");
    active = el;
    el.classList.add("is-active");
    const name = el.getAttribute("data-name") || "";
    const meta = el.getAttribute("data-meta") || "";
    tip.innerHTML = `<div class="rank-tooltip-name">${escXml(name)}</div><div class="rank-tooltip-meta">${escXml(meta)}</div>`;
    tip.hidden = false;
    place(event);
  };
  const hide = () => {
    if (active) active.classList.remove("is-active");
    active = null;
    tip.hidden = true;
  };
  host.addEventListener("pointerover", (event) => {
    const el = event.target.closest(".rank-hit");
    if (!el || !host.contains(el)) return;
    show(el, event);
  });
  host.addEventListener("pointermove", (event) => {
    if (tip.hidden) return;
    const el = event.target.closest(".rank-hit");
    if (!el) {
      hide();
      return;
    }
    if (el !== active) show(el, event);
    else place(event);
  });
  host.addEventListener("pointerout", (event) => {
    const next = event.relatedTarget;
    if (next && next.closest && next.closest(".rank-hit")) return;
    hide();
  });
  host.querySelector("#rank-gallery-viewport")?.addEventListener("scroll", hide, { passive: true });
}

// ==============================================================================
// 7. Initialization
// ==============================================================================
function setupG1Lightbox() {
  const lightbox = document.getElementById("g1-lightbox");
  const lightboxImg = document.getElementById("g1-lightbox-img");
  const closeBtn = document.querySelector(".g1-lightbox-close");
  if (!lightbox || !lightboxImg) return;

  const closeLightbox = () => {
    lightbox.hidden = true;
    lightboxImg.removeAttribute("src");
  };

  document.querySelectorAll(".g1-view-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const src = btn.getAttribute("data-full");
      if (!src) return;
      lightboxImg.src = src;
      lightbox.hidden = false;
    });
  });

  if (closeBtn) closeBtn.addEventListener("click", closeLightbox);
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) closeLightbox();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !lightbox.hidden) closeLightbox();
  });
}

function renderFormulas(root = document.body) {
  if (typeof renderMathInElement !== "function" || !root) return;
  renderMathInElement(root, {
    delimiters: [
      { left: "$$", right: "$$", display: true },
      { left: "$", right: "$", display: false }
    ],
    throwOnError: false
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderLeaderboard();
  setupLeaderboardEvents();
  renderCapabilityHeatmaps();
  // renderG1Table();
  renderRankGallery();
  setupRankGallery();
  setupRankTooltips();
  renderCarousel();
  setupCarouselEvents();
  setupG1Lightbox();
  renderFormulas();
});
