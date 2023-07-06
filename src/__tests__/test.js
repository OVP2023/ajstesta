
test.each([[{name: 'Маг', health: 90},"healthy"],[{name: 'Маг', health: 40},"wounded"],[{name: 'Маг', health: 10},"critical"]])('validate login', (slovF,expected) => {
    
    const funcTask = require('../validator.js')
   
    const received = funcTask(slovF)

    expect(received).toBe(expected)
});

