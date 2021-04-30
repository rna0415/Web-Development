
let backend_ip_address = '54.180.87.81:8000'


export const GetBackendIP = () => {

    try {
        return backend_ip_address
    } catch (error) {
        console.error(error);
    }
};
