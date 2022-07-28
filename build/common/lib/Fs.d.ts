declare class Fs {
    /**
     *
     * @param err
     */
    private static isErrorNotFound;
    /**
     * Async awaited version of the check if a path resolves to a dir
     *
     * @param {string} path
     * @returns {Promise<boolean>}
     */
    isFolder(path: string): Promise<boolean>;
    /**
     *
     * @param path
     * @returns {Promise<boolean>}
     */
    isFile(path: string): Promise<boolean>;
    /**
     * Read a file
     *
     * @param {string} path
     * @returns {Promise<string>}
     */
    readFile(path: string): Promise<string>;
    /**
     *
     * @param path
     * @param data
     * @returns {Promise<void>}
     */
    writeFile(path: string, data: string): Promise<void>;
    /**
     *
     * @param path
     * @returns {Promise<void>}
     */
    remove(path: string): Promise<void>;
    /**
     *
     * @param path
     * @returns {Promise<void>}
     */
    emptyDir(path: string): Promise<void>;
    /**
     *
     * @param source
     * @param destination
     * @returns {Promise<void>}
     */
    copy(source: string, destination: string): Promise<void>;
}
declare const _default: Fs;
export default _default;
//# sourceMappingURL=Fs.d.ts.map