function dijkstra(graph, sourceNode) {
    const distances = {};
    const visited_nodes = [];
    const unvisited_nodes = [];

    // Initialize the distances to each vertex to infinity, source to 0
    for (let node in graph) {
        distances[node] = Infinity;
        unvisited_nodes.push(node);
    }
    distances[sourceNode] = 0;

    // While there are unmarked verticies left in the graph
    while (unvisited_nodes.length > 0) {
        let currentNode = null;
        let min_distance = Infinity;

        // Select the unmarked vertex v with the lowest distances
        for (let node of unvisited_nodes) {
            if (distances[node] < min_distance) {
                min_distance = distances[node];
                currentNode = node;
            }
        }

        // Check if no more nodes
        if (currentNode == null) {
            break;
        }

        // Mark v with distance distances
        const index = unvisited_nodes.indexOf(currentNode);
        if (index > -1) {
            unvisited_nodes.splice(index, 1);
        }
        visited_nodes.push(currentNode);

        // For each edge (v, w)
        for (let neighbor in graph[currentNode]) {
            if (visited_nodes.includes(neighbor) == false) {
                const weight = graph[currentNode][neighbor];

                // distances( w ) = min ( distances ( w ) , distances ( v ) + weight of  ( v , w ) )
                const new_distance = distances[currentNode] + weight;
                if (new_distance < distances[neighbor]) {
                    distances[neighbor] = new_distance;
                }
            }
        }
    }

    return distances;
}
