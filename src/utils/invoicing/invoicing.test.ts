import { calculateLineTotal, calculateSubTotal, calculateTax } from './invoicing'

describe('Utils tests', () => {
  describe('Single line', () => {
    it('should return 0 when line item is null', () => {
      const lineItem = null
      const expectedResult = 0

      const result = calculateLineTotal(lineItem)

      expect(result).toEqual(expectedResult)
    })

    it('should return 0 when unit cost is 0', () => {
      const lineItem: LineItem = {
        description: 'TEST_DESCRIPTION',
        item: 'TEST_ITEM',
        quantity: 0,
        unitCost: 0
      }

      const expectedResult = 0

      const result = calculateLineTotal(lineItem)

      expect(result).toEqual(expectedResult)
    })

    it('should return 0 when unit cost is -1', () => {
      const lineItem: LineItem = {
        description: 'TEST_DESCRIPTION',
        item: 'TEST_ITEM',
        quantity: 0,
        unitCost: -1
      }

      const expectedResult = 0

      const result = calculateLineTotal(lineItem)

      expect(result).toEqual(expectedResult)
    })

    it('should return 0 when unit cost is 1 and quantity is 0', () => {
      const lineItem: LineItem = {
        description: 'TEST_DESCRIPTION',
        item: 'TEST_ITEM',
        quantity: 0,
        unitCost: 1
      }

      const expectedResult = 0

      const result = calculateLineTotal(lineItem)

      expect(result).toEqual(expectedResult)
    })

    it('should return 1 when unit cost is 1 and quantity is 1', () => {
      const lineItem: LineItem = {
        description: 'TEST_DESCRIPTION',
        item: 'TEST_ITEM',
        quantity: 1,
        unitCost: 1
      }

      const expectedResult = 1

      const result = calculateLineTotal(lineItem)

      expect(result).toEqual(expectedResult)
    })

    it('should return 4 when unit cost is 2 and quantity is 2', () => {
      const lineItem: LineItem = {
        description: 'TEST_DESCRIPTION',
        item: 'TEST_ITEM',
        quantity: 2,
        unitCost: 2
      }

      const expectedResult = 4

      const result = calculateLineTotal(lineItem)

      expect(result).toEqual(expectedResult)
    })
  })

  describe('Sub Total', () => {
    it('should return 0 when line items is null', () => {
      const lineItems = null
      const expectedResult = 0

      const result = calculateSubTotal(lineItems)

      expect(result).toEqual(expectedResult)
    })

    it('should return 0 when all line items have 0 quantity and 0 unit cost', () => {
      const lineItems: LineItem[] = [
        {
          description: 'TEST_DESCRIPTION_1',
          item: 'TEST_ITEM_1',
          quantity: 0,
          unitCost: 0
        },
        {
          description: 'TEST_DESCRIPTION_2',
          item: 'TEST_ITEM_2',
          quantity: 0,
          unitCost: 0
        }
      ]

      const expectedResult = 0

      const result = calculateSubTotal(lineItems)

      expect(result).toEqual(expectedResult)
    })

    it('should return 2 when all line items have 1 quantity and 1 unit cost', () => {
      const lineItems: LineItem[] = [
        {
          description: 'TEST_DESCRIPTION_1',
          item: 'TEST_ITEM_1',
          quantity: 1,
          unitCost: 1
        },
        {
          description: 'TEST_DESCRIPTION_2',
          item: 'TEST_ITEM_2',
          quantity: 1,
          unitCost: 1
        }
      ]

      const expectedResult = 2

      const result = calculateSubTotal(lineItems)

      expect(result).toEqual(expectedResult)
    })

    it('should return 8 when all line items have 2 quantity and 2 unit cost', () => {
      const lineItems: LineItem[] = [
        {
          description: 'TEST_DESCRIPTION_1',
          item: 'TEST_ITEM_1',
          quantity: 2,
          unitCost: 2
        },
        {
          description: 'TEST_DESCRIPTION_2',
          item: 'TEST_ITEM_2',
          quantity: 2,
          unitCost: 2
        }
      ]

      const expectedResult = 8

      const result = calculateSubTotal(lineItems)

      expect(result).toEqual(expectedResult)
    })
  })

  describe('Tax', () => {
    it('should return 0 when lineItems is null', () => {
      const lineItems = null
      const expectedResult = 0

      const result = calculateTax(lineItems)

      expect(result).toEqual(expectedResult)
    })

    it('should return 0 when one line item has no quantity or unit cost', () => {
      const lineItems: LineItem[] = [
        {
          description: 'TEST_DESCRIPTION_1',
          item: 'TEST_ITEM_1',
          quantity: 0,
          unitCost: 0
        }
      ]
      const expectedResult = 0

      const result = calculateTax(lineItems)

      expect(result).toEqual(expectedResult)
    })

    it('should return 0 when two line items have no quantity or unit cost', () => {
      const lineItems: LineItem[] = [
        {
          description: 'TEST_DESCRIPTION_1',
          item: 'TEST_ITEM_1',
          quantity: 0,
          unitCost: 0
        },
        {
          description: 'TEST_DESCRIPTION_2',
          item: 'TEST_ITEM_2',
          quantity: 0,
          unitCost: 0
        }
      ]
      const expectedResult = 0

      const result = calculateTax(lineItems)

      expect(result).toEqual(expectedResult)
    })

    it('should return 20 when total cost is 100', () => {
      const lineItems: LineItem[] = [
        {
          description: 'TEST_DESCRIPTION_1',
          item: 'TEST_ITEM_1',
          quantity: 1,
          unitCost: 100
        }
      ]
      const expectedResult = 20

      const result = calculateTax(lineItems)

      expect(result).toEqual(expectedResult)
    })

    it('should return 40 when the total cost is 200', () => {
      const lineItems: LineItem[] = [
        {
          description: 'TEST_DESCRIPTION_1',
          item: 'TEST_ITEM_1',
          quantity: 1,
          unitCost: 100
        },
        {
          description: 'TEST_DESCRIPTION_2',
          item: 'TEST_ITEM_2',
          quantity: 1,
          unitCost: 100
        }
      ]
      const expectedResult = 40

      const result = calculateTax(lineItems)

      expect(result).toEqual(expectedResult)
    })

    it('should return 180 when total cost is 900', () => {
      const lineItems: LineItem[] = [
        {
          description: 'TEST_DESCRIPTION_1',
          item: 'TEST_ITEM_1',
          quantity: 3,
          unitCost: 300
        },
        {
          description: 'TEST_DESCRIPTION_2',
          item: 'TEST_ITEM_2',
          quantity: 0,
          unitCost: 0
        }
      ]
      const expectedResult = 180

      const result = calculateTax(lineItems)

      expect(result).toEqual(expectedResult)
    })
  })
})
