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

$O(V)$

While Loop: `while (unvisited_nodes.length > 0)`

This while loop runs until all verticies have been visited. In the worst case every vertex will be
visited once:

$O(V)$

First Inner For Loop: `for (let node of unvisited_nodes) {`

Within the while conditional we search through all unvisited nodes to find the node with the smallest distance so far. This is also a linear search.

$O(V)$

Second Inner For Loop: `for (let neighbor in graph[currentNode]) {`

Within the while conditional we iterate through all of the adjacent nodes now (neighbors) of the current node. In other words we go through all nodes directly connected to it by an edge. Each edge is examined once from each of its connecting nodes over the entire algorithm run.

$O(E)$

General:

The while loop, with the nested for loops create the following:

$O(V) * (O(V) + O(E))= \Theta(V^2 + E)$

The dominate term remains, and therefore we are left with:

$\Theta(V^2)$

My implementation algorithm performs V iterations of searching through V unvisited nodes in other words- making this quadratic runtime.

- Referenced https://www.geeksforgeeks.org/introduction-to-dijkstras-shortest-path-algorithm/ for dijkstra's algorithm reference and code. All code was written by me, just used this resource for references.

- Used Testing Suite code from previous repositories to figure out how to write tests and get them on the github autorunner

"I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice."
