Feature: The big search feature

  @stanbyTopPageHook
  Scenario: Topページで検索し、検索結果ページで検索条件絞り込みを行う
    Given Topページで<keyword>を検索する

    Examples:
      | keyword  | result-text |
      | facebook | Facebook    |
      | twitter  | Twitter     |
