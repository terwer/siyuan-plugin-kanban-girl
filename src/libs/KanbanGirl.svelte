<script lang="ts">
  import Paul_Pio from "../service/pio"
  import { onMount } from "svelte"

  export let pluginInstance
  let modelWidth = 320
  let modelHeight = 500

  /**
   * 初始化之后，可通过 win.kanbanGirlPio 获取模型实例
   *
   * @param cfg - 模型配置
   */
  const initPio = (cfg: any) => {
    const win = window as any
    const pio = new Paul_Pio(cfg)
    pio.start()
    win.kanbanGirlPio = pio
    pluginInstance.logger.info("window.kanbanGirlPio mounted")
  }

  onMount(async () => {
    const cfg = {
      mode: "fixed",
      hidden: false,
      content: {
        welcome: ["欢迎使用思源笔记！", "今天天气不错，一起来玩吧！"],
        // link: "https://github.com/terwer",
        skin: ["想看看我的新衣服吗？", "新衣服真漂亮~"],
        // custom: [
        //   {
        //     selector: ".comment-form",
        //     text: "欢迎参与本文评论，别发小广告噢~",
        //   },
        //   {
        //     selector: ".home-social a:last-child",
        //     text: "在这里可以了解博主的日常噢~",
        //   },
        //   { selector: ".post-item a", type: "read" },
        //   {
        //     selector: ".post-content a, .page-content a",
        //     type: "link",
        //   },
        // ],
      },
      // night: "single.night()",
      model: [
        "/plugins/siyuan-plugin-kanban-girl/models/416/model.json",
        "/plugins/siyuan-plugin-kanban-girl/models/pio/model.json",
      ],
    }
    initPio(cfg)
  })
</script>

<div class="pio-container left">
  <div class="pio-action" />
  <canvas id="pio" width={modelWidth} height={modelHeight} />
</div>

<style lang="stylus">
  #pio
    width 160px
    height 250px
</style>
