function firstRecurringCharacter(values) {
  // Create a set to store values already seen.
  const seen = new Set();

  // Loop through values.
  for (let value of values) {
    // If value is in 'seen' collection, return value.
    if (seen.has(value)) {
      return value;
    }

    // Add value to 'seen' collection, process next value.
    seen.add(value);
  }

  // Return undefined if no recurring character found.
  return undefined;
}

module.exports = firstRecurringCharacter;