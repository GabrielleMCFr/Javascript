let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

let overusedWords = ['really', 'very', 'basically'];

let unnecessaryWords = ['extremely', 'literally', 'actually' ];

// split string into array of words
const storyWords = story.split(' ')

// array without unnecessary words
const betterWords = storyWords.filter( word => {
  return !unnecessaryWords.includes(word)
})

// find how many time the overused words has been used
const overused = storyWords.filter( word => {
  return overusedWords.includes(word)
})
let eachoverused = overused.length

// find how many sentences there are
let countsentences = 1;
for (let i = 0; i < story.length; i++) {
  if (story[i] == '.' || story[i] == '!' || story[i] == '?') {
    countsentences++;
  }
}

console.log(`This story contains ${storyWords.length} words, ${countsentences} sentences and use overused words ${eachoverused} times.` )

// print text without overused words as a string
console.log(betterWords.join(' '))

// find which word has been used the most (other way than max())
let max = 0
let maxkey;
for (key in countingwords) {
  if (countingwords[key] > max) {
    max = countingwords[key]
    maxkey = key
  }
}

console.log(`The word '${maxkey}' appears the most, with ${max} times.`)