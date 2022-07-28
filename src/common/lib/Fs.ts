import fs from 'fs-extra';

class Fs {
    /**
     *
     * @param err
     */
    private static isErrorNotFound(err: any): boolean {
        return err.code === 'ENOENT';
    }

    /**
     * Async awaited version of the check if a path resolves to a dir
     *
     * @param {string} path
     * @returns {Promise<boolean>}
     */
    public async isFolder(path: string): Promise<boolean> {
        const stats = await fs.stat(path).catch((err): boolean => {
            if (Fs.isErrorNotFound(err))
                return false;

            throw err;
        });

        // @ts-ignore
        return !stats ? stats : stats.isDirectory();
    }

    /**
     *
     * @param path
     * @returns {Promise<boolean>}
     */
    public async isFile(path: string): Promise<boolean> {
        const stats = await fs.stat(path).catch((err): boolean => {
            if (Fs.isErrorNotFound(err))
                return false;

            throw err;
        });

        // @ts-ignore
        return !stats ? stats : stats.isFile();
    }

    /**
     * Read a file
     *
     * @param {string} path
     * @returns {Promise<string>}
     */
    public async readFile(path: string): Promise<string> {
        return fs.readFile(path, 'utf8');
    }

    /**
     *
     * @param path
     * @param data
     * @returns {Promise<void>}
     */
    public async writeFile(path: string, data: string): Promise<void> {
        await fs.writeFile(path, data, { encoding: 'utf8', flag: 'w' });
    }

    /**
     *
     * @param path
     * @returns {Promise<void>}
     */
    public async remove(path: string): Promise<void> {
        await fs.remove(path);
    }

    /**
     *
     * @param path
     * @returns {Promise<void>}
     */
    public async emptyDir(path: string): Promise<void> {
        await fs.emptyDir(path);
    }

    /**
     *
     * @param source
     * @param destination
     * @returns {Promise<void>}
     */
    public async copy(source: string, destination: string): Promise<void> {
        await fs.copy(source, destination);
    }
}

export default new Fs();
