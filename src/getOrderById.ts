const getOrderById = async (orderId: string) => {
    const Endpoint = `https://${process.env.HOST}/admin/api/2020-10/graphql.json`;
    const body = JSON.stringify({
        query: `query($id: ID!) {
            order(id: $id) {
                id
            }
        }`,
        variables: {
            id: 'gid://shopify/Order/' + orderId,
        },
    });

    const headers = new Headers({
        'Content-Type': 'application/json',
    });
    headers.append('X-Shopify-Access-Token', process.env.SHOPIFY_PRIVATE_APP_PASSWORD || '');

    let response = await fetch(Endpoint, {
        method: 'POST',
        headers,
        body,
    });

    return await response.json();
};

export default getOrderById;
