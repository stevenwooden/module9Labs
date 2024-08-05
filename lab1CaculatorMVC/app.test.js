const request = require('supertest');
const app = require('./app');


describe('Calculator Routes', () => {
    let number1 = Math.floor(Math.random() * 1_000_000)
    let number2 = Math.floor(Math.random() * 1_000_000)

    test('Get / calculator/add => sum of numbers', () => {
        return request(app)
            .get(`/calculator/add?num1=${number1}&num2=${number2}`)

            .expect('Content-Type', /json/)
            .expect(200)

            .then((response) => {
                expect(response.body).toEqual({
                    result: (number1 + number2)
                })
            })
    })
    test('Get / calculator/sub => subtraction of numbers', () => {
        return request(app)
            .get(`/calculator/subtract?num1=${number1}&num2=${number2}`)

            .expect('Content-Type', /json/)
            .expect(200)

            .then((response) => {
                expect(response.body).toEqual({
                    result: (number1 - number2)
                })
            })
    })
    test('Get / calculator/times => multiplication of numbers', () => {
        return request(app)
            .get(`/calculator/multiplication?num1=${number1}&num2=${number2}`)

            .expect('Content-Type', /json/)
            .expect(200)

            .then((response) => {
                expect(response.body).toEqual({
                    result: (number1 * number2)
                })
            })
    })
    test('Get / calculator/quo => division of numbers', () => {
        return request(app)
            .get(`/calculator/division?num1=${number1}&num2=${number2}`)

            .expect('Content-Type', /json/)
            .expect(200)

            .then((response) => {
                expect(response.body).toEqual({
                    result: (number1 / number2)
                })
            })
    })
})   
