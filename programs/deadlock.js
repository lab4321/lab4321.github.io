/**
 * Deadlock Detection
 * Simulates the Banker's Algorithm deadlock detection.
 * Uses hardcoded state identical to the lab program.
 */
const programDEADLOCK = {
    name: 'deadlock',
    prompts: [],   // No input needed
    run() {
        // State from the lab program:
        // P=4, R=3
        // available = [1, 5, 2]
        // allocation = [[0,1,0],[2,0,0],[3,0,3],[2,1,1]]
        // request    = [[0,0,0],[2,0,2],[0,0,0],[1,0,0]]
        const P = 4, R = 3;
        const available = [1, 5, 2];
        const allocation = [[0, 1, 0], [2, 0, 0], [3, 0, 3], [2, 1, 1]];
        const request = [[0, 0, 0], [2, 0, 2], [0, 0, 0], [1, 0, 0]];

        const finish = new Array(P).fill(false);
        const work = [...available];
        let changed = true;

        while (changed) {
            changed = false;
            for (let p = 0; p < P; p++) {
                if (!finish[p]) {
                    const canRun = request[p].every((r, j) => r <= work[j]);
                    if (canRun) {
                        for (let j = 0; j < R; j++) work[j] += allocation[p][j];
                        finish[p] = true;
                        changed = true;
                    }
                }
            }
        }

        const deadlocked = finish.map((f, i) => f ? null : i).filter(i => i !== null);
        if (deadlocked.length === 0) {
            return 'Deadlocked processes: None\r\n';
        }
        return `Deadlocked processes: ${deadlocked.join(' ')}\r\n`;
    }
};
