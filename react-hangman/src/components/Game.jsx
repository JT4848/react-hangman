import Graveyard from "./Graveyard";
import GuessForm from "./GuessForm";
import WordDisplay from "./WordDisplay";


const Game = () => {
  return(
    <>
      <h1>Game</h1>
      <Graveyard />
      <GuessForm />
      <WordDisplay />
    </>
  )
}

export default Game;