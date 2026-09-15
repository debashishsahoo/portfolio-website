/** @type {import('next').NextConfig} */
const nextConfig = {
  // Next 16 writes AGENTS.md / CLAUDE.md into the repo root on `next dev`.
  // Not wanted in this project; set back to true to re-enable.
  agentRules: false,
}

module.exports = nextConfig
