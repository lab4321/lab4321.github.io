/**
 * Memory Allocation Demo (malloc / free)
 * Accepts a count and then values, then echoes them back.
 */
const programMEMORY = {
    name: 'memory',
    prompts: [
        'Enter number of elements: ',
        'Enter elements: '
    ],
    run(data) {
        const elems = data[1].trim().split(/\s+/).join(' ');
        return (
            `Entered elements are: ${elems}\r\n` +
            `Memory successfully deallocated.\r\n`
        );
    }
};
