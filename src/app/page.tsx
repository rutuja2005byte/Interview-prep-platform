"use client";

import { motion } from "framer-motion";
import {
  Activity,
  BarChart3,
  Bot,
  Brain,
  CalendarCheck,
  CheckCircle2,
  FileText,
  Gauge,
  Github,
  LineChart,
  Mic,
  Play,
  Plus,
  Settings,
  ShieldCheck,
  Sparkles,
  Upload,
  UserRound
} from "lucide-react";
import {
  Area,
  AreaChart,
  PolarAngleAxis,
  PolarGrid,
  Radar,
  RadarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from "recharts";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { history, interviewQuestions, skills, weeklyScores } from "@/lib/data";

const metrics = [
  { label: "Communication", value: "87", suffix: "/100", icon: Mic, tone: "text-cyan-200" },
  { label: "Job Readiness", value: "92", suffix: "%", icon: Gauge, tone: "text-emerald-200" },
  { label: "Interview Streak", value: "14", suffix: " days", icon: CalendarCheck, tone: "text-violet-200" },
  { label: "Practice Time", value: "38", suffix: " hrs", icon: Activity, tone: "text-amber-200" }
];

const nav = [
  { label: "Dashboard", icon: BarChart3 },
  { label: "Interviews", icon: Bot },
  { label: "Resume", icon: FileText },
  { label: "Analytics", icon: LineChart },
  { label: "Profile", icon: UserRound },
  { label: "Settings", icon: Settings }
];

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <div className="surface-grid pointer-events-none absolute inset-0 opacity-60" />
      <div className="relative mx-auto flex min-h-screen w-full max-w-[1480px] gap-5 px-4 py-4 sm:px-6 lg:px-8">
        <aside className="glass sticky top-4 hidden h-[calc(100vh-2rem)] w-64 shrink-0 rounded-lg p-4 lg:block">
          <div className="mb-8 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-300 text-slate-950">
              <Brain className="h-5 w-5" />
            </div>
            <div>
              <p className="text-sm font-semibold">InterviewIQ AI</p>
              <p className="text-xs text-white/50">Readiness OS</p>
            </div>
          </div>
          <nav className="space-y-1">
            {nav.map((item, index) => (
              <button
                key={item.label}
                className={`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm transition ${
                  index === 0 ? "bg-white text-black" : "text-white/62 hover:bg-white/10 hover:text-white"
                }`}
              >
                <item.icon className="h-4 w-4" />
                {item.label}
              </button>
            ))}
          </nav>
          <div className="mt-8 rounded-lg border border-cyan-300/30 bg-cyan-300/10 p-4">
            <Sparkles className="mb-3 h-5 w-5 text-cyan-200" />
            <p className="text-sm font-medium">Gemini 2.5 coach active</p>
            <p className="mt-1 text-xs leading-5 text-white/55">Dynamic follow-ups, transcript scoring, and role-match feedback are ready.</p>
          </div>
        </aside>

        <section className="min-w-0 flex-1">
          <header className="mb-5 flex flex-col gap-4 rounded-lg border border-white/10 bg-black/15 p-4 backdrop-blur md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm text-white/55">Tuesday, July 14</p>
              <h1 className="mt-1 text-2xl font-semibold tracking-normal text-white sm:text-3xl">Good afternoon, Rutuja</h1>
            </div>
            <div className="flex flex-wrap gap-2">
              <Button variant="secondary"><Github className="h-4 w-4" /> GitHub OAuth</Button>
              <Button variant="secondary"><ShieldCheck className="h-4 w-4" /> Protected</Button>
              <Button><Plus className="h-4 w-4" /> Create Interview</Button>
            </div>
          </header>

          <div className="grid gap-5 xl:grid-cols-[1.35fr_0.85fr]">
            <div className="space-y-5">
              <motion.section
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4"
              >
                {metrics.map((metric) => (
                  <Card key={metric.label}>
                    <CardContent className="pt-5">
                      <metric.icon className={`mb-5 h-5 w-5 ${metric.tone}`} />
                      <p className="text-xs text-white/50">{metric.label}</p>
                      <p className="mt-1 text-3xl font-semibold">
                        {metric.value}<span className="text-sm font-normal text-white/45">{metric.suffix}</span>
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </motion.section>

              <Card>
                <CardHeader>
                  <div>
                    <CardTitle>AI Interview Generator</CardTitle>
                    <p className="mt-1 text-xs text-white/50">Assistant-led setup for role, company, focus, and difficulty.</p>
                  </div>
                  <Bot className="h-5 w-5 text-cyan-200" />
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 lg:grid-cols-[0.9fr_1.1fr]">
                    <div className="space-y-3">
                      {[
                        "What role are you applying for?",
                        "What experience level?",
                        "What company?",
                        "What interview type?",
                        "What technologies?",
                        "How many questions?",
                        "What should the interviewer focus on?"
                      ].map((question, index) => (
                        <div key={question} className="rounded-lg border border-white/10 bg-white/[0.04] p-3">
                          <p className="text-xs text-cyan-100">Step {index + 1}</p>
                          <p className="mt-1 text-sm text-white/82">{question}</p>
                        </div>
                      ))}
                    </div>
                    <div className="rounded-lg border border-white/10 bg-black/25 p-4">
                      <div className="mb-4 flex items-center justify-between">
                        <p className="text-sm font-medium">Generated Atlassian Interview</p>
                        <span className="rounded-full bg-emerald-300/15 px-3 py-1 text-xs text-emerald-100">Advanced</span>
                      </div>
                      <div className="grid gap-3 sm:grid-cols-2">
                        {["Role: Senior Frontend Engineer", "Type: System Design", "Duration: 48 min", "Skills: React, Node, UX"].map((item) => (
                          <div key={item} className="rounded-lg bg-white/[0.05] p-3 text-xs text-white/70">{item}</div>
                        ))}
                      </div>
                      <div className="mt-4 space-y-2">
                        {interviewQuestions.map((item) => (
                          <p key={item} className="rounded-lg border border-white/10 p-3 text-sm leading-5 text-white/74">{item}</p>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Weekly Analytics</CardTitle>
                  <Button variant="ghost" size="sm"><BarChart3 className="h-4 w-4" /> Export</Button>
                </CardHeader>
                <CardContent className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={weeklyScores}>
                      <defs>
                        <linearGradient id="score" x1="0" x2="0" y1="0" y2="1">
                          <stop offset="0%" stopColor="#67e8f9" stopOpacity={0.55} />
                          <stop offset="100%" stopColor="#67e8f9" stopOpacity={0.02} />
                        </linearGradient>
                      </defs>
                      <XAxis dataKey="day" stroke="rgba(255,255,255,.45)" />
                      <YAxis stroke="rgba(255,255,255,.3)" domain={[60, 100]} />
                      <Tooltip contentStyle={{ background: "#10131b", border: "1px solid rgba(255,255,255,.12)", borderRadius: 8 }} />
                      <Area type="monotone" dataKey="readiness" stroke="#67e8f9" strokeWidth={3} fill="url(#score)" />
                      <Area type="monotone" dataKey="communication" stroke="#a7f3d0" strokeWidth={2} fill="transparent" />
                    </AreaChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-5">
              <Card>
                <CardHeader>
                  <CardTitle>Voice Interview</CardTitle>
                  <span className="flex items-center gap-2 text-xs text-emerald-100"><span className="h-2 w-2 rounded-full bg-emerald-300" /> Live ready</span>
                </CardHeader>
                <CardContent>
                  <div className="rounded-lg bg-white/[0.04] p-4">
                    <p className="text-sm text-white/72">AI interviewer asks a contextual follow-up after each answer, evaluates transcript quality, and updates communication scores.</p>
                    <div className="mt-5 flex items-center gap-3">
                      <Button className="h-12 w-12 rounded-full px-0" aria-label="Start voice interview"><Play className="h-5 w-5" /></Button>
                      <div>
                        <p className="text-sm font-medium">Product systems round</p>
                        <p className="text-xs text-white/45">Interrupt support, memory, STT, LLM evaluation</p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 grid grid-cols-2 gap-3">
                    {["Confidence 82", "Grammar 95", "Vocabulary 78", "Fillers 12"].map((score) => (
                      <div key={score} className="rounded-lg border border-white/10 p-3 text-sm text-white/72">{score}</div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Resume Analysis</CardTitle>
                  <FileText className="h-5 w-5 text-cyan-200" />
                </CardHeader>
                <CardContent>
                  <div className="rounded-lg border border-dashed border-white/20 bg-black/20 p-5 text-center">
                    <Upload className="mx-auto mb-3 h-6 w-6 text-white/70" />
                    <p className="text-sm font-medium">Upload PDF resume</p>
                    <p className="mt-1 text-xs text-white/45">ATS, keyword match, projects, skills, grammar, and formatting.</p>
                  </div>
                  <div className="mt-4 grid grid-cols-3 gap-3">
                    {["Resume 88", "ATS 91", "Match 84"].map((item) => (
                      <div key={item} className="rounded-lg bg-white/[0.05] p-3 text-center text-sm">{item}</div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Skill Radar</CardTitle>
                </CardHeader>
                <CardContent className="h-72">
                  <ResponsiveContainer width="100%" height="100%">
                    <RadarChart data={skills}>
                      <PolarGrid stroke="rgba(255,255,255,.18)" />
                      <PolarAngleAxis dataKey="skill" tick={{ fill: "rgba(255,255,255,.62)", fontSize: 11 }} />
                      <Radar dataKey="score" stroke="#67e8f9" fill="#67e8f9" fillOpacity={0.28} />
                    </RadarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Interview History</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {history.map((item) => (
                    <div key={`${item.company}-${item.date}`} className="flex items-center justify-between gap-3 rounded-lg border border-white/10 p-3">
                      <div>
                        <p className="text-sm font-medium">{item.role}</p>
                        <p className="text-xs text-white/45">{item.company} · {item.type} · {item.date}</p>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-cyan-100">
                        <CheckCircle2 className="h-4 w-4" />
                        {item.score}
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
