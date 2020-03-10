import { t } from 'testcafe';
import { takeSnapshot } from 'testcafe-blink-diff';

class ScreenshotSupport {
  constructor() { }

  async スクリーンショット() {
    const a: any = t
    a.testRun = {
      test: {
        fixture:
          { name: "name" },
        name: "aaa"
      }
    }
    await takeSnapshot(a)
  }

  async スクリーンショット2() {
    await t
      .wait(1000)
      .takeScreenshot({
        fullPage: true
      })
  }

  async リサイズ() {
    await t.resizeWindow(1020, 700)
  }
}
export default new ScreenshotSupport()
