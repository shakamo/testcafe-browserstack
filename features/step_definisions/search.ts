import { Given, When, Then, Before } from 'cucumber';

import Topページ from '../page_objects/top_page'
import 検索結果ページ from '../page_objects/search_result_page'

import サポート from '../support/support'

fixture`auth fixtures`;

Given(/^Topページで(.+)を検索する$/, async (t, [keyword]) => {
  await サポート.リサイズ()
  await Topページ.新しく検索する(keyword, "東京都")
  await サポート.スクリーンショット()
  await 検索結果ページ.条件を追加して検索する(keyword)
});
