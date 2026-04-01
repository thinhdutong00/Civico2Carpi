"use client";

import { useState, useEffect } from "react";

function TitleBarButton({ children, onClick }: { children: React.ReactNode; onClick?: () => void }) {
  return (
    <button className="win-titlebar-btn" onClick={onClick} type="button" aria-label={String(children)}>
      {children}
    </button>
  );
}

function TitleBar({ title, icon, onClose }: { title: string; icon?: React.ReactNode; onClose?: () => void }) {
  return (
    <div className="win-titlebar flex items-center justify-between px-1 py-0.5" style={{ minHeight: 22 }}>
      <div className="flex items-center gap-1">
        {icon && <span className="flex items-center" style={{ fontSize: 14 }}>{icon}</span>}
        <span style={{ fontSize: 11, fontFamily: "Tahoma, Arial, sans-serif", fontWeight: "bold" }}>{title}</span>
      </div>
      <div className="flex items-center gap-0.5">
        <TitleBarButton>_</TitleBarButton>
        <TitleBarButton>□</TitleBarButton>
        <TitleBarButton onClick={onClose} aria-label="Close">✕</TitleBarButton>
      </div>
    </div>
  );
}

function Win2kWindow({
  title,
  icon,
  width,
  children,
  style,
  className,
}: {
  title: string;
  icon?: React.ReactNode;
  width?: number | string;
  children: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
}) {
  return (
    <div
      className={`win-window flex flex-col ${className ?? ""}`}
      style={{ width: width ?? 480, fontFamily: "Tahoma, Arial, sans-serif", ...style }}
      role="dialog"
      aria-label={title}
    >
      <TitleBar title={title} icon={icon} />
      {children}
    </div>
  );
}

function MenuBar() {
  return (
    <nav className="win-menubar flex items-center px-0.5 py-0.5">
      {["File", "Edit", "View", "Favorites", "Tools", "Help"].map((item) => (
        <span key={item} className="win-menu-item" role="menuitem">
          {item}
        </span>
      ))}
    </nav>
  );
}

function AddressBar() {
  return (
    <div className="flex items-center gap-1 px-2 py-1 bg-[#d4d0c8] border-b border-[#808080]">
      <span style={{ fontSize: 11, fontFamily: "Tahoma, Arial, sans-serif" }}>Address</span>
      <input
        className="win-input flex-1"
        defaultValue="C:\My Documents\Welcome"
        readOnly
        style={{ fontSize: 11 }}
        aria-label="Address bar"
      />
      <button
        className="win-raised px-2 py-0.5 text-xs"
        style={{ fontFamily: "Tahoma, Arial, sans-serif", fontSize: 11 }}
        type="button"
      >
        Go
      </button>
    </div>
  );
}

function Toolbar() {
  const buttons = [
    { label: "← Back", icon: "◄" },
    { label: "→ Forward", icon: "►" },
    { label: "↑ Up", icon: "▲" },
    { label: "⚙ Properties", icon: "⚙" },
  ];
  return (
    <div className="flex items-center gap-0.5 px-1 py-1 bg-[#d4d0c8] border-b border-[#808080]">
      {buttons.map((btn) => (
        <button
          key={btn.label}
          className="win-raised px-2 py-0.5 flex items-center gap-1"
          style={{ fontSize: 11, fontFamily: "Tahoma, Arial, sans-serif" }}
          type="button"
          aria-label={btn.label}
        >
          <span style={{ fontSize: 10 }}>{btn.icon}</span>
          <span>{btn.label}</span>
        </button>
      ))}
      <div className="flex-1" />
      <button
        className="win-raised px-2 py-0.5"
        style={{ fontSize: 11, fontFamily: "Tahoma, Arial, sans-serif" }}
        type="button"
        aria-label="Search"
      >
        🔍 Search
      </button>
    </div>
  );
}

function DesktopIcon({ icon, label }: { icon: string; label: string }) {
  return (
    <div className="win-icon" role="button" tabIndex={0} aria-label={label}>
      <div style={{ fontSize: 32, lineHeight: 1 }}>{icon}</div>
      <span className="win-icon-label">{label}</span>
    </div>
  );
}

function StatusBar({ text }: { text: string }) {
  return (
    <div className="win-statusbar flex items-center px-1 py-0.5 gap-1">
      <span className="win-statusbar-panel flex-1">{text}</span>
      <span className="win-statusbar-panel" style={{ minWidth: 60 }}>Ready</span>
    </div>
  );
}

function Clock() {
  const [time, setTime] = useState("");
  useEffect(() => {
    function updateClock() {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", hour12: true })
      );
    }
    updateClock();
    const id = setInterval(updateClock, 1000);
    return () => clearInterval(id);
  }, []);
  return (
    <div className="win-tray" style={{ fontSize: 11, fontFamily: "Tahoma, Arial, sans-serif" }}>
      {time}
    </div>
  );
}

function Taskbar() {
  return (
    <div className="win-taskbar flex items-center justify-between px-1 py-0.5" style={{ height: 30, minHeight: 30 }}>
      <div className="flex items-center gap-1">
        <button className="win-start-btn" type="button" aria-label="Start menu">
          <span style={{ fontSize: 13 }}>🪟</span>
          <span style={{ fontFamily: "Tahoma, Arial, sans-serif", fontSize: 11, fontWeight: "bold" }}>Start</span>
        </button>
        <div style={{ width: 1, height: 22, background: "#808080", margin: "0 2px" }} />
        <div className="win-raised flex items-center gap-1 px-2 py-0.5 text-xs" style={{ fontSize: 11 }}>
          <span>🖥️</span>
          <span>My Computer</span>
        </div>
        <div className="win-raised flex items-center gap-1 px-2 py-0.5" style={{ fontSize: 11 }}>
          <span>📂</span>
          <span>Welcome - Notepad</span>
        </div>
      </div>
      <div className="flex items-center gap-1">
        <span style={{ fontSize: 11, fontFamily: "Tahoma, Arial, sans-serif" }}>🔊 📶</span>
        <Clock />
      </div>
    </div>
  );
}

function SidebarPanel() {
  return (
    <div
      className="flex flex-col"
      style={{
        width: 180,
        background: "#e8e4da",
        borderRight: "1px solid #808080",
        flexShrink: 0,
      }}
    >
      {/* System Tasks */}
      <div className="win-groupbox" style={{ margin: 8 }}>
        <span className="win-groupbox-label" style={{ color: "#000080", fontWeight: "bold" }}>
          System Tasks
        </span>
        <div className="flex flex-col gap-1 pt-2">
          {[
            { icon: "📁", label: "Make a new folder" },
            { icon: "📤", label: "Publish this folder" },
            { icon: "📧", label: "Share this folder" },
          ].map((item) => (
            <a key={item.label} href="#" className="win-link flex items-center gap-2 text-xs" style={{ color: "#0000ff", textDecoration: "none" }}>
              <span style={{ fontSize: 14 }}>{item.icon}</span>
              <span style={{ fontFamily: "Tahoma, Arial, sans-serif", fontSize: 11 }}>{item.label}</span>
            </a>
          ))}
        </div>
      </div>

      {/* Other Places */}
      <div className="win-groupbox" style={{ margin: 8 }}>
        <span className="win-groupbox-label" style={{ color: "#000080", fontWeight: "bold" }}>
          Other Places
        </span>
        <div className="flex flex-col gap-1 pt-2">
          {[
            { icon: "🖥️", label: "My Computer" },
            { icon: "📄", label: "My Documents" },
            { icon: "🌐", label: "Network Places" },
            { icon: "🗑️", label: "Recycle Bin" },
          ].map((item) => (
            <a key={item.label} href="#" className="flex items-center gap-2" style={{ color: "#0000ff", textDecoration: "none", fontFamily: "Tahoma, Arial, sans-serif", fontSize: 11 }}>
              <span style={{ fontSize: 14 }}>{item.icon}</span>
              <span>{item.label}</span>
            </a>
          ))}
        </div>
      </div>

      {/* Details */}
      <div className="win-groupbox" style={{ margin: 8 }}>
        <span className="win-groupbox-label" style={{ color: "#000080", fontWeight: "bold" }}>
          Details
        </span>
        <div className="pt-2">
          <p style={{ fontFamily: "Tahoma, Arial, sans-serif", fontSize: 11, margin: 0, fontWeight: "bold" }}>Welcome</p>
          <p style={{ fontFamily: "Tahoma, Arial, sans-serif", fontSize: 11, margin: "2px 0 0 0", color: "#444" }}>File Folder</p>
          <div className="win-separator" />
          <p style={{ fontFamily: "Tahoma, Arial, sans-serif", fontSize: 11, margin: 0, fontWeight: "bold" }}>Next.js App</p>
          <p style={{ fontFamily: "Tahoma, Arial, sans-serif", fontSize: 11, margin: "2px 0 0 0", color: "#444" }}>Version 15.0</p>
        </div>
      </div>
    </div>
  );
}

function MainContent() {
  const items = [
    { icon: "🖼️", label: "Next.js Logo", type: "Image File" },
    { icon: "📄", label: "page.tsx", type: "TypeScript File" },
    { icon: "⚙️", label: "layout.tsx", type: "TypeScript File" },
    { icon: "🎨", label: "globals.css", type: "CSS File" },
    { icon: "🌐", label: "Vercel Templates", type: "Internet Shortcut" },
    { icon: "📚", label: "Documentation", type: "Internet Shortcut" },
    { icon: "🎓", label: "Learning Center", type: "Internet Shortcut" },
    { icon: "🚀", label: "Deploy Now", type: "Shortcut" },
  ];

  return (
    <div className="flex-1 overflow-auto p-4" style={{ background: "#ffffff" }}>
      {/* Welcome header */}
      <div
        className="flex items-center gap-3 p-3 mb-4"
        style={{ background: "linear-gradient(to right, #000080, #1084d0)", borderRadius: 0 }}
      >
        <div style={{ fontSize: 32 }}>🪟</div>
        <div>
          <p style={{ color: "#ffffff", fontFamily: "Tahoma, Arial, sans-serif", fontSize: 14, fontWeight: "bold", margin: 0 }}>
            Welcome to Windows 2000 Professional
          </p>
          <p style={{ color: "#c0c0ff", fontFamily: "Tahoma, Arial, sans-serif", fontSize: 11, margin: "2px 0 0 0" }}>
            To get started, edit the page.tsx file. Build. Deploy.
          </p>
        </div>
      </div>

      {/* Description box */}
      <div className="win-sunken p-3 mb-4">
        <p style={{ fontFamily: "Tahoma, Arial, sans-serif", fontSize: 11, margin: 0, lineHeight: 1.6 }}>
          Looking for a starting point or more instructions? Head over to{" "}
          <a
            href="https://vercel.com/templates"
            className="win-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Templates
          </a>{" "}
          or the{" "}
          <a
            href="https://nextjs.org/learn"
            className="win-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learning Center
          </a>
          . For documentation and deployment, see items below.
        </p>
      </div>

      {/* File listing grid */}
      <div
        className="win-sunken p-2"
        style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(90px, 1fr))", gap: 4 }}
        role="list"
        aria-label="Files and shortcuts"
      >
        {items.map((item) => (
          <div
            key={item.label}
            className="flex flex-col items-center gap-0.5 p-2 cursor-pointer hover:bg-blue-900 hover:bg-opacity-30"
            role="listitem"
            tabIndex={0}
            aria-label={`${item.label}, ${item.type}`}
          >
            <span style={{ fontSize: 28, lineHeight: 1 }}>{item.icon}</span>
            <span
              style={{
                fontFamily: "Tahoma, Arial, sans-serif",
                fontSize: 11,
                textAlign: "center",
                color: "#000000",
                lineHeight: 1.2,
                wordBreak: "break-word",
              }}
            >
              {item.label}
            </span>
          </div>
        ))}
      </div>

      {/* Progress bar section */}
      <div className="mt-4">
        <p style={{ fontFamily: "Tahoma, Arial, sans-serif", fontSize: 11, marginBottom: 4 }}>
          System Resources:
        </p>
        <div className="flex items-center gap-2">
          <span style={{ fontFamily: "Tahoma, Arial, sans-serif", fontSize: 11, width: 64 }}>CPU</span>
          <div className="win-progress-bg flex-1" style={{ height: 14 }}>
            <div className="win-progress-fill" style={{ width: "23%" }} />
          </div>
          <span style={{ fontFamily: "Tahoma, Arial, sans-serif", fontSize: 11, width: 32 }}>23%</span>
        </div>
        <div className="flex items-center gap-2 mt-1">
          <span style={{ fontFamily: "Tahoma, Arial, sans-serif", fontSize: 11, width: 64 }}>Memory</span>
          <div className="win-progress-bg flex-1" style={{ height: 14 }}>
            <div className="win-progress-fill" style={{ width: "61%" }} />
          </div>
          <span style={{ fontFamily: "Tahoma, Arial, sans-serif", fontSize: 11, width: 32 }}>61%</span>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="win-desktop flex flex-col" style={{ minHeight: "100vh" }}>
      {/* Desktop icons */}
      <div className="flex-1 p-4 flex flex-col justify-center items-center relative overflow-hidden">
        {/* Desktop icons top-left */}
        <div
          className="absolute top-4 left-4 flex flex-col gap-2"
          aria-label="Desktop icons"
          role="list"
        >
          <DesktopIcon icon="🖥️" label="My Computer" />
          <DesktopIcon icon="📂" label="My Documents" />
          <DesktopIcon icon="🌐" label="Internet Explorer" />
          <DesktopIcon icon="🗑️" label="Recycle Bin" />
          <DesktopIcon icon="🔗" label="Network Places" />
        </div>

        {/* Main window — centered on desktop */}
        <Win2kWindow
          title="Welcome to Next.js — My Computer"
          icon="🖥️"
          style={{ width: "min(780px, 96vw)", maxHeight: "calc(100vh - 80px)" }}
          className="flex flex-col"
        >
          <MenuBar />
          <Toolbar />
          <AddressBar />
          <div className="flex flex-1 overflow-hidden" style={{ minHeight: 0 }}>
            <SidebarPanel />
            <MainContent />
          </div>
          <StatusBar text="8 object(s) | 1 folder | C:\\My Documents\\Welcome" />
        </Win2kWindow>

        {/* Small helper dialog */}
        <div
          className="win-window flex flex-col absolute"
          style={{
            width: 260,
            bottom: 48,
            right: 24,
            fontFamily: "Tahoma, Arial, sans-serif",
          }}
          role="dialog"
          aria-label="Getting Started dialog"
        >
          <TitleBar title="Getting Started" icon="❓" />
          <div className="p-3 flex flex-col gap-3" style={{ background: "#d4d0c8" }}>
            <div className="win-sunken p-2">
              <p style={{ fontSize: 11, margin: 0, lineHeight: 1.6 }}>
                Your Next.js 15 project is ready. Click below to deploy or read the docs.
              </p>
            </div>
            <div className="flex gap-2 justify-end">
              <a
                href="https://vercel.com/new"
                target="_blank"
                rel="noopener noreferrer"
                className="win-raised px-4 py-1 text-xs font-medium"
                style={{ fontFamily: "Tahoma, Arial, sans-serif", fontSize: 11, textDecoration: "none", color: "#000" }}
              >
                Deploy Now
              </a>
              <a
                href="https://nextjs.org/docs"
                target="_blank"
                rel="noopener noreferrer"
                className="win-raised px-4 py-1 text-xs font-medium"
                style={{ fontFamily: "Tahoma, Arial, sans-serif", fontSize: 11, textDecoration: "none", color: "#000" }}
              >
                Docs
              </a>
              <button
                type="button"
                className="win-raised px-4 py-1 text-xs font-medium"
                style={{ fontFamily: "Tahoma, Arial, sans-serif", fontSize: 11 }}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Taskbar */}
      <Taskbar />
    </div>
  );
}
