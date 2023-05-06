function solution(array, commands) {
  return commands.map(command => {
    return array
        .filter((a, i) => i >= (command[0] - 1) && i <= (command[1] - 1))
        .sort((a, b) => a - b)[command[2] - 1]
  })
}