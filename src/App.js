function Square({ vlaue }) {
  function handleClick() {
    console.log('clicked!');
  }

  return (
    <button 
      className="square"
      onClick={handleClick}
    >
      {vlaue}
    </button>
  )   
}

export default function Board() {
  return (
    <>
    <div className="board-row">
      <Square vlaue={1} />
      <Square vlaue={2} />
      <Square vlaue={3} />
    </div>
    <div className="board-row">
      <Square vlaue={4} />
      <Square vlaue={5} />
      <Square vlaue={6} />
    </div>
    <div className="board-row">
      <Square vlaue={7} />
      <Square vlaue={8} />
      <Square vlaue={9} />
    </div>
  </>
  );
}

