import * as requestFromServer from "./CountDownCrud";
export const getExampleData = (setExample) => {
    return requestFromServer.getExampleData().then((response) => {
        const res = response.data;
        switch (res.response_code) {
            case 0:
                return setExample(...res.results)
            default:
                break;
        }
    });
};