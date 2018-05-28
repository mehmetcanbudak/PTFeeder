(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{52:function(t,e,a){t.exports=a.p+"assets/img/alert.c9c9cd42.png"},53:function(t,e,a){t.exports=a.p+"assets/img/imap_enable.dc4ce8b8.png"},56:function(t,e,a){"use strict";a.r(e);var s=[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"advanced-features-of-pt-feeder"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#advanced-features-of-pt-feeder","aria-hidden":"true"}},[this._v("#")]),this._v(" Advanced features of PT Feeder")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"trading-view-alerts"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#trading-view-alerts","aria-hidden":"true"}},[this._v("#")]),this._v(" Trading View Alerts")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"introduction"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#introduction","aria-hidden":"true"}},[this._v("#")]),this._v(" Introduction")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("If the technical analysis functionality of ProfitTrailer is not enough, PT Feeder can be setup to react on strategies that you have setup in "),e("a",{attrs:{href:"https://tradingview.go2cloud.org/aff_c?offer_id=2&aff_id=10822",target:"_blank",rel:"noopener noreferrer"}},[this._v("Trading View")]),this._v(" but you will need a paid for subscription after a certain number of alerts.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("PT Feeder reacts on email alerts that are sent from Trading View went conditions are met. This is because Trading View does not provide an api to listen to these alerts. This does mean there are some pros and cons of using PT Feeder for trading view alerts versus something like "),e("a",{attrs:{href:"https://autoview.with.pink/",target:"_blank",rel:"noopener noreferrer"}},[this._v("AutoView")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"pt-feeder-pros"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#pt-feeder-pros","aria-hidden":"true"}},[this._v("#")]),this._v(" PT Feeder Pros")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("Use Profit Trailer trailing to buy")]),e("li",[this._v("Runs in the background without needing any Chrome window open")]),e("li",[this._v("Re-confirm buy using ProfitTrailer indicators")]),e("li",[this._v("Ability to change every ProfitTrailer property based on the alert")]),e("li",[this._v("Combine a ProfitTrailer strategy with alerts in one bot (e.g scalp with TradingView and swing trade with ProfitTrailer)")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"pt-feeder-cons"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#pt-feeder-cons","aria-hidden":"true"}},[this._v("#")]),this._v(" PT Feeder Cons")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("Delay. As PT Feeder uses email, there will be a bigger delay in reacting to the alerts (see below)")]),e("li",[this._v("Dependent on the latency of your email provider as a middleman.")]),e("li",[this._v("Intentional frequency of writing ProfitTrailer config files every 10 seconds as not to overload ProfitTrailer detecting config changes.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"autoview-pros"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#autoview-pros","aria-hidden":"true"}},[this._v("#")]),this._v(" AutoView Pros")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("Direct connection to the exchange so quicker reaction")]),e("li",[this._v("No other middle man like your email provider as a point of failure")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"autoview-cons"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#autoview-cons","aria-hidden":"true"}},[this._v("#")]),this._v(" AutoView Cons")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("Need to keep Chrome open")]),e("li",[this._v("Cannot validate buy. Buy happens when the alert is triggered.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"setup"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#setup","aria-hidden":"true"}},[this._v("#")]),this._v(" Setup")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ol",[e("li",[this._v("Setup a new Gmail account "),e("a",{attrs:{href:"https://www.google.com/gmail/",target:"_blank",rel:"noopener noreferrer"}},[this._v("here")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ol",{attrs:{start:"2"}},[e("li",[this._v("Enable IMAP access on your email account like below:")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:a(53),alt:"Imap enable"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("ol",{attrs:{start:"3"}},[e("li",[this._v("Setup PT Feeder hostsettings to access email like below as an example:")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[t._v("  "),a("span",{attrs:{class:"token property"}},[t._v('"Email"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v('"ImapServer"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"imap.gmail.com"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v('"ImapPort"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("993")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v('"ImapUsername"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"EMAIL ADDRESS"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v('"ImapPassword"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"PASSWORD"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v('"FromAddress"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"noreply@tradingview.com"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v('"Subject"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"TradingView Alert"')]),t._v(" \n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ol",{attrs:{start:"4"}},[e("li",[this._v("Setup your appsettings to change settings based on a signal. Below is an example.")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[t._v("  "),a("span",{attrs:{class:"token property"}},[t._v('"TradingViewSignalsGrouping"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v('"Condition"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"[pair.SignalDetected] == true"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v('"Configs"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{attrs:{class:"token property"}},[t._v('"MinBuyVolumeOffset"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"-75"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{attrs:{class:"token property"}},[t._v('"TrailingProfitOffset"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"100"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{attrs:{class:"token property"}},[t._v('"InitialCostPercentageOffset"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"100"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{attrs:{class:"token property"}},[t._v('"Override"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          "),a("span",{attrs:{class:"token property"}},[t._v('"DcaRebuyTimeout"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"30"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          "),a("span",{attrs:{class:"token property"}},[t._v('"RebuyTimeout"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"120"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          "),a("span",{attrs:{class:"token property"}},[t._v('"ABuyStrategy"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"RSI"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          "),a("span",{attrs:{class:"token property"}},[t._v('"ABuyValue"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"45"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          "),a("span",{attrs:{class:"token property"}},[t._v('"BBuyStrategy"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"DISABLED"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          "),a("span",{attrs:{class:"token property"}},[t._v('"CBuyStrategy"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"DISABLED"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          "),a("span",{attrs:{class:"token property"}},[t._v('"Weight"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"100"')]),t._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ol",{attrs:{start:"5"}},[e("li",[this._v("Setup your alerts on Trading View. The alert message can be just the name of the pair in the format, EXCHANGE:QUOTEBASE, for example "),e("code",[this._v("BINANCE:QTUMBTC")]),this._v(" and you can add the word SET and specify alert specific PT properties.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("BINANCE:QTUMBTC\nSET\nABuyStrategy=RSI\nABuyValue=55\nBBuyStrategy=DISABLED\nWeight=150\n")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("BINANCE:QTUMBTC\n")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:a(52),alt:"alerts"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("The alerts are valid for how long you set "),e("code",[this._v("SignalLength")]),this._v(" in your hostsettings.json (default is 15 mins) After this time, the setting for that coin will revert back to the "),e("code",[this._v("DEFAULT")]),this._v(" settings or any other pair overrides you have.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"alert-strategies"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#alert-strategies","aria-hidden":"true"}},[this._v("#")]),this._v(" Alert strategies")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("a",{attrs:{href:"https://github.com/CryptoGnome/Gnome-Alerts/wiki",target:"_blank",rel:"noopener noreferrer"}},[this._v("Gnome Alerts Pro")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("a",{attrs:{href:"http://bitcoinninjas.org/product/ninja-signals-script/",target:"_blank",rel:"noopener noreferrer"}},[this._v("Bitcoin Ninja's")]),this._v(" (mention that you want to use with PT Feeder)")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"quickalerts"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#quickalerts","aria-hidden":"true"}},[this._v("#")]),this._v(" QuickAlerts")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("A chrome plugin is available which is highly reccomended. It manages your alerts via CSV file so you upload mutiple alerts in one go and and edit them via Excel or another spreadsheet programme. It works with both the signal scripts below. It can be found "),e("a",{attrs:{href:"https://quickalerts.us/u/ptfeeder",target:"_blank",rel:"noopener noreferrer"}},[this._v("here")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"create-your-own-groupings"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#create-your-own-groupings","aria-hidden":"true"}},[this._v("#")]),this._v(" Create your own groupings")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"introduction-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#introduction-2","aria-hidden":"true"}},[this._v("#")]),this._v(" Introduction")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"pair-properties-available"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#pair-properties-available","aria-hidden":"true"}},[this._v("#")]),this._v(" Pair Properties Available")])},function(){var t=this.$createElement,e=this._self._c||t;return e("pre",{pre:!0,attrs:{class:"language-css"}},[e("code",[this._v("pair.DcaEnabled\npair.SellOnlyModeEnabled\n\npair.BaseCurrency\npair.QuoteCurrency\npair.FirstSeen\n\npair.Volume //24 hour volume\npair.LastPrice\n\npair.PercentageChange //over MinutesToMeasureTrend\npair.LongerTermTrendPercentageChange\npair.MediumTermTrendPercentageChange\n\npair.VolumePercentageChange //over MinutesToMeasureTrend\npair.LongerTermVolumeTrendPercentageChange\npair.MediumTermVolumeTrendPercentageChange\n\npair.HighLowPercentageChange\npair.HighLowPercentageChangeLongTerm\npair.HighLowPercentageChangeMediumTerm\n\npair.HighLowVolumePercentageChange\npair.HighLowVolumePercentageChangeLongTerm\n\n// This is the Downside Volatility calculation\npair.ActualTrailingBuy //over MinutesToMeasureTrend\npair.MediumTermActualTrailingBuy\npair.LongerTermActualTrailingBuy\n\n// This is the Upside Volatility calculation\npair.ActualTrailingProfit //over MinutesToMeasureTrend\npair.MediumTermActualTrailingProfit\npair.LongerTermActualTrailingProfit\n\npair.TrailingProfit\npair.TrailingBuy\n\n")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"market-properties-available"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#market-properties-available","aria-hidden":"true"}},[this._v("#")]),this._v(" Market Properties Available")])},function(){var t=this.$createElement,e=this._self._c||t;return e("pre",{pre:!0,attrs:{class:"language-css"}},[e("code",[this._v("market.TopCoinsChange,\nmarket.MediumTermTopCoinsChange,\nmarket.LongTermCoinsChange,\n\nmarket.VwapChange,\nmarket.MediumTermVwapChange,\nmarket.LongTermVwapChange,\n\nmarket.BaseCoinPriceChange,\nmarket.MediumTermBaseCoinPriceChange,\nmarket.LongTermBaseCoinPriceChange\n")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"worked-example"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#worked-example","aria-hidden":"true"}},[this._v("#")]),this._v(" Worked Example")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ol",[e("li",[this._v("Firstly we create the grouping. It can be called anything as long as it ends with Grouping.")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{attrs:{class:"token property"}},[t._v('"WikiExampleGrouping"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v('"Configs"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        \n      "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ol",{attrs:{start:"2"}},[e("li",[this._v("We then need to add the condition element.")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{attrs:{class:"token property"}},[t._v('"WikiExampleGrouping"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n"),a("span",{attrs:{class:"highlighted-line"}},[t._v("    "),a("span",{attrs:{class:"token property"}},[t._v('"Condition"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('""')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")])]),t._v("    "),a("span",{attrs:{class:"token property"}},[t._v('"Configs"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        \n      "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ol",{attrs:{start:"3"}},[e("li",[this._v("The properties available need to be in square brackets and any operators need to be standard C# operators. A simple list can be found "),e("a",{attrs:{href:"https://www.tutorialspoint.com/csharp/csharp_operators.htm",target:"_blank",rel:"noopener noreferrer"}},[this._v("here")]),this._v(" under Arithmetic, Relational and Logical. We want to take the base coin change and subtract the price change of coin. If this value is less than the trigger, then we want to act.")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{attrs:{class:"token property"}},[t._v('"WikiExampleGrouping"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n"),a("span",{attrs:{class:"highlighted-line"}},[t._v("    "),a("span",{attrs:{class:"token property"}},[t._v('"Condition"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"[market.BaseCoinPriceChange] - [pair.PercentageChange] <= [config.TriggerName] "')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")])]),t._v("    "),a("span",{attrs:{class:"token property"}},[t._v('"Configs"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{attrs:{class:"token property"}},[t._v('"TriggerName"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"-1"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ol",{attrs:{start:"4"}},[e("li",[this._v("Then we can apply offsets and overrides as we normally do")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{attrs:{class:"token property"}},[t._v('"WikiExampleGrouping"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v('"Condition"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"[market.BaseCoinPriceChange] - [pair.PercentageChange] <= [config.TriggerName] "')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v('"Configs"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{attrs:{class:"token property"}},[t._v('"TriggerName"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"-1"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{attrs:{class:"token property"}},[t._v('"TrailingProfitOffset"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"100"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{attrs:{class:"token property"}},[t._v('"InitialCostPercentageOffset"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"100"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{attrs:{class:"token property"}},[t._v('"Override"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          "),a("span",{attrs:{class:"token property"}},[t._v('"DcaRebuyTimeout"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"30"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          "),a("span",{attrs:{class:"token property"}},[t._v('"DcaBuyTrigger"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"-5"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          "),a("span",{attrs:{class:"token property"}},[t._v('"RebuyTimeout"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"120"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          "),a("span",{attrs:{class:"token property"}},[t._v('"TrailingBuy"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"0"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          "),a("span",{attrs:{class:"token property"}},[t._v('"ABuyStrategy"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"RSI"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          "),a("span",{attrs:{class:"token property"}},[t._v('"ABuyValue"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"45"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          "),a("span",{attrs:{class:"token property"}},[t._v('"BBuyStrategy"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"DISABLED"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          "),a("span",{attrs:{class:"token property"}},[t._v('"CBuyStrategy"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"DISABLED"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          "),a("span",{attrs:{class:"token property"}},[t._v('"Weight"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"100"')]),t._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"thoughts-on-how-this-can-be-used"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#thoughts-on-how-this-can-be-used","aria-hidden":"true"}},[this._v("#")]),this._v(" Thoughts on how this can be used")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("Look at the difference between different time trends.")]),e("li",[this._v("Look at the difference between different volume trends.")]),e("li",[this._v("Action if the coin is a paticular coin name")]),e("li",[this._v("Only action if the market is going down and the coin is going down")]),e("li",[this._v("Only action if the coin is going up but the market is going down")]),e("li",[this._v("Compare different volatility calculations")])])}],n=a(0),r=Object(n.a)({},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content"},[t._m(0),t._m(1),t._m(2),t._m(3),t._m(4),t._m(5),t._m(6),t._m(7),t._m(8),t._m(9),t._m(10),t._m(11),t._m(12),a("p",[t._v("A couple of notes on the above.")]),a("p",[t._v("Intentionally, there is nothing on the sell strategy in these pros and cons. PT Feeder will revert back to your normal sell strategies after the period set in 'SignalLength' in your hostsettings, and this is minutes. This is because if you are using trading view to also alert your sell, then there is no need to use ProfitTrailer. You can fully use AutoView as ProfitTrailer is redunant in this scenario.")]),a("p",[t._v("Second comment is on delay. From speaking to people who use AutoView, the delay in a buy seems to be about 10 seconds. From testing PT Feeder and using Gmail as a email provider, the alert comes into Profit Trailer within 20 seconds. This is however dependent on the delay of you mail provider.")]),a("p",[t._v("An example is outlined "),a("router-link",{attrs:{to:"/tvdelay.html"}},[t._v("here")])],1),a("p",[t._v("Due to this, my personal recommendation is that if you use 1 min candles on trading view, then PT Feeder is not the best tool for you. For anything above, I feel the fact that you get trailing buys, outweighs any latency that you may encounter.")]),t._m(13),t._m(14),a("p",[t._v("Note that PT Feeder searches for unread mail as a new alert so a new email which isn't being checked is required.")]),t._m(15),t._m(16),t._m(17),t._m(18),t._m(19),t._m(20),t._m(21),a("p",[t._v("An example of an alert message")]),t._m(22),a("p",[t._v("OR")]),t._m(23),t._m(24),t._m(25),t._m(26),a("p",[t._v("We have tested Trading View alerts with the following paid for strategies. Please let us know if you find any other good ones and we can add them to this list")]),t._m(27),t._m(28),t._m(29),t._m(30),t._m(31),t._m(32),a("p",[t._v("When using pair specific groupings like PriceTrendChangeGrouping, there is a condition behind the scenes that needs to be true for overrides and offsets to be applied. In this case, the price change over MinutesToMeasureTrend has to be lower than the trigger, MaxPriceTrendPercentageChange, for the condition to be true.")]),a("p",[t._v("But you can create your own custom conditions based on the properties the are available to you.")]),a("p",[t._v("Below are the properties available")]),t._m(33),t._m(34),t._m(35),t._m(36),t._m(37),a("p",[t._v("Lets say we wanted to create a grouping that reacted on the relative percentage change of a coin compared to its base coin.")]),t._m(38),t._m(39),t._m(40),t._m(41),t._m(42),a("p",[t._v("The trigger is created using [config.TriggerName].")]),t._m(43),t._m(44),t._m(45),t._m(46),a("p",[t._v("The possiblities are endless. Send me a direct message on how you have used this and I will add in here including examples.")]),t._m(47)])},s,!1,null,null,null);e.default=r.exports}}]);