/**
 * SIGN-Bench: Academic Project Homepage Scripts
 * Interactive Leaderboard (sorting, filtering, searching, model page links)
 * Interactive Sample Carousel (with real images from figure_sample_originals)
 * BibTeX Copy & Utilities
 * Strictly Anonymous - No author or debug paths
 */

// ==============================================================================
// 1. Leaderboard Data (26 Models with Verified Working Target URLs)
// ==============================================================================
const LEADERBOARD_DATA = [
  // Proprietary Models
  {
    name: "Gemini 3.7 Flash",
    link: "https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-3-7-flash/",
    category: "proprietary",
    categoryLabel: "Proprietary",
    overall: { gated: 49.7, per: 85.7, nonverbal: 53.1, social: 71.1 },
    hh: { gated: 40.9, per: 83.7, nonverbal: 45.1, social: 66.4 },
    hr: { gated: 58.4, per: 87.8, nonverbal: 63.2, social: 74.0 }
  },
  {
    name: "Gemini 3.1 Pro",
    link: "https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-1-pro/",
    category: "proprietary",
    categoryLabel: "Proprietary",
    overall: { gated: 49.0, per: 85.1, nonverbal: 54.0, social: 69.0 },
    hh: { gated: 42.6, per: 84.8, nonverbal: 44.9, social: 69.9 },
    hr: { gated: 55.4, per: 85.4, nonverbal: 66.5, social: 68.5 }
  },
  {
    name: "Qwen-Max",
    link: "https://qwen.ai/blog?id=qwen3.8",
    category: "proprietary",
    categoryLabel: "Proprietary",
    overall: { gated: 47.3, per: 85.4, nonverbal: 52.6, social: 67.2 },
    hh: { gated: 44.0, per: 85.6, nonverbal: 45.3, social: 73.2 },
    hr: { gated: 50.5, per: 85.2, nonverbal: 62.2, social: 63.3 }
  },
  {
    name: "Gemini Robotics-ER-2",
    link: "https://blog.google/innovation-and-ai/models-and-research/google-deepmind/gemini-robotics-er-2/",
    category: "proprietary",
    categoryLabel: "Proprietary",
    overall: { gated: 38.4, per: 87.8, nonverbal: 43.4, social: 51.2 },
    hh: { gated: 22.4, per: 85.6, nonverbal: 26.9, social: 30.1 },
    hr: { gated: 54.4, per: 90.0, nonverbal: 64.6, social: 64.0 }
  },
  {
    name: "GLM-5.3-Flash",
    link: "https://z.ai/blog/glm-5.3-flash",
    category: "proprietary",
    categoryLabel: "Proprietary",
    overall: { gated: 38.3, per: 75.4, nonverbal: 48.3, social: 60.3 },
    hh: { gated: 37.6, per: 78.4, nonverbal: 41.5, social: 68.3 },
    hr: { gated: 38.9, per: 72.4, nonverbal: 57.2, social: 54.2 }
  },

  // Open-Source General VLMs
  {
    name: "Qwen3.6-27B",
    link: "https://huggingface.co/Qwen/Qwen3.6-27B",
    category: "general",
    categoryLabel: "General VLM",
    overall: { gated: 44.9, per: 84.4, nonverbal: 50.6, social: 61.0 },
    hh: { gated: 44.0, per: 85.9, nonverbal: 47.7, social: 63.7 },
    hr: { gated: 45.9, per: 82.9, nonverbal: 54.5, social: 59.1 }
  },
  {
    name: "Cosmos3-Nano",
    link: "https://huggingface.co/nvidia/Cosmos3-Nano",
    category: "general",
    categoryLabel: "General VLM",
    overall: { gated: 44.7, per: 84.7, nonverbal: 50.3, social: 65.9 },
    hh: { gated: 41.5, per: 85.1, nonverbal: 44.4, social: 68.2 },
    hr: { gated: 47.9, per: 84.4, nonverbal: 57.9, social: 64.4 }
  },
  {
    name: "Qwen3.5-35B-A3B",
    link: "https://huggingface.co/Qwen/Qwen3.5-35B-A3B",
    category: "general",
    categoryLabel: "General VLM",
    overall: { gated: 44.4, per: 85.5, nonverbal: 51.9, social: 61.5 },
    hh: { gated: 41.7, per: 85.2, nonverbal: 45.6, social: 67.6 },
    hr: { gated: 47.2, per: 85.9, nonverbal: 60.2, social: 57.5 }
  },
  {
    name: "Qwen3-VL-32B",
    link: "https://huggingface.co/Qwen/Qwen3-VL-32B-Instruct",
    category: "general",
    categoryLabel: "General VLM",
    overall: { gated: 43.5, per: 83.8, nonverbal: 50.9, social: 61.4 },
    hh: { gated: 41.1, per: 85.3, nonverbal: 44.2, social: 65.4 },
    hr: { gated: 46.0, per: 82.3, nonverbal: 59.8, social: 58.6 }
  },
  {
    name: "Qwen3.6-35B-A3B",
    link: "https://huggingface.co/Qwen/Qwen3.6-35B-A3B",
    category: "general",
    categoryLabel: "General VLM",
    overall: { gated: 43.1, per: 84.0, nonverbal: 50.3, social: 61.3 },
    hh: { gated: 41.2, per: 85.5, nonverbal: 43.4, social: 70.1 },
    hr: { gated: 45.0, per: 82.5, nonverbal: 59.4, social: 55.3 }
  },
  {
    name: "Qwen3.5-27B",
    link: "https://huggingface.co/Qwen/Qwen3.5-27B",
    category: "general",
    categoryLabel: "General VLM",
    overall: { gated: 40.6, per: 85.2, nonverbal: 48.5, social: 52.4 },
    hh: { gated: 42.6, per: 86.3, nonverbal: 46.4, social: 62.5 },
    hr: { gated: 38.6, per: 84.2, nonverbal: 51.2, social: 45.3 }
  },
  {
    name: "Qwen3.8-27B",
    link: "https://huggingface.co/Qwen/Qwen3.8-27B",
    category: "general",
    categoryLabel: "General VLM",
    overall: { gated: 39.9, per: 83.4, nonverbal: 48.6, social: 52.8 },
    hh: { gated: 41.6, per: 84.9, nonverbal: 44.0, social: 69.4 },
    hr: { gated: 38.1, per: 81.9, nonverbal: 54.7, social: 41.3 }
  },
  {
    name: "Qwen3-VL-4B",
    link: "https://huggingface.co/Qwen/Qwen3-VL-4B-Instruct",
    category: "general",
    categoryLabel: "General VLM",
    overall: { gated: 38.2, per: 82.8, nonverbal: 44.8, social: 56.7 },
    hh: { gated: 35.8, per: 84.5, nonverbal: 38.4, social: 60.9 },
    hr: { gated: 40.5, per: 81.1, nonverbal: 53.3, social: 53.8 }
  },
  {
    name: "InternVL3.5-30B-A3B",
    link: "https://huggingface.co/OpenGVLab/InternVL3_5-30B-A3B",
    category: "general",
    categoryLabel: "General VLM",
    overall: { gated: 26.8, per: 51.0, nonverbal: 51.6, social: 68.5 },
    hh: { gated: 25.8, per: 53.6, nonverbal: 46.2, social: 75.7 },
    hr: { gated: 27.8, per: 48.5, nonverbal: 59.6, social: 64.3 }
  },
  {
    name: "Qwen3.5-0.8B",
    link: "https://huggingface.co/Qwen/Qwen3.5-0.8B",
    category: "general",
    categoryLabel: "General VLM",
    overall: { gated: 23.9, per: 68.4, nonverbal: 33.6, social: 45.4 },
    hh: { gated: 32.4, per: 81.2, nonverbal: 36.1, social: 59.1 },
    hr: { gated: 15.4, per: 55.5, nonverbal: 29.7, social: 29.8 }
  },
  {
    name: "Qwen3.5-4B",
    link: "https://huggingface.co/Qwen/Qwen3.5-4B",
    category: "general",
    categoryLabel: "General VLM",
    overall: { gated: 18.0, per: 79.5, nonverbal: 29.2, social: 15.9 },
    hh: { gated: 30.9, per: 85.1, nonverbal: 43.6, social: 29.0 },
    hr: { gated: 5.1, per: 73.8, nonverbal: 9.0, social: 5.4 }
  },
  {
    name: "InternVL3.5-38B",
    link: "https://huggingface.co/OpenGVLab/InternVL3_5-38B",
    category: "general",
    categoryLabel: "General VLM",
    overall: { gated: 17.4, per: 36.8, nonverbal: 48.3, social: 59.3 },
    hh: { gated: 11.4, per: 26.6, nonverbal: 44.9, social: 63.9 },
    hr: { gated: 23.4, per: 47.0, nonverbal: 51.4, social: 58.5 }
  },
  {
    name: "Qwen3.5-2B",
    link: "https://huggingface.co/Qwen/Qwen3.5-2B",
    category: "general",
    categoryLabel: "General VLM",
    overall: { gated: 17.3, per: 73.5, nonverbal: 25.3, social: 25.5 },
    hh: { gated: 26.3, per: 84.6, nonverbal: 33.5, social: 33.6 },
    hr: { gated: 8.4, per: 62.4, nonverbal: 12.7, social: 17.0 }
  },

  // Open-Source Embodied VLMs
  {
    name: "Embodied-R1.5-8B",
    link: "https://huggingface.co/IffYuan/Embodied-R1.5",
    category: "embodied",
    categoryLabel: "Embodied VLM",
    overall: { gated: 35.5, per: 73.5, nonverbal: 44.4, social: 65.5 },
    hh: { gated: 34.6, per: 77.6, nonverbal: 39.5, social: 70.5 },
    hr: { gated: 36.4, per: 69.5, nonverbal: 51.5, social: 62.2 }
  },
  {
    name: "HY-Embodied-VLM-1.0-30B-A3B",
    link: "https://huggingface.co/tencent/Hy-Embodied-VLM-1.0",
    category: "embodied",
    categoryLabel: "Embodied VLM",
    overall: { gated: 34.7, per: 76.2, nonverbal: 39.1, social: 64.2 },
    hh: { gated: 33.5, per: 78.3, nonverbal: 35.7, social: 67.3 },
    hr: { gated: 35.9, per: 74.0, nonverbal: 43.4, social: 62.0 }
  },
  {
    name: "HY-Embodied-0.5-4B-A2B",
    link: "https://huggingface.co/tencent/HY-Embodied-0.5",
    category: "embodied",
    categoryLabel: "Embodied VLM",
    overall: { gated: 32.8, per: 75.7, nonverbal: 40.5, social: 58.9 },
    hh: { gated: 35.6, per: 79.6, nonverbal: 41.9, social: 65.9 },
    hr: { gated: 30.0, per: 71.8, nonverbal: 38.6, social: 53.8 }
  },
  {
    name: "HY-Embodied-0.5-X-4B-A2B",
    link: "https://huggingface.co/tencent/HY-Embodied-0.5-X",
    category: "embodied",
    categoryLabel: "Embodied VLM",
    overall: { gated: 31.9, per: 73.7, nonverbal: 41.2, social: 57.1 },
    hh: { gated: 35.0, per: 78.3, nonverbal: 41.8, social: 65.2 },
    hr: { gated: 28.8, per: 69.2, nonverbal: 40.3, social: 51.1 }
  },
  {
    name: "RynnBrain1.1-2B",
    link: "https://huggingface.co/Alibaba-DAMO-Academy/RynnBrain1.1-2B",
    category: "embodied",
    categoryLabel: "Embodied VLM",
    overall: { gated: 27.9, per: 64.0, nonverbal: 45.9, social: 49.5 },
    hh: { gated: 31.3, per: 66.0, nonverbal: 44.1, social: 70.6 },
    hr: { gated: 24.5, per: 62.1, nonverbal: 48.2, social: 34.8 }
  },
  {
    name: "RynnBrain-30B-A3B",
    link: "https://huggingface.co/Alibaba-DAMO-Academy/RynnBrain-30B-A3B",
    category: "embodied",
    categoryLabel: "Embodied VLM",
    overall: { gated: 19.1, per: 49.9, nonverbal: 37.8, social: 44.3 },
    hh: { gated: 14.3, per: 37.0, nonverbal: 35.3, social: 57.3 },
    hr: { gated: 23.8, per: 62.8, nonverbal: 39.9, social: 40.3 }
  },
  {
    name: "RoboBrain2.0-32B",
    link: "https://huggingface.co/BAAI/RoboBrain2.0-32B",
    category: "embodied",
    categoryLabel: "Embodied VLM",
    overall: { gated: 13.8, per: 34.3, nonverbal: 43.7, social: 43.1 },
    hh: { gated: 5.3, per: 14.9, nonverbal: 35.3, social: 75.0 },
    hr: { gated: 22.4, per: 53.7, nonverbal: 47.7, social: 41.5 }
  },
  {
    name: "VeBrain-7B",
    link: "https://huggingface.co/OpenGVLab/VeBrain",
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
        <a href="${model.link}" target="_blank" rel="noopener noreferrer" class="model-link" title="${model.category === "proprietary" ? "Open official technical blog for" : "Open Hugging Face page for"} ${model.name}">
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

        <!-- Bottom Footer: Clean, strictly no debug/developer paths -->
        <div class="card-footer-note">
          <span><strong>Gold Answer:</strong> (${sample.goldAnswer})</span>
          <span><strong>Evaluation Protocol:</strong> Stage 1 Localization Gate ($\\mathrm{IoU} \\ge 0.5$) → Stage 2 Semantic Reading</span>
        </div>
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
// 5. BibTeX Copy & Utility
// ==============================================================================

function setupCopyBibtex() {
  const copyBtn = document.getElementById("btn-copy-bibtex");
  const codeElem = document.getElementById("bibtex-code");

  if (!copyBtn || !codeElem) return;

  copyBtn.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(codeElem.innerText);
      const originalText = copyBtn.innerHTML;
      copyBtn.innerHTML = `
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
        Copied!
      `;
      setTimeout(() => {
        copyBtn.innerHTML = originalText;
      }, 2000);
    } catch (err) {
      console.error("Failed to copy BibTeX: ", err);
    }
  });
}

// ==============================================================================
// 6. Initialization
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
  renderCarousel();
  setupCarouselEvents();
  setupCopyBibtex();
  setupG1Lightbox();
  renderFormulas();
});
