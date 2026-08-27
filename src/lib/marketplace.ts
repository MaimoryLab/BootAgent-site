export type MarketplaceKind = "skill" | "mcp" | "tool" | "framework";

export interface MarketplaceItem {
  id: string;
  name: string;
  kind: MarketplaceKind;
  description: string;
  descriptionEn: string;
  source: string;
  url: string;
  tags: string[];
}

export const marketplaceItems: MarketplaceItem[] = [
  { id: "claude-code", name: "Claude Code", kind: "tool", description: "Anthropic 的终端编码 Agent，支持 Skills、Hooks 与 MCP。", descriptionEn: "Anthropic's terminal coding agent with Skills, Hooks, and MCP.", source: "Anthropic", url: "https://docs.anthropic.com/en/docs/claude-code", tags: ["编码", "MCP"] },
  { id: "codex-cli", name: "Codex CLI", kind: "tool", description: "OpenAI 的本地编码 Agent，可读取、修改和运行代码。", descriptionEn: "OpenAI's local coding agent for reading, editing, and running code.", source: "OpenAI", url: "https://developers.openai.com/codex/", tags: ["编码", "终端"] },
  { id: "cline", name: "Cline", kind: "tool", description: "VS Code 中的自主编码扩展，支持浏览器、终端和 MCP。", descriptionEn: "An autonomous coding extension for VS Code with browser, terminal, and MCP.", source: "VS Code Marketplace", url: "https://marketplace.visualstudio.com/items?itemName=saoudrizwan.claude-dev", tags: ["VS Code", "MCP"] },
  { id: "ollama", name: "Ollama", kind: "tool", description: "在本机运行和管理开源大模型，提供 CLI 与 API。", descriptionEn: "Run and manage open models locally with a CLI and API.", source: "Ollama", url: "https://ollama.com/", tags: ["本地模型", "自托管"] },
  { id: "langchain", name: "LangChain", kind: "framework", description: "用于构建 LLM 应用和 Agent 工作流的开源框架。", descriptionEn: "An open framework for building LLM applications and agent workflows.", source: "PyPI / npm", url: "https://docs.langchain.com/", tags: ["Agent", "工作流"] },
  { id: "mcp-registry", name: "MCP 官方 Registry", kind: "mcp", description: "Model Context Protocol 官方服务器目录，用于发现和核验 MCP 包。", descriptionEn: "The official Model Context Protocol server directory for discovery and verification.", source: "MCP 官方", url: "https://registry.modelcontextprotocol.io/", tags: ["MCP", "目录"] },
];

export const marketplaceKindLabels = {
  zh: { skill: "Skill", mcp: "MCP", tool: "工具", framework: "框架" },
  en: { skill: "Skill", mcp: "MCP", tool: "Tool", framework: "Framework" },
} as const;
