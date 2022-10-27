"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[89902],{67905:(e,o,t)=>{t.r(o),t.d(o,{data:()=>d});const d={key:"v-4dbf73bc",path:"/devices/GW003-AS-IN-TE-FC.html",title:"Atlantic Group GW003-AS-IN-TE-FC control via MQTT",lang:"en-US",frontmatter:{title:"Atlantic Group GW003-AS-IN-TE-FC control via MQTT",description:"Integrate your Atlantic Group GW003-AS-IN-TE-FC via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway.",addedAt:"2022-09-30T20:52:51.000Z",pageClass:"device-page"},excerpt:"",headers:[{level:2,title:"Options",slug:"options",children:[]},{level:2,title:"Exposes",slug:"exposes",children:[{level:3,title:"Programming_operation_mode (enum)",slug:"programming-operation-mode-enum",children:[]},{level:3,title:"Climate",slug:"climate",children:[]},{level:3,title:"Quiet_fan (binary)",slug:"quiet-fan-binary",children:[]},{level:3,title:"Ac_louver_position (enum)",slug:"ac-louver-position-enum",children:[]},{level:3,title:"Linkquality (numeric)",slug:"linkquality-numeric",children:[]}]}],filePathRelative:"devices/GW003-AS-IN-TE-FC.md",git:{updatedTime:1666897866e3}}},3410:(e,o,t)=>{t.r(o),t.d(o,{default:()=>n});var d=t(66252);const i=(0,d.uE)('<h1 id="atlantic-group-gw003-as-in-te-fc" tabindex="-1"><a class="header-anchor" href="#atlantic-group-gw003-as-in-te-fc" aria-hidden="true">#</a> Atlantic Group GW003-AS-IN-TE-FC</h1><table><thead><tr><th></th><th></th></tr></thead><tbody><tr><td>Model</td><td>GW003-AS-IN-TE-FC</td></tr><tr><td>Vendor</td><td>Atlantic Group</td></tr><tr><td>Description</td><td>Interface Naviclim for Takao air conditioners</td></tr><tr><td>Exposes</td><td>programming_operation_mode, climate (local_temperature, occupied_cooling_setpoint, occupied_heating_setpoint, system_mode, preset, fan_mode, swing_mode), quiet_fan, ac_louver_position, linkquality</td></tr><tr><td>Picture</td><td><img src="https://www.zigbee2mqtt.io/images/devices/GW003-AS-IN-TE-FC.jpg" alt="Atlantic Group GW003-AS-IN-TE-FC"></td></tr></tbody></table><h2 id="options" tabindex="-1"><a class="header-anchor" href="#options" aria-hidden="true">#</a> Options</h2>',3),a=(0,d.Uk)("How to use device type specific configuration"),c=(0,d.uE)('<ul><li><code>thermostat_unit</code>: Controls the temperature unit of the thermostat (default celsius). The value must be one of <code>celsius</code>, <code>fahrenheit</code></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="programming-operation-mode-enum" tabindex="-1"><a class="header-anchor" href="#programming-operation-mode-enum" aria-hidden="true">#</a> Programming_operation_mode (enum)</h3><p>Controls how programming affects the thermostat. Possible values: setpoint (only use specified setpoint), schedule (follow programmed setpoint schedule). Changing this value does not clear programmed schedules.. Value can be found in the published state on the <code>programming_operation_mode</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;programming_operation_mode&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;programming_operation_mode&quot;: NEW_VALUE}</code>. The possible values are: <code>setpoint</code>, <code>schedule</code>, <code>eco</code>.</p><h3 id="climate" tabindex="-1"><a class="header-anchor" href="#climate" aria-hidden="true">#</a> Climate</h3><p>This climate device supports the following features: <code>local_temperature</code>, <code>occupied_cooling_setpoint</code>, <code>occupied_heating_setpoint</code>, <code>system_mode</code>, <code>preset</code>, <code>fan_mode</code>, <code>swing_mode</code>.</p><ul><li><code>occupied_cooling_setpoint</code>: Temperature setpoint. To control publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;occupied_cooling_setpoint&quot;: VALUE}</code> where <code>VALUE</code> is the °C between <code>18</code> and <code>30</code>. To read send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;occupied_cooling_setpoint&quot;: &quot;&quot;}</code>.</li><li><code>occupied_heating_setpoint</code>: Temperature setpoint. To control publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;occupied_heating_setpoint&quot;: VALUE}</code> where <code>VALUE</code> is the °C between <code>16</code> and <code>30</code>. To read send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;occupied_heating_setpoint&quot;: &quot;&quot;}</code>.</li><li><code>local_temperature</code>: Current temperature measured on the device (in °C). To read send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;local_temperature&quot;: &quot;&quot;}</code>.</li><li><code>system_mode</code>: Mode of this device. To control publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;system_mode&quot;: VALUE}</code> where <code>VALUE</code> is one of: <code>off</code>, <code>heat</code>, <code>cool</code>, <code>auto</code>, <code>dry</code>, <code>fan_only</code>. To read send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;system_mode&quot;: &quot;&quot;}</code>.</li><li><code>preset</code>: Mode of this device (similar to system_mode). To control publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;preset&quot;: VALUE}</code> where <code>VALUE</code> is one of: <code>activity</code>, <code>boost</code>, <code>eco</code>. To read send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;preset&quot;: &quot;&quot;}</code>.</li></ul><h3 id="quiet-fan-binary" tabindex="-1"><a class="header-anchor" href="#quiet-fan-binary" aria-hidden="true">#</a> Quiet_fan (binary)</h3><p>Fan quiet mode. Value can be found in the published state on the <code>quiet_fan</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;quiet_fan&quot;: NEW_VALUE}</code>. If value equals <code>true</code> quiet_fan is ON, if <code>false</code> OFF.</p><h3 id="ac-louver-position-enum" tabindex="-1"><a class="header-anchor" href="#ac-louver-position-enum" aria-hidden="true">#</a> Ac_louver_position (enum)</h3><p>Ac louver position of this device. Value can be found in the published state on the <code>ac_louver_position</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;ac_louver_position&quot;: NEW_VALUE}</code>. The possible values are: <code>quarter_open</code>, <code>half_open</code>, <code>three_quarters_open</code>, <code>fully_open</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',13),s={},n=(0,t(83744).Z)(s,[["render",function(e,o){const t=(0,d.up)("RouterLink");return(0,d.wg)(),(0,d.iD)(d.HY,null,[i,(0,d._)("p",null,[(0,d._)("em",null,[(0,d.Wm)(t,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,d.w5)((()=>[a])),_:1})])]),c],64)}]])},83744:(e,o)=>{o.Z=(e,o)=>{for(const[t,d]of o)e[t]=d;return e}}}]);