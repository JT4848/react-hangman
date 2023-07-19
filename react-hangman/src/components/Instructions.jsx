- As a user I should be able to input a letter so that the game can check if the letter is in the phrase.
    - Form "Input a letter"
    - Display each letter of alphabet and user can click
    - As a developer listen for click event

-As a user I should not be able to guess a letter that has already been guessed.
    - Display incorrect guesses in a "graveyard"

-A random word should be generated or "chosen". This will be the word the user will try to guess.
    - Hard code?
    - API to get random?

-As a user I should be able to see how many guesses are left.
    -Remaining guesses - (State)

- As a user i should initially be able to see the word represented with underscores
-As a user, when I submit a "guess" (letter) I should either see a correct guess in the word OR an
 incorrect guess in the "graveyard".
    - Decrement the remaining guess

-As a user when there are no remaining guesses, or I have correctly guessed the word,
  I should be notified and have the option to play again.
   - Track wins and losses?

-I should be able to navigate a page of instructions and return without losing progress on current word.

STRETCH GOALS:
-As a user I should have the option to "give up" and see the word. This will count as a loss.
-As a user I could have hint
   -Description