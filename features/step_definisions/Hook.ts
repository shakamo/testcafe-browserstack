import { Given, When, Then, Before } from 'cucumber';
import { Selector, t } from 'testcafe';

Before('@stanbyTopPageHook', async () => {
  await t.navigateTo('https://jp.stanby.com');
});
