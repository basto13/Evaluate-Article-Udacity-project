const {submitAction} = require('../client/js/handleSubmit')

describe('"submitAction()" was created' , () => {
    test('if created, return True', async () => {
        expect(submitAction).toBeDefined();
    });
});
describe('"submitAction()" is a function' , () => {
    test('check the type', async () => {
        expect(typeof submitAction).toBe("function");
    });
});