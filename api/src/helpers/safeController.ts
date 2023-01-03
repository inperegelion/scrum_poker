export async function safeController(
    func: () => Promise<void> | void,
    res: any
) {
    try {
        func();
    } catch (error) {
        console.error('⛔️ Controller caught an error!');
        res.status(500).json({ message: error?.message });
    }
}
