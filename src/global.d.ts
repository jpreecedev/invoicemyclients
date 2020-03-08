type LineItem = {
  item: string
  description: string
  unitCost: number | string
  quantity: number | string
}

type InvoiceActions = 'Save' | 'SaveAsDraft' | 'NagClientToPay' | 'DownloadPDF'
