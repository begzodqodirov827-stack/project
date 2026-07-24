import React, { useState, useEffect } from "react";
import {
  Heart,
  Bell,
  Moon,
  Sun,
  Minus,
  Plus,
  RotateCcw,
} from "lucide-react";

function App() {
  const [page, setPage] = useState("counter");

  const [count, setCount] = useState(
    Number(localStorage.getItem("count")) || 0
  );

  const [likes, setLikes] = useState(
    Number(localStorage.getItem("likes")) || 0
  );

  const [bell, setBell] = useState(
    Number(localStorage.getItem("bell")) || 0
  );

  const [dark, setDark] = useState(
    JSON.parse(localStorage.getItem("dark")) ?? true
  );

  useEffect(() => {
    localStorage.setItem("count", count);
  }, [count]);

  useEffect(() => {
    localStorage.setItem("likes", likes);
  }, [likes]);

  useEffect(() => {
    localStorage.setItem("bell", bell);
  }, [bell]);

  useEffect(() => {
    localStorage.setItem("dark", JSON.stringify(dark));
  }, [dark]);

  return (
    <div
      className={`min-h-screen transition-all duration-500 overflow-hidden ${
        dark
          ? "bg-[#020617] text-white"
          : "bg-slate-100 text-slate-900"
      }`}
    >
      {/* Background */}

      <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-cyan-500/20 blur-[180px]"></div>

      <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-violet-600/20 blur-[180px]"></div>

      <div className="relative z-10 mx-auto max-w-7xl p-8">

        {/* Header */}

        <header
          className={`flex flex-wrap items-center justify-between gap-6 rounded-[35px] border px-8 py-6 backdrop-blur-3xl ${
            dark
              ? "border-cyan-400/20 bg-white/5"
              : "border-slate-300 bg-white/80"
          }`}
        >
          <h1 className="bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-5xl font-black tracking-[8px] text-transparent">
            AI PANEL
          </h1>

          <div className="flex flex-wrap gap-4">

            <button
              onClick={() => setPage("counter")}
              className={`rounded-2xl px-6 py-3 font-bold transition hover:scale-105 ${
                page === "counter"
                  ? "bg-cyan-500 text-black shadow-[0_0_30px_cyan]"
                  : "bg-white/10"
              }`}
            >
              Counter
            </button>

            <button
              onClick={() => setPage("like")}
              className={`flex items-center gap-2 rounded-2xl px-6 py-3 font-bold transition hover:scale-105 ${
                page === "like"
                  ? "bg-pink-500 text-white shadow-[0_0_30px_hotpink]"
                  : "bg-white/10"
              }`}
            >
              <Heart size={18} />
              Like
            </button>

            <button
              onClick={() => setPage("bell")}
              className={`flex items-center gap-2 rounded-2xl px-6 py-3 font-bold transition hover:scale-105 ${
                page === "bell"
                  ? "bg-yellow-400 text-black shadow-[0_0_30px_yellow]"
                  : "bg-white/10"
              }`}
            >
              <Bell size={18} />
              Notification
            </button>

            <button
              onClick={() => setPage("theme")}
              className={`flex items-center gap-2 rounded-2xl px-6 py-3 font-bold transition hover:scale-105 ${
                page === "theme"
                  ? "bg-violet-600 text-white shadow-[0_0_30px_violet]"
                  : "bg-white/10"
              }`}
            >
              {dark ? <Moon size={18} /> : <Sun size={18} />}
              Theme
            </button>

          </div>
        </header>

        {/* Card */}

        <div
          className={`mx-auto mt-12 max-w-5xl rounded-[45px] border p-10 backdrop-blur-3xl ${
            dark
              ? "border-cyan-400/20 bg-white/5"
              : "border-slate-300 bg-white/80"
          }`}
        >
          {page === "counter" && (
            <>
              <h2 className="mb-10 text-center text-6xl font-black">
                Counter
              </h2>

              <div className="mb-10 flex h-72 items-center justify-center rounded-[35px] border border-cyan-400/20 bg-black/30">

                <span className="bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-[150px] font-black text-transparent">
                  {count}
                </span>

              </div>

              <div className="grid grid-cols-3 gap-6">

                <button
                  onClick={() => setCount(count - 1)}
                  className="flex h-24 items-center justify-center rounded-3xl bg-gradient-to-br from-red-500 to-pink-700 text-white transition hover:scale-105"
                >
                  <Minus size={42} />
                </button>

                <button
                  onClick={() => setCount(0)}
                  className="flex h-24 items-center justify-center rounded-3xl border border-white/10 bg-white/10 transition hover:scale-105"
                >
                  <RotateCcw size={36} />
                </button>

                <button
                  onClick={() => setCount(count + 1)}
                  className="flex h-24 items-center justify-center rounded-3xl bg-gradient-to-br from-cyan-400 to-blue-600 text-black transition hover:scale-105"
                >
                  <Plus size={42} />
                </button>

              </div>
            </>
          )}          {/* LIKE */}

          {page === "like" && (
            <>
              <h2 className="mb-10 text-center text-6xl font-black">
                ❤️ Like Button
              </h2>

              <div className="mb-10 flex h-72 items-center justify-center rounded-[35px] border border-pink-500/20 bg-black/30 shadow-[0_0_60px_rgba(255,20,147,.2)]">
                <span className="text-[90px] font-black text-pink-500 drop-shadow-[0_0_20px_#ff1493]">
                  ❤️ {likes}
                </span>
              </div>

              <button
                onClick={() => setLikes(likes + 1)}
                className="mx-auto block h-20 w-96 rounded-3xl bg-gradient-to-r from-pink-500 to-red-600 text-2xl font-black text-white transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_#ff1493]"
              >
                ❤️ LIKE
              </button>
            </>
          )}

          {/* NOTIFICATION */}

          {page === "bell" && (
            <>
              <h2 className="mb-10 text-center text-6xl font-black">
                🔔 Notification
              </h2>

              <div className="mb-10 flex h-72 items-center justify-center rounded-[35px] border border-yellow-400/20 bg-black/30 shadow-[0_0_60px_rgba(255,255,0,.2)]">
                <span className="text-[90px] font-black text-yellow-400 drop-shadow-[0_0_20px_yellow]">
                  🔔 {bell}
                </span>
              </div>

              <button
                onClick={() => setBell(bell + 1)}
                className="mx-auto block h-20 w-96 rounded-3xl bg-gradient-to-r from-yellow-400 to-orange-500 text-2xl font-black text-black transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_yellow]"
              >
                SEND NOTIFICATION
              </button>
            </>
          )}

          {/* THEME */}

          {page === "theme" && (
            <>
              <h2 className="mb-10 text-center text-6xl font-black">
                Theme
              </h2>

              <div className="mb-10 flex h-72 items-center justify-center rounded-[35px] border border-cyan-400/20 bg-black/30">
                <span className="text-6xl font-black">
                  {dark ? "🌙 DARK MODE" : "☀️ LIGHT MODE"}
                </span>
              </div>

              <button
                onClick={() => setDark(!dark)}
                className="mx-auto block h-20 w-96 rounded-3xl bg-gradient-to-r from-cyan-400 to-violet-600 text-2xl font-black text-black transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_cyan]"
              >
                {dark ? "LIGHT MODE" : "DARK MODE"}
              </button>
            </>
          )}

        </div>
      </div>
    </div>
  );
}

export default App;