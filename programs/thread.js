/**
 * Thread Creation (Pthread demo)
 * Simulates the output of creating a pthread and joining it.
 */
const programTHREAD = {
    name: 'thread',
    prompts: [],   // No input needed
    run() {
        const id = 140224536733440;
        return (
            `Main thread: Creating a new thread...\r\n` +
            `Main thread: New thread created with ID ${id}.\r\n` +
            `Thread says: Hello, world! I am a new thread.\r\n` +
            `Thread finishes execution.\r\n` +
            `Main thread: The new thread has finished. Main thread is exiting.\r\n`
        );
    }
};
