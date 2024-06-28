/*************************************

项目名称：雅俗共赏
下载地址：https://t.cn/A6Q91kpO
更新日期：2024-06-29
脚本作者：chxm1023
电报频道：https://t.me/chxm1023
使用声明：⚠️仅供参考，🈲转载与售卖！

**************************************

[rewrite_local]
^https?:\/\/apps-api\.lianaishouce\.cn\/user\/(public\/login.*|getUserInfo) url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/ysgs.js

[mitm]
hostname = apps-api.lianaishouce.cn

*************************************/


var chxm1023 = JSON.parse($response.body);
const login = /public\/login.*/;
const user = /getUserInfo/;

const vipData = {"memberExpireTimeStr":"2099-09-09 09:09:09","memberExpireTime":4092599349000,"memberStatusStr":"已开通","remainNum":9999,"vipLevel":4,"memberStatus":1,"isForeverVip":true};

if (login.test($request.url)) {
  chxm1023.data.userInfo = { 
    ...chxm1023.data.userInfo, 
    ...vipData 
  };
}

if (user.test($request.url)) {
  chxm1023.data = { 
    ...chxm1023.data, 
    ...vipData 
  };
}

$done({ body: JSON.stringify(chxm1023) });
