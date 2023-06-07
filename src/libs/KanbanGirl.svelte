<script lang="ts">
  import Paul_Pio from "../service/pio.js"
  import { onMount } from "svelte"

  export let pluginInstance

  const initPio = (cfg: any) => {
    new Paul_Pio({
      mode: "fixed",
      hidden: true,
      content: {
        welcome: [
          "欢迎来到保罗的小宇宙！",
          "今天天气不错，一起来玩吧！",
          "来试试博主的新个人网站 beta.paul.ren 吗",
          "博主每天都有折腾记录，欢迎点击上方房子链接访问~",
        ],
        link: "https://paul.ren/about",
        custom: [
          {
            selector: ".comment-form",
            text: "欢迎参与本文评论，别发小广告噢~",
          },
          {
            selector: ".home-social a:last-child",
            text: "在这里可以了解博主的日常噢~",
          },
          { selector: ".post-item a", type: "read" },
          {
            selector: ".post-content a, .page-content a",
            type: "link",
          },
        ],
      },
      night: "single.night()",
      model: ["/plugins/siyuan-plugin-kanban-girl/models/pio/model.json"],
    })
  }

  onMount(async () => {
    const cfg = {}
    initPio(cfg)
  })
</script>

<div class="pio-container left">
  <div class="pio-action" />
  <canvas id="pio" width="280" height="250" />
</div>
