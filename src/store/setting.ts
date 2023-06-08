import KanbanGirlPlugin from "../index"
import { simpleLogger } from "zhi-lib-base"
import { isDev } from "../Constants"
import PioConfig from "../service/pio-config"

/**
 * 负责管理 KanbanGirl 插件设置。
 * @class
 * @license {@link https://opensource.org/licenses/MIT|MIT License}
 * @module SettingManager
 * @see {@link https://github.com/terwer/KanbanGirl}
 * @author terwer
 * @version 1.1.0
 * @since 1.1.0
 */
export default class SettingManager {
  /**
   * SettingManager 日志记录器实例。
   * @private
   */
  private static logger = simpleLogger("setting-manager", "kanban-girl", isDev)

  /**
   * 用于存储设置数据文件的名称。
   * @private
   */
  private static settingStorage = "kanban-girl-setting.json"

  /**
   * 存储设置数据。
   * @private
   */
  private static setting: any

  /**
   * 从存储中异步读取设置数据。
   * @param {KanbanGirlPlugin} pluginInstance - KanbanGirl 插件实例。
   * @returns {Promise<any>} - 插件设置数据。
   * @private
   */
  private static async loadSetting(pluginInstance: KanbanGirlPlugin): Promise<any> {
    // 输出调试日志，显示正在从存储中读取设置数据
    this.logger.debug("Loading setting from storage")

    let setting
    try {
      // 读取并解析存储中的设置数据
      const settingStr = await pluginInstance.loadData(SettingManager.settingStorage)
      if (typeof settingStr === "string") {
        setting = JSON.parse(settingStr)
      } else {
        setting = settingStr
      }
      // 输出调试日志，显示从存储中读取的设置数据
      this.logger.info("Loaded setting from storage", setting)
    } catch (e) {
      // 输出错误日志，显示从存储中读取设置数据时发生的错误
      setting = new PioConfig()
      this.logger.info(`Failed to load setting from storage, use default setting: `, setting)
    }

    return setting
  }

  /**
   * 获取插件设置数据。
   * @param {KanbanGirlPlugin} pluginInstance - KanbanGirl 插件实例。
   * @returns {Promise<any>} - 插件设置数据。
   * @public
   */
  public static async getSetting(pluginInstance: KanbanGirlPlugin): Promise<any> {
    if (SettingManager.setting) {
      // 输出调试日志，显示从缓存中读取的设置数据
      this.logger.debug("Read setting from cache", SettingManager.setting)
      return SettingManager.setting
    }

    // 如果缓存中没有设置数据，则从存储中读取
    SettingManager.setting = await SettingManager.loadSetting(pluginInstance)
    this.logger.debug("Read setting from storage", SettingManager.setting)
    return SettingManager.setting
  }

  /**
   * 将插件设置数据保存到本地存储中。
   * @param {KanbanGirlPlugin} pluginInstance - KanbanGirl 插件实例。
   * @param {object} newSetting - 要保存的新的插件设置数据。
   * @returns {Promise<void>} - Promise 值，当保存完成时解析。
   * @public
   */
  public static async saveSetting(pluginInstance: KanbanGirlPlugin, newSetting: object): Promise<void> {
    // 输出调试日志，显示要保存的设置数据
    this.logger.info("Saving setting to storage", newSetting)
    // 更新缓存值
    SettingManager.setting = newSetting
    const settingJson = JSON.stringify(newSetting)
    // 将数据保存到存储中
    await pluginInstance.saveData(SettingManager.settingStorage, settingJson)
  }

  /**
   * 将插件设置数据从本地存储中删除。
   * @param {KanbanGirlPlugin} pluginInstance - KanbanGirl 插件实例。
   * @returns {Promise<void>} - Promise 值，当移除完成时解析。
   * @public
   */
  public static async removeSetting(pluginInstance: KanbanGirlPlugin): Promise<void> {
    // 输出调试日志，显示正在从存储中删除设置数据
    this.logger.debug("Removing setting from storage")
    // 更新缓存值
    SettingManager.setting = null
    // 从存储中删除设置数据
    await pluginInstance.removeData(SettingManager.settingStorage)
  }
}
