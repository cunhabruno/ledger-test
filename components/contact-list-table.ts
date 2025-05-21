import { Locator, Page } from '@playwright/test'

export class ContactListTable {
  readonly page: Page
  readonly table: Locator
  readonly headerRow: Locator
  readonly bodyRows: Locator
  readonly allRows: Locator
  readonly headerCells: Locator
  readonly rowByIndex: (index: number) => Locator
  readonly rowByTdText: (tdText: string) => Locator
  readonly cellByRowAndCol: (rowIndex: number, colIndex: number) => Locator
  constructor(tableParentLocator: Locator) {
    this.page = tableParentLocator.page()
    this.table = tableParentLocator.locator('table')
    this.headerRow = this.table.locator('thead tr')
    this.bodyRows = this.table.locator('.contactTableBodyRow')
    this.allRows = this.table.locator('.contactTableBodyRow')
    this.headerCells = this.headerRow.locator('th')
    this.rowByIndex = (index: number) => this.allRows.nth(index)
    this.rowByTdText = (tdText: string) =>
      this.allRows.filter({
        has: this.page.locator(`td >> text=${tdText}`),
      })
    this.cellByRowAndCol = (rowIndex: number, colIndex: number) =>
      this.rowByIndex(rowIndex).locator('td').nth(colIndex)
  }
  async getCellByHeader(
    rowIndex: number,
    headerText: string
  ): Promise<Locator> {
    const headerTexts = await this.headerCells.allTextContents()
    // Add +1 because there is a hidden column in the table
    const colIndex = headerTexts.indexOf(headerText) + 1

    if (colIndex === -1) {
      throw new Error(
        `Header text "${headerText}" not found in table headers: ${headerTexts.join(
          ', '
        )}`
      )
    }
    return this.cellByRowAndCol(rowIndex, colIndex)
  }
}
