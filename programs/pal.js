/**
 * Palindrome Checker
 * Checks if a given string reads the same forwards and backwards.
 */
const programPAL = {
    name: 'pal',
    prompts: ['Enter a string: '],
    run(data) {
        const s = data[0].trim();
        const rev = s.split('').reverse().join('');
        return (s === rev
            ? `${s} is a palindrome.\r\n`
            : `${s} is not a palindrome.\r\n`);
    }
};
