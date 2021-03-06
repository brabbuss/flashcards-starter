const testdata = [{
  "id": 11,
  "question": "What allows you to define a set of related information using key-value pairs?",
  "answers": ["object", "array", "function"],
  "correctAnswer": "object"
}, {
  "id": 12,
  "question": "What is a comma-separated list of related values?",
  "answers": ["array", "object", "function"],
  "correctAnswer": "array"
}, {
  "id": 13,
  "question": "What type of prototype method directly modifies the existing array?",
  "answers": ["mutator method", "accessor method", "iteration method"],
  "correctAnswer": "mutator method"
}, {
  "id": 14,
  "question": "What type of prototype method does not modify the existing array but returns a particular representation of the array?",
  "answers": ["mutator method", "accessor method", "iteration method"],
  "correctAnswer": "accessor method"
}, {
  "id": 15,
  "question": "What type of prototype method loops through the existing array and applies a callback function that may mutate each element and return a new value?",
  "answers": ["mutator method", "accessor method", "iteration method"],
  "correctAnswer": "iteration method"
}, {
  "id": 16,
  "question": "What is an example of a mutator method?",
  "answers": ["sort()", "map()", "join()"],
  "correctAnswer": "sort()"
}, {
  "id": 17,
  "question": "Which array prototype is not an accessor method?",
  "answers": ["join()", "slice()", "splice()"],
  "correctAnswer": "splice()"
}, {
  "id": 18,
  "question": "What do iterator methods take in as their first argument?",
  "answers": ["callback function", "current element", "an array"],
  "correctAnswer": "callback function"
}, {
  "id": 19,
  "question": "What does the callback function for find() return?",
  "answers": ["boolean", "array", "object"],
  "correctAnswer": "boolean"
}, {
  "id": 20,
  "question": "Which iteration method returns the first array element where the callback function returns true",
  "answers": ["find()", "filter()", "forEach()"],
  "correctAnswer": "find()"
}]

module.exports = testdata;
