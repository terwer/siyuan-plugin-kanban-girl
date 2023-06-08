<script lang="ts">
  import { onMount } from "svelte"
  import SettingManager from "../store/setting"
  import Paul_Pio from "../service/pio"

  export let pluginInstance

  let cfg
  let pioAppElement
  let switchHidden
  let position
  let mode
  const win = window as any

  const handleSwitchChange = async () => {
    if (switchHidden) {
      pioAppElement.style.display = "none"
    } else {
      pioAppElement.style.display = "block"
    }
    cfg.hidden = switchHidden
    await SettingManager.saveSetting(pluginInstance, cfg)
    rebuildModel()
  }

  const handlePositionChange = async () => {
    cfg.position = position
    await SettingManager.saveSetting(pluginInstance, cfg)
    window.location.reload()
  }

  const handleModeChange = async () => {
    cfg.mode = mode
    await SettingManager.saveSetting(pluginInstance, cfg)
    window.location.reload()
  }

  const rebuildModel = () => {
    pluginInstance.logger.info("rebuilding model due to config change...")
    delete win.kanbanGirlPio
    const pio = new Paul_Pio(cfg)
    pio.start()
    win.kanbanGirlPio = pio
  }

  onMount(async () => {
    pioAppElement = document.getElementById("pioApp")
    cfg = await SettingManager.getSetting(pluginInstance)
    switchHidden = cfg.hidden
    position = cfg.position
    mode = cfg.mode
  })
</script>

<div class="config__tab-container" data-name="editor">
  <label class="fn__flex b3-label">
    <div class="fn__flex-1">
      隐藏看板娘
      <div class="b3-label__text">勾选之后将永久隐藏看板娘，若要显示请取消勾选</div>
    </div>
    <span class="fn__space" />
    <input
      class="b3-switch fn__flex-center"
      type="checkbox"
      bind:checked={switchHidden}
      on:change={handleSwitchChange}
    />
  </label>

  <label class="fn__flex b3-label config__item">
    <div class="fn__flex-1">
      看板娘位置
      <div class="b3-label__text">该设置决定看办理显示的位置</div>
    </div>
    <span class="fn__space" />
    <select class="b3-select fn__flex-center fn__size200" bind:value={position} on:change={handlePositionChange}>
      <option value="left">默认</option>
      <option value="left">左边</option>
      <option value="right">右边</option>
    </select>
  </label>

  <label class="fn__flex b3-label config__item">
    <div class="fn__flex-1">
      显示模式
      <div class="b3-label__text">该设置仅影响看板娘能否动态交互以及是否可移动</div>
    </div>
    <span class="fn__space" />
    <select class="b3-select fn__flex-center fn__size200" bind:value={mode} on:change={handleModeChange}>
      <option value="fixed">默认</option>
      <option value="static">静态模式</option>
      <option value="fixed">固定模式</option>
      <option value="draggable">拖拽模式</option>
    </select>
  </label>
</div>
