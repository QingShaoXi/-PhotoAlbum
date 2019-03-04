module.exports = {
	cdnDomain: '/',
	title: '故往轻叹',
	avatar: './img/avatar.jpg',
	wording: {
		noAccess: '抱歉，你没有权限访问'
	},
	albums: {
		"青海湖": {
			thumbnail: "打马而过.jpg",
		  sort: 1
		}, 
		"江南小镇": {
		  description : "没有什么能够阻挡",
			thumbnail: "燕歌行.jpg",
		  name: "南浔"
		},
		"私密": {
			description: "这是一个需要密码的相册",
		  name: "私密",
		  password: "233",
			passwordTips: "密码是233"
		},
		"我爱的人和爱我的人" : {
			description : "不能干好一番事业，就好好干一个人",     // 该相册的描述；如果没有，则不展示
			thumbnail : "2015-09-30_psb7654.jpg",             // 封面图；如果没有，则默认取第一张作为封面
			name: "我爱的人和爱我的人",                          // 相册名；如果没有，则相册名为xxx
			password: "233",						  // 私密相册，密码为233
			passwordTips: "密码是233",			// 密码提示
			noDate: true,                          // 不展示时间；如果为true，则不展示照片时间信息；默认没有，即false
			sort: 1								  // 排序；为1时是时间逆序；默认或不填是时间正序
	   }
	}
}