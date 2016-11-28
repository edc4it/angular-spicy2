describe('a test to check the karma/jasmine setup', () => {

    it('should run a trivial test', function () {
        const a = 10;
        const b = 4;
        const c =  a + b;
        expect(c).toBe(14)
    });

})
