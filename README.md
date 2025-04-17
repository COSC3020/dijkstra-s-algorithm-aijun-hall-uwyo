# Dijkstra's Algorithm

Recall the pseudocode for Dijkstra's algorithm:
- initialize the dist to each vertex to $\infty$, source to 0
- while there are unmarked vertices left in the graph
    - select the unmarked vertex $v$ with the lowest dist
    - mark $v$ with distance dist
    - for each edge $(v,w)$
        - dist($w$) = min $\left(\textrm{dist}(w), \textrm{dist}(v) + \textrm{weight of }(v, w)\right)$

Implement Dijkstra's algorithm. Start with the template I provided in `code.js`
and test your new function.

I have not provided any test code, but you can base yours on test code from
other exercises. Your tests must check the correctness of the result of running
the function and run automatically when you commit through a GitHub action.

The choice of data structures is up to you -- your implementation does not have
to be the most efficient one, but please make sure that it is not unnecessarily
inefficient.

## Runtime Analysis

What is the big $\Theta$ complexity of your implementation? Add your
answer, including your reasoning, to this markdown file.

<hr>

First For Loop: `for (let node in graph) {`

This loop initializes the distance for each vertex to infinity, and adds all verticies to the
unvisited nodes list

$O(n)$

While Loop: `while (unvisited_nodes.length > 0)`

This while loop runs until all verticies have been visited. In the worst case every vertex will be
visited once:

$O(n)$

First Inner For Loop: `for (let node of unvisited_nodes) {`

Within the while conditional we search through all unvisited nodes to find the node with the smallest distance so far. This is also a linear search.

$O(n)$

Second Inner For Loop: `for (let neighbor in graph[currentNode]) {`

Within the while conditioanl we iterate through all of the adjacent nodes now (neighbors) of the current node. Every edge is examined once, so therefore this loop runs for $O(E)$.

$O(n)$ where $n = E$

General:

The while loop, with the nested for loops create the dominating term of:

$O(n) * O(n)$ = $\Theta(n^2)$ where $n = V$ (nodes are equal to verticies).

My implementation algorithm performs V iterations of searching through V unvisited nodes in other words- making this quadratic runtime.
