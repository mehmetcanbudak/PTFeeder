(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{217:function(e,t,a){"use strict";a.r(t);var r=a(28),s=Object(r.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"release-notes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#release-notes"}},[e._v("#")]),e._v(" Release notes")]),e._v(" "),a("p",[e._v("All releases can be found on the github "),a("a",{attrs:{href:"https://github.com/mehtadone/PTFeeder/releases",target:"_blank",rel:"noopener noreferrer"}},[e._v("releases page"),a("OutboundLink")],1)]),e._v(" "),a("h2",{attrs:{id:"pt-feeder-1-8-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pt-feeder-1-8-2"}},[e._v("#")]),e._v(" PT Feeder 1.8.2")]),e._v(" "),a("h2",{attrs:{id:"note"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#note"}},[e._v("#")]),e._v(" NOTE")]),e._v(" "),a("ul",[a("li",[e._v("This version only works with "),a("strong",[e._v("ProfitTrailer version 2.4.15 or higher")]),e._v(".")]),e._v(" "),a("li",[e._v("For this version, you will have to "),a("strong",[e._v("delete your database file")]),e._v(". This can be found in your ptfeeder directory under database/pt-feeder.db . Please delete this before starting feeder if you have just replaced the files.")]),e._v(" "),a("li",[e._v("Please make sure that in your appsettings, "),a("code",[e._v("BaseCoinPair")]),e._v(" is a valid market on your exchange. For example, for Binance this needs to be BTCUSD and for Bittrex it needs to be USD-BTC for example.")])]),e._v(" "),a("h3",{attrs:{id:"added"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#added"}},[e._v("#")]),e._v(" Added")]),e._v(" "),a("ul",[a("li",[e._v("Support for all PT exchanges")])]),e._v(" "),a("h3",{attrs:{id:"changed"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#changed"}},[e._v("#")]),e._v(" Changed")]),e._v(" "),a("ul",[a("li",[e._v("Add market name on log comments")]),e._v(" "),a("li",[e._v("Fixed BaseCoinPair not working in all scenarios")])]),e._v(" "),a("h2",{attrs:{id:"pt-feeder-1-8-1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pt-feeder-1-8-1"}},[e._v("#")]),e._v(" PT Feeder 1.8.1")]),e._v(" "),a("p",[e._v("Note: There are no compulsory config changes in this version from version 1.8.0. Existing settings can be used. You may get a warning for settings missing for new indicators but these are just warnings and can be ignored. To remove them, see release notes below.")]),e._v(" "),a("h3",{attrs:{id:"added-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#added-2"}},[e._v("#")]),e._v(" Added")]),e._v(" "),a("ul",[a("li",[e._v("Add support for Binance Futures")]),e._v(" "),a("li",[e._v("Add configurable wait time on startup. Add "),a("code",[e._v("StartupWaitTime")]),e._v(" to your hostsettings in the hostsettings and the value is in seconds. This is so you can set Feeder to start a certain number of seconds after PT in any scripts you may have.")]),e._v(" "),a("li",[e._v("Add "),a("code",[e._v("EmaLonger")]),e._v(" and "),a("code",[e._v("EmaShorter")]),e._v(" indicators so there are 4 EMA values now that can be used.")]),e._v(" "),a("li",[e._v("Add two new indicators. "),a("code",[e._v("TopCoinsAverageEmaShort")]),e._v(" and "),a("code",[e._v("TopCoinsAverageEmaLong")]),e._v(". These are the average EMA of the coins in your top coin list, either by count or using a specific list. Add     "),a("code",[e._v("TopCoinsAverageEmaLongPeriod")]),e._v(" and "),a("code",[e._v("TopCoinsAverageEmaShortPeriod")]),e._v(" to your PtFeeder section of your appsettings to use in your custom conditions.")]),e._v(" "),a("li")]),e._v(" "),a("h3",{attrs:{id:"changed-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#changed-2"}},[e._v("#")]),e._v(" Changed")]),e._v(" "),a("ul",[a("li",[e._v("Change to using PT V2 API")]),e._v(" "),a("li",[e._v("Fix exchange issues on existing exchanges such as bittrex and kucoin")]),e._v(" "),a("li",[e._v("Revert back to using automatic restart on config change.")]),e._v(" "),a("li",[e._v("Configure the wait time on restart for further changes. Add "),a("code",[e._v("ConfigRestartTimeOut")]),e._v(" to your hostsettings and is in seconds.")])]),e._v(" "),a("h2",{attrs:{id:"pt-feeder-1-8-0"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pt-feeder-1-8-0"}},[e._v("#")]),e._v(" PT Feeder 1.8.0")]),e._v(" "),a("h3",{attrs:{id:"added-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#added-3"}},[e._v("#")]),e._v(" Added")]),e._v(" "),a("ul",[a("li",[e._v("PT 2.4 Support")])]),e._v(" "),a("p",[e._v('Please add your PT license in your hostsettings like so:   "ProfitTrailerLicense1": "". This is required for authentication against the config api of PT.')]),e._v(" "),a("ul",[a("li",[a("p",[e._v("Support for new exchanges - BinanceJe, BinanceUs, BinanceDex, Bitmex")])]),e._v(" "),a("li",[a("p",[e._v("Change config without restart of PTF")])])]),e._v(" "),a("h3",{attrs:{id:"changed-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#changed-3"}},[e._v("#")]),e._v(" Changed")]),e._v(" "),a("ul",[a("li",[e._v("Fix for Bittrex and Kucoin")])]),e._v(" "),a("h3",{attrs:{id:"removed"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#removed"}},[e._v("#")]),e._v(" Removed")]),e._v(" "),a("ul",[a("li",[e._v('New coin functionality. This queried a lot of candles and commonly caused api bans. PT already does this so you can add  "PairMinListedDays": "15" in the Common section of your appsettings.json file to block new coins from being bought. You will need to remove any NewCoinGrouping in existing appsettings.')])]),e._v(" "),a("h2",{attrs:{id:"pt-feeder-1-7-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pt-feeder-1-7-3"}},[e._v("#")]),e._v(" PT Feeder 1.7.3")]),e._v(" "),a("h3",{attrs:{id:"changed-4"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#changed-4"}},[e._v("#")]),e._v(" Changed")]),e._v(" "),a("ul",[a("li",[e._v("EnabledCoinsOnly fix")]),e._v(" "),a("li",[e._v("More logging for TV Signals")])]),e._v(" "),a("h2",{attrs:{id:"pt-feeder-1-7-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pt-feeder-1-7-2"}},[e._v("#")]),e._v(" PT Feeder 1.7.2")]),e._v(" "),a("h3",{attrs:{id:"changed-5"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#changed-5"}},[e._v("#")]),e._v(" Changed")]),e._v(" "),a("ul",[a("li",[e._v("Fix for coins on watchmode")]),e._v(" "),a("li",[e._v("Fix for AutoWhitelist not respecting excluded pairs")])]),e._v(" "),a("h2",{attrs:{id:"pt-feeder-1-7-1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pt-feeder-1-7-1"}},[e._v("#")]),e._v(" PT Feeder 1.7.1")]),e._v(" "),a("h3",{attrs:{id:"changed-6"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#changed-6"}},[e._v("#")]),e._v(" Changed")]),e._v(" "),a("ul",[a("li",[e._v("Fix memory leak")]),e._v(" "),a("li",[e._v("Fix for binance negative price issue")]),e._v(" "),a("li",[e._v("Other performance improvements")])]),e._v(" "),a("h2",{attrs:{id:"pt-feeder-1-7-0"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pt-feeder-1-7-0"}},[e._v("#")]),e._v(" PT Feeder 1.7.0")]),e._v(" "),a("p",[e._v("PT Feeder 1.7 is a huge release. It has been developed with user feedback over the last few months and has a LOT of new features to enrich your automated trading experience.")]),e._v(" "),a("p",[e._v("I have had to create a seperate page for its changelog which can be found "),a("RouterLink",{attrs:{to:"/onepointseven.html"}},[e._v("here")]),e._v(".")],1),e._v(" "),a("p",[e._v("Please read the upgrade instructions carefully. The majority of the new features are optional.")]),e._v(" "),a("h2",{attrs:{id:"pt-feeder-1-6-0"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pt-feeder-1-6-0"}},[e._v("#")]),e._v(" PT Feeder 1.6.0")]),e._v(" "),a("div",{staticClass:"custom-block danger"},[a("p",{staticClass:"custom-block-title"},[e._v("NOTE")]),e._v(" "),a("p",[e._v("Please delete your "),a("strong",[e._v("ptfeeder.db")]),e._v(" file in your /database directory of PT Feeder before starting this version")])]),e._v(" "),a("h3",{attrs:{id:"added-4"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#added-4"}},[e._v("#")]),e._v(" Added")]),e._v(" "),a("ul",[a("li",[e._v("Ability to react of TradingView alerts. See Advanced section "),a("RouterLink",{attrs:{to:"/advanced.html#trading-view-alerts"}},[e._v("here")]),e._v(" for more information.")],1),e._v(" "),a("li",[e._v("Create your own conditions for groupings. See Advanced section "),a("RouterLink",{attrs:{to:"/advanced.html#create-your-own-groupings"}},[e._v("here")]),e._v(" for more information.")],1),e._v(" "),a("li",[e._v("Added a third MinutesToMeasureMediumTrend. Add this property in your PT Feeder section and see corresponding "),a("RouterLink",{attrs:{to:"/configuration.html#section-pair-groupings"}},[e._v("groupings")]),e._v(".")],1),e._v(" "),a("li",[e._v("Add ability to name appsettings with a suffix to identify the appsettings file. Only one however needs to exist in your config folder.")])]),e._v(" "),a("h3",{attrs:{id:"changed-7"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#changed-7"}},[e._v("#")]),e._v(" Changed")]),e._v(" "),a("ul",[a("li",[e._v("Fix an issue where market condition overrides were not applying sometimes when pair override weighing was lower.")]),e._v(" "),a("li",[e._v("Improve speed of VWAP calculation")]),e._v(" "),a("li",[e._v("Ignore whitespace when reading properties from appsettings.json")]),e._v(" "),a("li",[e._v("Fix for DcaMinBuyVolume SOM condition")])]),e._v(" "),a("h3",{attrs:{id:"removed-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#removed-2"}},[e._v("#")]),e._v(" Removed")]),e._v(" "),a("ul",[a("li",[e._v("Logging of full exception when PT settings api returns an error.")])]),e._v(" "),a("h2",{attrs:{id:"pt-feeder-1-5-1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pt-feeder-1-5-1"}},[e._v("#")]),e._v(" PT Feeder 1.5.1")]),e._v(" "),a("ul",[a("li",[e._v("Fix an error with DcaEnabled in groupings not working. Now it works exactly the same as any other property. If DcaEnabled is a trigger, then you can offset. If you would like to set it to false, then use an override.")])]),e._v(" "),a("p",[e._v("For example")]),e._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"FolderName"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"02-boring"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"MaxTopCoinAverageChange"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"0.5"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"DcaEnabledOffset"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"-100"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// reduce DCA trigger by 100 percent")]),e._v("\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"Override"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n\t\t\t\t"),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"DcaEnabled"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"false"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// sets DCAEnabled to false")]),e._v("\n\t\t\t\t"),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"Weight"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"55"')]),e._v("\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),a("ul",[a("li",[e._v("Fix an issue where some operating systems didn't pass SSL check, CentOS for example.")]),e._v(" "),a("li",[e._v("Fix an error where VWAP calculations was returning NaN")])]),e._v(" "),a("h2",{attrs:{id:"pt-feeder-1-5-0"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pt-feeder-1-5-0"}},[e._v("#")]),e._v(" PT Feeder 1.5.0")]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),a("p",[e._v("This is a big release. It is highly reccomended that you setup PT Feeder 1.5 and ProfitTrailer version 2 from scratch.")])]),e._v(" "),a("p",[e._v("Biggest change. A fresh new "),a("a",{attrs:{href:"http://wiki.ptfeeder.co/",target:"_blank",rel:"noopener noreferrer"}},[e._v("wiki"),a("OutboundLink")],1),e._v(" with all 1.5 goodness.")]),e._v(" "),a("p",[e._v("For a full PT Feeder 1.4 to 1.5.0 upgrade guide see "),a("RouterLink",{attrs:{to:"/upgrade_guide.html"}},[e._v("here")])],1),e._v(" "),a("h3",{attrs:{id:"added-5"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#added-5"}},[e._v("#")]),e._v(" Added")]),e._v(" "),a("ul",[a("li",[e._v("ProfitTrailer Version 2 API support. My personal PT v2 settings are included in the release. Thanks to CryptoGnome and Grantcause for inspiration for these settings.\n"),a("ul",[a("li",[e._v("Note "),a("code",[e._v("UseMaxCostPercentage")]),e._v(" and "),a("code",[e._v("UseMinBuyBalancePercentage")]),e._v(" obsolete when in PT v2 mode")])])]),e._v(" "),a("li",[e._v("Discord notification support. Set "),a("code",[e._v("DiscordBotToken")]),e._v(" and "),a("code",[e._v("DiscordChatName")]),e._v(" in hostsettings.")]),e._v(" "),a("li",[e._v("Footer functionality via appsettings.")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('     "Footer": {\n    \t\t\t"Pairs": {\n    \t\t\t  "BCH_B_Buy_Value": "40.0",\n    \t\t\t  "BCH_A_Buy_Value": "40.0"\n    \t\t\t},\n    \t\t\t"Dca": {\n    \t\t\t  "DEFAULT_Dca_Max_Cost": "0",\n    \t\t\t  "DEFAULT_Dca_Min_Buy_Volume": "400"\n    \t\t\t},\n    \t\t\t"Indicators": {\n    \t\t\t  "Macd_Fast_Length": "12",\n    \t\t\t  "Macd_Signal": "9"\n    \t\t\t}\n    \t\t},\n    \t  "IntProperties": [\n    \t\t"MinBuyVolume" // as example only, because there is preset in code for this property\n    \t  ],\n    \t  "PositiveProperties": [\n    \t\t"TrailingBuy" // as example only, because there is preset in code for this property\n    \t  ] \n')])])]),a("ul",[a("li",[a("p",[a("code",[e._v("NewCoinsGrouping")]),e._v(" to allow offsets and sell only mode to be set based on the age of a coin. Possible values of TimeUnit - Minutes, Hours, Days. case-sensitive")])]),e._v(" "),a("li",[a("p",[e._v("New market condition triggers. "),a("code",[e._v("MaxVwapTrendChange")]),e._v(" and "),a("code",[e._v("MaxLongTermVwapTrendChange")]),e._v(". This is the volume weighted average price change of the coins that are included by your filters only. (e.g MinVolume, MinPrice, whitelist)")])]),e._v(" "),a("li",[a("p",[e._v("New market condition triggers of "),a("code",[e._v("MaxBaseCoinPriceChange")]),e._v(" and "),a("code",[e._v("MaxBaseCoinLongTermPriceChange")]),e._v(" to react on rising price of your base coin.")])]),e._v(" "),a("li",[a("p",[e._v("New long term market condition triggers. "),a("code",[e._v("MinBaseCoinLongTermPriceChange")]),e._v(", "),a("code",[e._v("MaxTopCoinLongTermAverageChange")])])]),e._v(" "),a("li",[a("p",[e._v("Overrides. BuyStrategy override has been changed to "),a("code",[e._v("Override")]),e._v(". Any PT property can be overriden in this section, including sell strategy. Example config:")])])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('       "Override": {\n         "SellStrategy": "HIGHBB",\n    \t\t  "SellValue": "50",\n    \t\t  "MaxBuySpread": "1.5"\n        }\n')])])]),a("ul",[a("li",[a("code",[e._v("HiddenCoins")]),e._v(" list to automatically generate config for hidden coins.")]),e._v(" "),a("li",[e._v("Automatically generate Enabled pairs list instead of using ALL.")]),e._v(" "),a("li",[e._v("Log exact version number of PT Feeder on log and .properties files.")]),e._v(" "),a("li",[e._v("Log time on properties with applied servertimezoneoffset set in PT.")])]),e._v(" "),a("h3",{attrs:{id:"changed-8"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#changed-8"}},[e._v("#")]),e._v(" Changed")]),e._v(" "),a("ul",[a("li",[e._v("Huge refactoring to support any PT property as an offset or override.")]),e._v(" "),a("li",[e._v("Rename "),a("code",[e._v("General")]),e._v(" section to "),a("code",[e._v("Defaults")]),e._v(" sections. These will be mapped as DEFAULT_ in PT2 and ALL_in PT1.")]),e._v(" "),a("li",[e._v("Add "),a("code",[e._v("Common")]),e._v(" section. These will be mapped as is with the naming convention.")]),e._v(" "),a("li",[e._v("Add "),a("code",[e._v("PtFeeder")]),e._v(" section. These are properties that are internal to PTFeeder and not mapped to any PT property.")]),e._v(" "),a("li",[e._v("Market condition folders no longer required as indicators and DCA properties can be set from appsettings.json. You can still use folders if you wish.")]),e._v(" "),a("li",[e._v("Backward compatibility removed. Please rename:")])]),e._v(" "),a("p",[e._v("In Defaults section:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("\t FolderName => Name\n\n    Cost => MaxCost\n    NumberOfPairs => MaxTradingPairs\n    ExcludedPairs => ExcludedCoins\n    SomOnlyPairs => SomOnlyCoins\n    DcaExcluded => DcaExcludedCoins\n    EnabledPairsOnly => EnabledCoinsOnly,\n")])])]),a("p",[e._v("In Offsets:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v(" \t SellOnlyMode => SellOnlyModeEnabled\n   CostOffset => MaxCostOffset\n")])])]),a("ul",[a("li",[a("p",[e._v("Grouping names now need to now end with Grouping.")]),e._v(" "),a("p",[a("code",[e._v("e.g MarketConditions => MarketConditionsGrouping")])])]),e._v(" "),a("li",[a("p",[e._v("LongTermPriceChange grouping changed name to "),a("code",[e._v("LongerTermPriceTrendChangeGrouping")])])]),e._v(" "),a("li",[a("p",[e._v("Volatility calcuations are now calculated on over check of the market.")])]),e._v(" "),a("li",[a("p",[e._v("Naming convention. All PT properties can be set in the General section. No prefix will mean they get written to pairs config, Dca prefix to dca config and Indicators to the indicator config.")])]),e._v(" "),a("li",[a("p",[e._v("Performance improvements whilst running. Note that this will take longer shutting down now. Work in progress to improve this.")])]),e._v(" "),a("li",[a("p",[e._v("Fix exchange offsets not applying to ALL properties.")])]),e._v(" "),a("li",[a("p",[e._v("Fix USDT market not working correctly when top coin set to 1.")])])]),e._v(" "),a("h3",{attrs:{id:"removed-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#removed-3"}},[e._v("#")]),e._v(" Removed")]),e._v(" "),a("ul",[a("li",[e._v("Backward support for old TrexPairsFolderLocation removed.")])])])}),[],!1,null,null,null);t.default=s.exports}}]);