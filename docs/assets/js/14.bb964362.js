(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{172:function(t,s,a){"use strict";a.r(s);var n=a(0),r=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),a("p",[t._v("There are a lot of changes when moving from 1.4 to 1.5 of PT Feeder.")]),t._v(" "),a("p",[t._v("Below is a step by step upgrade guide if you are moving PT Feeder from 1.4 to 1.5 AND still using ProfitTrailer version 1.")]),t._v(" "),t._m(1),t._v(" "),a("ol",[a("li",[t._v("Upgrade your dotnet install to dotnet core 2.1.4. This can be found "),a("a",{attrs:{href:"https://www.microsoft.com/net/download/dotnet-core/sdk-2.1.4",target:"_blank",rel:"noopener noreferrer"}},[t._v("here"),a("OutboundLink")],1)]),t._v(" "),t._m(2),t._v(" "),t._m(3)]),t._v(" "),t._m(4),t._m(5),t._v(" "),t._m(6),a("p",[t._v("It should look something like:")]),t._v(" "),t._m(7),t._m(8),t._v(" "),t._m(9),a("p",[t._v("It will look something like this.")]),t._v(" "),t._m(10),t._m(11),t._v(" "),t._m(12),a("p",[t._v("It will look something like this:")]),t._v(" "),t._m(13),a("ol",{attrs:{start:"7"}},[a("li",[a("p",[t._v("For each next section, add Grouping at the end of the section. So MarketConditions becomes MarketConditionGrouping for example. A full list of supported groupings can be found "),a("router-link",{attrs:{to:"/configuration.html"}},[t._v("here")])],1)]),t._v(" "),t._m(14)]),t._v(" "),t._m(15),t._m(16),t._v(" "),t._m(17),a("p",[t._v("In Offsets:")]),t._v(" "),t._m(18),a("p",[t._v("Groupings")]),t._v(" "),t._m(19),t._m(20)])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"pt-feeder-1-4-to-1-5-upgrade-guide"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#pt-feeder-1-4-to-1-5-upgrade-guide","aria-hidden":"true"}},[this._v("#")]),this._v(" PT Feeder 1.4 to 1.5 upgrade guide")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"warning custom-block"},[s("p",{staticClass:"custom-block-title"},[this._v("WARNING")]),this._v(" "),s("p",[this._v("If you are using ProfitTrailer version 2, it is reccomended to step your settings from scratch, as a lot of the property names have changed and their have been a lot more added.")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("li",[this._v("Review your "),s("code",[this._v("hostsettings.json")]),this._v(" file to make sure you are using the folder format of "),s("code",[this._v("ProfitTrailerFolder1")]),this._v(".")])},function(){var t=this.$createElement,s=this._self._c||t;return s("li",[this._v("Add a section at the start of your "),s("code",[this._v("appsettings.json")]),this._v(" file called PtFeeder, just after the first {")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-json extra-class"},[a("div",{staticClass:"highlight-lines"},[a("br"),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("br"),a("br")]),a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[t._v("\n  "),a("span",{attrs:{class:"token property"}},[t._v('"PtFeeder"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ol",{attrs:{start:"4"}},[s("li",[this._v("In the "),s("code",[this._v("General")]),this._v(" section of your existing appsettings.json, if you have any of the following properties, copy them into the section from 3.")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("BaseCurrency\nEnabledCoinsOnly\nExcludedCoins\nHiddenCoins\n\nMaxTrailingBuy\nMaxTrailingProfit\nMinTrailingBuy\nMinTrailingProfit\n\nMinutesForLongerTermTrend\nMinutesToMeasureTrend\n\nSomOnlyCoins\nTopCurrenciesToCheck\nDcaExcludedCoins\nDcaIncludedCoins\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token property"}},[t._v('"PtFeeder"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    // These are specific to PT feeder.\n\n    // This is needed by Feeder for its queries to the exchange and used as the MARKET for PT\n    "),a("span",{attrs:{class:"token property"}},[t._v('"BaseCurrency"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"BTC"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n    // These are used as the boundaries for the Calculate Trailing calculations\n    "),a("span",{attrs:{class:"token property"}},[t._v('"MaxTrailingProfit"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"0.3"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v('"MinTrailingProfit"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"0.01"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v('"MaxTrailingBuy"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"0.3"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v('"MinTrailingBuy"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"0.01"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n    "),a("span",{attrs:{class:"token property"}},[t._v('"HiddenCoins"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"BNB"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" // coins that will be hidden from the PT Monitor\n    "),a("span",{attrs:{class:"token property"}},[t._v('"ExcludedCoins"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"BNB,NBT,DNT,AE,CHAT,VIA,ZIL"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" // coins you don't want PTF to create settings for. These will have no config generated and will appear in watchmode\n    "),a("span",{attrs:{class:"token property"}},[t._v('"SomOnlyCoins"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"8BIT,ADC,AM,AMS,APEX,ARB,BITS,BITZ,BLC,BOB,BSTY,BTA,CCN,CRBIT,CRYPT,DAR,DGC,DRACO,DTC,FC2,FRK,FSC2,GEMZ,GHC,GP,GRT,HKG,HYPER,HZ,J,KR,LXC,MAX,MEC,METAL,MND,MTR,MZC,NAUT,NET,NEU,NTRN,OC,ORB,PRIME,PXI,ROOT,SCOT,SCRT,SFR,SLG,SLING,SOON,SPRTS,SSD,STEPS,STV,SWING,TES,TIT,TRI,TRK,U,UFO,UNIQ,UNIT,UNO,UTC,VIOR,VIRAL,VPN,WARP,XAUR,XBB,XC,XCO,XDQ,XPY,XQN,XSEED,XTC,YBC"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" // these are coins where BASE_COIN_sell_only_mode will be "),a("span",{attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n\n    "),a("span",{attrs:{class:"token property"}},[t._v('"MinutesForLongerTermTrend"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"720"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" // minutes to measure trend for longer term trends\n    "),a("span",{attrs:{class:"token property"}},[t._v('"MinutesToMeasureTrend"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"120"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" // minutes to measure trend for base coin trend"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" PriceTrendChange and volatility calc\n    "),a("span",{attrs:{class:"token property"}},[t._v('"TopCurrenciesToCheck"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"35"')]),t._v(" // number of pairs to check from your exchange for MaxTopCoinAverageChange\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ol",{attrs:{start:"5"}},[s("li",[this._v("Add a section called Common. In this, goes properties which do not have a ALL_ prefix. This will include DCA properties and indicators from your middle market condition folder in dca.txt and indicator.txt.")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[t._v(" "),a("span",{attrs:{class:"token property"}},[t._v('"Common"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[t._v("   "),a("span",{attrs:{class:"token property"}},[t._v('"Common"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n    "),a("span",{attrs:{class:"token property"}},[t._v('"DcaBuyStrategy"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"ANDERSON"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" // buy_strategy = ANDERSON\n    "),a("span",{attrs:{class:"token property"}},[t._v('"DcaBuyStyle"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"DOUBLEDOWN"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" // buy_style = DOUBLEDOWN\n    "),a("span",{attrs:{class:"token property"}},[t._v('"DcaBuyTrigger1"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"-3.5"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" // buy_trigger_1 = -"),a("span",{attrs:{class:"token number"}},[t._v("3.5")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v('"DcaBuyTrigger2"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"-4.5"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" // buy_trigger_2 = -"),a("span",{attrs:{class:"token number"}},[t._v("4.5")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v('"DcaBuyTrigger3"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"-5.5"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" // buy_trigger_3 = -"),a("span",{attrs:{class:"token number"}},[t._v("4.5")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v('"DcaBuyTrigger4"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"-5.5"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" // buy_trigger_4 = -"),a("span",{attrs:{class:"token number"}},[t._v("5.5")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v('"DcaBuyTrigger5"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"-5.5"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" // buy_trigger_5 = -"),a("span",{attrs:{class:"token number"}},[t._v("5.5")]),t._v("\n\n    "),a("span",{attrs:{class:"token property"}},[t._v('"DcaMaxBuySpread"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"1"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" // max_buy_spread in DCA.properties\n    "),a("span",{attrs:{class:"token property"}},[t._v('"DcaMaxBuyTimes"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"5"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" // max_buy_times in DCA.properties\n    "),a("span",{attrs:{class:"token property"}},[t._v('"DcaMaxCost"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"0.1"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" // max_cost in DCA.properties\n    "),a("span",{attrs:{class:"token property"}},[t._v('"DcaMinBuyBalance"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"20"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" // min_buy_balance in DCA.properties \n    "),a("span",{attrs:{class:"token property"}},[t._v('"DcaSellStrategy"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"GAIN"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" // sell_strategy in DCA.properties\n    "),a("span",{attrs:{class:"token property"}},[t._v('"DcaSellValue"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"0.75"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" // sell_value in DCA.properties\n    "),a("span",{attrs:{class:"token property"}},[t._v('"DcaTrailingBuy"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"0.15"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" // trailing_buy in DCA.properties\n    "),a("span",{attrs:{class:"token property"}},[t._v('"DcaTrailingProfit"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"0.15"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" // trailing_profit in DCA.properties\n\n    "),a("span",{attrs:{class:"token property"}},[t._v('"IndicatorsBbPeriod"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"3600"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v('"IndicatorsBbSma"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"20"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v('"IndicatorsSmaCrossCandles"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"4"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v('"IndicatorsSmaPeriod"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"900"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v('"IndicatorsSma1"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"13"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v('"IndicatorsSma2"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"2"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v('"IndicatorsEmaCrossCandles"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"2"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v('"IndicatorsEmaPeriod"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"3600"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v('"IndicatorsEma1"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"30"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v('"IndicatorsEma2"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"15"')]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ol",{attrs:{start:"6"}},[s("li",[this._v("Add a section called Defaults. These are the base values for your coins. You can move anything that was in your pairs.txt and began with ALL_ in here.")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{attrs:{class:"token property"}},[t._v('"Defaults"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" // The following are the base values for pairs and translated directly to ALL_ properties in pairs.properties\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{attrs:{class:"token property"}},[t._v('"Defaults"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" // The following are the base values for pairs and translated directly to ALL_ properties in pairs.properties\n  "),a("span",{attrs:{class:"token property"}},[t._v('"BuyStrategy"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"LOWBB"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" // ALL_buy_strategy\n  "),a("span",{attrs:{class:"token property"}},[t._v('"BuyValue"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"15"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" // ALL_buy_value\n  "),a("span",{attrs:{class:"token property"}},[t._v('"MaxCost"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"0.003"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" // ALL_max_cost or or All_max_cost_percentage\n  "),a("span",{attrs:{class:"token property"}},[t._v('"MaxBuySpread"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"1"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" // All_max_buy_spread\n  "),a("span",{attrs:{class:"token property"}},[t._v('"TrailingBuy"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"0.3"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" // All_trailing_buy\n  "),a("span",{attrs:{class:"token property"}},[t._v('"TrailingProfit"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"0.3"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" // All_tailing_profit\n  "),a("span",{attrs:{class:"token property"}},[t._v('"MinBuyBalance"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"50"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" // All_min_buy_balance or All_min_buy_balance_percentage\n  "),a("span",{attrs:{class:"token property"}},[t._v('"MinBuyPrice"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"0.00005"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" // All_min_buy_price\n  "),a("span",{attrs:{class:"token property"}},[t._v('"MinBuyVolume"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"500"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" // All_min_buy_volume\n  "),a("span",{attrs:{class:"token property"}},[t._v('"MaxTradingPairs"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"15"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" // ALL_max_trading_pairs\n  "),a("span",{attrs:{class:"token property"}},[t._v('"SellStrategy"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"GAIN"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" // ALL_sell_strategy\n  "),a("span",{attrs:{class:"token property"}},[t._v('"SellValue"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"0.75"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" // ALL_sell_value\n  "),a("span",{attrs:{class:"token property"}},[t._v('"DcaEnabled"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"-3"')]),t._v(" // ALL_DCA_enabled\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("li",[s("p",[this._v("In the market condition grouping, you can move in your txt files as overrides, using the same property names as the common section. For example:")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[t._v(" "),a("span",{attrs:{class:"token property"}},[t._v('"MarketConditionsGrouping"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token property"}},[t._v('"Configs"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        // If the top coins average is less than -"),a("span",{attrs:{class:"token number"}},[t._v("1.5")]),t._v("%"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" then go into Sell Only Mode\n        "),a("span",{attrs:{class:"token property"}},[t._v('"Name"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"01-bear"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{attrs:{class:"token property"}},[t._v('"MaxTopCoinAverageChange"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"-1.5"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{attrs:{class:"token property"}},[t._v('"BuyValueOffset"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"-30"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{attrs:{class:"token property"}},[t._v('"SellOnlyModeEnabled"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"true"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{attrs:{class:"token property"}},[t._v('"SellValueOffset"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"-20"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{attrs:{class:"token property"}},[t._v('"DcaTrailingBuyOffset"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"10"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{attrs:{class:"token property"}},[t._v('"DcaTrailingProfitOffset"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"-20"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{attrs:{class:"token property"}},[t._v('"Override"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          "),a("span",{attrs:{class:"token property"}},[t._v('"DcaBuyTrigger1"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"-1.5"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n          "),a("span",{attrs:{class:"token property"}},[t._v('"DcaBuyTrigger2"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"-2.5"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n          "),a("span",{attrs:{class:"token property"}},[t._v('"DcaBuyTrigger3"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"-3.5"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n          "),a("span",{attrs:{class:"token property"}},[t._v('"DcaBuyTrigger4"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"-4.5"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n          "),a("span",{attrs:{class:"token property"}},[t._v('"DcaBuyTrigger5"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"-5.5"')]),t._v(" \n        "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" \n      "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ol",{attrs:{start:"9"}},[s("li",[this._v("Find and replace in the file any name changes.")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("\t FolderName => Name\n\n    Cost => MaxCost\n    NumberOfPairs => MaxTradingPairs\n    ExcludedPairs => ExcludedCoins\n    SomOnlyPairs => SomOnlyCoins\n    DcaExcluded => DcaExcludedCoins\n    EnabledPairsOnly => EnabledCoinsOnly,\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("   SellOnlyMode => SellOnlyModeEnabled\n   CostOffset => MaxCostOffset\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("    LongTermPriceChange => LongerTermPriceTrendChangeGrouping\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ol",{attrs:{start:"10"}},[s("li",[this._v("You are now ready to run")])])}],!1,null,null,null);r.options.__file="upgrade_guide.md";s.default=r.exports}}]);