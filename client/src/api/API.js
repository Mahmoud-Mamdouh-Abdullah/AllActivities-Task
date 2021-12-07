const BASE_URL = 'http://localhost:3001/api';


export const insertRecord = async (data) => {
    return new Promise((resolve, reject) => {
        try {
            fetch(BASE_URL + '/records', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            }).then(result => {
                return resolve(result);
            })

        } catch (err) {
            reject(err.message);
        }
    });
}


export const getRecords = () => {
    return new Promise((resolve, reject) => {
        fetch(BASE_URL + '/records', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(result => {
            return resolve(result.json());
        })
    });
}