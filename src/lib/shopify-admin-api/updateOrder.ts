import request from "./util/request";

type TOderInput = {
    id: string
    tags?: string[]
    customAttributes?: {
        key: string
        value: string
    }[]
}

const updateOrder = async (input: TOderInput) => {
    const body = JSON.stringify({
        query: `mutation orderUpdate($input: OrderInput!) {
            orderUpdate(input: $input) {
                order {
                    id
                    tags
                }
            }
        }`,
        variables: {
            input
        }
    });

    return await request(body);
};

export default updateOrder;
