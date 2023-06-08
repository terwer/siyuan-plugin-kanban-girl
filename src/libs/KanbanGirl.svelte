<script lang="ts">
  import Paul_Pio from "../service/pio"
  import { onMount } from "svelte"
  import SettingManager from "../store/setting"

  export let pluginInstance
  let modelWidth = 320
  let modelHeight = 500
  let position = "left"

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
    const cfg = await SettingManager.getSetting(pluginInstance)
    position = cfg.position
    initPio(cfg)
  })
</script>

<div class="pio-container {position}">
  <div class="pio-action" />
  <canvas id="pio" width={modelWidth} height={modelHeight} />
</div>

<style lang="stylus">
  #pio
    width 160px
    height 250px
</style>
