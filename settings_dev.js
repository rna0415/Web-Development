
let backend_ip_address = '127.0.0.1:8000'


export const GetBackendIP = () => {

    try {
        return backend_ip_address
    } catch (error) {
        console.error(error);
    }
};
