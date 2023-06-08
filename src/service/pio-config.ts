export interface IPioConfig {
  hidden: boolean
  position: "left" | "right"
  mode: "fixed" | "static" | "draggable"
  content: {
    welcome: string[]
    skin: string[]
  }
  model: string[]
}

class PioConfig {
  public hidden: boolean
  public position: "left" | "right"
  public mode
  public content?: {
    welcome: string[]
    skin: string[]
  }
  public model: string[]

  constructor(config?: IPioConfig) {
    if (!config) {
      this.hidden = false
      this.position = "left"
      this.mode = "fixed"
      this.content = {
        welcome: ["欢迎使用思源笔记！", "今天天气不错，一起来玩吧！"],
        skin: ["想看看我的新衣服吗？", "新衣服真漂亮~"],
      }
      this.model = [
        "/plugins/siyuan-plugin-kanban-girl/models/416/model.json",
        "/plugins/siyuan-plugin-kanban-girl/models/pio/model.json",
      ]
    } else {
      this.hidden = config.hidden ?? false
      this.mode = config.mode ?? "fixed"
      this.content = {
        welcome: config.content.welcome,
        skin: config.content.skin,
      }
      this.model = config.model
    }
  }
}

export default PioConfig
