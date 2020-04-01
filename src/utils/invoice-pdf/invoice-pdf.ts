import {
  Content,
  BufferOptions,
  ContentTable,
  ContentColumns,
  ContentStack
} from 'pdfmake/interfaces'

declare global {
  interface Window {
    pdfMake: {
      createPdf({
        content
      }: {
        content: Content
      }): {
        open(options?: BufferOptions, win?: Window | null): void
      }
    }
  }
}

const buildHeaderInformation = (params: InvoiceFormData): ContentColumns => ({
  columns: [
    {
      stack: [
        {
          text: params.contactName!,
          margin: [0, 30, 0, 30]
        },
        {
          text: 'Bill To',
          margin: [0, 0, 0, 0]
        },
        {
          text: params.companyName!
        }
      ]
    },
    {
      stack: [
        {
          text: 'INVOICE',
          fontSize: 25
        },
        {
          text: `# ${params.invoiceNumber}`,
          fontSize: 15,
          margin: [0, 0, 0, 30]
        },
        {
          columns: [
            {
              width: 50,
              text: ''
            }
          ]
        }
      ],
      alignment: 'right'
    }
  ],
  columnGap: 10,
  margin: [0, 0, 0, 30]
})

const buildLineItem = () => (lineItem: LineItem) => [
  lineItem.description,
  { text: String(lineItem.quantity), alignment: 'right' },
  { text: `${lineItem.unitCost}`, alignment: 'right' },
  {
    text: `${((lineItem.quantity as number) * (lineItem.unitCost as number)).toFixed(2)}`,
    alignment: 'right'
  }
]

const buildLineItemsTable = (params: InvoiceFormData): ContentTable => ({
  table: {
    widths: ['*', '11%', '11%', '18%'],
    headerRows: 1,
    body: [
      [
        'Item',
        { text: 'Quantity', alignment: 'right' },
        { text: 'Rate', alignment: 'right' },
        { text: 'Amount', alignment: 'right' }
      ],
      ...params.lineItems.map(buildLineItem())
    ]
  },
  layout: 'lightHorizontalLines'
})

const buildTotal = (params: InvoiceFormData): ContentTable => {
  const total = params.lineItems.reduce((sum, lineItem) => {
    return sum + (lineItem.quantity as number) * (lineItem.unitCost as number)
  }, 0)

  return {
    table: {
      widths: ['*', '18%'],
      body: [
        [
          {
            text: 'Total',
            alignment: 'right'
          },
          {
            text: `${total.toFixed(2)}`,
            alignment: 'right'
          }
        ]
      ]
    },
    layout: 'noBorders',
    margin: [0, 0, 0, 30]
  }
}

const saveInvoicePDF = (params: InvoiceFormData) => {
  window.pdfMake
    .createPdf({
      content: [buildHeaderInformation(params), buildLineItemsTable(params), buildTotal(params)]
    })
    .open()
}

export { saveInvoicePDF }
