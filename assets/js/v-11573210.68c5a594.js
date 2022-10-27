"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[28221],{30388:(e,t,i)=>{i.r(t),i.d(t,{data:()=>a});const a={key:"v-11573210",path:"/devices/JTYJ-GD-01LM_BW.html",title:"Xiaomi JTYJ-GD-01LM/BW control via MQTT",lang:"en-US",frontmatter:{title:"Xiaomi JTYJ-GD-01LM/BW control via MQTT",description:"Integrate your Xiaomi JTYJ-GD-01LM/BW via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway.",addedAt:"2019-07-22T20:08:17.000Z",pageClass:"device-page"},excerpt:"",headers:[{level:2,title:"Notes",slug:"notes",children:[{level:3,title:"Pairing",slug:"pairing",children:[]},{level:3,title:"Sensitivity",slug:"sensitivity",children:[]},{level:3,title:"Self-test",slug:"self-test",children:[]}]},{level:2,title:"Options",slug:"options",children:[]},{level:2,title:"Exposes",slug:"exposes",children:[{level:3,title:"Smoke (binary)",slug:"smoke-binary",children:[]},{level:3,title:"Battery_low (binary)",slug:"battery-low-binary",children:[]},{level:3,title:"Tamper (binary)",slug:"tamper-binary",children:[]},{level:3,title:"Battery (numeric)",slug:"battery-numeric",children:[]},{level:3,title:"Sensitivity (enum)",slug:"sensitivity-enum",children:[]},{level:3,title:"Smoke_density (numeric)",slug:"smoke-density-numeric",children:[]},{level:3,title:"Selftest (enum)",slug:"selftest-enum",children:[]},{level:3,title:"Voltage (numeric)",slug:"voltage-numeric",children:[]},{level:3,title:"Test (binary)",slug:"test-binary",children:[]},{level:3,title:"Device_temperature (numeric)",slug:"device-temperature-numeric",children:[]},{level:3,title:"Power_outage_count (numeric)",slug:"power-outage-count-numeric",children:[]},{level:3,title:"Linkquality (numeric)",slug:"linkquality-numeric",children:[]}]}],filePathRelative:"devices/JTYJ-GD-01LM_BW.md",git:{updatedTime:1666897866e3}}},38657:(e,t,i)=>{i.r(t),i.d(t,{default:()=>n});var a=i(66252);const o=(0,a.uE)('<h1 id="xiaomi-jtyj-gd-01lm-bw" tabindex="-1"><a class="header-anchor" href="#xiaomi-jtyj-gd-01lm-bw" aria-hidden="true">#</a> Xiaomi JTYJ-GD-01LM/BW</h1><table><thead><tr><th></th><th></th></tr></thead><tbody><tr><td>Model</td><td>JTYJ-GD-01LM/BW</td></tr><tr><td>Vendor</td><td>Xiaomi</td></tr><tr><td>Description</td><td>MiJia Honeywell smoke detector</td></tr><tr><td>Exposes</td><td>smoke, battery_low, tamper, battery, sensitivity, smoke_density, selftest, voltage, test, device_temperature, power_outage_count, linkquality</td></tr><tr><td>Picture</td><td><img src="https://www.zigbee2mqtt.io/images/devices/JTYJ-GD-01LM-BW.jpg" alt="Xiaomi JTYJ-GD-01LM/BW"></td></tr><tr><td>White-label</td><td>Xiaomi YTC4020RT</td></tr></tbody></table><h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><h3 id="pairing" tabindex="-1"><a class="header-anchor" href="#pairing" aria-hidden="true">#</a> Pairing</h3><p>Plug the device in and wait for around 5mins, while it performs its self-tests. A successful self-test is indicated by couple of beeps and a steady green led. Now the device is ready for pairing. To initiate pairing quickly press the button three times in a row.</p><h3 id="sensitivity" tabindex="-1"><a class="header-anchor" href="#sensitivity" aria-hidden="true">#</a> Sensitivity</h3><p>The sensitivity can be changed by publishing to <code>zigbee2mqtt/FRIENDLY_NAME/set</code><code>{&quot;sensitivity&quot;: &quot;SENSITIVITY&quot;}</code> where <code>SENSITIVITY</code> is one of the following values: <code>low</code>, <code>medium</code>, <code>high</code>.</p><h3 id="self-test" tabindex="-1"><a class="header-anchor" href="#self-test" aria-hidden="true">#</a> Self-test</h3><p>A self-test can be trigged by publishing to <code>zigbee2mqtt/FRIENDLY_NAME/set</code><code>{&quot;selftest&quot;: &quot;&quot;}</code>. If the selftest is executed successfully you will hear the device beep in 30 seconds.</p><h2 id="options" tabindex="-1"><a class="header-anchor" href="#options" aria-hidden="true">#</a> Options</h2>',10),d=(0,a.Uk)("How to use device type specific configuration"),r=(0,a.uE)('<ul><li><code>device_temperature_calibration</code>: Calibrates the device_temperature value (absolute offset), takes into effect on next report of device. The value must be a number.</li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="smoke-binary" tabindex="-1"><a class="header-anchor" href="#smoke-binary" aria-hidden="true">#</a> Smoke (binary)</h3><p>Indicates whether the device detected smoke. Value can be found in the published state on the <code>smoke</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> smoke is ON, if <code>false</code> OFF.</p><h3 id="battery-low-binary" tabindex="-1"><a class="header-anchor" href="#battery-low-binary" aria-hidden="true">#</a> Battery_low (binary)</h3><p>Indicates if the battery of this device is almost empty. Value can be found in the published state on the <code>battery_low</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> battery_low is ON, if <code>false</code> OFF.</p><h3 id="tamper-binary" tabindex="-1"><a class="header-anchor" href="#tamper-binary" aria-hidden="true">#</a> Tamper (binary)</h3><p>Indicates whether the device is tampered. Value can be found in the published state on the <code>tamper</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> tamper is ON, if <code>false</code> OFF.</p><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric" aria-hidden="true">#</a> Battery (numeric)</h3><p>Remaining battery in %. Value can be found in the published state on the <code>battery</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="sensitivity-enum" tabindex="-1"><a class="header-anchor" href="#sensitivity-enum" aria-hidden="true">#</a> Sensitivity (enum)</h3><p>Value can be found in the published state on the <code>sensitivity</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;sensitivity&quot;: NEW_VALUE}</code>. The possible values are: <code>low</code>, <code>medium</code>, <code>high</code>.</p><h3 id="smoke-density-numeric" tabindex="-1"><a class="header-anchor" href="#smoke-density-numeric" aria-hidden="true">#</a> Smoke_density (numeric)</h3><p>Value can be found in the published state on the <code>smoke_density</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value.</p><h3 id="selftest-enum" tabindex="-1"><a class="header-anchor" href="#selftest-enum" aria-hidden="true">#</a> Selftest (enum)</h3><p>Value will <strong>not</strong> be published in the state. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;selftest&quot;: NEW_VALUE}</code>. The possible values are: ``.</p><h3 id="voltage-numeric" tabindex="-1"><a class="header-anchor" href="#voltage-numeric" aria-hidden="true">#</a> Voltage (numeric)</h3><p>Voltage of the battery in millivolts. Value can be found in the published state on the <code>voltage</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>mV</code>.</p><h3 id="test-binary" tabindex="-1"><a class="header-anchor" href="#test-binary" aria-hidden="true">#</a> Test (binary)</h3><p>Test mode activated. Value can be found in the published state on the <code>test</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> test is ON, if <code>false</code> OFF.</p><h3 id="device-temperature-numeric" tabindex="-1"><a class="header-anchor" href="#device-temperature-numeric" aria-hidden="true">#</a> Device_temperature (numeric)</h3><p>Temperature of the device. Value can be found in the published state on the <code>device_temperature</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>°C</code>.</p><h3 id="power-outage-count-numeric" tabindex="-1"><a class="header-anchor" href="#power-outage-count-numeric" aria-hidden="true">#</a> Power_outage_count (numeric)</h3><p>Number of power outages. Value can be found in the published state on the <code>power_outage_count</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',26),s={},n=(0,i(83744).Z)(s,[["render",function(e,t){const i=(0,a.up)("RouterLink");return(0,a.wg)(),(0,a.iD)(a.HY,null,[o,(0,a._)("p",null,[(0,a._)("em",null,[(0,a.Wm)(i,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,a.w5)((()=>[d])),_:1})])]),r],64)}]])},83744:(e,t)=>{t.Z=(e,t)=>{for(const[i,a]of t)e[i]=a;return e}}}]);