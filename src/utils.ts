const tryParseNumber = (number: string, defaultValue = 0) => {
  if (!number) {
    return defaultValue
  }

  const parsed = Number.parseFloat(number)
  if (Number.isNaN(parsed)) {
    return defaultValue
  }
  return parsed
}

const calculateLineTotal = (lineItem: LineItem | null): number => {
  if (!lineItem) {
    return 0
  }

  const unitCost = tryParseNumber(lineItem.unitCost as string)
  const quantity = tryParseNumber(lineItem.quantity as string)

  if (unitCost <= 0 || quantity <= 0) {
    return 0
  }

  return unitCost * quantity
}

const calculateSubTotal = (lineItems: LineItem[] | null): number => {
  if (!lineItems) {
    return 0
  }

  return lineItems.reduce((acc, current) => {
    const unitCost = tryParseNumber(current.unitCost as string)
    const quantity = tryParseNumber(current.quantity as string)
    return acc + unitCost * quantity
  }, 0)
}

const calculateTax = (lineItems: LineItem[] | null): number => {
  if (!lineItems) {
    return 0
  }

  return calculateSubTotal(lineItems) * 0.2
}

export { calculateLineTotal, calculateSubTotal, calculateTax }
