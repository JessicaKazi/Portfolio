import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  ArrowLeft,
  Palette,
  Code2,
  Lightbulb,
  Heart,
  Sparkles,
} from "lucide-react";
import "./App.css";

const folders = [
  { title: "INSPO DUMP", path: "/inspo", color: "pink" },
  { title: "NEXT CHAPTER", path: "/about", color: "blue" },
  { title: "NOTES TO SELF", path: "/notes", color: "green" },
  { title: "DESIGNER TOOLKIT", path: "/toolkit", color: "purple" },
  { title: "HIGHLIGHTS", path: "/highlights", color: "lavender" },
];

function Header() {
  return (
    <header className="inner-header">
      <Link to="/" className="monogram" aria-label="Jessica's home">
        J<span>K</span>
      </Link>
      <Link to="/" className="back-link">
        <ArrowLeft size={15} /> BACK TO THE ARCHIVES
      </Link>
    </header>
  );
}

function PageIntro({ label, title, description }) {
  return (
    <div className="inner-intro">
      <p className="eyebrow">{label}</p>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
}

function InspoPage() {
  const palettes = [
    { name: "Fresh Energy", colors: ["#D4EF79", "#9EDAF1", "#C5B4F5"] },
    { name: "Soft Focus", colors: ["#F8D7E8", "#DCE9CE", "#E5D7FF"] },
    { name: "Electric Garden", colors: ["#7856C9", "#B6E65C", "#17151D"] },
  ];

  return (
    <main className="inner-page">
      <Header />
      <PageIntro
        label="COLLECTING LITTLE SPARKS"
        title={
          <>
            The inspiration <span>corner.</span>
          </>
        }
        description="Colours, combinations, and creative directions to explore. A growing moodboard for future ideas."
      />

      <section className="inspo-grid">
        {palettes.map((palette, index) => (
          <article className="inspo-card" key={palette.name}>
            <div className="palette-preview">
              {palette.colors.map((color) => (
                <div
                  key={color}
                  className="palette-swatch"
                  style={{ backgroundColor: color }}
                >
                  <span>{color}</span>
                </div>
              ))}
            </div>
            <p className="project-category">COLOUR STUDY 0{index + 1}</p>
            <h2>{palette.name}</h2>
          </article>
        ))}
      </section>

      <div className="note-strip">
        <Lightbulb size={24} />
        <p>
          Collect references that inspire you, then add your own screenshots,
          sketches, and links as your moodboard grows.
        </p>
      </div>
    </main>
  );
}

function AboutPage() {
  return (
    <main className="inner-page">
      <Header />
      <PageIntro
        label="A LITTLE INTRODUCTION"
        title={
          <>
            Hi, I'm <span>Jessica.</span>
          </>
        }
        description="I'm interested in the space where creativity meets technology."
      />

      <section className="about-layout">
        <div className="about-art">
          <span className="about-star">✳</span>
          <span className="about-j">J</span>
          <span className="about-caption">CURIOUS BY DESIGN</span>
        </div>

        <div className="about-copy">
          <h2>A creative mind with a love for making things.</h2>
          <p>
            I explore graphic design and web development, from visual concepts
            and layouts to websites built with code.
          </p>
          <p>
            This archive is where I share selected work, experiment with new
            ideas, and document what I'm learning along the way.
          </p>
          <div className="interest-tags">
            <span>Graphic design</span>
            <span>Web development</span>
            <span>Creative coding</span>
          </div>
          <Link to="/highlights" className="text-link">
            EXPLORE MY WORK ↗
          </Link>
        </div>
      </section>
    </main>
  );
}

function NotesPage() {
  const notes = [
    {
      number: "01",
      title: "Make the first version.",
      body: "An idea becomes easier to improve once you give it a form.",
      color: "note-green",
    },
    {
      number: "02",
      title: "Stay curious.",
      body: "Keep experimenting, asking questions, and learning new things.",
      color: "note-blue",
    },
    {
      number: "03",
      title: "Let the work evolve.",
      body: "Not every experiment needs to be perfect to teach you something.",
      color: "note-purple",
    },
  ];

  return (
    <main className="inner-page">
      <Header />
      <PageIntro
        label="THOUGHTS FROM THE PROCESS"
        title={
          <>
            Notes to <span>self.</span>
          </>
        }
        description="Small reminders for the creative journey. Add your own reflections whenever inspiration strikes."
      />

      <section className="notes-grid">
        {notes.map((note) => (
          <article className={`note-card ${note.color}`} key={note.number}>
            <span className="note-number">{note.number} / NOTE</span>
            <Heart size={24} strokeWidth={1.5} />
            <h2>{note.title}</h2>
            <p>{note.body}</p>
          </article>
        ))}
      </section>
    </main>
  );
}

function ToolkitPage() {
  const groups = [
    {
      title: "Visual design",
      icon: <Palette size={23} />,
      description: "Add the design tools you genuinely use.",
      items: ["Graphic design", "Typography", "Layout & composition"],
      color: "tool-purple",
    },
    {
      title: "Web development",
      icon: <Code2 size={23} />,
      description: "Technologies to showcase from your projects.",
      items: ["HTML & CSS", "JavaScript", "React & Vite"],
      color: "tool-blue",
    },
  ];

  return (
    <main className="inner-page">
      <Header />
      <PageIntro
        label="THE THINGS I CREATE WITH"
        title={
          <>
            My creative <span>toolkit.</span>
          </>
        }
        description="A growing collection of skills, technologies, and techniques behind my work."
      />

      <section className="toolkit-grid">
        {groups.map((group) => (
          <article className={`toolkit-card ${group.color}`} key={group.title}>
            <div className="toolkit-icon">{group.icon}</div>
            <h2>{group.title}</h2>
            <p>{group.description}</p>
            <ul>
              {group.items.map((item) => (
                <li key={item}>
                  <Sparkles size={14} /> {item}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </section>
      <p className="toolkit-disclaimer">
        Review these lists and remove anything you haven't used or aren't
        comfortable claiming as a skill.
      </p>
    </main>
  );
}

function ProjectsPage() {
  const [filter, setFilter] = React.useState("All");
  return null;
}

function ArchiveHome() {

  const [showWelcome, setShowWelcome] = useState(false);

useEffect(() => {
  const hasSeenWelcome = sessionStorage.getItem("jessicaArchivesWelcome");

  if (!hasSeenWelcome) {
    setShowWelcome(true);
    sessionStorage.setItem("jessicaArchivesWelcome", "true");
  }
}, []);

  return (
    <main className="archive">
      <header className="topbar">
        <Link to="/" className="monogram" aria-label="Jessica's home">
          J<span>K</span>
        </Link>
        <span className="edition">CREATIVE ARCHIVES · 001</span>
      </header>
      <nav className="folder-nav" aria-label="Portfolio sections">
        {folders.map((folder) => (
          <Link
            key={folder.path}
            to={folder.path}
            className={`folder folder-${folder.color}`}
          >
            {folder.title}
          </Link>
        ))}
      </nav>
      <section className="hero">
        <span className="doodle doodle-flower" aria-hidden="true">
          ✿
        </span>
        <span className="doodle doodle-star" aria-hidden="true">
          ✳
        </span>
        <p className="eyebrow">A LITTLE WORLD OF IDEAS, DESIGN & CODE</p>
        <h1>
          <span className="script-word">Jessica's</span>
          <span className="archive-word">ARCHIVES</span>
        </h1>
        <p className="hero-description">
          Collecting ideas, creating visuals, and building things for the web.
        </p>
        <Link className="edition-pill" to="/highlights">
          EXPLORE MY WORK ↗
        </Link>
        <Link to="/sudoku" className="sudoku-invite">
          🧩 NEED A BRAIN BREAK? PLAY SUDOKU
        </Link>
      </section>
      <footer className="bottom-note">
        <span>DESIGNER × WEB DEVELOPER</span>
        <span>MADE WITH CURIOSITY ♡</span>
      </footer>

      {showWelcome && (
  <div className="welcome-overlay" onClick={() => setShowWelcome(false)}>
    <section
      className="welcome-modal"
      role="dialog"
      aria-modal="true"
      aria-labelledby="welcome-title"
      onClick={(event) => event.stopPropagation()}
    >
      <button
        type="button"
        className="welcome-close"
        onClick={() => setShowWelcome(false)}
        aria-label="Close welcome message"
      >
        ×
      </button>
      <span className="welcome-sparkle">✳</span>
      <p className="eyebrow">YOU FOUND YOUR WAY HERE!</p>
      <h2 id="welcome-title">Welcome to my little corner.</h2>
      <p>
        A collection of designs, code, ideas, and tiny experiments.
        Have a look around — and don't forget to play.
      </p>
      <button
        type="button"
        className="edition-pill"
        onClick={() => setShowWelcome(false)}
      >
        LET'S EXPLORE ↗
      </button>
    </section>
  </div>
)}
    </main>
  );
}

function PlaceholderPage({ title }) {
  return (
    <main className="inner-page">
      <Header />
      <PageIntro
        label="JESSICA'S ARCHIVES"
        title={title}
        description="This section is ready for more of your work and stories."
      />
    </main>
  );
}

const SUDOKU_SOLUTION = [
  [1, 2, 3, 4],
  [3, 4, 1, 2],
  [2, 1, 4, 3],
  [4, 3, 2, 1],
];

const SUDOKU_START = [
  [1, 0, 0, 4],
  [0, 4, 1, 0],
  [0, 1, 4, 0],
  [4, 0, 0, 1],
];

function SudokuPage() {
  const [board, setBoard] = useState(() => SUDOKU_START.map((row) => [...row]));
  const [selected, setSelected] = useState([0, 1]);
  const [message, setMessage] = useState(
    "Pick an empty square, then choose a number.",
  );
  const [won, setWon] = useState(false);

  const [row, col] = selected;

  function enterNumber(number) {
    if (SUDOKU_START[row][col] !== 0 || won) return;

    const next = board.map((r) => [...r]);
    next[row][col] = number;

    setBoard(next);

    if (number !== SUDOKU_SOLUTION[row][col]) {
      setMessage("Not quite! Try another number or use a hint.");
      return;
    }

    if (
      next.every((r, ri) =>
        r.every((value, ci) => value === SUDOKU_SOLUTION[ri][ci]),
      )
    ) {
      setWon(true);
      setMessage("You solved it! Sudoku superstar! ✨");
    } else {
      setMessage("Nice move! Keep going.");
    }
  }

  function useHint() {
    if (won) return;

    const [r, c] = selected;

    if (SUDOKU_START[r][c] !== 0) {
      setMessage("Choose an empty square first.");
      return;
    }

    const next = board.map((line) => [...line]);
    next[r][c] = SUDOKU_SOLUTION[r][c];
    setBoard(next);

    if (
      next.every((line, ri) =>
        line.every((value, ci) => value === SUDOKU_SOLUTION[ri][ci]),
      )
    ) {
      setWon(true);
      setMessage("Puzzle complete! You're brilliant. ✨");
    } else {
      setMessage("A little help from your puzzle fairy. ✨");
    }
  }

  function resetGame() {
    setBoard(SUDOKU_START.map((r) => [...r]));
    setSelected([0, 1]);
    setMessage("Fresh puzzle! Pick an empty square.");
    setWon(false);
  }

  return (
    <main className="sudoku-page">
      <Link to="/" className="back-link">
        ← BACK TO THE ARCHIVES
      </Link>

      <div className="sudoku-heading">
        <p className="eyebrow">THE LITTLE BRAIN BREAK</p>
        <h1>
          Sudoku <span>club.</span>
        </h1>
        <p>
          A little logic, a little fun. Fill every row, column, and 2×2 box with
          1–4.
        </p>
      </div>

      <section className="sudoku-card">
        <div className="sudoku-topline">
          <span>PUZZLE NO. 001</span>
          <span>4 × 4 MINI</span>
        </div>

        <div className="sudoku-grid" role="group" aria-label="Sudoku puzzle">
          {board.map((line, r) =>
            line.map((value, c) => {
              const fixed = SUDOKU_START[r][c] !== 0;
              const active = selected[0] === r && selected[1] === c;
              const wrong = value !== 0 && value !== SUDOKU_SOLUTION[r][c];

              return (
                <button
                  key={`${r}-${c}`}
                  type="button"
                  className={[
                    "sudoku-cell",
                    fixed ? "sudoku-fixed" : "",
                    active ? "sudoku-selected" : "",
                    wrong ? "sudoku-wrong" : "",
                    c === 1 ? "sudoku-box-right" : "",
                    r === 1 ? "sudoku-box-bottom" : "",
                  ].join(" ")}
                  aria-label={`Row ${r + 1}, column ${c + 1}, ${value || "empty"}`}
                  aria-pressed={active}
                  onClick={() => {
                    setSelected([r, c]);
                    setMessage(
                      fixed
                        ? "That's a clue square. Pick an empty one!"
                        : "Now choose a number below.",
                    );
                  }}
                >
                  {value || ""}
                </button>
              );
            }),
          )}
        </div>

        <div className="sudoku-numbers">
          {[1, 2, 3, 4].map((number) => (
            <button
              key={number}
              type="button"
              className="sudoku-number"
              onClick={() => enterNumber(number)}
              disabled={won || SUDOKU_START[row][col] !== 0}
            >
              {number}
            </button>
          ))}
          <button
            type="button"
            className="sudoku-number erase-number"
            onClick={() => {
              if (SUDOKU_START[row][col] === 0 && !won) {
                const next = board.map((r) => [...r]);
                next[row][col] = 0;
                setBoard(next);
                setMessage("Square cleared. Try again!");
              }
            }}
            aria-label="Clear selected square"
          >
            ×
          </button>
        </div>

        <p
          className={`sudoku-message ${won ? "sudoku-win" : ""}`}
          aria-live="polite"
        >
          {message}
        </p>

        {won && (
          <div className="sudoku-celebration">
            <span>✦ ✧ ✦</span>
            <h2>Puzzle conquered!</h2>
            <p>You earned a spot in the Sudoku club.</p>
          </div>
        )}

        <div className="sudoku-actions">
          <button type="button" onClick={useHint}>
            ✨ Give me a hint
          </button>
          <button type="button" onClick={resetGame}>
            ↻ Start again
          </button>
        </div>
      </section>

      <p className="sudoku-footnote">
        Made for curious minds and people who love a good puzzle. ♡
      </p>
    </main>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ArchiveHome />} />
        <Route path="/inspo" element={<InspoPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/notes" element={<NotesPage />} />
        <Route path="/toolkit" element={<ToolkitPage />} />
        <Route path="/sudoku" element={<SudokuPage />} />
        <Route
          path="/highlights"
          element={<PlaceholderPage title="Selected work." />}
        />
        <Route path="*" element={<PlaceholderPage title="Page not found." />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
