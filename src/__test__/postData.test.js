const { postData } = require('../client/js/postData')

test('postData', async () => {
    // Arrange
    const mockJson = {};
    const mockResponse = {
        json: () => Promise.resolve(mockJson),
    };
    global.fetch = jest.fn(url => Promise.resolve(mockResponse));
    const baseURL = '/addData'
    const myData = {'dog': 'good boy'}

    // Act
    const response = await postData(baseURL, myData);

    // Assert
    expect(global.fetch).toHaveBeenCalledWith(
        '/addData',
        {
            method: "POST",
            credentials: "same-origin",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(myData)
        }
    );
    expect(response).toBe(mockJson);
})