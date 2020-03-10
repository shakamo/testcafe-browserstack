import { Selector, t } from 'testcafe';

class 検索結果ページ {
  private キーワード = Selector('#q')
  private 勤務地 = Selector('#l')
  private 検索ボタン = Selector('#srch-btn')
  private 雇用形態 = Selector(".menu-child-list .list-item .link").withText("正社員")

  async 新しく検索する(keyword = "", location = "") {
    await t.typeText(this.キーワード, keyword, { replace: true })
    await t.typeText(this.勤務地, location, { replace: true })
    await t.click(this.検索ボタン).click(this.雇用形態)
  }

  async 条件を追加して検索する(keyword = "", location = "") {
    await t.typeText(this.キーワード, " " + keyword)
    await t.typeText(this.勤務地, " " + location)
    await t.click(this.検索ボタン)
  }
}
export default new 検索結果ページ
