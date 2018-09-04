window.onload = function() {
  	var swiper = new Swiper('.swiper-container', {
      	loop : true,
      	autoplay : 2000,
      	autoplayDisableOnInteraction:false,
      	pagination : '.swiper-pagination',
    });
}
    
    
var vapp = new Vue({
	el: ".news_box",
	data:{
		is_orgBtn01:false,
		is_orgBtn02:false,
		is_orgBtn03:false,
		allNews:[],
		organizeNews:[],
		typeNews:[],
		orgId:'',
		memberId:'1826164934900000376',
		is_typeBtn01:false,
		is_typeBtn02:false,
		is_typeBtn03:false,
		is_typeBtn04:false
	},
	methods:{
		bindUser:function(){
            var userUrl='http://cj.123zou.com/MobileNews/get_member_info?member_id='+this.memberId;
            axios.get(userUrl).then(function(data){
                if(typeof data.data == 'string'){
                    data.data=JSON.parse(data.data);
                }
                console.log(data.data.data);
//              if(admin_bind && data.data.data){
//                  data.data.data.organize_full_names=admin_bind.organize_full_names;
//                  data.data.data.organize_full_idx=admin_bind.organize_full_idx;
//              }

//              callback(data.data.data);
            });
        },
		getAllNews:function(){
			var scope = this;
			var url = 'http://cj.123zou.com/MobileNews/get_union_mobile_news?type=1&organize_id='+scope.orgId+'&size=20&page=1';
			axios.get(url).then(function(res){
				var dat = res.data.data;
				scope.allNews = dat.data;
				console.log(scope.allNews);
			})
		},
		clickOrganizeBtn:function(type,val){
			if(type){
				this.is_orgBtn01 = false;
				this.is_orgBtn02 = false;
				this.is_orgBtn03 = false;
				switch(val){
					case 1:
						this.is_orgBtn01 = true;
						this.getOrganizeNews(1);
						break;
					case 2:
						this.is_orgBtn02 = true;
						this.getOrganizeNews(2);
						break;
					case 3:
						this.is_orgBtn03 = true;
						this.getOrganizeNews(3);
						break;
				}
			}else{				
				this.is_typeBtn01 = false;
				this.is_typeBtn02 = false;
				this.is_typeBtn03 = false;
				this.is_typeBtn04 = false;
				switch(val){
					case 1:
						this.is_typeBtn01 = true;
						this.getTypeNews(1);
						break;
					case 2:
						this.is_typeBtn02 = true;
						this.getTypeNews(2);
						break;
					case 3:
						this.is_typeBtn03 = true;
						this.getTypeNews(3);
						break;
					case 4:
						this.is_typeBtn04 = true;
						this.getTypeNews(4);
						break;
				}
			}
			
		},
		getOrganizeNews:function(val){
			var scope = this;
			if(scope.allNews){
				switch(val){
					case 1:
						scope.organizeNews = scope.allNews[0];
						break;
					case 2:
						scope.organizeNews = scope.allNews[1];
						break;
					case 3:
						scope.organizeNews = scope.allNews[2];
						break;
				}
			}
			
		},
		getTypeNews:function(val){
			var scope = this;
			if(scope.organizeNews){
				switch(val){
					case 1:
						scope.typeNews = scope.organizeNews[0];
						break;
					case 2:
						scope.typeNews = scope.organizeNews[1];
						break;
					case 3:
						scope.typeNews = scope.organizeNews[2];
						break;
					case 4:
						scope.typeNews = scope.organizeNews[3];
						break;
				}
			}
			
		}
		
	},
	mounted:function(){
		var scope = this;
		scope.clickOrganizeBtn(true,1);
		scope.clickOrganizeBtn(false,1);
		
		scope.bindUser();
	}
	
})