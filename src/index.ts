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

import { App, getFrontend, IObject, Plugin } from "siyuan"
import { simpleLogger } from "zhi-lib-base"
import KanbanGirl from "./libs/KanbanGirl.svelte"

import "../index.styl"
import { isDev } from "./Constants"
import { initTopbar } from "./topbar"

export default class KanbanGirlPlugin extends Plugin {
  private logger
  public isMobile: boolean

  constructor(options: { app: App; id: string; name: string; i18n: IObject }) {
    super(options)

    this.logger = simpleLogger("index", "kanban-girl", isDev)
    const frontEnd = getFrontend()
    this.isMobile = frontEnd === "mobile" || frontEnd === "browser-mobile"
  }

  async onload() {
    await this.initDependency()
    initTopbar(this)
    this.initUI()
  }

  //================================================================
  // private function
  //================================================================
  private async initDependency() {
    const basePath = "/plugins/siyuan-plugin-kanban-girl"
    await import(`${basePath}/static/l2d.js`)

    const styleId = "pio-style"
    if (!document.getElementById(styleId)) {
      const s = document.createElement("link")
      s.id = styleId
      s.href = "/plugins/siyuan-plugin-kanban-girl/static/pio.css"
      s.rel = "stylesheet"
      document.head.appendChild(s)
    }
  }

  private initUI() {
    const pioId = "pioApp"
    const divElement = document.createElement("div")
    divElement.id = pioId
    document.body.appendChild(divElement)

    new KanbanGirl({
      target: document.getElementById(pioId) as HTMLElement,
      props: {
        pluginInstance: this,
      },
    })
  }
}
