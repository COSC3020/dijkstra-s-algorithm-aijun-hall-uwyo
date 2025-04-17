const fs = require('fs');
const jsc = require('jsverify');
eval(fs.readFileSync('code.js') + '');

// Test 1: Hardcoded graph
const testExpected1 =
    jsc.forall(jsc.constant(true), function () {
        const graph = {
            A: { B: 2, C: 4 },
            B: { A: 2, C: 1, D: 7 },
            C: { A: 4, B: 1, D: 3 },
            D: { B: 7, C: 3 }
        };

        const expected = {
            A: 0,
            B: 2,
            C: 3,
            D: 6
        };

        const result = dijkstra(graph, 'A');

        for (let node in expected) {
            if (result[node] != expected[node]) {
                return false;
            }
        }

        return true;
    });

// Test 2: Hardcoded graph test 2
const testExpected2 =
    jsc.forall(jsc.constant(true), function () {
        const graph = {
            X: { Y: 5, Z: 10 },
            Y: { X: 5, Z: 2, W: 4 },
            Z: { X: 10, Y: 2, W: 1 },
            W: { Y: 4, Z: 1 }
        };

        const expected = {
            X: 0,
            Y: 5,
            Z: 7,
            W: 8
        };

        const result = dijkstra(graph, 'X');

        for (let node in expected) {
            if (result[node] != expected[node]) {
                return false;
            }
        }

        return true;
    });

// Test 3: Hardcoded test with unreachable nodes
const testExpectedUnreachable =
    jsc.forall(jsc.constant(true), function () {
        const graph = {
            A: { B: 1 },
            B: { A: 1 },
            C: { D: 2 },
            D: { C: 2 }
        };

        const expected = {
            A: 0,
            B: 1,
            C: Infinity,
            D: Infinity
        };

        const result = dijkstra(graph, 'A');

        for (let node in expected) {
            if (result[node] != expected[node]) {
                return false;
            }
        }

        return true;
    });

jsc.assert(testExpected1);
console.log("testExpected1 passed.")
jsc.assert(testExpected2);
console.log("testExpected2 passed.")
jsc.assert(testExpectedUnreachable);
console.log("testExpectedUnreachable passed.");
