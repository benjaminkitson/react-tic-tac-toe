const mrRobot = (board, setBoard) => {

  const newBoard = [...board];

  const victoryAims = {
    firstRow: [[0, 0], [0, 1], [0, 2]],
    secondRow: [[1, 0], [1, 1], [1, 2]],
    thirdRow: [[2, 0], [2, 1], [2, 2]],
    firstCol: [[0, 0], [1, 0], [2, 0]],
    secondCol: [[0, 1], [1, 1], [2, 1]],
    thirdCol: [[0, 2], [1, 2], [2, 2]],
    firstDiag: [[0, 0], [1, 1], [2, 2]],
    secondDiag: [[0, 2], [1, 1], [2, 0]]
  };

  const finishHim = {};

  Object.keys(victoryAims).forEach((option) => {
    const twoOs = victoryAims[option].filter(square => newBoard[square[0]][square[1]] === 'O').length === 2;
    const freeSpace = victoryAims[option].some(square => newBoard[square[0]][square[1]] === undefined);
    if (twoOs && freeSpace) {
      finishHim[option] = victoryAims[option];
    }
  });

  const defenceMode = {};

  Object.keys(victoryAims).forEach((option) => {
    const twoXs = victoryAims[option].filter(square => newBoard[square[0]][square[1]] === 'X').length === 2;
    const freeSpace = victoryAims[option].some(square => newBoard[square[0]][square[1]] === undefined);
    if (twoXs && freeSpace) {
      defenceMode[option] = victoryAims[option];
    }
  });

  let options;

  if (Object.keys(finishHim).length) {
    options = finishHim;
  } else if (Object.keys(defenceMode).length) {
    options = defenceMode;
  } else {
    options = {};
  }

  if (!Object.keys(options).length) {
    Object.keys(victoryAims).forEach((option) => {
      const oneO = victoryAims[option].some(square => newBoard[square[0]][square[1]] === 'O');
      const freeSpace = victoryAims[option].some(square => newBoard[square[0]][square[1]] === undefined);
      const noXs = victoryAims[option].every(square => newBoard[square[0]][square[1]] !== 'X');
      if (oneO && freeSpace && noXs) {
        options[option] = victoryAims[option];
      }
    });
  }

  if (Object.keys(options).length) {
    const optionsKeys = Object.keys(options);
    const choice = optionsKeys[Math.floor(Math.random() * optionsKeys.length)];
    let cpuMarked = false;
    while (cpuMarked === false) {
      const squareChoice = options[choice][Math.floor(Math.random() * 3)];
      if ((newBoard[squareChoice[0]][squareChoice[1]]) === undefined) {
        newBoard[squareChoice[0]][squareChoice[1]] = 'O';
        cpuMarked = true;
        setTimeout(() => {
          setBoard(newBoard);
        }, 500);
      }
    }
  } else {
    let cpuMarked = false;
    while (cpuMarked === false) {
      let cpuRow;
      let cpuCol;
      if (!board[1][1]) {
        [cpuRow, cpuCol] = [1, 1];
      } else {
        cpuRow = Math.floor(Math.random() * 3);
        cpuCol = Math.floor(Math.random() * 3);
      }
      if (board[cpuRow][cpuCol] === undefined) {
        const newBoard = [...board];
        newBoard[cpuRow][cpuCol] = "O";
        cpuMarked = true;
        setTimeout(() => {
          setBoard(newBoard);
        }, 500);
      }
    }
  }
};

export default mrRobot;
