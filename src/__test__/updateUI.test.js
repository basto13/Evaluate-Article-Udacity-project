const updateUI = require('../client/js/updateUI').updateUI

test('updateUI function', async () => {
    // Arrange
    const mockJson = {
        agreement: '666',
        subjectivity: '777',
        text: '555'
    };
    const mockResponse = {
        json: () => Promise.resolve(mockJson),
    };
    global.fetch = jest.fn(url => Promise.resolve(mockResponse));

    const mockAgreementObject = {}
    const mockSubjectivityObject = {}
    const mockTextObject = {}

    global.document = {
        getElementById: (elementId) => {
            if (elementId === 'agreement') {
                return mockAgreementObject
            }
            if (elementId === 'subjectivity') {
                return mockSubjectivityObject
            }
            if (elementId === 'text') {
                return mockTextObject
            }
        }
    }

    // Act
    await updateUI()

    // Assert
    expect(mockAgreementObject.innerHTML).toBe(`Agreement of the article: ${mockJson.agreement}`)
    expect(mockSubjectivityObject.innerHTML).toBe(`Subjectivity: ${mockJson.subjectivity}`)
    expect(mockTextObject.innerHTML).toBe(`Text: ${mockJson.text}`)

})