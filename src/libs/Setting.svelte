<div class="config__tab-container" data-name="editor">
  <label class="fn__flex b3-label">
    <div class="fn__flex-1">
      自适应宽度
      <div class="b3-label__text">启用后将尽可能宽地显示编辑区</div>
    </div>
    <span class="fn__space" />
    <input class="b3-switch fn__flex-center" id="fullWidth" type="checkbox" checked="" />
  </label>
  <label class="fn__flex b3-label">
    <div class="fn__flex-1">
      两侧对齐
      <div class="b3-label__text">将内容以两侧对齐的方式进行渲染</div>
    </div>
    <span class="fn__space" />
    <input class="b3-switch fn__flex-center" id="justify" type="checkbox" />
  </label>
  <label class="fn__flex b3-label">
    <div class="fn__flex-1">
      从右到左（RTL）
      <div class="b3-label__text">将内容以从右到左的方式进行渲染</div>
    </div>
    <span class="fn__space" />
    <input class="b3-switch fn__flex-center" id="rtl" type="checkbox" />
  </label>
  <label class="fn__flex b3-label">
    <div class="fn__flex-1">
      只读模式
      <div class="b3-label__text">启用后编辑器将以只读模式载入文档，需要编辑时可点击顶栏编辑按钮切换到编辑模式</div>
    </div>
    <span class="fn__space" />
    <input class="b3-switch fn__flex-center" id="readOnly" type="checkbox" />
  </label>
  <label class="fn__flex b3-label">
    <div class="fn__flex-1">
      是否显示书签、命名、别名、备注和引用计数
      <div class="b3-label__text">启用后如果存在这些信息则将在块的右上侧进行显示</div>
    </div>
    <span class="fn__space" />
    <input class="b3-switch fn__flex-center" id="displayBookmarkIcon" type="checkbox" checked="" />
  </label>
  <label class="fn__flex b3-label">
    <div class="fn__flex-1">
      是否显示网络图片角标
      <div class="b3-label__text">启用后如果图片是网络文件（非本地资源文件）则会显示角标</div>
    </div>
    <span class="fn__space" />
    <input class="b3-switch fn__flex-center" id="displayNetImgMark" type="checkbox" checked="" />
  </label>
  <label class="fn__flex b3-label">
    <div class="fn__flex-1">
      嵌入块面包屑
      <div class="b3-label__text">启用后嵌入块将显示面包屑，在超级块中的嵌入块忽略该选项，始终不显示面包屑</div>
    </div>
    <span class="fn__space" />
    <input class="b3-switch fn__flex-center" id="embedBlockBreadcrumb" type="checkbox" />
  </label>
  <label class="fn__flex b3-label">
    <div class="fn__flex-1">
      悬停出现浮窗
      <div class="b3-label__text">
        启用后鼠标悬停块引、面包屑块标等位置会出现浮窗，关闭后需按住 <code class="fn__code">⌘</code> 键才会出现浮窗
      </div>
    </div>
    <span class="fn__space" />
    <input class="b3-switch fn__flex-center" id="floatWindowMode" type="checkbox" checked="" />
  </label>
  <label class="fn__flex b3-label">
    <div class="fn__flex-1">
      列表大纲反向缩进
      <div class="b3-label__text">启用后将使用列表大纲式逻辑反向缩进，即将列表项移动到父级下方</div>
    </div>
    <span class="fn__space" />
    <input class="b3-switch fn__flex-center" id="listLogicalOutdent" type="checkbox" />
  </label>
  <label class="fn__flex b3-label">
    <div class="fn__flex-1">
      拼写检查
      <div class="b3-label__text">启用后将使用浏览器内置的拼写检查功能，目前仅支持英文拼写检查</div>
    </div>
    <span class="fn__space" />
    <input class="b3-switch fn__flex-center" id="spellcheck" type="checkbox" />
  </label>
  <label class="fn__flex b3-label">
    <div class="fn__flex-1">
      <code class="fn__code">[[</code> 仅搜索文档
      <div class="b3-label__text">启用后使用 [[ 或 【【 搜索块引用时将只在文档块中进行搜索</div>
    </div>
    <span class="fn__space" />
    <input class="b3-switch fn__flex-center" id="onlySearchForDoc" type="checkbox" />
  </label>
  <label class="fn__flex b3-label">
    <div class="fn__flex-1">
      代码块换行
      <div class="b3-label__text">启用后代码块中的内容将自动换行</div>
    </div>
    <span class="fn__space" />
    <input class="b3-switch fn__flex-center" id="codeLineWrap" type="checkbox" />
  </label>
  <label class="fn__flex b3-label">
    <div class="fn__flex-1">
      代码块连字
      <div class="b3-label__text">启用后代码块将显示连字</div>
    </div>
    <span class="fn__space" />
    <input class="b3-switch fn__flex-center" id="codeLigatures" type="checkbox" />
  </label>
  <label class="fn__flex b3-label">
    <div class="fn__flex-1">
      代码块显示行号
      <div class="b3-label__text">启用后代码块会显示行号</div>
    </div>
    <span class="fn__space" />
    <input class="b3-switch fn__flex-center" id="codeSyntaxHighlightLineNum" type="checkbox" />
  </label>
  <label class="fn__flex b3-label">
    <div class="fn__flex-1">
      虚拟引用
      <div class="b3-label__text">启用后将自动根据已有块引的命名、别名和锚文本来标识出可能存在的引用关系</div>
    </div>
    <span class="fn__space" />
    <input class="b3-switch fn__flex-center" id="virtualBlockRef" type="checkbox" />
  </label>
  <label class="fn__flex b3-label config__item">
    <div class="fn__flex-1">
      虚拟引用关键字包含列表
      <div class="b3-label__text">
        使用英文状态下的逗号 <code class="fn__code">,</code> 进行分隔，逗号自身可通过
        <code class="fn__code">\,</code> 转义
      </div>
    </div>
    <span class="fn__space" />
    <input class="b3-text-field fn__flex-center fn__size200" id="virtualBlockRefInclude" value="" />
  </label>
  <label class="fn__flex b3-label config__item">
    <div class="fn__flex-1">
      虚拟引用关键字排除列表
      <div class="b3-label__text">
        使用英文状态下的逗号 <code class="fn__code">,</code> 进行分隔，逗号自身可通过
        <code class="fn__code">\,</code> 转义
      </div>
      <div class="b3-label__text">
        支持使用 / 包裹正则表达式，例如 <code class="fn__code">foo,/[0-9]+/</code> 表示排除 foo 和数字
      </div>
    </div>
    <span class="fn__space" />
    <input class="b3-text-field fn__flex-center fn__size200" id="virtualBlockRefExclude" value="" />
  </label>
  <label class="fn__flex b3-label config__item">
    <div class="fn__flex-1">
      PlantUML 伺服地址
      <div class="b3-label__text">
        留空将恢复默认值 <code class="fn__code">https://www.plantuml.com/plantuml/svg/~1</code>
      </div>
    </div>
    <span class="fn__space" />
    <input
      class="b3-text-field fn__flex-center fn__size200"
      id="plantUMLServePath"
      value="https://www.plantuml.com/plantuml/svg/~1"
    />
  </label>
  <label class="fn__flex b3-label config__item">
    <div class="fn__flex-1">
      动态加载块数
      <div class="b3-label__text">该值包含了子块数。如果需要渲染的代码块、公式块或图表块较多，建议不要设置过大</div>
    </div>
    <span class="fn__space" />
    <input
      class="b3-text-field fn__flex-center fn__size200"
      id="dynamicLoadBlocks"
      type="number"
      min="48"
      max="1024"
      value="128"
    />
  </label>
  <label class="fn__flex b3-label config__item">
    <div class="fn__flex-1">
      块引动态锚文本最大长度
      <div class="b3-label__text">
        不自定义块引锚文本时自动渲染锚文本的最大长度，默认为 <code class="fn__code">96</code> 个字符
      </div>
    </div>
    <span class="fn__space" />
    <input
      class="b3-text-field fn__flex-center fn__size200"
      id="blockRefDynamicAnchorTextMaxLen"
      type="number"
      min="1"
      max="5120"
      value="96"
    />
  </label>
  <label class="fn__flex b3-label config__item">
    <div class="fn__flex-1">
      反向链接默认展开数
      <div class="b3-label__text">配置为 <code class="fn__code">0</code> 则不展开</div>
    </div>
    <span class="fn__space" />
    <input
      class="b3-text-field fn__flex-center fn__size200"
      id="backlinkExpandCount"
      type="number"
      min="0"
      max="512"
      value="8"
    />
  </label>
  <label class="fn__flex b3-label config__item">
    <div class="fn__flex-1">
      反向提及默认展开数
      <div class="b3-label__text">配置为 <code class="fn__code">0</code> 则不展开</div>
    </div>
    <span class="fn__space" />
    <input
      class="b3-text-field fn__flex-center fn__size200"
      id="backmentionExpandCount"
      type="number"
      min="0"
      max="512"
      value="0"
    />
  </label>
  <label class="fn__flex b3-label config__item">
    <div class="fn__flex-1">
      历史生成间隔（分钟，设置为 0 则禁用）
      <div class="b3-label__text">编辑或删除时会自动生成历史，可在数据历史中可查看和回滚</div>
    </div>
    <span class="fn__space" />
    <input
      class="b3-text-field fn__flex-center fn__size200"
      id="generateHistoryInterval"
      type="number"
      min="0"
      max="120"
      value="10"
    />
  </label>
  <label class="fn__flex b3-label config__item">
    <div class="fn__flex-1">
      历史保留天数
      <a href="javascript:void(0)" id="clearHistory">清空所有历史</a>
      <div class="b3-label__text">超过保留天数的历史数据会被自动彻底删除</div>
    </div>
    <span class="fn__space" />
    <input
      class="b3-text-field fn__flex-center fn__size200"
      id="historyRetentionDays"
      type="number"
      min="0"
      max="120"
      value="30"
    />
  </label>
  <label class="fn__flex b3-label config__item">
    <div class="fn__flex-1">
      字体
      <div class="b3-label__text">
        该设置仅影响编辑器内字体显示，选择 <code class="fn__code">默认</code> 则使用主题自带字体
      </div>
    </div>
    <span class="fn__space" />
    <select id="fontFamily" class="b3-select fn__flex-center fn__size200">
      <option value="">默认</option>
      <option value="Al Bayan">Al Bayan</option>
      <option value="Al Nile">Al Nile</option>
      <option value="Al Tarikh">Al Tarikh</option>
      <option value="American Typewriter">American Typewriter</option>
      <option value="Andale Mono">Andale Mono</option>
      <option value="Apple Color Emoji">Apple Color Emoji</option>
      <option value="Apple SD Gothic Neo">Apple SD Gothic Neo</option>
      <option value="Apple Symbols">Apple Symbols</option>
      <option value="AppleMyungjo">AppleMyungjo</option>
      <option value="Arial">Arial</option>
      <option value="Arial Black">Arial Black</option>
      <option value="Arial Hebrew">Arial Hebrew</option>
      <option value="Arial Hebrew Scholar">Arial Hebrew Scholar</option>
      <option value="Arial Narrow">Arial Narrow</option>
      <option value="Arial Rounded MT Bold">Arial Rounded MT Bold</option>
      <option value="Arial Unicode MS">Arial Unicode MS</option>
      <option value="Athelas">Athelas</option>
      <option value="Avenir">Avenir</option>
      <option value="Avenir Next">Avenir Next</option>
      <option value="Avenir Next Condensed">Avenir Next Condensed</option>
      <option value="Baghdad">Baghdad</option>
      <option value="Bangla MN">Bangla MN</option>
      <option value="Bangla Sangam MN">Bangla Sangam MN</option>
      <option value="Baskerville">Baskerville</option>
      <option value="Beirut">Beirut</option>
      <option value="Bodoni 72">Bodoni 72</option>
      <option value="Bodoni 72 Oldstyle">Bodoni 72 Oldstyle</option>
      <option value="Bodoni 72 Smallcaps">Bodoni 72 Smallcaps</option>
      <option value="Bodoni Ornaments">Bodoni Ornaments</option>
      <option value="Brush Script MT">Brush Script MT</option>
      <option value="CaskaydiaCove Nerd Font">CaskaydiaCove Nerd Font</option>
      <option value="CaskaydiaCove Nerd Font Mono">CaskaydiaCove Nerd Font Mono</option>
      <option value="CaskaydiaCove Nerd Font Propo">CaskaydiaCove Nerd Font Propo</option>
      <option value="Chalkboard">Chalkboard</option>
      <option value="Chalkboard SE">Chalkboard SE</option>
      <option value="Chalkduster">Chalkduster</option>
      <option value="Charter">Charter</option>
      <option value="Cochin">Cochin</option>
      <option value="Comic Sans MS">Comic Sans MS</option>
      <option value="Copperplate">Copperplate</option>
      <option value="Corsiva Hebrew">Corsiva Hebrew</option>
      <option value="Courier">Courier</option>
      <option value="Courier New">Courier New</option>
      <option value="DIN Alternate">DIN Alternate</option>
      <option value="DIN Condensed">DIN Condensed</option>
      <option value="Damascus">Damascus</option>
      <option value="DecoType Naskh">DecoType Naskh</option>
      <option value="DejaVuSansMono Nerd Font">DejaVuSansMono Nerd Font</option>
      <option value="DejaVuSansMono Nerd Font Mono">DejaVuSansMono Nerd Font Mono</option>
      <option value="Devanagari MT">Devanagari MT</option>
      <option value="Devanagari Sangam MN">Devanagari Sangam MN</option>
      <option value="Didot">Didot</option>
      <option value="Diwan Kufi">Diwan Kufi</option>
      <option value="Euphemia UCAS">Euphemia UCAS</option>
      <option value="Farah">Farah</option>
      <option value="Fira Code">Fira Code</option>
      <option value="Futura">Futura</option>
      <option value="Galvji">Galvji</option>
      <option value="Geeza Pro">Geeza Pro</option>
      <option value="Georgia">Georgia</option>
      <option value="Gill Sans">Gill Sans</option>
      <option value="Grantha Sangam MN">Grantha Sangam MN</option>
      <option value="Gujarati MT">Gujarati MT</option>
      <option value="Gujarati Sangam MN">Gujarati Sangam MN</option>
      <option value="Gurmukhi MN">Gurmukhi MN</option>
      <option value="Gurmukhi Sangam MN">Gurmukhi Sangam MN</option>
      <option value="Helvetica">Helvetica</option>
      <option value="Helvetica Neue">Helvetica Neue</option>
      <option value="Hiragino Kaku Gothic Pro">Hiragino Kaku Gothic Pro</option>
      <option value="Hiragino Kaku Gothic ProN">Hiragino Kaku Gothic ProN</option>
      <option value="Hiragino Kaku Gothic Std">Hiragino Kaku Gothic Std</option>
      <option value="Hiragino Kaku Gothic StdN">Hiragino Kaku Gothic StdN</option>
      <option value="Hiragino Maru Gothic Pro">Hiragino Maru Gothic Pro</option>
      <option value="Hiragino Maru Gothic ProN">Hiragino Maru Gothic ProN</option>
      <option value="Hiragino Mincho Pro">Hiragino Mincho Pro</option>
      <option value="Hiragino Mincho ProN">Hiragino Mincho ProN</option>
      <option value="Hiragino Sans">Hiragino Sans</option>
      <option value="Hoefler Text">Hoefler Text</option>
      <option value="ITF Devanagari">ITF Devanagari</option>
      <option value="ITF Devanagari Marathi">ITF Devanagari Marathi</option>
      <option value="Impact">Impact</option>
      <option value="InaiMathi">InaiMathi</option>
      <option value="Iowan Old Style">Iowan Old Style</option>
      <option value="JetBrains Mono">JetBrains Mono</option>
      <option value="JetBrains Mono NL">JetBrains Mono NL</option>
      <option value="JetBrainsMono Nerd Font">JetBrainsMono Nerd Font</option>
      <option value="JetBrainsMono Nerd Font Mono">JetBrainsMono Nerd Font Mono</option>
      <option value="JetBrainsMonoNL Nerd Font">JetBrainsMonoNL Nerd Font</option>
      <option value="JetBrainsMonoNL Nerd Font Mono">JetBrainsMonoNL Nerd Font Mono</option>
      <option value="Kailasa">Kailasa</option>
      <option value="Kannada MN">Kannada MN</option>
      <option value="Kannada Sangam MN">Kannada Sangam MN</option>
      <option value="Kefa">Kefa</option>
      <option value="Khmer MN">Khmer MN</option>
      <option value="Khmer Sangam MN">Khmer Sangam MN</option>
      <option value="Kohinoor Bangla">Kohinoor Bangla</option>
      <option value="Kohinoor Devanagari">Kohinoor Devanagari</option>
      <option value="Kohinoor Gujarati">Kohinoor Gujarati</option>
      <option value="Kohinoor Telugu">Kohinoor Telugu</option>
      <option value="KufiStandardGK">KufiStandardGK</option>
      <option value="LXGW WenKai">LXGW WenKai</option>
      <option value="LXGW WenKai Mono">LXGW WenKai Mono</option>
      <option value="Lao MN">Lao MN</option>
      <option value="Lao Sangam MN">Lao Sangam MN</option>
      <option value="Lucida Grande">Lucida Grande</option>
      <option value="Luminari">Luminari</option>
      <option value="MT Extra Tiger">MT Extra Tiger</option>
      <option value="Malayalam MN">Malayalam MN</option>
      <option value="Malayalam Sangam MN">Malayalam Sangam MN</option>
      <option value="Marion">Marion</option>
      <option value="Marker Felt">Marker Felt</option>
      <option value="Menlo">Menlo</option>
      <option value="Microsoft Sans Serif">Microsoft Sans Serif</option>
      <option value="Mshtakan">Mshtakan</option>
      <option value="Mukta Mahee">Mukta Mahee</option>
      <option value="Muna">Muna</option>
      <option value="Myanmar MN">Myanmar MN</option>
      <option value="Myanmar Sangam MN">Myanmar Sangam MN</option>
      <option value="Nadeem">Nadeem</option>
      <option value="New Peninim MT">New Peninim MT</option>
      <option value="New York">New York</option>
      <option value="New York Extra Large">New York Extra Large</option>
      <option value="New York Large">New York Large</option>
      <option value="New York Medium">New York Medium</option>
      <option value="New York Small">New York Small</option>
      <option value="Noteworthy">Noteworthy</option>
      <option value="Noto Nastaliq Urdu">Noto Nastaliq Urdu</option>
      <option value="Noto Serif Ahom">Noto Serif Ahom</option>
      <option value="Noto Serif Balinese">Noto Serif Balinese</option>
      <option value="Noto Serif Hmong Nyiakeng">Noto Serif Hmong Nyiakeng</option>
      <option value="Noto Serif Myanmar">Noto Serif Myanmar</option>
      <option value="Noto Serif Yezidi">Noto Serif Yezidi</option>
      <option value="Optima">Optima</option>
      <option value="Oriya MN">Oriya MN</option>
      <option value="Oriya Sangam MN">Oriya Sangam MN</option>
      <option value="PT Mono">PT Mono</option>
      <option value="PT Sans">PT Sans</option>
      <option value="PT Sans Caption">PT Sans Caption</option>
      <option value="PT Sans Narrow">PT Sans Narrow</option>
      <option value="PT Serif">PT Serif</option>
      <option value="PT Serif Caption">PT Serif Caption</option>
      <option value="Palatino">Palatino</option>
      <option value="Papyrus">Papyrus</option>
      <option value="Phosphate">Phosphate</option>
      <option value="Raanana">Raanana</option>
      <option value="Rockwell">Rockwell</option>
      <option value="SF Arabic">SF Arabic</option>
      <option value="SF Compact">SF Compact</option>
      <option value="SF Compact Display">SF Compact Display</option>
      <option value="SF Compact Rounded">SF Compact Rounded</option>
      <option value="SF Compact Text">SF Compact Text</option>
      <option value="SF Mono">SF Mono</option>
      <option value="SF Pro">SF Pro</option>
      <option value="SF Pro Display">SF Pro Display</option>
      <option value="SF Pro Rounded">SF Pro Rounded</option>
      <option value="SF Pro Text">SF Pro Text</option>
      <option value="STIX Two Math">STIX Two Math</option>
      <option value="STIX Two Text">STIX Two Text</option>
      <option value="STIXGeneral">STIXGeneral</option>
      <option value="STIXIntegralsD">STIXIntegralsD</option>
      <option value="STIXIntegralsSm">STIXIntegralsSm</option>
      <option value="STIXIntegralsUp">STIXIntegralsUp</option>
      <option value="STIXIntegralsUpD">STIXIntegralsUpD</option>
      <option value="STIXIntegralsUpSm">STIXIntegralsUpSm</option>
      <option value="STIXNonUnicode">STIXNonUnicode</option>
      <option value="STIXSizeFiveSym">STIXSizeFiveSym</option>
      <option value="STIXSizeFourSym">STIXSizeFourSym</option>
      <option value="STIXSizeOneSym">STIXSizeOneSym</option>
      <option value="STIXSizeThreeSym">STIXSizeThreeSym</option>
      <option value="STIXSizeTwoSym">STIXSizeTwoSym</option>
      <option value="STIXVariants">STIXVariants</option>
      <option value="STSong">STSong</option>
      <option value="Sana">Sana</option>
      <option value="Savoye LET">Savoye LET</option>
      <option value="Seravek">Seravek</option>
      <option value="Shree Devanagari 714">Shree Devanagari 714</option>
      <option value="SignPainter">SignPainter</option>
      <option value="Sinhala MN">Sinhala MN</option>
      <option value="Sinhala Sangam MN">Sinhala Sangam MN</option>
      <option value="Snell Roundhand">Snell Roundhand</option>
      <option value="Sukhumvit Set">Sukhumvit Set</option>
      <option value="Superclarendon">Superclarendon</option>
      <option value="Symbol Tiger">Symbol Tiger</option>
      <option value="Symbol Tiger Expert">Symbol Tiger Expert</option>
      <option value="System Font">System Font</option>
      <option value="Tahoma">Tahoma</option>
      <option value="Tamil MN">Tamil MN</option>
      <option value="Tamil Sangam MN">Tamil Sangam MN</option>
      <option value="Telugu MN">Telugu MN</option>
      <option value="Telugu Sangam MN">Telugu Sangam MN</option>
      <option value="Thonburi">Thonburi</option>
      <option value="Tiger">Tiger</option>
      <option value="Tiger Expert">Tiger Expert</option>
      <option value="Times">Times</option>
      <option value="Times New Roman">Times New Roman</option>
      <option value="Trattatello">Trattatello</option>
      <option value="Trebuchet MS">Trebuchet MS</option>
      <option value="Verdana">Verdana</option>
      <option value="Waseem">Waseem</option>
      <option value="Webdings">Webdings</option>
      <option value="WenQuanYi Micro Hei">WenQuanYi Micro Hei</option>
      <option value="WenQuanYi Micro Hei Mono">WenQuanYi Micro Hei Mono</option>
      <option value="Wingdings">Wingdings</option>
      <option value="Wingdings 2">Wingdings 2</option>
      <option value="Wingdings 3">Wingdings 3</option>
      <option value="冬青黑體簡體中文">冬青黑體簡體中文</option>
      <option value="宋體-簡">宋體-簡</option>
      <option value="文泉驿微米黑">文泉驿微米黑</option>
      <option value="文泉驿等宽微米黑">文泉驿等宽微米黑</option>
      <option value="系统字体">系统字体</option>
      <option value="蘋方-港">蘋方-港</option>
      <option value="蘋方-簡">蘋方-簡</option>
      <option value="蘋方-繁">蘋方-繁</option>
      <option value="霞鹜文楷">霞鹜文楷</option>
      <option value="霞鹜文楷等宽">霞鹜文楷等宽</option>
    </select>
  </label>
  <label class="fn__flex b3-label">
    <div class="fn__flex-1">
      快速调整字号
      <div class="b3-label__text">
        启用后按住 <code class="fn__code">⌘</code> 通过鼠标滚轮或触摸板双指缩放手势可快速调整字号
      </div>
    </div>
    <span class="fn__space" />
    <input class="b3-switch fn__flex-center" id="fontSizeScrollZoom" type="checkbox" />
  </label>
  <label class="fn__flex b3-label config__item">
    <div class="fn__flex-1">
      字号
      <div class="b3-label__text">
        字号默认为 <code class="fn__code">16</code>，该设置影响编辑器和导出 PDF/HTML 字体大小显示
      </div>
    </div>
    <span class="fn__space" />
    <div class="b3-tooltips b3-tooltips__n fn__flex-center" aria-label="16">
      <input class="b3-slider fn__size200" id="fontSize" max="72" min="9" step="1" type="range" value="16" />
    </div>
  </label>
  <label class="fn__flex b3-label config__item">
    <div class="fn__flex-1">
      Tab 空格数
      <div class="b3-label__text">仅在按下 Tab 时替换为空格，不会将剪切板中的 Tab 替换为空格</div>
    </div>
    <span class="fn__space" />
    <div class="b3-tooltips b3-tooltips__n fn__flex-center" aria-label="0">
      <input class="b3-slider fn__size200" id="codeTabSpaces" max="8" min="0" step="2" type="range" value="0" />
    </div>
  </label>
</div>
