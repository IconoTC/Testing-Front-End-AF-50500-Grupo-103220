export const fetchData = (callback: (data: string) => void): void => {
    setTimeout(() => {
        const data = 'Fetched Data';
        callback(data);
    }, 1000);
};

export const fetchDataPromiseOk = (): Promise<string> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const data = 'Fetched Data';
            resolve(data);
        }, 1000);
    });
};

export const fetchDataPromiseError = (): Promise<string> => {
    return new Promise((_, reject) => {
        setTimeout(() => {
            reject(new Error('Failed to fetch data'));
        }, 1000);
    });
};

export const fetchDataPromise = (isOK = true): Promise<string> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {    
            if (!isOK) {
                reject(new Error("Failed to fetch data"));
            } else {
                const data = "Fetched Data";
                resolve(data);
            }
        }, 1000);
    });
}
