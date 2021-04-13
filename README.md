## Climbing Stairs
function `climbingStairs` that will return the total number of ways you can reach the top.

`climbingStairs` should take the following parameter:

`totalSteps`: an integer, total n steps to the top.

### Constraints:

`0 <= totalSteps < infinity`

For each given step, you can only take 1 or 2 steps at a time
### Samples
Sample Input:

 Given: 2

 Output: 2

There are two ways to the top (1 + 1) and (2).

Sample Input:

 Given: 3

 Output: 3

There are three ways to the top (1 + 1 + 1), (1 + 2), and (2 + 1).

Sample Input:

 Given: 4

 Output: 5

There are five ways to the top (1 + 1 + 1 + 1), (1 + 1 + 2), (1 + 2 + 1), (2 + 1 + 1), (2 + 2).

### Analysis

`totalSteps` : 0, 1, 2, 3, 4, 5, 6

`waysToGoTop`: 0, 1, 2, 3, 5, 8, 13

System is a good candiate of `f(n) = f(n -1) + f(n-2)` aka Fibonacci Series
