import request from "./util/request";

const getOrderById = async (orderId: string) => {
    const body = JSON.stringify({
        query: `query($id: ID!) {
            order(id: $id) {
                id
                tags
            }
        }`,
        variables: {
            id: 'gid://shopify/Order/' + orderId,
        },
    });

    const response = await request(body);

    return response.data.order;
};

export default getOrderById;
