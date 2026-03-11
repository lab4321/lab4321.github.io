/**
 * FIFO Page Replacement Algorithm
 * Simulates the First-In-First-Out page replacement policy.
 * Prompts: number of frames, then reference string (space separated).
 * Page count is inferred from the reference string length.
 */
const programFIFO = {
    name: 'fifo',
    prompts: [
        'Enter number of frames: ',
        'Enter reference string: '
    ],
    run(data) {
        const noFrames = parseInt(data[0]);
        const pages = data[1].trim().split(/\s+/).map(Number);
        const noPages = pages.length;
        const frames = new Array(noFrames).fill(-1);
        let faults = 0, next = 0;

        let out = 'Page Reference String | Frames (FIFO)\r\n';
        out += '-----------------------------------\r\n';

        for (let i = 0; i < noPages; i++) {
            const pg = pages[i];
            const hit = frames.includes(pg);
            if (!hit) {
                frames[next] = pg;
                next = (next + 1) % noFrames;
                faults++;
            }
            const frameStr = frames.map(f => f === -1 ? '-' : f).join(' ');
            out += `${pg}                   | ${frameStr}\r\n`;
        }
        out += `Total Page Faults: ${faults}\r\n`;
        return out;
    }
};
