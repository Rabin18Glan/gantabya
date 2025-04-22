// Format message for display (e.g., handle markdown or escape sequences)
export function formatMessage(message: string): string {
    return message
      .replace(/\\\"/g, '"') // Decode escaped quotes
      .replace(/\\n/g, '\n') // Handle newlines
      .replace(/\*/g, '') // Remove markdown stars (example)
      .replace(/_/g, ''); // Remove underscores (example of handling other markdown)
  }
  