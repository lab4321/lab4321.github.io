/**
 * Employee Details (Structure demo)
 * Takes employee code, name and salary and displays them.
 */
const programEMP = {
    name: 'emp',
    prompts: [
        'Enter employee CODE: ',
        'Enter employee NAME: ',
        'Enter employee SALARY: '
    ],
    run(data) {
        const code = data[0].trim();
        const name = data[1].trim();
        const salary = data[2].trim();
        return (
            `\r\n--- Employee Details ---\r\n` +
            `Employee CODE is: ${code}\r\n` +
            `Employee NAME is: ${name}\r\n` +
            `Employee SALARY is: ${salary}\r\n`
        );
    }
};
