import { Selector, t } from 'testcafe';

class Topページ {
  private キーワード = Selector('#q')
  private 勤務地 = Selector('#l')
  private 検索ボタン = Selector('#srch-btn')

  async 新しく検索する(keyword = "", location = "") {
    await t.typeText(this.キーワード, keyword, { replace: true })
    await t.typeText(this.勤務地, location, { replace: true })
    await t.click(this.検索ボタン)
  }

  async 条件を追加して検索する(keyword = "", location = "") {
    await t.typeText(this.キーワード, " " + keyword)
    await t.typeText(this.勤務地, " " + location)
    await t.click(this.検索ボタン)
  }
}
export default new Topページ
