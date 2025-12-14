const lessons = [
  {
    id: 1, title: "Day 1｜短母音 /æ/（apple 的 a）",
    sound: "a (as in apple)",
    mcq: { prompt: "聽音選字母：/æ/", options: ["a","e","i"], answer: "a" },
    spell: { phonemes: ["/k/","/æ/","/t/"], answer: "cat", letters: ["c","a","t","b","e"] },
    speakWord: "cat",
    quiz: { sentence: "The cat is on the ___", options: ["bed","bad"], answer: "bed" }
  },
  {
    id: 2, title: "Day 2｜短母音 /ɪ/（igloo 的 i）",
    sound: "i (as in igloo)",
    mcq: { prompt: "聽音選字母：/ɪ/", options: ["a","i","o"], answer: "i" },
    spell: { phonemes: ["/s/","/ɪ/","/t/"], answer: "sit", letters: ["s","i","t","p","n"] },
    speakWord: "sit",
    quiz: { sentence: "I ___ on the chair.", options: ["sit","sat"], answer: "sit" }
  },
  {
    id: 3, title: "Day 3｜短母音 /e/（egg 的 e）",
    sound: "e (as in egg)",
    mcq: { prompt: "聽音選字母：/e/", options: ["e","a","u"], answer: "e" },
    spell: { phonemes: ["/b/","/e/","/d/"], answer: "bed", letters: ["b","e","d","a","o"] },
    speakWord: "bed",
    quiz: { sentence: "Choose the correct word:", options: ["bed","bad"], answer: "bed" }
  },
  {
    id: 4, title: "Day 4｜短母音 /ɑ/（hot 的 o，美式）",
    sound: "o (as in hot)",
    mcq: { prompt: "聽音選字母：/ɑ/", options: ["o","u","e"], answer: "o" },
    spell: { phonemes: ["/d/","/ɑ/","/g/"], answer: "dog", letters: ["d","o","g","a","u"] },
    speakWord: "dog",
    quiz: { sentence: "The ___ is big.", options: ["dog","dig"], answer: "dog" }
  },
  {
    id: 5, title: "Day 5｜短母音 /ʌ/（up 的 u）",
    sound: "u (as in up)",
    mcq: { prompt: "聽音選字母：/ʌ/", options: ["u","o","a"], answer: "u" },
    spell: { phonemes: ["/s/","/ʌ/","/n/"], answer: "sun", letters: ["s","u","n","a","o"] },
    speakWord: "sun",
    quiz: { sentence: "The bus is ___ .", options: ["up","on"], answer: "up" }
  },
  {
    id: 6, title: "Day 6｜子音組合 sh（ship）",
    sound: "sh (as in ship)",
    mcq: { prompt: "聽音選字母組合：/sh/", options: ["sh","ch","th"], answer: "sh" },
    spell: { phonemes: ["/sh/","/ɪ/","/p/"], answer: "ship", letters: ["s","h","i","p","t","c"] },
    speakWord: "ship",
    quiz: { sentence: "Pick the word with sh:", options: ["ship","chip"], answer: "ship" }
  },
  {
    id: 7, title: "Day 7｜子音組合 ch（chair）",
    sound: "ch (as in chair)",
    mcq: { prompt: "聽音選字母組合：/ch/", options: ["ch","sh","th"], answer: "ch" },
    spell: { phonemes: ["/ch/","/ɪ/","/p/"], answer: "chip", letters: ["c","h","i","p","s","t"] },
    speakWord: "chip",
    quiz: { sentence: "Pick the word with ch:", options: ["ship","chip"], answer: "chip" }
  },
  {
    id: 8, title: "Day 8｜子音組合 th（think / this）",
    sound: "th (as in think)",
    mcq: { prompt: "聽音選字母組合：/th/", options: ["th","sh","ch"], answer: "th" },
    spell: { phonemes: ["/th/","/ɪ/","/n/"], answer: "thin", letters: ["t","h","i","n","s","c"] },
    speakWord: "thin",
    quiz: { sentence: "Pick the word with th:", options: ["thin","chin"], answer: "thin" }
  },
  {
    id: 9, title: "Day 9｜ph = /f/（phone）",
    sound: "ph (sounds like f)",
    mcq: { prompt: "聽音選字母組合：/f/（ph）", options: ["ph","ch","sh"], answer: "ph" },
    spell: { phonemes: ["/f/","/oʊ/","/n/"], answer: "phone", letters: ["p","h","o","n","e","f"] },
    speakWord: "phone",
    quiz: { sentence: "Pick the word that starts with ph:", options: ["phone","shone"], answer: "phone" }
  },
  {
    id: 10, title: "Day 10｜ck = /k/（duck）",
    sound: "ck (as in duck)",
    mcq: { prompt: "聽音選字母組合：/k/（ck）", options: ["ck","ch","th"], answer: "ck" },
    spell: { phonemes: ["/d/","/ʌ/","/k/"], answer: "duck", letters: ["d","u","c","k","a","o"] },
    speakWord: "duck",
    quiz: { sentence: "Pick the word that ends with ck:", options: ["duck","dune"], answer: "duck" }
  },
  {
    id: 11, title: "Day 11｜長母音 ee（see）",
    sound: "ee (as in see)",
    mcq: { prompt: "聽音選字母組合：/ee/", options: ["ee","ea","ai"], answer: "ee" },
    spell: { phonemes: ["/s/","/ee/"], answer: "see", letters: ["s","e","e","a","i"] },
    speakWord: "see",
    quiz: { sentence: "Pick the long e word:", options: ["see","set"], answer: "see" }
  },
  {
    id: 12, title: "Day 12｜長母音 ea（eat）",
    sound: "ea (as in eat)",
    mcq: { prompt: "聽音選字母組合：/ee/（ea）", options: ["ea","ee","oa"], answer: "ea" },
    spell: { phonemes: ["/ea/","/t/"], answer: "eat", letters: ["e","a","t","i","o"] },
    speakWord: "eat",
    quiz: { sentence: "Pick the word with ea:", options: ["eat","oat"], answer: "eat" }
  },
  {
    id: 13, title: "Day 13｜長母音 ai（rain）",
    sound: "ai (as in rain)",
    mcq: { prompt: "聽音選字母組合：/ay/（ai）", options: ["ai","ay","ee"], answer: "ai" },
    spell: { phonemes: ["/r/","/ay/","/n/"], answer: "rain", letters: ["r","a","i","n","e","o","y"] },
    speakWord: "rain",
    quiz: { sentence: "Pick the word with ai:", options: ["rain","ran"], answer: "rain" }
  },
  {
    id: 14, title: "Day 14｜長母音 ay（day）",
    sound: "ay (as in day)",
    mcq: { prompt: "聽音選字母組合：/ay/（ay）", options: ["ay","ai","oa"], answer: "ay" },
    spell: { phonemes: ["/d/","/ay/"], answer: "day", letters: ["d","a","y","i","o"] },
    speakWord: "day",
    quiz: { sentence: "Pick the word with ay:", options: ["day","dig"], answer: "day" }
  },
  {
    id: 15, title: "Day 15｜長母音 oa（boat）",
    sound: "oa (as in boat)",
    mcq: { prompt: "聽音選字母組合：/oh/（oa）", options: ["oa","oo","ee"], answer: "oa" },
    spell: { phonemes: ["/b/","/oh/","/t/"], answer: "boat", letters: ["b","o","a","t","e","u"] },
    speakWord: "boat",
    quiz: { sentence: "Pick the word with oa:", options: ["boat","boot"], answer: "boat" }
  },
  {
    id: 16, title: "Day 16｜雙母音 ow（cow）",
    sound: "ow (as in cow)",
    mcq: { prompt: "聽音選字母組合：/ow/", options: ["ow","oa","oo"], answer: "ow" },
    spell: { phonemes: ["/c/","/ow/"], answer: "cow", letters: ["c","o","w","a","e"] },
    speakWord: "cow",
    quiz: { sentence: "Pick the word with ow:", options: ["cow","coo"], answer: "cow" }
  },
  {
    id: 17, title: "Day 17｜雙母音 oo（book / moon）",
    sound: "oo (as in book / moon)",
    mcq: { prompt: "聽音選字母組合：oo", options: ["oo","oa","ee"], answer: "oo" },
    spell: { phonemes: ["/b/","/oo/","/k/"], answer: "book", letters: ["b","o","o","k","a","e"] },
    speakWord: "book",
    quiz: { sentence: "Pick the oo word:", options: ["book","back"], answer: "book" }
  },
  {
    id: 18, title: "Day 18｜r 音 ar（car）",
    sound: "ar (as in car)",
    mcq: { prompt: "聽音選字母組合：/ar/", options: ["ar","or","er"], answer: "ar" },
    spell: { phonemes: ["/c/","/ar/"], answer: "car", letters: ["c","a","r","o","e"] },
    speakWord: "car",
    quiz: { sentence: "Pick the ar word:", options: ["car","core"], answer: "car" }
  },
  {
    id: 19, title: "Day 19｜r 音 or（fork）",
    sound: "or (as in fork)",
    mcq: { prompt: "聽音選字母組合：/or/", options: ["or","ar","er"], answer: "or" },
    spell: { phonemes: ["/f/","/or/","/k/"], answer: "fork", letters: ["f","o","r","k","a","e"] },
    speakWord: "fork",
    quiz: { sentence: "Pick the or word:", options: ["fork","park"], answer: "fork" }
  },
  {
    id: 20, title: "Day 20｜r 音 er（her）",
    sound: "er (as in her)",
    mcq: { prompt: "聽音選字母組合：/er/", options: ["er","ar","or"], answer: "er" },
    spell: { phonemes: ["/h/","/er/"], answer: "her", letters: ["h","e","r","a","o"] },
    speakWord: "her",
    quiz: { sentence: "Pick the er word:", options: ["her","har"], answer: "her" }
  },
  {
    id: 21, title: "Day 21｜複習挑戰（混合）",
    sound: "review mix",
    mcq: { prompt: "聽音選字母/組合：我會念一個，你選對", options: ["a","sh","oa"], answer: "mix" },
    spell: { phonemes: ["(mix)"], answer: "ship", letters: ["s","h","i","p","a","o"] },
    speakWord: "ship",
    quiz: { sentence: "Choose the correct word:", options: ["boat","bad"], answer: "boat" }
  }
];

const qs = (s) => document.querySelector(s);
const dayList = qs("#dayList");
const lessonSec = qs("#lesson");
const stage = qs("#stage");
const statusEl = qs("#status");
const nextStepBtn = qs("#nextStepBtn");
const backBtn = qs("#backBtn");
const titleEl = qs("#lessonTitle");
const resetProgressBtn = qs("#resetProgressBtn");
const stepBtns = [...document.querySelectorAll(".step")];

let currentLesson = null;
let step = 0;

// ---------- 語音播放 ----------
function speak(text) {
  if (!("speechSynthesis" in window)) {
    alert("此裝置不支援語音播放（SpeechSynthesis）。");
    return;
  }
  window.speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(text);
  u.lang = "en-US";
  window.speechSynthesis.speak(u);
}

// ---------- 進度儲存 ----------
function loadProgress() {
  try { return JSON.parse(localStorage.getItem("phonics_progress") || "{}"); }
  catch { return {}; }
}
function saveProgress(p) {
  localStorage.setItem("phonics_progress", JSON.stringify(p));
}
function markDone(lessonId) {
  const p = loadProgress();
  p[lessonId] = { done: true, ts: Date.now() };
  saveProgress(p);
}
function clearProgress() {
  localStorage.removeItem("phonics_progress");
}

// ---------- 課程清單 ----------
function renderDayList() {
  const p = loadProgress();
  dayList.innerHTML = lessons.map(l => {
    const done = p?.[l.id]?.done ? "✅ 已完成" : "⬜ 未完成";
    return `<button class="dayBtn" data-id="${l.id}">
      <div class="big">Day ${l.id}</div>
      <div style="opacity:.85;margin-top:6px;">${l.title.split("｜")[1] || ""}</div>
      <div style="opacity:.8;margin-top:6px;">${done}</div>
    </button>`;
  }).join("");

  document.querySelectorAll(".dayBtn").forEach(btn => {
    btn.addEventListener("click", () => openLesson(Number(btn.dataset.id)));
  });
}

function openLesson(id) {
  currentLesson = lessons.find(l => l.id === id);
  step = 0;
  titleEl.textContent = currentLesson.title;
  qs("#courseList").classList.add("hidden");
  lessonSec.classList.remove("hidden");

  // 圖卡：依 Day 自動過濾
  setCardsMode("letters");
  openCardsPanel();

  setStep(0);
}

function goBack() {
  closeCardsPanel();
  lessonSec.classList.add("hidden");
  qs("#courseList").classList.remove("hidden");
  renderDayList();
}

// ---------- Step ----------
function setStep(n) {
  step = n;
  stepBtns.forEach(b => b.classList.toggle("active", Number(b.dataset.step) === step));
  statusEl.textContent = "";

  if (step === 0) renderHear();
  if (step === 1) renderMCQ();
  if (step === 2) renderSpell();
  if (step === 3) renderRepeat();
  if (step === 4) renderQuiz();
}

function renderHear() {
  stage.innerHTML = `
    <h3>① 聽音</h3>
    <p>按下播放，先用耳朵記住聲音。</p>
    <div class="row">
      <button id="playSound">🔊 播放今天的音</button>
      <button class="ghost" id="tipBtn">提示</button>
    </div>
    <div id="tip" style="margin-top:10px;opacity:.85;"></div>
  `;
  qs("#playSound").onclick = () => speak(currentLesson.sound);
  qs("#tipBtn").onclick = () => qs("#tip").textContent = "先聽聲音，再看字母/字母組合。你在練『解碼』。";
}

function renderMCQ() {
  const { prompt, options, answer } = currentLesson.mcq;
  stage.innerHTML = `
    <h3>② 選字母</h3>
    <p>${prompt}</p>
    <button id="replay">🔊 再聽一次</button>
    <div style="margin-top:10px;">
      ${options.map(o => `<button class="pill opt" data-v="${o}">${o}</button>`).join("")}
    </div>
    <div id="fb" style="margin-top:12px;"></div>
  `;
  qs("#replay").onclick = () => speak(currentLesson.sound);

  document.querySelectorAll(".opt").forEach(btn => {
    btn.addEventListener("click", () => {
      const v = btn.dataset.v;
      const ok = v === answer;
      qs("#fb").textContent = ok ? "✅ 很好！我們進到拼字。" : "再試一次：先聽，再選。";
      statusEl.textContent = ok ? "本關完成" : "";
    });
  });
}

function renderSpell() {
  const { phonemes, answer, letters } = currentLesson.spell;
  let built = "";

  stage.innerHTML = `
    <h3>③ 拼字</h3>
    <p>把聲音組成單字：<b>${phonemes.join(" + ")}</b></p>
    <div class="row" style="margin:10px 0;">
      <div class="big">你拼的字：<span id="built">（尚未開始）</span></div>
      <button class="ghost" id="clear">清除</button>
    </div>
    <div>
      ${letters.map(ch => `<button class="pill letter" data-ch="${ch}">${ch}</button>`).join("")}
    </div>
    <div id="fb" style="margin-top:12px;"></div>
  `;

  const builtEl = qs("#built");
  const fb = qs("#fb");
  qs("#clear").onclick = () => { built=""; builtEl.textContent="（尚未開始）"; fb.textContent=""; statusEl.textContent=""; };

  document.querySelectorAll(".letter").forEach(btn => {
    btn.addEventListener("click", () => {
      built += btn.dataset.ch;
      builtEl.textContent = built;
      if (built.length === answer.length) {
        if (built === answer) {
          fb.textContent = "✅ 拼對了！";
          statusEl.textContent = "本關完成";
          speak(answer);
        } else {
          fb.textContent = "差一點點～按清除再試一次。";
        }
      }
    });
  });
}

function renderRepeat() {
  stage.innerHTML = `
    <h3>④ 跟讀</h3>
    <p>按播放，跟著唸 3 次。這關不評分，只要敢唸就贏。</p>
    <div class="row">
      <button id="say">🔊 播放單字：${currentLesson.speakWord}</button>
      <button class="ghost" id="done">我跟讀完成了 ✅</button>
    </div>
    <div id="fb" style="margin-top:12px;"></div>
  `;
  qs("#say").onclick = () => speak(currentLesson.speakWord);
  qs("#done").onclick = () => {
    qs("#fb").textContent = "👏 很棒！你的耳朵和嘴巴正在同步。";
    statusEl.textContent = "本關完成";
  };
}

function renderQuiz() {
  // ✅ Day 21：隨機 10 題總複習（Day1-20 單字池）
  if (currentLesson?.id === 21) {
    const pool = wordCards
      .filter(w => (w.tags || []).some(t => /^day([1-9]|1\d|20)$/.test(t))) // day1~day20
      .map(w => w.front);

    const uniq = [...new Set(pool)];
    const pickN = (arr, n) => shuffle(arr).slice(0, Math.min(n, arr.length));

    const answers = pickN(uniq, 10);

    const questions = answers.map(ans => {
      const distractors = pickN(uniq.filter(x => x !== ans), 3);
      const options = shuffle([ans, ...distractors]);
      return { ans, options };
    });

    let idx = 0;
    let score = 0;
    const userAns = new Array(questions.length).fill(null);

    const renderQ = () => {
      const q = questions[idx];
      stage.innerHTML = `
        <h3>⑤ Day 21｜總複習小測（${idx + 1} / ${questions.length}）</h3>
        <p>按🔊聽單字，選正確拼字。</p>

        <div class="row" style="margin:10px 0;">
          <button id="playWord">🔊 聽</button>
          <button class="ghost" id="replayWord">再聽一次</button>
          <div style="margin-left:auto;opacity:.8;">目前分數：<b>${score}</b></div>
        </div>

        <div style="margin-top:8px;">
          ${q.options.map(o => `
            <button class="pill qopt" data-v="${o}" style="margin:8px 10px 0 0;">
              ${o}
            </button>
          `).join("")}
        </div>

        <div id="fb" style="margin-top:12px; min-height:24px;"></div>

        <div class="row" style="margin-top:14px;">
          <button class="ghost" id="prev" ${idx === 0 ? "disabled" : ""}>上一題</button>
          <button id="next">${idx === questions.length - 1 ? "看成績" : "下一題"}</button>
        </div>
      `;

      const say = () => speak(q.ans);
      qs("#playWord").onclick = say;
      qs("#replayWord").onclick = say;

      document.querySelectorAll(".qopt").forEach(btn => {
        btn.addEventListener("click", () => {
          const v = btn.dataset.v;

          // 允許改答案：先回滾再重算
          if (userAns[idx] !== null && userAns[idx] === q.ans) score -= 10;

          userAns[idx] = v;

          const ok = v === q.ans;
          if (ok) score += 10;

          qs("#fb").textContent = ok ? "✅ 正確！" : `❌ 錯了～正確是：${q.ans}`;
          statusEl.textContent = ok ? "本題答對" : "本題答錯";
        });
      });

      qs("#prev").onclick = () => { idx = Math.max(0, idx - 1); renderQ(); };
      qs("#next").onclick = () => {
        if (idx === questions.length - 1) {
          renderResult();
        } else {
          idx += 1;
          renderQ();
        }
      };
    };

    const renderResult = () => {
      const rows = questions.map((q, i) => {
        const ua = userAns[i];
        const ok = ua === q.ans;
        return `
          <div style="padding:10px 0;border-top:1px solid #e5e7eb;">
            <div><b>第 ${i + 1} 題</b>：正確 <b>${q.ans}</b></div>
            <div style="opacity:.85;">你的答案：${ua ?? "（未作答）"} ${ok ? "✅" : "❌"}</div>
          </div>
        `;
      }).join("");

      stage.innerHTML = `
        <h3>⑤ Day 21｜總複習成績</h3>
        <p>總分：<b>${score}</b>（每題 10 分，共 ${questions.length} 題）</p>

        <div class="row" style="margin:10px 0;">
          <button id="retry">再測一次（重新抽題）</button>
          <button class="ghost" id="finish">完成 Day 21 ✅</button>
        </div>

        <div style="margin-top:12px;">
          <h4 style="margin:0 0 8px;">答題明細</h4>
          ${rows}
        </div>
      `;

      qs("#retry").onclick = () => renderQuiz(); // 重新抽題
      qs("#finish").onclick = () => {
        markDone(currentLesson.id);
        alert("Day 21 完成 ✅ 進度已儲存到本機。");
        goBack();
      };
    };

    renderQ();
    return;
  }

  // ✅ 其他天數：維持原本的「單題小測」
  const q = currentLesson.quiz;
  stage.innerHTML = `
    <h3>⑤ 小測</h3>
    <p>${q.sentence}</p>
    <div>
      ${q.options.map(o => `<button class="pill qopt" data-v="${o}">${o}</button>`).join("")}
    </div>
    <div id="fb" style="margin-top:12px;"></div>
    <button class="ghost" id="finish" style="margin-top:10px;">完成今天課程</button>
  `;

  document.querySelectorAll(".qopt").forEach(btn => {
    btn.addEventListener("click", () => {
      const ok = btn.dataset.v === q.answer;
      qs("#fb").textContent = ok ? "✅ 你選對了！" : "再聽一次差別：我建議回到聽音重播。";
      if (ok) statusEl.textContent = "本關完成";
    });
  });

  qs("#finish").onclick = () => {
    markDone(currentLesson.id);
    alert("今天完成 ✅ 進度已儲存到本機。");
    goBack();
  };
}


// ---------- 綁定 ----------
nextStepBtn.onclick = () => setStep(Math.min(step + 1, 4));
backBtn.onclick = goBack;
stepBtns.forEach(b => b.onclick = () => setStep(Number(b.dataset.step)));
resetProgressBtn.onclick = () => {
  if (confirm("確定要清除本機進度嗎？（只影響你的裝置）")) {
    clearProgress();
    renderDayList();
  }
};

renderDayList();


// ======================================================
// 圖卡翻牌模式：依 Day 自動只顯示相關卡片
// ======================================================
const letterCards = [
  { front: "a", back: "嘴巴張大：apple 的 a
/æ/", speak: "a", tags: ["day1","vowel"] },
  { front: "i", back: "短短的 i：igloo
/ɪ/", speak: "i", tags: ["day2","vowel"] },
  { front: "e", back: "短短的 e：egg
/e/", speak: "e", tags: ["day3","vowel"] },
  { front: "o", back: "hot 的 o（美式 /ɑ/）
/ɑ/", speak: "o", tags: ["day4","vowel"] },
  { front: "u", back: "up 的 u
/ʌ/", speak: "u", tags: ["day5","vowel"] },
  { front: "sh", back: "sh = /ʃ/
ship", speak: "sh", tags: ["day6","digraph"] },
  { front: "ch", back: "ch = /tʃ/
chair", speak: "ch", tags: ["day7","digraph"] },
  { front: "th", back: "th = /θ/ 或 /ð/
think / this", speak: "th", tags: ["day8","digraph"] },
  { front: "ph", back: "ph = /f/
phone", speak: "ph", tags: ["day9","digraph"] },
  { front: "ck", back: "ck = /k/
duck", speak: "ck", tags: ["day10","digraph"] },
  { front: "ee", back: "ee = 長母音 /iː/
see", speak: "ee", tags: ["day11","long"] },
  { front: "ea", back: "ea 常見 = /iː/
eat", speak: "ea", tags: ["day12","long"] },
  { front: "ai", back: "ai = /eɪ/
rain", speak: "ai", tags: ["day13","long"] },
  { front: "ay", back: "ay = /eɪ/
day", speak: "ay", tags: ["day14","long"] },
  { front: "oa", back: "oa = /oʊ/
boat", speak: "oa", tags: ["day15","long"] },
  { front: "ow", back: "ow = /aʊ/
cow", speak: "ow", tags: ["day16","vowelteam"] },
  { front: "oo", back: "oo 兩種：book / moon", speak: "oo", tags: ["day17","vowelteam"] },
  { front: "ar", back: "ar = /ɑr/
car", speak: "ar", tags: ["day18","rcontrolled"] },
  { front: "or", back: "or = /ɔr/
fork", speak: "or", tags: ["day19","rcontrolled"] },
  { front: "er", back: "er = /ɝ/
her", speak: "er", tags: ["day20","rcontrolled"] },
  { front: "mix", back: "複習混合
隨機練習", speak: "mix", tags: ["day21","review"] }
];

const wordCards = [
  { front: "cat", back: "c+a+t
短 a /æ/", speak: "cat", tags: ["day1"] },
  { front: "bad", back: "b+a+d
短 a /æ/（張大）", speak: "bad", tags: ["day1quiz","day3quiz","day21"] },
  { front: "bed", back: "b+e+d
短 e /e/", speak: "bed", tags: ["day3","day1quiz","day21"] },
  { front: "sit", back: "s+i+t
短 i /ɪ/", speak: "sit", tags: ["day2","day21"] },
  { front: "dog", back: "d+o+g
短 o /ɑ/", speak: "dog", tags: ["day4","day21"] },
  { front: "sun", back: "s+u+n
短 u /ʌ/", speak: "sun", tags: ["day5","day21"] },
  { front: "ship", back: "sh + ip", speak: "ship", tags: ["day6","day21"] },
  { front: "chip", back: "ch + ip", speak: "chip", tags: ["day7","day21"] },
  { front: "thin", back: "th + in", speak: "thin", tags: ["day8","day21"] },
  { front: "phone", back: "ph + one", speak: "phone", tags: ["day9"] },
  { front: "duck", back: "du + ck", speak: "duck", tags: ["day10"] },
  { front: "see", back: "s + ee", speak: "see", tags: ["day11"] },
  { front: "eat", back: "ea + t", speak: "eat", tags: ["day12"] },
  { front: "rain", back: "r + ai + n", speak: "rain", tags: ["day13"] },
  { front: "day", back: "d + ay", speak: "day", tags: ["day14"] },
  { front: "boat", back: "b + oa + t", speak: "boat", tags: ["day15","day21"] },
  { front: "cow", back: "c + ow", speak: "cow", tags: ["day16"] },
  { front: "book", back: "b + oo + k", speak: "book", tags: ["day17"] },
  { front: "car", back: "c + ar", speak: "car", tags: ["day18"] },
  { front: "fork", back: "f + or + k", speak: "fork", tags: ["day19"] },
  { front: "her", back: "h + er", speak: "her", tags: ["day20"] }
];


let currentCardsMode = "letters"; // "letters" | "words"
let currentCards = [...letterCards];

function shuffle(arr){
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function getLessonTag(lessonId){
  return `day${lessonId}`;
}

function filterCardsByLesson(cards, lessonId, mode) {
  // ⭐ Day 21（總複習）單字池：收錄 Day 1–20 所有單字（不含重複）
  if (lessonId === 21 && mode === "words") {
    const reviewTags = Array.from({ length: 20 }, (_, i) => `day${i + 1}`);
    const all = cards.filter(c => (c.tags || []).some(t => reviewTags.includes(t)));

    const seen = new Set();
    return all.filter(c => {
      if (seen.has(c.front)) return false;
      seen.add(c.front);
      return true;
    });
  }

  // 其他天數：只顯示當天相關卡
  const dayTag = getLessonTag(lessonId);
  let filtered = cards.filter(c => (c.tags || []).includes(dayTag));

  // 若某天卡太少，帶入 quiz 對比卡（例如 day1quiz）
  if (filtered.length < 3 && mode === "words") {
    const quizTag = `${dayTag}quiz`;
    filtered = [...filtered, ...cards.filter(c => (c.tags || []).includes(quizTag))];
  }

  // 去重
  const seen = new Set();
  return filtered.filter(c => {
    if (seen.has(c.front)) return false;
    seen.add(c.front);
    return true;
  });
}


function openCardsPanel(){
  const panel = qs("#cardsPanel");
  panel.classList.remove("hidden");
  renderCards();
}

function closeCardsPanel(){
  qs("#cardsPanel").classList.add("hidden");
}

function setCardsMode(mode){
  currentCardsMode = mode;
  const base = mode === "letters" ? [...letterCards] : [...wordCards];

  if (currentLesson?.id) {
    currentCards = filterCardsByLesson(base, currentLesson.id, mode);
  } else {
    currentCards = base;
  }

  if (currentCards.length === 0) currentCards = base;
  renderCards();
}

function renderCards(){
  const grid = qs("#cardsGrid");
  if (!grid) return;

  grid.innerHTML = "";
  const cards = currentCards;

  cards.forEach((c, idx) => {
    const card = document.createElement("div");
    card.className = "flip-card";
    card.innerHTML = `
      <div class="flip-inner">
        <div class="flip-face flip-front">
          <div class="card-big">${c.front}</div>
          <div class="card-sub">${currentCardsMode === "letters" ? "字母卡" : "單字卡"}</div>
          <div class="card-actions">
            <button class="ghost speakBtn" data-i="${idx}">🔊 聽</button>
            <button class="ghost flipBtn" data-i="${idx}">翻面</button>
          </div>
        </div>
        <div class="flip-face flip-back">
          <div class="card-sub">${c.back}</div>
          <div class="card-actions">
            <button class="ghost flipBtn" data-i="${idx}">翻回</button>
          </div>
        </div>
      </div>
    `;

    card.addEventListener("click", (e) => {
      if (e.target.closest("button")) return;
      card.classList.toggle("is-flipped");
    });

    grid.appendChild(card);
  });

  grid.querySelectorAll(".flipBtn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const i = Number(btn.dataset.i);
      const flipCard = grid.children[i];
      flipCard.classList.toggle("is-flipped");
    });
  });

  grid.querySelectorAll(".speakBtn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const i = Number(btn.dataset.i);
      const item = cards[i];
      speak(item.speak);
    });
  });
}

// 圖卡面板按鈕（事件委派）
document.addEventListener("click", (e) => {
  if (e.target?.id === "showLetterCardsBtn") setCardsMode("letters");
  if (e.target?.id === "showWordCardsBtn") setCardsMode("words");
  if (e.target?.id === "shuffleCardsBtn") { currentCards = shuffle(currentCards); renderCards(); }
  if (e.target?.id === "closeCardsBtn") closeCardsPanel();
});
