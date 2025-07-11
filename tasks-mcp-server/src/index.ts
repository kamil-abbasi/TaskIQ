import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import { StreamableHTTPServerTransport } from "@modelcontextprotocol/sdk/server/streamableHttp.js";
import { z } from 'zod';
import { tasksApi } from "./api/index.js";
import { Task } from "./types/index.js";

const server = new McpServer({
  name: 'tasks',
  version: "1.0.0",
}, {
  capabilities: {
    resources: {},
    tools: {},
  }
})

async function main() {
  const transport = new StdioServerTransport();

  await server.connect(transport);

  console.error("Tasks MCP Server running on http");
}

server.tool(
  'find-tasks',
  'Finds tasks',
  {},
  async ({ }) => {
    try {
      const tasks = await tasksApi.find()
      const formattedTasks = tasks.map((task) => formatTask(task));

      return {
        content: [
          {
            type: "text",
            text: `Retrieved tasks:\n${formattedTasks}`
          }
        ]
      }
    } catch (err) {
      return {
        content: [
          {
            type: "text",
            text: "Failed to retrieve tasks"
          }
        ]
      }
    }

  }
)

main().catch((error) => {
  console.error('Fatal error in main(): ', error);
  process.exit(1);
})

function formatTask(task: Task): string {
  let str = ``;

  str += '--------------\n';
  str += `name: ${task.name}\n`;
  str += `completed: ${task.completed}\n`;
  str += `id: ${task.id}\n`;
  str += '--------------\n';

  return str;
}