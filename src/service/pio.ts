/* ----

# Pio
# By: Dreamer-Paul, terwer
# Last Update: 2023.6.8

一个支持更换 Live2D 模型的 JS 插件

本代码为奇趣保罗原创，并遵守 GPL 2.0 开源协议。欢迎访问我的博客：https://paugram.com

本代码在 2023/06/08 由 terwer 重构为 typescript 实现，并进行了一定优化，感谢原作者的付出

---- */

import { simpleLogger } from "zhi-lib-base"
import { isDev } from "../Constants"

/**
 * 模型核心类
 *
 * @author pio, terwer
 * @version 1.0.0
 * @since 1.0.0
 */
class Paul_Pio {
  private readonly logger
  private readonly prop

  private readonly current
  private readonly elements

  constructor(prop: any) {
    this.logger = simpleLogger("pio", "kanban-girl", isDev)
    this.prop = prop

    this.current = {
      idol: 0,
      timeout: undefined,
      menu: document.querySelector(".pio-container .pio-action"),
      canvas: document.getElementById("pio"),
      body: document.querySelector(".pio-container"),
      root: document.location.protocol + "//" + document.location.hostname + "/",
    }
    this.elements = {
      home: this.create("span", { class: "pio-home" }),
      skin: this.create("span", { class: "pio-skin" }),
      info: this.create("span", { class: "pio-info" }),
      night: this.create("span", { class: "pio-night" }),
      close: this.create("span", { class: "pio-close" }),

      dialog: this.create("div", { class: "pio-dialog" }),
      show: this.create("div", { class: "pio-show" }),
    }

    // 初始化元素
    this.current.body.appendChild(this.elements.dialog)
    this.current.body.appendChild(this.elements.show)

    // 请保留版权说明
    if (window.console && window.console.log) {
      console.log(
        "%c Pio %c https://paugram.com ",
        "color: #fff; margin: 1em 0; padding: 5px 0; background: #673ab7;",
        "margin: 1em 0; padding: 5px 0; background: #efefef;"
      )
    }
  }

  /**
   * 启动，仅执行一次
   */
  public start() {
    this.init()
    this.elements.show.onclick = () => {
      this.show()
    }
    this.logger.info("Kanban Girl is ready, haha~")
  }

  public autoDisplay() {
    const isHidden = localStorage.getItem("posterGirl") === "0"
    isHidden ? this.show() : this.hide()
  }

  //================================================================
  // private function
  //================================================================
  // 运行
  private init(noModel?: any) {
    // 未隐藏，出现操作功能
    if (!this.prop.hidden) {
      if (!noModel) {
        const win = window as any
        this.action_welcome()
        win.loadlive2d("pio", this.prop.model[0])
      }

      switch (this.prop.mode) {
        case "static":
          this.begin_static()
          break
        case "fixed":
          this.begin_fixed()
          break
        case "draggable":
          this.begin_draggable()
          break
      }

      this.prop.content.custom && this.action_custom()
    }
  }

  // 隐藏状态
  private initHidden() {
    // ! 清除预设好的间距
    if (this.prop.mode === "draggable") {
      this.current.body.style.top = null
      this.current.body.style.left = null
      this.current.body.style.bottom = null
    }

    this.current.body.classList.add("hidden")
    this.elements.dialog.classList.remove("active")
  }

  private hide() {
    this.modules_destroy()
    localStorage.setItem("posterGirl", "0")
  }

  private show() {
    this.current.body.classList.remove("hidden")
    localStorage.setItem("posterGirl", "1")
    this.init()
  }

  begin_static() {
    this.current.body.classList.add("static")
  }

  begin_fixed() {
    this.action_touch()
    this.action_buttons()
  }

  begin_draggable() {
    this.action_touch()
    this.action_buttons()

    const body = this.current.body

    const location = {
      x: 0,
      y: 0,
    }

    const mousedown = (ev) => {
      const { offsetLeft, offsetTop } = ev.currentTarget

      location.x = ev.clientX - offsetLeft
      location.y = ev.clientY - offsetTop

      document.addEventListener("mousemove", mousemove)
      document.addEventListener("mouseup", mouseup)
    }

    const mousemove = (ev) => {
      body.classList.add("active")
      body.classList.remove("right")

      body.style.left = ev.clientX - location.x + "px"
      body.style.top = ev.clientY - location.y + "px"
      body.style.bottom = "auto"
    }

    const mouseup = () => {
      body.classList.remove("active")
      document.removeEventListener("mousemove", mousemove)
    }

    body.onmousedown = mousedown
  }

  // modules
  // 更换模型
  modules_idol() {
    this.current.idol < this.prop.model.length - 1 ? this.current.idol++ : (this.current.idol = 0)
    return this.current.idol
  }
  // 创建对话框方法
  modules_message(text, options = {} as any) {
    const { dialog } = this.elements

    if (text.constructor === Array) {
      dialog.innerText = this.rand(text)
    } else if (text.constructor === String) {
      dialog[options.html ? "innerHTML" : "innerText"] = text
    } else {
      dialog.innerText = "输入内容出现问题了 X_X"
    }

    dialog.classList.add("active")

    clearTimeout(this.current.timeout)
    this.current.timeout = setTimeout(() => {
      dialog.classList.remove("active")
    }, options.time || 3000)
  }
  // 移除方法
  modules_destroy() {
    this.initHidden()
  }

  // 欢迎
  action_welcome() {
    if (document.referrer && document.referrer.includes(this.current.root)) {
      const referrer = document.createElement("a")
      referrer.href = document.referrer

      if (this.prop.content.referer) {
        this.modules_message(this.prop.content.referer.replace(/%t/, `“${referrer.hostname}”`))
      } else {
        this.modules_message(`欢迎来自 “${referrer.hostname}” 的朋友！`)
      }
    } else if (this.prop.tips) {
      let text
      const hour = new Date().getHours()

      if (hour > 22 || hour <= 5) {
        text = "你是夜猫子呀？这么晚还不睡觉，明天起的来嘛"
      } else if (hour > 5 && hour <= 8) {
        text = "早上好！"
      } else if (hour > 8 && hour <= 11) {
        text = "上午好！工作顺利嘛，不要久坐，多起来走动走动哦！"
      } else if (hour > 11 && hour <= 14) {
        text = "中午了，工作了一个上午，现在是午餐时间！"
      } else if (hour > 14 && hour <= 17) {
        text = "午后很容易犯困呢，今天的运动目标完成了吗？"
      } else if (hour > 17 && hour <= 19) {
        text = "傍晚了！窗外夕阳的景色很美丽呢，最美不过夕阳红~"
      } else if (hour > 19 && hour <= 21) {
        text = "晚上好，今天过得怎么样？"
      } else if (hour > 21 && hour <= 23) {
        text = "已经这么晚了呀，早点休息吧，晚安~"
      } else {
        text = "奇趣保罗说：这个是无法被触发的吧，哈哈"
      }

      this.modules_message(text)
    } else {
      this.modules_message(this.prop.content.welcome || "欢迎来到本站！")
    }
  }
  // 触摸
  action_touch() {
    this.current.canvas.onclick = () => {
      this.modules_message(this.prop.content.touch || ["你在干什么？", "再摸我就报警了！", "不可以这样欺负我啦！"])
    }
  }
  // 右侧按钮
  private action_buttons() {
    // 返回首页
    // elements.home.onclick = () => {
    //   location.href = current.root
    // }
    // elements.home.onmouseover = () => {
    //   modules.message(prop.content.home || "点击这里回到首页！")
    // }
    // current.menu.appendChild(elements.home)

    // 更换模型
    if (this.prop.model && this.prop.model.length > 1) {
      this.elements.skin.onclick = () => {
        const win = window as any
        win.loadlive2d("pio", this.prop.model[this.modules_idol()])

        this.prop.content.skin && this.modules_message(this.prop.content.skin[1] || "新衣服真漂亮~")
      }
      this.elements.skin.onmouseover = () => {
        this.prop.content.skin && this.modules_message(this.prop.content.skin[0] || "想看看我的新衣服吗？")
      }
      this.current.menu.appendChild(this.elements.skin)
    }

    // 关于我
    // elements.info.onclick = () => {
    //   window.open(prop.content.link || "https://github.com/terwer")
    // }
    // elements.info.onmouseover = () => {
    //   modules.message("想了解更多关于我的信息吗？")
    // }
    // current.menu.appendChild(elements.info)
    // 夜间模式
    // if (prop.night) {
    //   elements.night.onclick = () => {
    //     typeof prop.night === "function" ? prop.night() : eval(prop.night)
    //   }
    //   elements.night.onmouseover = () => {
    //     modules.message("夜间点击这里可以保护眼睛呢")
    //   }
    //   current.menu.appendChild(elements.night)
    // }

    // 关闭看板娘
    this.elements.close.onclick = () => {
      this.hide()
    }
    this.elements.close.onmouseover = () => {
      this.modules_message(this.prop.content.close || "QWQ 下次再见吧~")
    }
    this.current.menu.appendChild(this.elements.close)
  }

  // 自定义选择器
  private action_custom() {
    //   prop.content.custom.forEach((item) => {
    //     const el = document.querySelectorAll(item.selector)
    //
    //     if (!el.length) return
    //
    //     for (let i = 0; i < el.length; i++) {
    //       if (item.type === "read") {
    //         el[i].onmouseover = (ev) => {
    //           const text = ev.currentTarget.title || ev.currentTarget.innerText
    //           modules.message("想阅读 %t 吗？".replace(/%t/, "“" + text + "”"))
    //         }
    //       } else if (item.type === "link") {
    //         el[i].onmouseover = (ev) => {
    //           const text = ev.currentTarget.title || ev.currentTarget.innerText
    //           modules.message("想了解一下 %t 吗？".replace(/%t/, "“" + text + "”"))
    //         }
    //       } else if (item.text) {
    //         el[i].onmouseover = () => {
    //           modules.message(t.text)
    //         }
    //       }
    //     }
    //   })
  }

  // 创建内容
  private create(tag, options) {
    const el = document.createElement(tag)
    options.class && (el.className = options.class)

    return el
  }

  // 随机内容
  private rand(arr) {
    return arr[Math.floor(Math.random() * arr.length + 1) - 1]
  }
}
export default Paul_Pio
