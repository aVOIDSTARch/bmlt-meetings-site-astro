// Entry point for Deno
console.log("Hello from beneficial-binary!");

// If you need to export something, add it here
export function main() {
  console.log("Main function called");
}

// If this is meant to run directly
if (import.meta.main) {
  main();
}