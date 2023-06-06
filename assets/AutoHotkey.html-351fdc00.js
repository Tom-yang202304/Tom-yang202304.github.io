import{_ as o}from"./plugin-vue_export-helper-c27b6911.js";import{r as p,o as c,c as l,a as n,b as s,d as e,e as t}from"./app-7e5ccaa9.js";const i={},r=n("p",null,"AutoHotkey 是 Windows 平台下开源的热键脚本语言。AHK 学习门槛不高，初期可以通过脚本录制来完成，我通过 AHK 热键启动、定时判断、改键盘等多种自动化操作，推荐学习制作你的专属自动化脚本。",-1),u={href:"https://wyagd001.github.io/v2/docs",target:"_blank",rel:"noopener noreferrer"},d={href:"https://wyagd001.github.io/v2/docs/KeyList.htm",target:"_blank",rel:"noopener noreferrer"},k={href:"https://wyagd001.github.io/v2/docs/Variables.htm#BuiltIn",target:"_blank",rel:"noopener noreferrer"},m={href:"https://www.macrocreator.com/download/",target:"_blank",rel:"noopener noreferrer"},v={href:"https://github.com/papple23g/ahkcompiler",target:"_blank",rel:"noopener noreferrer"},h=n("thead",null,[n("tr",null,[n("th",null,"符号"),n("th",null,"作用")])],-1),b=n("tr",null,[n("td",null,"#"),n("td",null,"Win 键")],-1),g=n("tr",null,[n("td",null,"!"),n("td",null,"Alt 键")],-1),_=n("tr",null,[n("td",null,"^"),n("td",null,"Ctrl 键")],-1),y=n("tr",null,[n("td",null,"+"),n("td",null,"Shift 键")],-1),f=n("td",null,"`",-1),x={href:"https://wyagd001.github.io/v2/docs/misc/EscapeChar.htm",target:"_blank",rel:"noopener noreferrer"},w=n("tr",null,[n("td",null,";"),n("td",null,"代表注释内容，不影响函数")],-1),A=n("tr",null,[n("td",null,"::"),n("td",null,"(两个英文冒号)，代表分隔")],-1),S=t('<p><strong>注意事项</strong>：</p><ul><li>AHK 中<strong>不区分大小写</strong>，即 run 和 RUN 没有区别。</li><li>非热键情况，添加 <code>return</code>，脚本全部停止。</li><li>脚本需考虑，你是想要在<strong>全局</strong>还是<strong>局部</strong>中激活动作。</li></ul><h2 id="常用方法" tabindex="-1"><a class="header-anchor" href="#常用方法" aria-hidden="true">#</a> 常用方法</h2><h3 id="托盘图标" tabindex="-1"><a class="header-anchor" href="#托盘图标" aria-hidden="true">#</a> 托盘图标</h3><p>自定义图标可使用 ico 或 png，不支持 svg 格式。</p><p>托盘图标设置命令为 <code>Menu, Tray, Icon, %A_WorkingDir%\\dock_panel.png</code>。<code>%A_WorkingDir%</code> 代表脚本所在目录。</p>',6),D={href:"https://github.com/AutoHotkey/Ahk2Exe/releases",target:"_blank",rel:"noopener noreferrer"},C=n("h3",{id:"执行-powershell",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#执行-powershell","aria-hidden":"true"},"#"),s(" 执行 PowerShell")],-1),E={href:"https://learn.microsoft.com/zh-cn/powershell/scripting/learn/ps101/01-getting-started",target:"_blank",rel:"noopener noreferrer"},W=t(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># Run, powershell.exe -NoExit -Command &amp;{命令}, 目录</span>
Run, powershell.exe <span class="token parameter variable">-NoExit</span> <span class="token parameter variable">-Command</span> <span class="token operator">&amp;</span><span class="token punctuation">{</span>npm version patch<span class="token punctuation">}</span>, D:<span class="token punctuation">\\</span>Backup
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="问题" tabindex="-1"><a class="header-anchor" href="#问题" aria-hidden="true">#</a> 问题</h2><h3 id="激发热键后按键未释放" tabindex="-1"><a class="header-anchor" href="#激发热键后按键未释放" aria-hidden="true">#</a> 激发热键后按键未释放</h3><p><code>Send, ^!+w</code> 指代热键 <code>Ctrl+Alt+Shift+W</code>，有时辅助热键未正确释放，会导致激发热键后输入有问题。</p><p>函数结尾加一行 <code>Send, {Ctrl up}{Alt up}{Shift up}</code> 即可解决该问题。</p><h3 id="隐藏在托盘程序无法监测" tabindex="-1"><a class="header-anchor" href="#隐藏在托盘程序无法监测" aria-hidden="true">#</a> 隐藏在托盘程序无法监测</h3><p><code>WinExist</code> 只能查看签订程序，对于后台或托盘程序，可以用 Process 命令来检查是否存在指定程序的 PID。</p><div class="language-autohotkey line-numbers-mode" data-ext="autohotkey"><pre class="language-autohotkey"><code><span class="token comment">;晚上8点停止录屏，并精简视频</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token constant">A_Hour</span> <span class="token operator">==</span> <span class="token number">20</span> <span class="token operator">&amp;&amp;</span> Stop_Record <span class="token operator">==</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span> <span class="token comment">;如果小时等于20点</span>
    Stop_Record<span class="token operator">:=</span><span class="token number">1</span> <span class="token comment">;设置停止录屏变量为1</span>
    <span class="token command selector">Process</span><span class="token punctuation">,</span> <span class="token keyword">Exist</span><span class="token punctuation">,</span> bdcam<span class="token operator">.</span>exe <span class="token comment">;监测隐藏程序</span>
    NewPID <span class="token operator">:=</span> <span class="token constant">ErrorLevel</span>  <span class="token comment">; 由于 ErrorLevel 会经常发生改变, 所以要立即保存这个值.</span>
    <span class="token keyword">if</span> NewPID <span class="token punctuation">{</span> <span class="token comment">;如果存在录屏工具，则继续</span>
        <span class="token command selector">Send</span><span class="token punctuation">,</span> <span class="token operator">^</span><span class="token operator">+</span><span class="token operator">!</span><span class="token punctuation">{</span><span class="token symbol">F8</span><span class="token punctuation">}</span> <span class="token comment">;晚上8点后，停止录屏</span>
        <span class="token command selector">Sleep</span><span class="token punctuation">,</span> <span class="token number">1000</span> <span class="token comment">;等待5分钟</span>
        <span class="token comment">;重命名文件</span>
        <span class="token command selector">FileMove</span><span class="token punctuation">,</span> D<span class="token punctuation">:</span>\\Backup\\Libraries\\Desktop\\<span class="token variable">%A_YYYY%</span><span class="token operator">-</span><span class="token variable">%A_MM%</span><span class="token operator">-</span><span class="token variable">%A_DD%</span> <span class="token operator">*</span><span class="token operator">-</span><span class="token operator">*</span><span class="token operator">-</span><span class="token operator">*</span><span class="token operator">-</span><span class="token operator">*</span><span class="token operator">.</span>mp4<span class="token punctuation">,</span> D<span class="token punctuation">:</span>\\Backup\\Libraries\\Desktop\\<span class="token variable">%A_YYYY%</span><span class="token operator">-</span><span class="token variable">%A_MM%</span><span class="token operator">-</span><span class="token variable">%A_DD%</span><span class="token operator">.</span>mp4
        <span class="token command selector">Sleep</span><span class="token punctuation">,</span> <span class="token number">1000</span>
        <span class="token comment">;桌面打开终端，执行 dvr-scan 命令</span>
        <span class="token command selector">Run</span><span class="token punctuation">,</span> PowerShell<span class="token operator">.</span>exe <span class="token operator">-</span>NoExit <span class="token operator">-</span>Command <span class="token operator">&amp;</span><span class="token punctuation">{</span>dvr<span class="token operator">-</span>scan <span class="token operator">-</span>i <span class="token variable">%A_YYYY%</span><span class="token operator">-</span><span class="token variable">%A_MM%</span><span class="token operator">-</span><span class="token variable">%A_DD%</span><span class="token operator">.</span>mp4 <span class="token operator">-</span>o <span class="token variable">%A_YYYY%</span><span class="token operator">-</span><span class="token variable">%A_MM%</span><span class="token operator">-</span><span class="token variable">%A_DD%</span>_Scanned<span class="token operator">.</span>avi<span class="token punctuation">}</span><span class="token punctuation">,</span> D<span class="token punctuation">:</span>\\Backup\\Libraries\\Desktop
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="命令中的按键未执行" tabindex="-1"><a class="header-anchor" href="#命令中的按键未执行" aria-hidden="true">#</a> 命令中的按键未执行</h3><p>如果 AutoHotkey 脚本中模拟了按键，窗口中却并未执行，则尝试用管理员权限执行脚本。</p><p>低权限的窗口/进程不能发送消息到高权限窗口。比如 Quicker 窗口的权限高，普通启动的 AutoHotkey 脚本无法对 Quicker 输入模拟键，需要管理员权限。</p><h3 id="管理员权限运行脚本" tabindex="-1"><a class="header-anchor" href="#管理员权限运行脚本" aria-hidden="true">#</a> 管理员权限运行脚本</h3><p>对于可执行文件，命令 <code>Run *RunAs</code> 相当于右键菜单的「以管理员权限运行」命令。</p><p>右键单击脚本的快捷方式，选择「属性」&gt;「高级」，勾选「用管理员身份运行」，只能用于手动开启，开机启动会忽略带管理器的启动项。</p>`,14),P=n("strong",null,"管理员密码为空",-1),L={href:"http://www.ujiaoshou.com/xtjc/155215500.html",target:"_blank",rel:"noopener noreferrer"},H=t(`<p>如果<strong>管理员有设密码</strong>，则可使用下列命令，用管理员权限打开脚本。</p><div class="language-autohotkey line-numbers-mode" data-ext="autohotkey"><pre class="language-autohotkey"><code><span class="token command selector">RunAs</span><span class="token punctuation">,</span> Administrator<span class="token punctuation">,</span> PassWD
<span class="token command selector">Run</span><span class="token punctuation">,</span> <span class="token variable">%A_ScriptDir%</span>\\<span class="token number">1.</span>ahk
<span class="token command selector">RunAs</span>  <span class="token comment">; 恢复为普通权限</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="常用函数" tabindex="-1"><a class="header-anchor" href="#常用函数" aria-hidden="true">#</a> 常用函数</h2><h3 id="命令-run-msgbox-send" tabindex="-1"><a class="header-anchor" href="#命令-run-msgbox-send" aria-hidden="true">#</a> 命令：run, msgbox, send</h3><div class="language-autohotkey line-numbers-mode" data-ext="autohotkey"><pre class="language-autohotkey"><code><span class="token comment">;run 运行程序或者文档或其他</span>
<span class="token operator">!</span>n<span class="token punctuation">:</span><span class="token punctuation">:</span><span class="token command selector">run</span> notepad <span class="token comment">;便捷呼出程序，「notepad」是「运行」对话框中的命令之一，所以不用完整路径</span>
<span class="token command selector">Run</span><span class="token punctuation">,</span> <span class="token variable">%A_WorkingDir%</span>\\xx<span class="token operator">.</span>lnk <span class="token comment">;启用当前目录中的文件</span>
<span class="token command selector">Run</span><span class="token punctuation">,</span> chrome<span class="token operator">.</span>exe https<span class="token punctuation">:</span><span class="token operator">//</span>newzone<span class="token operator">.</span><span class="token keyword">top</span><span class="token operator">/</span> <span class="token comment">;指定浏览器打开链接。</span>
<span class="token command selector">Run</span><span class="token punctuation">,</span> <span class="token variable">%A_ProgramFiles%</span>\\Some Application\\App<span class="token operator">.</span>exe<span class="token punctuation">,</span> <span class="token variable">%A_ProgramFiles%</span>\\Some Application <span class="token comment">;有些程序需要在它们自己的目录下运行。</span>

<span class="token comment">;Msgbox：显示带两个按钮的对话框 (是 和 否) 对话框中可加内容</span>
<span class="token command selector">Msgbox</span>，你好吗？ <span class="token comment">;显示「你好吗？」的对话框</span>
<span class="token comment">;Send：在当前窗口输入文本内容</span>
<span class="token command selector">send</span> how are you？ <span class="token comment">;在当前窗口输入 how are you？</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="局部变量-ifwinactive" tabindex="-1"><a class="header-anchor" href="#局部变量-ifwinactive" aria-hidden="true">#</a> 局部变量：IFwinactive</h3><p>注意：同样<strong>不区分大小写</strong>。比如 ifwinactive 等等。</p><div class="language-autohotkey line-numbers-mode" data-ext="autohotkey"><pre class="language-autohotkey"><code><span class="token comment">;#IFwinactive（指定窗口）（热键或热字串）</span>
<span class="token directive important">#IFwinactive</span> 新建文本文档<span class="token operator">.</span>txt <span class="token operator">-</span> 记事本 <span class="token comment">; 在*新建文本文档.txt - 记事本*这个指定窗口下，窗口标题的前半段符合即可</span>
<span class="token directive important">#q</span><span class="token punctuation">:</span><span class="token punctuation">:</span> <span class="token comment">;按下 win 键和 q 键</span>
<span class="token command selector">run</span> Notepad <span class="token comment">;激活打开记事本这个动作</span>
<span class="token command selector">return</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="热键、热字串" tabindex="-1"><a class="header-anchor" href="#热键、热字串" aria-hidden="true">#</a> 热键、热字串</h2><h3 id="热键-按键-1-按键-2" tabindex="-1"><a class="header-anchor" href="#热键-按键-1-按键-2" aria-hidden="true">#</a> 热键：(按键 1)(按键 2)</h3><p>当按下特定的按键，或者按键顺序，或者按键组合时，激活某个或者某系列动作。</p><div class="language-autohotkey line-numbers-mode" data-ext="autohotkey"><pre class="language-autohotkey"><code><span class="token directive important">#q</span><span class="token punctuation">:</span><span class="token punctuation">:</span> <span class="token comment">;按下 win 键和 q 键时激活运行记事本这个动作。</span>
<span class="token command selector">run</span> Notepad <span class="token comment">;run 为 AHK 中一个命令，相当于 C 语言中的关键字或者说是函数。还有 msgbox 等等。</span>
<span class="token command selector">return</span> <span class="token comment">;return 为返回值，在存在多个热键时需使用，不然热键中会起冲突。</span>

q<span class="token operator">&amp;</span>n<span class="token punctuation">:</span><span class="token punctuation">:</span> <span class="token comment">;按下 q 和 n，自定义按键：(按键 1)&amp;(按键 2)&amp;...&amp;(按键 n)，用来连接任何两个或多个按键组合成一个新的按键。</span>
<span class="token command selector">run</span> notepad <span class="token comment">;激活打开记事本这个动作。</span>
<span class="token command selector">return</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="热字串-被替换内容-替换内容" tabindex="-1"><a class="header-anchor" href="#热字串-被替换内容-替换内容" aria-hidden="true">#</a> 热字串：(被替换内容)::(替换内容)</h3><p>扩展或者说自动替换文本，当然也可以映射任何脚本动作。</p><p>自动替换：</p><div class="language-autohotkey line-numbers-mode" data-ext="autohotkey"><pre class="language-autohotkey"><code><span class="token punctuation">:</span><span class="token punctuation">:</span>hay<span class="token punctuation">:</span><span class="token punctuation">:</span>how are you<span class="token operator">?</span> <span class="token comment">;当输入 hay 时自动替换为 how are you？</span>
<span class="token punctuation">:</span><span class="token punctuation">:</span>nh<span class="token punctuation">:</span><span class="token punctuation">:</span>你好 <span class="token comment">;当输入 nh 时自动替换为你好</span>
<span class="token punctuation">:</span><span class="token punctuation">:</span><span class="token operator">/</span>mail<span class="token punctuation">:</span><span class="token punctuation">:</span>gmail@gmail<span class="token operator">.</span>com <span class="token comment">;键入/mail 后，再加空格、或 tab、或回车，就可以触发缩写</span>
<span class="token punctuation">:</span><span class="token punctuation">:</span><span class="token operator">/</span>fk<span class="token punctuation">:</span><span class="token punctuation">:</span>轩先生这会子肯定在忙，请骚后。thx。祝君：天天开心，日日欣悦。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>热字串映射脚本：</p><div class="language-autohotkey line-numbers-mode" data-ext="autohotkey"><pre class="language-autohotkey"><code><span class="token punctuation">:</span><span class="token punctuation">:</span>np<span class="token punctuation">:</span><span class="token punctuation">:</span>
<span class="token command selector">run</span> Notepad <span class="token comment">;当输入 np 加空格时激活运行记事本这个动作。</span>
<span class="token command selector">return</span>
<span class="token punctuation">:</span><span class="token punctuation">:</span>nh<span class="token punctuation">:</span><span class="token punctuation">:</span>
<span class="token command selector">send</span> 你好。 <span class="token comment">;在当前窗口输入你好。</span>
<span class="token command selector">return</span>
<span class="token punctuation">:</span><span class="token punctuation">:</span>h<span class="token punctuation">:</span><span class="token punctuation">:</span> 欢迎光临！ <span class="token comment">;只要输入 h，然后回车/TAB/空格就自动把 h 替换为欢迎光临！</span>
<span class="token punctuation">:</span><span class="token operator">*</span><span class="token punctuation">:</span>w<span class="token punctuation">:</span><span class="token punctuation">:</span>欢迎你再次光临！     <span class="token comment">;自动替换，不需要输入空格来触发替换</span>
<span class="token punctuation">:</span><span class="token punctuation">:</span>hehe<span class="token punctuation">:</span><span class="token punctuation">:</span>                 <span class="token comment">;替换支持换行文字，需要用括号？</span>
<span class="token punctuation">(</span>
老兄！
好久不见！
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>键入热字串后，再加<strong>空格</strong>、或 <strong>tab</strong>、或<strong>回车</strong>，就可以触发缩写。</p><h2 id="ahk-使用样例" tabindex="-1"><a class="header-anchor" href="#ahk-使用样例" aria-hidden="true">#</a> AHK 使用样例</h2><h3 id="神速激活-打开-隐藏程序" tabindex="-1"><a class="header-anchor" href="#神速激活-打开-隐藏程序" aria-hidden="true">#</a> 神速激活/打开/隐藏程序</h3><p><code>Win+C</code>激活 Chrome 状态切换：Chrome 没打开时 --&gt; 打开；打开没激活状态时候 --&gt; 激活；打开处在激活状态时候 --&gt; 隐藏。<sup class="footnote-ref"><a href="#footnote1">[1]</a><a class="footnote-anchor" id="footnote-ref1"></a></sup></p><div class="language-autohotkey line-numbers-mode" data-ext="autohotkey"><pre class="language-autohotkey"><code><span class="token directive important">#c</span><span class="token punctuation">:</span><span class="token punctuation">:</span>
<span class="token keyword">IfWinNotExist</span> <span class="token keyword">ahk_class</span> Chrome_WidgetWin_1
<span class="token punctuation">{</span>
    <span class="token command selector">Run</span> <span class="token string">&quot;C:\\\\Users\\\\Administrator\\\\AppData\\\\Local\\\\Google\\\\Chrome\\\\Application\\\\chrome.exe&quot;</span>
    <span class="token command selector">WinActivate</span>
<span class="token punctuation">}</span>
<span class="token keyword">Else</span> <span class="token keyword">IfWinNotActive</span> <span class="token keyword">ahk_class</span> Chrome_WidgetWin_1
<span class="token punctuation">{</span>
    <span class="token command selector">WinActivate</span>
<span class="token punctuation">}</span>
<span class="token keyword">Else</span>
<span class="token punctuation">{</span>
    <span class="token command selector">WinMinimize</span>
<span class="token punctuation">}</span>
<span class="token command selector">Return</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="一键运行-关闭脚本的循环" tabindex="-1"><a class="header-anchor" href="#一键运行-关闭脚本的循环" aria-hidden="true">#</a> 一键运行/关闭脚本的循环</h3><p>按 F2 一键运行/关闭脚本的循环，空格可暂停/继续脚本。</p><div class="language-autohotkey line-numbers-mode" data-ext="autohotkey"><pre class="language-autohotkey"><code><span class="token directive important">#maxThreadsPerHotkey</span><span class="token punctuation">,</span> <span class="token number">2</span> <span class="token comment">;让热键能同时有运行/关闭作用，否则键击会被忽略</span>
<span class="token comment">;setKeyDelay, 50, 50 ;键击默认休眠</span>
<span class="token comment">;setMouseDelay, 50 ;键击默认休眠</span>
stop<span class="token operator">:=</span><span class="token number">0</span>

<span class="token comment">;F2一键运行/关闭脚本的循环</span>
$<span class="token symbol">f2</span><span class="token punctuation">:</span><span class="token punctuation">:</span>
    stop<span class="token operator">:=</span><span class="token operator">!</span>stop
    <span class="token keyword">while</span> <span class="token punctuation">(</span>stop<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token comment">;激活 excel 窗口「工作簿」获取数值，然后激活 chrome 窗口执行命令，完成后进入循环。</span>
        <span class="token command selector">WinActivate</span><span class="token punctuation">,</span> 工作簿
        <span class="token command selector">Sleep</span><span class="token punctuation">,</span> <span class="token number">333</span>
        <span class="token command selector">Send</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token symbol">Down</span><span class="token punctuation">}</span>
        <span class="token command selector">Sleep</span><span class="token punctuation">,</span> <span class="token number">100</span>
        <span class="token command selector">Send</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token command selector">Control</span> <span class="token symbol">Down</span><span class="token punctuation">}</span><span class="token punctuation">{</span>c<span class="token punctuation">}</span><span class="token punctuation">{</span><span class="token command selector">Control</span> <span class="token symbol">Up</span><span class="token punctuation">}</span>
        <span class="token command selector">Sleep</span><span class="token punctuation">,</span> <span class="token number">100</span>
        <span class="token command selector">WinActivate</span><span class="token punctuation">,</span> 捧场 <span class="token operator">-</span> Google Chrome
        <span class="token command selector">Sleep</span><span class="token punctuation">,</span> <span class="token number">333</span>
        <span class="token command selector">Send</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token command selector">Control</span> <span class="token symbol">Down</span><span class="token punctuation">}</span><span class="token punctuation">{</span>v<span class="token punctuation">}</span><span class="token punctuation">{</span><span class="token command selector">Control</span> <span class="token symbol">Up</span><span class="token punctuation">}</span>
        <span class="token command selector">Sleep</span><span class="token punctuation">,</span> <span class="token number">100</span>
        <span class="token command selector">Send</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token symbol">Enter</span><span class="token punctuation">}</span>
        <span class="token command selector">Sleep</span><span class="token punctuation">,</span> <span class="token number">100</span>
    <span class="token punctuation">}</span>
<span class="token command selector">return</span>
<span class="token comment">;如果需要暂停，可在脚本后加这段代码，按 空格键 就暂停，再按空格键继续运行。</span>
<span class="token comment">;space::pause</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="监测进程是否运行" tabindex="-1"><a class="header-anchor" href="#监测进程是否运行" aria-hidden="true">#</a> 监测进程是否运行</h3><p>监测应用是否有运行，如果没运行则执行启动热键。</p><div class="language-autohotkey line-numbers-mode" data-ext="autohotkey"><pre class="language-autohotkey"><code><span class="token command selector">Process</span><span class="token punctuation">,</span> <span class="token keyword">Exist</span><span class="token punctuation">,</span> PicGo<span class="token operator">.</span>exe
NewPID <span class="token operator">:=</span> <span class="token constant">ErrorLevel</span>  <span class="token comment">; 由于 ErrorLevel 会经常发生改变，所以要立即保存值。</span>
<span class="token keyword">if</span> <span class="token keyword">not</span> NewPID
<span class="token punctuation">{</span>
    <span class="token command selector">run</span> C<span class="token punctuation">:</span>\\\\Program Files\\\\PicGo\\\\PicGo<span class="token operator">.</span>exe
    <span class="token command selector">sleep</span> <span class="token number">3000</span>
    <span class="token command selector">Send</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token symbol">Shift</span> <span class="token symbol">Down</span><span class="token punctuation">}</span><span class="token punctuation">{</span><span class="token command selector">Control</span> <span class="token symbol">Down</span><span class="token punctuation">}</span><span class="token punctuation">{</span>p<span class="token punctuation">}</span><span class="token punctuation">{</span><span class="token command selector">Control</span> <span class="token symbol">Up</span><span class="token punctuation">}</span><span class="token punctuation">{</span><span class="token symbol">Shift</span> <span class="token symbol">Up</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token command selector">Send</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token symbol">Shift</span> <span class="token symbol">Down</span><span class="token punctuation">}</span><span class="token punctuation">{</span><span class="token command selector">Control</span> <span class="token symbol">Down</span><span class="token punctuation">}</span><span class="token punctuation">{</span>p<span class="token punctuation">}</span><span class="token punctuation">{</span><span class="token command selector">Control</span> <span class="token symbol">Up</span><span class="token punctuation">}</span><span class="token punctuation">{</span><span class="token symbol">Shift</span> <span class="token symbol">Up</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token command selector">return</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="输入法状态影响字符输出" tabindex="-1"><a class="header-anchor" href="#输入法状态影响字符输出" aria-hidden="true">#</a> 输入法状态影响字符输出</h3><p>在脚本中，调用函数<code>SendText()</code>输出文字，不受输入法状态。</p><div class="language-autohotkey line-numbers-mode" data-ext="autohotkey"><pre class="language-autohotkey"><code><span class="token comment">;;;;;;;新版独立小程序，可以避免输入法状态影响中文或英文字符的热键输出;;;;;;;</span>
<span class="token comment">;来源链接：&lt;https://segmentfault.com/a/1190000017029464&gt;</span>
<span class="token function">SendText</span><span class="token punctuation">(</span>var_string<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">local</span>
    <span class="token command selector">SendInput</span> <span class="token punctuation">{</span><span class="token keyword">text</span><span class="token punctuation">}</span><span class="token variable">%var_string%</span>
    <span class="token command selector">return</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="大写键改为-enter" tabindex="-1"><a class="header-anchor" href="#大写键改为-enter" aria-hidden="true">#</a> 大写键改为 Enter</h3><div class="language-autohotkey line-numbers-mode" data-ext="autohotkey"><pre class="language-autohotkey"><code><span class="token comment">;replace CapsLock to LeftEnter; CapsLock = Alt CapsLock</span>
$<span class="token symbol">CapsLock</span><span class="token punctuation">:</span><span class="token punctuation">:</span><span class="token symbol">Enter</span>
<span class="token symbol">LAlt</span> <span class="token operator">&amp;</span> <span class="token symbol">Capslock</span><span class="token punctuation">:</span><span class="token punctuation">:</span><span class="token command selector">SetCapsLockState</span><span class="token punctuation">,</span> % <span class="token command selector">GetKeyState</span><span class="token punctuation">(</span><span class="token string">&quot;CapsLock&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;T&quot;</span><span class="token punctuation">)</span> <span class="token operator">?</span> <span class="token string">&quot;Off&quot;</span> <span class="token punctuation">:</span> <span class="token string">&quot;On&quot;</span>
<span class="token operator">!</span>u<span class="token punctuation">:</span><span class="token punctuation">:</span><span class="token command selector">Send</span> <span class="token operator">^</span>c <span class="token operator">!</span><span class="token punctuation">{</span><span class="token symbol">tab</span><span class="token punctuation">}</span> <span class="token operator">^</span>v
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr class="footnotes-sep">`,35),N={class:"footnotes"},q={class:"footnotes-list"},R={id:"footnote1",class:"footnote-item"},Y={href:"https://segmentfault.com/a/1190000004611125",target:"_blank",rel:"noopener noreferrer"},I=n("a",{href:"#footnote-ref1",class:"footnote-backref"},"↩︎",-1);function M(K,F){const a=p("ExternalLinkIcon");return c(),l("div",null,[r,n("ul",null,[n("li",null,[n("a",u,[s("AutoHotkey 中文说明"),e(a)]),s("："),n("a",d,[s("按键 Key 名列表"),e(a)]),s("，"),n("a",k,[s("AHK 环境变量"),e(a)]),s("。")]),n("li",null,[s("脚本录制/功能编辑："),n("a",m,[s("Pulover's Macro Creator"),e(a)]),s("，"),n("a",v,[s("AutoHotkey 語法產生器 (線上網站)"),e(a)]),s("。")])]),n("table",null,[h,n("tbody",null,[b,g,_,y,n("tr",null,[f,n("td",null,[s("转义字符，参考"),n("a",x,[s("转义序列"),e(a)])])]),w,A])]),S,n("p",null,[s("如果是设置 exe 程序图标，则使用 "),n("a",D,[s("Ahk2Exe"),e(a)]),s(" 工具手动转换。")]),C,n("p",null,[s("系统级别的操作可以通过 "),n("a",E,[s("PowerShell"),e(a)]),s(" 来实现。")]),W,n("p",null,[s("如果"),P,s("，则参考 "),n("a",L,[s("Win10 添加开机启动项管理员权限运行如何设置"),e(a)]),s("，在系统的任务计划程序添加管理员自启动。如果想避免启动报错，建议将启动触发器从「开机」改成「登录」，增加延迟 1 分钟，勾选「最高管理员权限」。设置后，脚本中的打开命令都将使用管理员权限执行。")]),H,n("section",N,[n("ol",q,[n("li",R,[n("p",null,[n("a",Y,[s("Win 下最爱效率利器:AutoHotKey"),e(a)]),s(),I])])])])])}const T=o(i,[["render",M],["__file","AutoHotkey.html.vue"]]);export{T as default};
