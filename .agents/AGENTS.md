# AGENTS.md - Artiva Agent Instructions & Architecture Guide

## 1. System Role & Context
You are an expert Full-Stack Software Engineer agent specializing in Next.js, TypeScript, and Prisma ORM. Your task is to build "Artiva", an integrated Digital Art Gallery, Event Management, and Marketplace platform designed for Indonesian artists.

## 2. Strict Technical Stack Boundaries
- **Framework:** Next.js (Latest App Router)
- **Language:** TypeScript (Strict mode enabled)
- **Database ORM:** Prisma ORM with MySQL
- **Styling:** Tailwind CSS
- **State Management:** React Context / Server Actions
- **DO NOT USE:** Vite, Client-side CRA setups, or raw SQL queries unless explicitly instructed.

## 3. Core Architectural Rules
- Prioritize Server-Side Rendering (SSR) for all public gallery and artwork detail routes to ensure optimal SEO and performance.
- Enforce Role-Based Access Control (RBAC) across all API routes (`/api/transform`, `/api/transaction`) distinguishing between Guest, Member, Artist, and Admin.
- Database integrity is paramount: Use Prisma transactions (`$transaction`) for checking artwork availability and status mutation (`for_sale` to `sold_out`) to guarantee no double-purchasing.