"use client";

import Link from "next/link";
import { useState } from "react";

// UI-only port dari login.php / register.php (tanpa backend auth).
// Background memakai /images agar sama dengan aslinya.
export default function AuthForm({ mode }: { mode: "login" | "register" }) {
  const [show, setShow] = useState(false);
  const bg =
    mode === "login"
      ? "/images/background_login.jpg"
      : "/images/backgground_register.jpg";

  return (
    <div
      style={{
        fontFamily: "Verdana, sans-serif",
        margin: 0,
        padding: 20,
        background: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <form
        style={{
          backgroundColor: "rgba(245,245,245,0.97)",
          padding: 40,
          borderRadius: 10,
          boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
          maxWidth: 450,
          width: "100%",
          textAlign: "center",
        }}
        onSubmit={(e) => e.preventDefault()}
      >
        <h2>{mode === "login" ? "Masuk Akun Artiva" : "Daftar Akun Artiva"}</h2>
        {mode === "register" && (
          <input
            name="username"
            placeholder="Username"
            required
            style={inputStyle}
          />
        )}
        <input
          name="email"
          type="email"
          placeholder="Email"
          required
          style={inputStyle}
        />
        <div style={{ position: "relative", width: "100%" }}>
          <input
            name="password"
            type={show ? "text" : "password"}
            placeholder="Password"
            required
            style={inputStyle}
          />
          <span
            onClick={() => setShow((v) => !v)}
            style={{
              position: "absolute",
              right: 10,
              top: "50%",
              transform: "translateY(-50%)",
              cursor: "pointer",
            }}
            aria-label="Tampilkan password"
          >
            &#128065;
          </span>
        </div>
        {mode === "register" && (
          <>
            <input
              name="confirmPassword"
              type={show ? "text" : "password"}
              placeholder="Konfirmasi password"
              required
              style={inputStyle}
            />
            <select name="role" required style={inputStyle} defaultValue="user">
              <option value="user">User</option>
              <option value="editor">Editor</option>
              <option value="admin">Admin</option>
            </select>
          </>
        )}
        <button type="submit" style={primaryBtn}>
          {mode === "login" ? "Masuk" : "Daftar"}
        </button>
        <p style={{ fontSize: 14 }}>
          {mode === "login" ? (
            <>
              Belum punya akun? <Link href="/register">Daftar</Link>
            </>
          ) : (
            <>
              Sudah punya akun? <Link href="/login">Masuk</Link>
            </>
          )}
        </p>
        <Link href="/" style={{ fontSize: 14 }}>
          &larr; Kembali ke beranda
        </Link>
      </form>
    </div>
  );
}

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: 10,
  margin: "10px 0",
  border: "1px solid #ccc",
  borderRadius: 8,
  fontSize: 14,
};

const primaryBtn: React.CSSProperties = {
  padding: "12px 25px",
  border: "none",
  borderRadius: 8,
  backgroundColor: "#4facfe",
  color: "white",
  fontSize: 16,
  cursor: "pointer",
  marginTop: 15,
  width: "100%",
};
