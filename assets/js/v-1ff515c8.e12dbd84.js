"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[72618],{62692:(e,t,o)=>{o.r(t),o.d(t,{data:()=>a});const a={key:"v-1ff515c8",path:"/devices/SPZB0001.html",title:"Eurotronic SPZB0001 control via MQTT",lang:"en-US",frontmatter:{title:"Eurotronic SPZB0001 control via MQTT",description:"Integrate your Eurotronic SPZB0001 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway.",addedAt:"2021-10-30T12:58:50.000Z",pageClass:"device-page"},excerpt:"",headers:[{level:2,title:"Notes",slug:"notes",children:[{level:3,title:"Pairing",slug:"pairing",children:[]},{level:3,title:"Recommendation",slug:"recommendation",children:[]},{level:3,title:"Controlling",slug:"controlling",children:[]}]},{level:2,title:"OTA updates",slug:"ota-updates",children:[]},{level:2,title:"Options",slug:"options",children:[]},{level:2,title:"Exposes",slug:"exposes",children:[{level:3,title:"Battery (numeric)",slug:"battery-numeric",children:[]},{level:3,title:"Climate",slug:"climate",children:[]},{level:3,title:"Trv_mode (enum)",slug:"trv-mode-enum",children:[]},{level:3,title:"Valve_position (numeric)",slug:"valve-position-numeric",children:[]},{level:3,title:"Linkquality (numeric)",slug:"linkquality-numeric",children:[]}]}],filePathRelative:"devices/SPZB0001.md",git:{updatedTime:1666897866e3}}},96102:(e,t,o)=>{o.r(t),o.d(t,{default:()=>u});var a=o(66252);const s=(0,a.uE)('<h1 id="eurotronic-spzb0001" tabindex="-1"><a class="header-anchor" href="#eurotronic-spzb0001" aria-hidden="true">#</a> Eurotronic SPZB0001</h1><table><thead><tr><th></th><th></th></tr></thead><tbody><tr><td>Model</td><td>SPZB0001</td></tr><tr><td>Vendor</td><td>Eurotronic</td></tr><tr><td>Description</td><td>Spirit Zigbee wireless heater thermostat</td></tr><tr><td>Exposes</td><td>battery, climate (occupied_heating_setpoint, local_temperature, system_mode, running_state, local_temperature_calibration, pi_heating_demand), trv_mode, valve_position, linkquality</td></tr><tr><td>Picture</td><td><img src="https://www.zigbee2mqtt.io/images/devices/SPZB0001.jpg" alt="Eurotronic SPZB0001"></td></tr></tbody></table><h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><h3 id="pairing" tabindex="-1"><a class="header-anchor" href="#pairing" aria-hidden="true">#</a> Pairing</h3><p>If you are having trouble pairing, reset the device.</p><ul><li>Make sure the device is on auto or heat mode (not off). Hold boost, +, and - (a count from 1 to 10 will be on the display, it may be required for the thermostat to be dismounted from the radiator valve for this to work)</li><li>release once &#39;rES&#39; is displayed</li><li>hit boost once after &#39;Jin&#39; is displayed to start pairing to the ZigBee network</li><li>once successfully paired &#39;Ins&#39; should be displayed and the boost button should flash green. Make sure the thermostat is mounted on the radiator valve before pressing the boost button again.</li><li>now the display should read &#39;Ada&#39; indicating the adapting process is started which should mechanically calibrate the thermostat to the valve.</li></ul><h3 id="recommendation" tabindex="-1"><a class="header-anchor" href="#recommendation" aria-hidden="true">#</a> Recommendation</h3><p>This device sends multiple messages in short time period with the same payload. It’s worth setting debounce option to throttle them without losing unique action payloads.</p><p>E.g. (devices.yaml)</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">&#39;0xabc457fffe679xyz&#39;</span><span class="token punctuation">:</span>\n    <span class="token key atrule">friendly_name</span><span class="token punctuation">:</span> my_device\n    <span class="token key atrule">debounce</span><span class="token punctuation">:</span> <span class="token number">0.5</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="controlling" tabindex="-1"><a class="header-anchor" href="#controlling" aria-hidden="true">#</a> Controlling</h3><p><em>Current heating setpoint</em></p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n    <span class="token property">&quot;current_heating_setpoint&quot;</span><span class="token operator">:</span> <span class="token number">21.5</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>Current heating setpoint is also modified when occupied or unoccupied heating setpoint is set.</p><p><em>System mode</em></p><p>The system mode will be either <code>off</code>, <code>auto</code>, or <code>heat</code>. When set to <code>heat</code> the boost host flags will be set, when using <code>off</code> the window_open host flag will be set (and off will be displayed on the display).</p><p><em>Eurotronic host flags</em></p><p>The <code>eurotronic_host_flags</code> property contains an object with a true/false field for each host option.</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n  <span class="token property">&quot;eurotronic_host_flags&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token property">&quot;mirror_display&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;boost&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;window_open&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;child_protection&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>You can toggle these flags by publishing a message to the <code>set</code> MQTT topic containing <code>eurotronic_host_flags</code>. e.g. enabling the display mirroring:</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span><span class="token property">&quot;eurotronic_host_flags&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token property">&quot;mirror_display&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">}</span><span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p><strong>Note that <code>true</code> or <code>false</code> do not have quotes aroud them!</strong></p><p><em>Eurotronic system mode</em></p><p><strong>This is deprecated in favor of eurotronic_host_flags, but will still work for now.</strong></p><p>This is a bitmap encoded field to set several device specific features. Please remind it is not possible to set single bits, always the full bitmap is written. Bit 0 doesn&#39;t seem to be writeable, it is always reported as set, so expect your written value + 1 to be reported.</p><table><thead><tr><th>Bit</th><th>Position</th></tr></thead><tbody><tr><td>0</td><td>unknown (default 1)</td></tr><tr><td>1</td><td>Mirror display</td></tr><tr><td>2</td><td>Boost</td></tr><tr><td>3</td><td>unknown</td></tr><tr><td>4</td><td>disable window open</td></tr><tr><td>5</td><td>set window open (is reported as disable window open)</td></tr><tr><td>6</td><td>unknown</td></tr><tr><td>7</td><td>Child protection</td></tr></tbody></table><p>Examples for eurotronic_system_mode:</p><p>Mirror display, reported as 3</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n    <span class="token property">&quot;eurotronic_system_mode&quot;</span><span class="token operator">:</span> <span class="token number">2</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>signal external window open, current_heating_setpoint will report &quot;5&quot;, device display shows &quot;OFF&quot;</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n    <span class="token property">&quot;eurotronic_system_mode&quot;</span><span class="token operator">:</span> <span class="token number">32</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>signal external window close, will restore last current_heating_setpoint value</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n    <span class="token property">&quot;eurotronic_system_mode&quot;</span><span class="token operator">:</span> <span class="token number">16</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>Mirror display and set child protection.</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n    <span class="token property">&quot;eurotronic_system_mode&quot;</span><span class="token operator">:</span> <span class="token number">66</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p><em>Eurotronic error status</em></p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n    <span class="token property">&quot;eurotronic_error_status&quot;</span><span class="token operator">:</span> <span class="token number">0</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>This field is a readonly bitmap</p><table><thead><tr><th>Bit</th><th>Position</th></tr></thead><tbody><tr><td>0</td><td>reserved</td></tr><tr><td>1</td><td>reserved</td></tr><tr><td>2</td><td>reserved</td></tr><tr><td>3</td><td>Valve adaption failed (E1)</td></tr><tr><td>4</td><td>Valve movement too slow (E2)</td></tr><tr><td>5</td><td>Valve not moving/blocked (E3)</td></tr><tr><td>6</td><td>reserved</td></tr><tr><td>7</td><td>reserved</td></tr></tbody></table><h2 id="ota-updates" tabindex="-1"><a class="header-anchor" href="#ota-updates" aria-hidden="true">#</a> OTA updates</h2>',40),n=(0,a.Uk)("This device supports OTA updates, for more information see "),i=(0,a.Uk)("OTA updates"),d=(0,a.Uk)("."),r=(0,a._)("h2",{id:"options",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#options","aria-hidden":"true"},"#"),(0,a.Uk)(" Options")],-1),l=(0,a.Uk)("How to use device type specific configuration"),c=(0,a.uE)('<ul><li><p><code>thermostat_unit</code>: Controls the temperature unit of the thermostat (default celsius). The value must be one of <code>celsius</code>, <code>fahrenheit</code></p></li><li><p><code>legacy</code>: Set to false to disable the legacy integration (highly recommended), will change structure of the published payload (default true). The value must be <code>true</code> or <code>false</code></p></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric" aria-hidden="true">#</a> Battery (numeric)</h3><p>Remaining battery in %. Value can be found in the published state on the <code>battery</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="climate" tabindex="-1"><a class="header-anchor" href="#climate" aria-hidden="true">#</a> Climate</h3><p>This climate device supports the following features: <code>occupied_heating_setpoint</code>, <code>local_temperature</code>, <code>system_mode</code>, <code>running_state</code>, <code>local_temperature_calibration</code>, <code>pi_heating_demand</code>.</p><ul><li><code>occupied_heating_setpoint</code>: Temperature setpoint. To control publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;occupied_heating_setpoint&quot;: VALUE}</code> where <code>VALUE</code> is the °C between <code>5</code> and <code>30</code>. To read send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;occupied_heating_setpoint&quot;: &quot;&quot;}</code>.</li><li><code>pi_heating_demand</code>: Position of the valve (= demanded heat) where 0% is fully closed and 100% is fully open. To control publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;pi_heating_demand&quot;: VALUE}</code> where <code>VALUE</code> is the % between <code>0</code> and <code>100</code>. To read send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;pi_heating_demand&quot;: &quot;&quot;}</code>.</li><li><code>local_temperature</code>: Current temperature measured on the device (in °C). To read send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;local_temperature&quot;: &quot;&quot;}</code>.</li><li><code>system_mode</code>: Mode of this device. To control publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;system_mode&quot;: VALUE}</code> where <code>VALUE</code> is one of: <code>off</code>, <code>auto</code>, <code>heat</code>. To read send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;system_mode&quot;: &quot;&quot;}</code>.</li><li><code>running_state</code>: The current running state. Possible values are: <code>idle</code>, <code>heat</code>. To read send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;running_state&quot;: &quot;&quot;}</code>.</li><li><code>local_temperature_calibration</code>: Offset to be used in the local_temperature. To control publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;local_temperature_calibration&quot;: VALUE}.</code>To read send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;local_temperature&quot;: &quot;&quot;}</code>.</li></ul><h3 id="trv-mode-enum" tabindex="-1"><a class="header-anchor" href="#trv-mode-enum" aria-hidden="true">#</a> Trv_mode (enum)</h3><p>Select between direct control of the valve via the <code>valve_position</code> or automatic control of the valve based on the <code>current_heating_setpoint</code>. For manual control set the value to 1, for automatic control set the value to 2 (the default). When switched to manual mode the display shows a value from 0 (valve closed) to 100 (valve fully open) and the buttons on the device are disabled.. Value can be found in the published state on the <code>trv_mode</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;trv_mode&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;trv_mode&quot;: NEW_VALUE}</code>. The possible values are: <code>1</code>, <code>2</code>.</p><h3 id="valve-position-numeric" tabindex="-1"><a class="header-anchor" href="#valve-position-numeric" aria-hidden="true">#</a> Valve_position (numeric)</h3><p>Directly control the radiator valve when <code>trv_mode</code> is set to 1. The values range from 0 (valve closed) to 255 (valve fully open). Value can be found in the published state on the <code>valve_position</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;valve_position&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;valve_position&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>255</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',13),p={},u=(0,o(83744).Z)(p,[["render",function(e,t){const o=(0,a.up)("RouterLink");return(0,a.wg)(),(0,a.iD)(a.HY,null,[s,(0,a._)("p",null,[n,(0,a.Wm)(o,{to:"/guide/usage/ota_updates.html"},{default:(0,a.w5)((()=>[i])),_:1}),d]),r,(0,a._)("p",null,[(0,a._)("em",null,[(0,a.Wm)(o,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,a.w5)((()=>[l])),_:1})])]),c],64)}]])},83744:(e,t)=>{t.Z=(e,t)=>{for(const[o,a]of t)e[o]=a;return e}}}]);