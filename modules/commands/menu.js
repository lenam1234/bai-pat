﻿module.exports.config = {
	name: "menu",
	version: "1.0.2",
	hasPermssion: 0,
	credits: "Mirai Team",
	description: "Hướng dẫn cho người mới",
	commandCategory: "system",
	usages: "[Tên module]",
	cooldowns: 5,
	envConfig: {
		autoUnsend: true,
		delayUnsend: 60
	}
};

module.exports.languages = {
	"vi": {
		"moduleInfo": "「%1」\n%2\n\n❯ Cách sử dụng: %3\n❯ Thuộc nhóm: %4\n❯ Thời gian chờ: %5 giây(s)\n❯ Quyền hạn: %6\n\n» Module code by %7 «",
		"helpAll": '» Hiện tại đang có %1 lệnh có thể sử dụng trên bot này\n» Sử dụng:\n[ %2help tên lệnh ]\nđể xem chi tiết cách sử dụng"',
		"helpList": '◆「DuckHung BOT」◆\n\n%2\n» Hiện tại đang có %3 lệnh có thể sử dụng trên bot này \n» Hãy reply(phản hồi) STT\n» Hoặc %4menu all',
		"helpeply": '◆「%1」◆\nSau đây là nhóm lệnh của\n◆「 %2 」◆\n\n%3\nHãy reply(phản hồi) số thứ tự để xem chi tiết cách sử dụng!',
		"user": "Người dùng",
        "adminGroup": "Quản trị viên nhóm",
        "adminBot": "Quản trị viên bot"
	},
	"en": {
		"moduleInfo": "「 %1 」\n%2\n\n❯ Usage: %3\n❯ Category: %4\n❯ Waiting time: %5 seconds(s)\n❯ Permission: %6\n\n» Module code by %7 «",
		"helpList": '[ There are %1 commands on this bot, Use: "%2help nameCommand" to know how to use! ]',
		"user": "User",
        "adminGroup": "Admin group",
        "adminBot": "Admin bot"
	}
}


const _0x2cea=['58081iSEXpQ','all','PREFIX','moduleInfo','commands','reply','client','BOTNAME','unsendMessage','some','handleReply','undefined','slice','help','body','adminBot','1DNIGBF','2ySQXRo','240935BIARuy','data','config','forEach','messageID','.\x20「','has','usages','hasPermssion','adminGroup','sendMessage','description','threadID','configModule','getData','toUpperCase','handleReaction','2peqjdB','replyhelp','push','length','get','commandCategory','toLowerCase','name','cmdarray','values','userID','charAt','indexOf','run','cmds','user','senderID','helpList','log','177098EMNboL','cooldowns','386041arCwPB','1EEaDzw','702368cuqmAp','32242RaWdor','48079KJFhdJ','credits','find','exports','author','\x20」\x0a','group'];function _0x17e7(_0x3decb1,_0x41d058){return _0x17e7=function(_0x2cea3c,_0x17e761){_0x2cea3c=_0x2cea3c-0x8b;let _0x23674a=_0x2cea[_0x2cea3c];return _0x23674a;},_0x17e7(_0x3decb1,_0x41d058);}const _0x2a42cb=_0x17e7;(function(_0xc5556b,_0x5e7e9b){const _0xef4a96=_0x17e7;while(!![]){try{const _0x3f8f23=parseInt(_0xef4a96(0xc2))+-parseInt(_0xef4a96(0x9d))*-parseInt(_0xef4a96(0xc8))+parseInt(_0xef4a96(0xc6))+-parseInt(_0xef4a96(0xc7))+-parseInt(_0xef4a96(0x9c))*-parseInt(_0xef4a96(0x8c))+parseInt(_0xef4a96(0xc5))*parseInt(_0xef4a96(0x9e))+parseInt(_0xef4a96(0xc4))*-parseInt(_0xef4a96(0xaf));if(_0x3f8f23===_0x5e7e9b)break;else _0xc5556b['push'](_0xc5556b['shift']());}catch(_0x18148a){_0xc5556b['push'](_0xc5556b['shift']());}}}(_0x2cea,0x72d2c),module[_0x2a42cb(0xcb)][_0x2a42cb(0x96)]=async function({api:_0x3f76cf,event:_0x4655ad,handleReply:_0x33c75f,getText:_0x1e1214,Threads:_0x24ad68}){const _0x3caee8=_0x2a42cb;if(_0x33c75f['author']!=_0x4655ad[_0x3caee8(0xbf)])return;const _0x6585f1=(await _0x24ad68[_0x3caee8(0xac)](_0x4655ad[_0x3caee8(0xaa)]))[_0x3caee8(0x9f)][_0x3caee8(0x8e)]||global[_0x3caee8(0xa0)][_0x3caee8(0x8e)];switch(_0x33c75f['type']){case _0x3caee8(0x91):{const _0xc8065d=global[_0x3caee8(0x92)][_0x3caee8(0x90)][_0x3caee8(0xb8)]();var _0x59d821=_0x33c75f['arraymun'][_0x4655ad[_0x3caee8(0x9a)]-0x1],_0x1e3e03=[],_0x184249='',_0x40c6a9=0x1,_0x2e4382=[],_0x2cba11=[];for(const _0x1f5993 of _0xc8065d){if(!_0x1e3e03['some'](_0x54e98a=>_0x54e98a[_0x3caee8(0x8b)][_0x3caee8(0xb5)]()==_0x1f5993[_0x3caee8(0xa0)][_0x3caee8(0xb4)][_0x3caee8(0xb5)]()))_0x1e3e03[_0x3caee8(0xb1)]({'group':_0x1f5993[_0x3caee8(0xa0)][_0x3caee8(0xb4)]['toLowerCase'](),'cmds':[_0x1f5993[_0x3caee8(0xa0)]['name']]});else _0x1e3e03[_0x3caee8(0xca)](_0x5c5bfa=>_0x5c5bfa[_0x3caee8(0x8b)][_0x3caee8(0xb5)]()==_0x1f5993[_0x3caee8(0xa0)]['commandCategory'][_0x3caee8(0xb5)]())[_0x3caee8(0xbd)][_0x3caee8(0xb1)](_0x1f5993['config']['name']);}for(let _0x505668 of _0x1e3e03){_0x2e4382[_0x3caee8(0xb1)](_0x505668[_0x3caee8(0xbd)]);}for(let _0x50044d of _0x2e4382[_0x59d821-0x1]){_0x184249+=_0x40c6a9++ +'.\x20'+_0x6585f1+_0x50044d+'\x0a',_0x2cba11[_0x3caee8(0xb1)](_0x50044d);}return _0x3f76cf['unsendMessage'](_0x33c75f['messageID']),_0x3f76cf['sendMessage'](_0x1e1214('helpeply',global[_0x3caee8(0xa0)][_0x3caee8(0x93)],_0x33c75f['arraygroup'][_0x4655ad[_0x3caee8(0x9a)]-0x1],_0x184249),_0x4655ad[_0x3caee8(0xaa)],(_0x1b2175,_0x258ad5)=>{const _0x2fb3a1=_0x3caee8;global[_0x2fb3a1(0x92)][_0x2fb3a1(0x96)][_0x2fb3a1(0xb1)]({'name':this['config'][_0x2fb3a1(0xb6)],'author':_0x4655ad[_0x2fb3a1(0xbf)],'messageID':_0x258ad5[_0x2fb3a1(0xa2)],'cmdarray':_0x2cba11,'type':_0x2fb3a1(0xb0)}),global[_0x2fb3a1(0x92)]['handleReaction'][_0x2fb3a1(0xb1)]({'name':this[_0x2fb3a1(0xa0)]['name'],'messageID':_0x258ad5[_0x2fb3a1(0xa2)],'author':_0x4655ad[_0x2fb3a1(0xbf)]}),setTimeout(()=>{const _0x148210=_0x2fb3a1;_0x3f76cf['unsendMessage'](_0x258ad5[_0x148210(0xa2)]);},0xea60);});}case _0x3caee8(0xb0):{const _0x3c16c3=global[_0x3caee8(0x92)]['commands'][_0x3caee8(0xb3)](_0x33c75f[_0x3caee8(0xb7)][_0x4655ad[_0x3caee8(0x9a)]-0x1]);return _0x3f76cf[_0x3caee8(0x94)](_0x33c75f[_0x3caee8(0xa2)]),_0x3f76cf['sendMessage'](_0x1e1214(_0x3caee8(0x8f),_0x3c16c3[_0x3caee8(0xa0)][_0x3caee8(0xb6)],_0x3c16c3[_0x3caee8(0xa0)][_0x3caee8(0xa9)],''+_0x6585f1+_0x3c16c3[_0x3caee8(0xa0)][_0x3caee8(0xb6)]+'\x20'+(_0x3c16c3[_0x3caee8(0xa0)][_0x3caee8(0xa5)]?_0x3c16c3[_0x3caee8(0xa0)]['usages']:''),_0x3c16c3['config']['commandCategory'],_0x3c16c3[_0x3caee8(0xa0)][_0x3caee8(0xc3)],_0x3c16c3[_0x3caee8(0xa0)]['hasPermssion']==0x0?_0x1e1214(_0x3caee8(0xbe)):_0x3c16c3[_0x3caee8(0xa0)][_0x3caee8(0xa6)]==0x1?_0x1e1214(_0x3caee8(0xa7)):_0x1e1214(_0x3caee8(0x9b)),_0x3c16c3[_0x3caee8(0xa0)][_0x3caee8(0xc9)]),_0x4655ad[_0x3caee8(0xaa)],_0x4655ad[_0x3caee8(0xa2)]);}}},module['exports']['handleEvent']=async function({api:_0xcdc71b,event:_0x367f34,getText:_0x31d6d7,Threads:_0x4c0e9b}){const _0x4dd235=_0x2a42cb,{commands:_0x3ff819}=global[_0x4dd235(0x92)],{threadID:_0x56eb32,messageID:_0x1cb6c3,body:_0x36b8de}=_0x367f34;if(!_0x36b8de||typeof _0x36b8de==_0x4dd235(0x97)||_0x36b8de['indexOf'](_0x4dd235(0x99))!=0x0)return;const _0x53c8ef=_0x36b8de[_0x4dd235(0x98)](_0x36b8de[_0x4dd235(0xbb)](_0x4dd235(0x99)))['trim']()['split'](/\s+/);if(_0x53c8ef[_0x4dd235(0xb2)]==0x1||!_0x3ff819[_0x4dd235(0xa4)](_0x53c8ef[0x1][_0x4dd235(0xb5)]()))return;const _0xf22a78=_0x3ff819['get'](_0x53c8ef[0x1]['toLowerCase']()),_0x56861a=(await _0x4c0e9b[_0x4dd235(0xac)](_0x367f34[_0x4dd235(0xaa)]))[_0x4dd235(0x9f)][_0x4dd235(0x8e)]||global[_0x4dd235(0xa0)][_0x4dd235(0x8e)];return _0xcdc71b[_0x4dd235(0xa8)](_0x31d6d7(_0x4dd235(0x8f),_0xf22a78[_0x4dd235(0xa0)][_0x4dd235(0xb6)],_0xf22a78['config'][_0x4dd235(0xa9)],''+_0x56861a+_0xf22a78['config'][_0x4dd235(0xb6)]+'\x20'+(_0xf22a78[_0x4dd235(0xa0)][_0x4dd235(0xa5)]?_0xf22a78[_0x4dd235(0xa0)][_0x4dd235(0xa5)]:''),_0xf22a78['config'][_0x4dd235(0xb4)],_0xf22a78['config'][_0x4dd235(0xc3)],_0xf22a78[_0x4dd235(0xa0)][_0x4dd235(0xa6)]==0x0?_0x31d6d7('user'):_0xf22a78[_0x4dd235(0xa0)][_0x4dd235(0xa6)]==0x1?_0x31d6d7('adminGroup'):_0x31d6d7(_0x4dd235(0x9b)),_0xf22a78[_0x4dd235(0xa0)][_0x4dd235(0xc9)]),_0x56eb32,_0x1cb6c3);},module[_0x2a42cb(0xcb)][_0x2a42cb(0xae)]=async({event:_0x5c52a7,api:_0x31f890,handleReaction:_0x287eed})=>{const _0x465190=_0x2a42cb;if(parseInt(_0x5c52a7[_0x465190(0xb9)])!==parseInt(_0x287eed[_0x465190(0xcc)]))return;_0x31f890[_0x465190(0x94)](_0x287eed[_0x465190(0xa2)]);},module[_0x2a42cb(0xcb)][_0x2a42cb(0xbc)]=async function({api:_0x47bdb8,event:_0x201c62,args:_0x290f03,getText:_0x1c2ad7,Threads:_0x520431}){const _0x4d7a95=_0x2a42cb,{commands:_0x4a518b}=global[_0x4d7a95(0x92)],{threadID:_0x440e37,messageID:_0x51ac5e}=_0x201c62,_0x49e6ec=_0x4a518b['get']((_0x290f03[0x0]||'')[_0x4d7a95(0xb5)]()),{autoUnsend:_0x5e7acb,delayUnsend:_0xb07705}=global[_0x4d7a95(0xab)][this['config']['name']],_0x4da137=(await _0x520431[_0x4d7a95(0xac)](_0x201c62['threadID']))[_0x4d7a95(0x9f)][_0x4d7a95(0x8e)]||global[_0x4d7a95(0xa0)][_0x4d7a95(0x8e)];if(!_0x290f03[0x0]){const _0x41bb19=_0x4a518b['values']();var _0x2ae525=[],_0x9173a9='',_0x5f0379=0x1,_0x2c2955=[],_0x198614=[];for(const _0xa8f35a of _0x41bb19){if(!_0x2ae525[_0x4d7a95(0x95)](_0x27695f=>_0x27695f[_0x4d7a95(0x8b)][_0x4d7a95(0xb5)]()==_0xa8f35a[_0x4d7a95(0xa0)][_0x4d7a95(0xb4)][_0x4d7a95(0xb5)]()))_0x2ae525[_0x4d7a95(0xb1)]({'group':_0xa8f35a[_0x4d7a95(0xa0)][_0x4d7a95(0xb4)][_0x4d7a95(0xb5)](),'cmds':[_0xa8f35a[_0x4d7a95(0xa0)][_0x4d7a95(0xb6)]]});else _0x2ae525[_0x4d7a95(0xca)](_0x5b1e9e=>_0x5b1e9e[_0x4d7a95(0x8b)]['toLowerCase']()==_0xa8f35a[_0x4d7a95(0xa0)][_0x4d7a95(0xb4)][_0x4d7a95(0xb5)]())[_0x4d7a95(0xbd)]['push'](_0xa8f35a[_0x4d7a95(0xa0)][_0x4d7a95(0xb6)]);}for(let _0x497580 of _0x2ae525){_0x9173a9+=_0x5f0379++ +_0x4d7a95(0xa3)+_0x497580['group'][_0x4d7a95(0xad)]()+'」\x0a',_0x2c2955[_0x4d7a95(0xb1)](_0x5f0379-0x1),_0x198614[_0x4d7a95(0xb1)](_0x497580['group']);}return console[_0x4d7a95(0xc1)](_0x2c2955),_0x47bdb8[_0x4d7a95(0xa8)](_0x1c2ad7(_0x4d7a95(0xc0),global['config']['BOTNAME'],_0x9173a9,_0x4a518b['size'],_0x4da137),_0x201c62[_0x4d7a95(0xaa)],(_0x2faa1c,_0x1a3aa0)=>{const _0x5f1838=_0x4d7a95;global[_0x5f1838(0x92)][_0x5f1838(0x96)][_0x5f1838(0xb1)]({'name':this[_0x5f1838(0xa0)][_0x5f1838(0xb6)],'author':_0x201c62[_0x5f1838(0xbf)],'messageID':_0x1a3aa0['messageID'],'arraymun':_0x2c2955,'arraygroup':_0x198614,'type':_0x5f1838(0x91)}),global[_0x5f1838(0x92)]['handleReaction']['push']({'name':this[_0x5f1838(0xa0)][_0x5f1838(0xb6)],'messageID':_0x1a3aa0['messageID'],'author':_0x201c62[_0x5f1838(0xbf)]}),setTimeout(()=>{const _0x3146fe=_0x5f1838;_0x47bdb8[_0x3146fe(0x94)](_0x1a3aa0[_0x3146fe(0xa2)]);},0xea60);});}if(_0x290f03[0x0]==_0x4d7a95(0x8d)){const _0x32c15d=_0x4a518b[_0x4d7a95(0xb8)]();var _0x2ae525=[],_0x3d1831='';for(const _0x4fe764 of _0x32c15d){if(!_0x2ae525[_0x4d7a95(0x95)](_0x2d6998=>_0x2d6998[_0x4d7a95(0x8b)][_0x4d7a95(0xb5)]()==_0x4fe764['config'][_0x4d7a95(0xb4)][_0x4d7a95(0xb5)]()))_0x2ae525['push']({'group':_0x4fe764[_0x4d7a95(0xa0)][_0x4d7a95(0xb4)][_0x4d7a95(0xb5)](),'cmds':[_0x4fe764['config'][_0x4d7a95(0xb6)]]});else _0x2ae525['find'](_0x25fd3c=>_0x25fd3c['group'][_0x4d7a95(0xb5)]()==_0x4fe764[_0x4d7a95(0xa0)][_0x4d7a95(0xb4)]['toLowerCase']())[_0x4d7a95(0xbd)]['push'](_0x4fe764['config'][_0x4d7a95(0xb6)]);}return _0x2ae525[_0x4d7a95(0xa1)](_0x2d4837=>_0x3d1831+='「\x20'+(_0x2d4837[_0x4d7a95(0x8b)][_0x4d7a95(0xba)](0x0)[_0x4d7a95(0xad)]()+_0x2d4837[_0x4d7a95(0x8b)]['slice'](0x1))+_0x4d7a95(0xcd)+_0x2d4837[_0x4d7a95(0xbd)]['join'](',\x20')+'\x0a\x0a'),_0x47bdb8[_0x4d7a95(0xa8)](_0x3d1831+_0x1c2ad7('helpAll',_0x4a518b['size'],_0x4da137),_0x440e37,async(_0x55bca4,_0x33fbd4)=>{const _0x4c952f=_0x4d7a95;global[_0x4c952f(0x92)]['handleReaction'][_0x4c952f(0xb1)]({'name':this[_0x4c952f(0xa0)][_0x4c952f(0xb6)],'messageID':_0x33fbd4[_0x4c952f(0xa2)],'author':_0x201c62['senderID']});if(_0x5e7acb)return await new Promise(_0x13a078=>setTimeout(_0x13a078,_0xb07705*0x3e8)),_0x47bdb8['unsendMessage'](_0x33fbd4['messageID']);else return;});}return _0x47bdb8[_0x4d7a95(0xa8)](_0x1c2ad7(_0x4d7a95(0x8f),_0x49e6ec[_0x4d7a95(0xa0)][_0x4d7a95(0xb6)],_0x49e6ec[_0x4d7a95(0xa0)][_0x4d7a95(0xa9)],''+_0x4da137+_0x49e6ec[_0x4d7a95(0xa0)]['name']+'\x20'+(_0x49e6ec[_0x4d7a95(0xa0)][_0x4d7a95(0xa5)]?_0x49e6ec[_0x4d7a95(0xa0)][_0x4d7a95(0xa5)]:''),_0x49e6ec[_0x4d7a95(0xa0)]['commandCategory'],_0x49e6ec[_0x4d7a95(0xa0)][_0x4d7a95(0xc3)],_0x49e6ec[_0x4d7a95(0xa0)]['hasPermssion']==0x0?_0x1c2ad7(_0x4d7a95(0xbe)):_0x49e6ec[_0x4d7a95(0xa0)]['hasPermssion']==0x1?_0x1c2ad7(_0x4d7a95(0xa7)):_0x1c2ad7(_0x4d7a95(0x9b)),_0x49e6ec[_0x4d7a95(0xa0)][_0x4d7a95(0xc9)]),_0x440e37,_0x51ac5e);});