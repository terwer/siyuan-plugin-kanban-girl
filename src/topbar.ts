/*
 * Copyright (c) 2023, Terwer . All rights reserved.
 * DO NOT ALTER OR REMOVE COPYRIGHT NOTICES OR THIS FILE HEADER.
 *
 * This code is free software; you can redistribute it and/or modify it
 * under the terms of the GNU General Public License version 2 only, as
 * published by the Free Software Foundation.  Terwer designates this
 * particular file as subject to the "Classpath" exception as provided
 * by Terwer in the LICENSE file that accompanied this code.
 *
 * This code is distributed in the hope that it will be useful, but WITHOUT
 * ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 * FITNESS FOR A PARTICULAR PURPOSE.  See the GNU General Public License
 * version 2 for more details (a copy is included in the LICENSE file that
 * accompanied this code).
 *
 * You should have received a copy of the GNU General Public License version
 * 2 along with this work; if not, write to the Free Software Foundation,
 * Inc., 51 Franklin St, Fifth Floor, Boston, MA 02110-1301 USA.
 *
 * Please contact Terwer, Shenzhen, Guangdong, China, youweics@163.com
 * or visit www.terwer.space if you need additional information or have any
 * questions.
 */

import KanbanGirlPlugin from "./index"
import { Dialog, Menu } from "siyuan"
import Setting from "./libs/Setting.svelte"
import { icons } from "./utils/svg"

/**
 * 顶栏按钮
 *
 * @param pluginInstance - 插件实例
 * @author terwer
 * @version 0.0.1
 * @since 0.0.1
 */
export function initTopbar(pluginInstance: KanbanGirlPlugin) {
  const topBarElement = pluginInstance.addTopBar({
    icon: icons.iconTopbar,
    title: pluginInstance.i18n.makeSlug,
    position: "right",
    callback: () => {},
  })

  topBarElement.addEventListener("click", async () => {
    let rect = topBarElement.getBoundingClientRect()
    // 如果获取不到宽度，则使用更多按钮的宽度
    if (rect.width === 0) {
      rect = document.querySelector("#barMore").getBoundingClientRect()
    }
    await initMenu(pluginInstance, rect)
  })
}

const initMenu = async (pluginInstance: KanbanGirlPlugin, rect: DOMRect) => {
  const menu = new Menu("kanbanGirlMenu")

  // 查看自定义别名
  menu.addSeparator()
  menu.addItem({
    iconHTML: `<span class="font-awesome-icon">${icons.iconTopbar}</span>`,
    label: pluginInstance.i18n.setting,
    click: () => {
      const settingId = "kanban-girl-setting"
      const d = new Dialog({
        title: `${pluginInstance.i18n.setting} - ${pluginInstance.i18n.kanbanGirl}`,
        content: `<div id="${settingId}"></div>`,
        width: pluginInstance.isMobile ? "92vw" : "720px",
      })
      new Setting({
        target: document.getElementById(settingId) as HTMLElement,
        props: {
          pluginInstance: pluginInstance,
          dialog: d,
        },
      })
    },
  })

  if (pluginInstance.isMobile) {
    menu.fullscreen()
  } else {
    menu.open({
      x: rect.right,
      y: rect.bottom,
      isLeft: true,
    })
  }
}
