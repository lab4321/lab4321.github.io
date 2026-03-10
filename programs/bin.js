/**
 * Binary to Decimal Converter
 * Accepts a binary string and computes its decimal equivalent.
 */
const programBIN = {
    name: 'bin',
    prompts: ['Enter a binary number: '],
    run(data) {
        const b = data[0].trim();
        if (!/^[01]+$/.test(b)) return `Invalid binary number: ${b}\r\n`;
        const dec = parseInt(b, 2);
        return `Decimal equivalent: ${dec}\r\n`;
    }
};
