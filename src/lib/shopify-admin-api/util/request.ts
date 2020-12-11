const request = async (body: string) => {

    const endpoint = `/admin/api/2020-10/graphql.json`;

    let response = await fetch(endpoint, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-Shopify-Access-Token': process.env.SHOPIFY_PRIVATE_APP_PASSWORD || '',
        },
        body,
    });

    return response.json();
};

export default request;
