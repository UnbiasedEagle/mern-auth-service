import { describe, expect, it } from '@jest/globals'
import request from 'supertest'
import app from '../src/app'
import { calculateDiscount } from '../src/utils'

describe('calculateDiscount', () => {
    it('returns the discount amount for a percentage', () => {
        expect(calculateDiscount(100, 10)).toBe(10)
    })

    it('returns 0 when percentage is 0', () => {
        expect(calculateDiscount(250, 0)).toBe(0)
    })

    it('handles fractional results', () => {
        expect(calculateDiscount(99.99, 15)).toBeCloseTo(14.9985)
    })
})

describe('GET /', () => {
    it('returns 200 with welcome message', async () => {
        const res = await request(app).get('/')

        expect(res.statusCode).toBe(200)
        expect(res.text).toBe('Welcome to auth service')
    })
})
