function processNames() {
  let inputText = document.getElementById("inputNames").value;

  let sortedNames = inputText
    .split("\n")
    .map((name) => name.trim()) // Remove leading and trailing spaces
    .map((name) => name.replace(/^\d+\s*[-.]?\s*/, "")) // Remove numbering with "." or "-" (e.g., "1. Name" or "2 - Name")
    .map((name) => name.replace(/\s+/g, " ")) // Ensure only one space between words
    .filter((name) => name !== "") // Remove empty lines
    .sort(); // Sort alphabetically

  // Add correct numbering
  let numberedNames = sortedNames.map((name, index) => `${index + 1}. ${name}`);

  // Update the output field
  document.getElementById("outputNames").value = numberedNames.join("\n");
}

// Attach event listener to button
document
  .getElementById("processButton")
  .addEventListener("click", processNames);
