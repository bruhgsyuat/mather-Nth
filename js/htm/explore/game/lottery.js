/*
 * zzllrr Mather
 * zzllrr@gmail
 * Released under MIT License
 */

 
var T=Time.week();
if(/[024]/.test(T[0]) && (T[6]<21 || T[6]==21 && T[7]<=15)){
	T=Time.week('',-(+(T[0]==0))-2);
}else if(/![024]/.test(T[0])){
	T=Time.week('',-(+(T[0]==6))-1);
}
/*T[0]	T[2]	期数+
	0	1,2,3	0
		4,5		1
		6,7		2

	2	1,2		0
		3,4,5	1
		6,7		2
	
	4	1,2		0
		3,4		1
		5,6,7	2


*/

explore['Game/Lottery']=XML.wrapE('style',
		`.ltr_txta{min-width:400px;height:300px}`
	)+
	detail('双色球（6红+1蓝）',
	'<div><textarea id=ltr_my_result class="ltr_txta seled">'+
		'</textarea>'+strbtn+'←'+gM('AppendTo')+'" id=ltr_add2my />'+
		strbtn+gM('Clear')+'×" id=ltr_clear /> <textarea id=ltr_result class=ltr_txta></textarea>'+dc+
		'<details><summary><label>期号<input type=number id=ltr_vol defaultwidth value='+
		T[3]+('00'+(T[1]*3+(T[2]<3||T[2]==3 && T[0]==0?0:(T[2]>5||T[2]==5 && T[0]==4?2:1 )))).substr(-3)+
		' /></label><label>'+href(H+'www.jslottery.com/trend?locale=zh-CN','开奖号码')+
		' <input type=text id=ltr_last_result placeholder="红球 蓝球" /><label hidden>联网'+
		strchkbx0+'id=ltr_lastOnline'+chked+' /></label><label>'+
		strbtn+gM('Check')+'" class=ltr_chk /></label></summary>'+
		'历史100期 <textarea id=ltr_his_result style="width: 202px; height: 444px;">'+
		'</textarea></details><p>'+
		'红球 <label>包含 <input type=text id=ltr_flt_red_in placeholder="数字以逗号或空格隔开" /></label>'+
		'<label>不含 <input type=text id=ltr_flt_red_ex placeholder="数字以逗号或空格隔开" /></label></p><p>'+
		'蓝球 <label>包含 <input type=text id=ltr_flt_blue_in placeholder="数字以逗号或空格隔开" /></label>'+
		'<label>不含 <input type=text id=ltr_flt_blue_ex placeholder="数字以逗号或空格隔开" /></label>'+
		'</p><p><label>胆 '+
		num('5" id="ltr_dan',1,5)+'</label><label>拖 '+
		num('5" id="ltr_tuo',2,6)+'<label>+ '+
		strchkbx0+'class=ltr_addBlue'+chked+'/> '+gM('Blue')+' '+
		num('2" class="blues',1,16)+'</label><label>'+
		strbtn+gM('Random')+'" id=ltr_randDT />'+
		num('5" class=bets',1,100)+gM('Bet')+'</label></p>'+
		'<p>复式 <label>'+gM('Red Ball')+' '+
		num('7" id="ltr_FSred',7,33)+'</label><label>+ '+
		strchkbx0+'class=ltr_addBlue'+chked+' /> '+gM('Blue')+' '+
		num('2" class="blues',1,16)+'</label><label>'+
		strbtn+gM('Random')+'" id=ltr_randFSred />'+
		num('5" class="bets',1,100)+gM('Bet')+'</label></p>'+
		'<p>复式 <label>'+gM('Blue Ball')+' '+
		num('2" class="blues',1,16)+'</label><label>'+
		strbtn+gM('Random')+'" id=ltr_randFSblue />'+
		num('5" class="bets',1,100)+gM('Bet')+'</label></p>'+

		'<p>单式 '+
		strbtn+gM('Random')+'" id=ltr_randDS /><label>'+
		num('5" class="bets',1,100)+gM('Bet')+'</label><label>'+
		strchkbx0+'class=ltr_cover'+chked+' /> 尽可能覆盖全部数字 </label>'+
		strbtn+gM('Predict')+'" id=ltr_predictDS />'+
		strbtn+gM('Statistics')+'" id=ltr_statiDS />'+
		'</p>'
);
	

$(function(){
	$('[id^=ltr_rand]').before('<label>'+strbtn+gM('Check')+'" class=ltr_chk /></label>');
	$('#ltr_his_result').val(L['ltr_his_result']||'');

	var ltr_fltA=function(blue){
		var a=seqA(1,blue?16:33), A=['in','ex'].map(i=>$('#ltr_flt_'+(blue?'blue':'red')+'_'+i).val().trim().split(/\D+/g).map(i=>+i));
		return a.filter(i=>(!A[0][0]||A[0].includes(i)) && (!A[1][0]||!A[1].includes(i)) )
	};

	$('body').on('click','#ltr_randDS',function(){
		var s='', iscover=$('.ltr_cover').prop('checked'),
			A=new Set(ltr_fltA()), A0=new Set(A), A1=new Set,
			B=new Set(ltr_fltA(1)), B0=new Set(B), B1=new Set;
		for(var i=0,l=+$(this).next().children().val();i<l;i++){
			var C=RandomCombinA([...A],6,1), D=RandomCombinA([...B],1);
			s+=C.join(' ')+' ; '+D[0]+'\n';

			if(iscover && i<l-1){
				C.map(i=>{A.delete(i); A1.add(i)});
				D.map(i=>{B.delete(i); B1.add(i)});

				if(B.size < 1){
					B=new Set(B0);
					B1=new Set;
				}

				if(A.size < 6){
					if(A.size){
						A=new Set([...A].concat(RandomCombinA([...A1],6-A.size,1)));

					}else{
						A=new Set(A0);
						A1=new Set;
					}
				}

			}




		}
		$('.ltr_txta.seled').val(s)

	}).on('click','#ltr_add2my',function(){
		var s='',my=$('#ltr_result').val().trim().split('\n');
		for(var i=0,l=my.length;i<l;i++){
			var A=my[i].split(/ *; */),t;
			if(A[1]){
				A[1]=A[1].split(' ').sort(sortBy.num).join(' ');
			}
			if(/\+/.test(A[0])){
				t=A[0].split(/ *\+ */);
				A[0]=t[0].split(' ').sort(sortBy.num).join(' ')+' + '+t[1].split(' ').sort(sortBy.num).join(' ')
				
			}else if(A[0]){
				A[0]=A[0].split(' ').sort(sortBy.num).join(' ');
				
			}
			$('#ltr_my_result').val(function(i,v){return (v.trim()?v+'\n':'')+A.join(' ; ')})
		}

	}).on('click','#ltr_clear',function(){
		$('.ltr_txta.seled').val('')



	}).on('click','.ltr_txta',function(){
		$('.ltr_txta').removeClass('seled');
		$(this).addClass('seled');


	}).on('click change','#ltr_his_result',function(){
		L['ltr_his_result'] = $(this).val()

	}).on('click','#ltr_randDT',function(){
		var d=+$('#ltr_dan').val(), t=+$('#ltr_tuo').val(), s='',pap=$(this).parent().prev();
		for(var i=0,l=+$(this).next().val();i<l;i++){
			var A=RandomCombinA(ltr_fltA(),d+t,1);
			s+=A.slice(0,d).join(' ')+' + '+A.slice(d).join(' ')+(pap.find(':checked').length?' ; '+
			RandomCombinA(ltr_fltA(1),+pap.find('.blues').val(),1).join(' '):'')+'\n';
		}
		$('.ltr_txta.seled').val(s)

	}).on('click','#ltr_randFSred',function(){
		var pap=$(this).parent().prev(),s='';
		for(var i=0,l=+$(this).next().val();i<l;i++){
			s+=RandomCombinA(ltr_fltA(),+$('#ltr_FSred').val(),1).join(' ')+(pap.find(':checked').length?' ; '+
			RandomCombinA(ltr_fltA(1),+pap.find('.blues').val(),1).join(' '):'')+'\n'
		}
		$('.ltr_txta.seled').val(s)

	}).on('click','#ltr_randFSblue',function(){
		var pap=$(this).parent().prev(),s='';
		for(var i=0,l=+$(this).next().val();i<l;i++){
			s+=RandomCombinA(ltr_fltA(1),+pap.find('.blues').val(),1).join(' ')+'\n'
		}
		$('#ltr_result').val(s)
	

	}).on('click','#ltr_predictDS,#ltr_statiDS',function(){
		$('#ltr_my_result').val(function(i,v){return v.replace(/\t(\d\d?\t){6}/g,function(t){return '\t'+t.trim().split('\t').sort(sortBy.numInt).join('\t')+'\t'})});
		var id=this.id, v=$('#ltr_my_result').val().replace(/\d{7}\t((\d+\t){6}\d+)/g,'$1'),
		vA=Arrf(function(x){return x.replace(/\t\d+$/,'').split('\t')},v.split(brn)), vn=vA.length,
		s='', rA0=[], rA1=[], rA2=[], A;

//统计
//if(id=='ltr_statiDS'){
	A=[1];
	for(var i=1;i<vn;i++){
		var vAi=vA[i].slice(0,7),si=[];
		for(var j=0;j<i;j++){
			si.push(set.opr2('∩',vAi,vA[j].slice(0,7)).length)
		}
		A.push(si.join('\t'));
	}
//}


if(id=='ltr_predictDS'){
	A=[];
	// C(33-6,6)
	var B=set.opr2('-',vA.slice(-1)[0].slice(0,7),seqA(1,33));
	for(var i=1;i<vn;i++){

	}

}

s=A.join(brn);
		$('#ltr_result').val(s);


	}).on('click','.ltr_chk',function(){
		var p=$(this).parent(), txt=$('#ltr_my_result').val().trim().replace(/^0/,''), isonline=$('#ltr_lastOnline').prop('checked'), chkprize=function(x){
			/*
			胆拖	5+(2, 4+(3, 3+(4, 2+(5, 1+(6,
			复式	0+(7,
			
			x格式：
				红(空格隔开或另使用一个+号表示胆拖);蓝(空格隔开)
				6个号码（非数字隔开）
				
			中奖格式：
			
1、中6红 + 蓝
2、中6红
3、中5红 + 蓝
4、中5红 或
   中4红 + 蓝
5、中4红 或
   中3红 + 蓝
6、中蓝

			*/
			var A=(x||'').trim().split(/\D+/);
			if(A.length<7){
				return x+' 号码有误'
			}
			var rst100=$('#ltr_his_result').val().trim();
			var rst=($('#ltr_last_result').val().trim()||rst100.split(brn).slice(-1)[0]).replace(/^0/,'').split(/\D+0?/), red=rst.slice(0,6), blue=rst[6];
			if(rst.length<7){
				return x+' 开奖号码有误'
			}
			red.sort(sortBy.num);
			$('#ltr_last_result').val(red.join(' ')+' '+blue);
			var r=0,b;
			if(A.length==7){//复式
				b=A[6]==blue;
				for(var i=0;i<6;i++){
					if(red.indexOf(A[i])>-1){
						r++
					}
				}
				if(r<3 || r==3 && !b){
					if(b){
						return x+' 中蓝（六等奖，5元）'
					}
					return x+' 未中奖'
				}else{
					var s=x+' 中'+r+'红'+(b?' + 蓝':'');
					if(r==3 && b || r==4 && !b){
						return s+'（五等奖，10元）'
					}
					if(r==4 && b || r==5 && !b){
						return s+'（四等奖，200元）'
					}
					if(r==5 && b){
						return s+'（三等奖，3000元）'
					}
					if(r==6 && !b){
						return s+'（二等奖，20万+）'
					}
					return s+'（一等奖，500万+）'
				}
			}
			A=x.trim().split(';')
			if(A[0].indexOf('+')<0){
				A[0]='+'+A[0]	//红 复式转化成胆拖 0+(7,
			}

			var AR=A[0].split('+'),R0=AR[0].trim().split(/\D+/),R1=AR[1].trim().split(/\D+/),r1=0;
			if(R0[0]==''){
				R0=[];
			}
			var	B=A[1].trim().split(/\D+/), Bl=B.length, Rl0=R0.length,Rl1=R1.length, B1=B[1];
			b=+(B.indexOf(blue)>-1);
			
		//	console.log(R0,R1,B);
			for(var i=0;i<Rl0;i++){
				if(red.indexOf(R0[i])>-1){
					r++			//胆 命中红球数
				}
			}
			for(var i=0;i<Rl1;i++){
				if(red.indexOf(R1[i])>-1){
					r1++		//拖 命中红球数
				}
			}
			var R=r+Math.min(6-Rl0,r1);
			if(R<3){//只可能中六等奖
				if(b){
					var c=Combin(Rl1,6-Rl0);
					if(c==1){
						return x+' 中蓝（六等奖，5元 + 5元派奖）'
					}
					return x+' 中蓝（六等奖，5元×'+c+'×2='+c*10+'元（含派奖）。有C('+Rl1+',6-'+Rl0+')注'
				}
				return x+' 未中奖'
			}else{
				var P=[], S=[],c,n;
				if(R==6){
					if(b){
						S.push('中6红+蓝：一等奖，500万');
						P.push(5000000);
					}
					c=Bl-b;
					if(c){
						n=20*c;
						S.push('中6红：二等奖，20万×'+c+'='+n+'万。有'+c+'注');
						P.push(n);
					}
				}
				if(R>=5){
					if(b){
						c=Combin(r1,5-r)*Combin(Rl1-r1,1-(Rl0-r));
						if(c){
							n=c*3000
							S.unshift('中5红+蓝：三等奖，3000元×'+c+'注='+n+'元');
							P.push(n);
						}
					}
					c=Combin(r1,5-r)*Combin(Rl1-r1,1-(Rl0-r))*(Bl-b);

					if(c){
						n=c*200;
						S.unshift('中5红：四等奖，200元×'+c+'注='+n+'元');
						P.push(n);
					}

				}
				
				if(R>=4){
					if(b){
						c=Combin(r1,4-r)*Combin(Rl1-r1,2-(Rl0-r));
						if(c){
							n=c*200
							S.unshift('中4红+蓝：四等奖，200元×'+c+'注='+n+'元');
							P.push(n);
						}
					}
			//		console.log(r1,4-r,' * ',Rl1-r1,2-(Rl0-r), "Bl-b=",Bl,'-',b,'=',Bl-b);
					c=Combin(r1,4-r)*Combin(Rl1-r1,2-(Rl0-r))*(Bl-b);
					if(c){
						n=c*10;
						S.unshift('中4红：五等奖，10元×'+c+'注='+n+'元');
						P.push(n);
						
					}

				}
				
				
				if(R>=3){
					if(b){
						c=Combin(r1,3-r)*Combin(Rl1-r1,3-(Rl0-r));
						if(c){
							n=c*10
							S.unshift('中3红+蓝：五等奖，10元×'+c+'注='+n+'元');
							P.push(n);
						}
					}
					if(R==3 && !b){
						return x+' 未中奖'
					}
				}
				if(b){
					c=Combin(r1,2-r)*Combin(Rl1-r1,4-(Rl0-r)) + Combin(r1,1-r)*Combin(Rl1-r1,5-(Rl0-r)) + Combin(r1,-r)*Combin(Rl1-r1,6-(Rl0-r));

					if(c){
						n=c*10;//复式、胆拖派奖，不派奖是 n=c*5
						S.unshift('中蓝：六等奖，5元×'+c+'注×2（含派奖）='+n+'元');
						P.push(n);
					}

				}
			}
			S.unshift(x+' 中'+r+'+'+r1+'='+R+'红'+(b?' + 蓝':'')+' 共计 '+plus(P)+'元')
			return S.join('\n')
		
		};
		if(0 && isonline){
			/*
			$.ajax({
				url:H+'www.jslottery.com/trend?locale=zh-CN',
				success: function(d){
				    var nums=[[]];
				    $(d).find('#lotteryNumberList a:contains('+$('#ltr_vol').val()+')').parent().nextAll().each(function(i){
				    	if(i<6){
				    		nums[0].push($(this).text())
				    	}else{
				    		nums[1]=$(this).text()
				    	}
					});
					nums[0].sort(sortBy.num);
				    $('#ltr_last_result').val(nums[0].join(' ')+' '+nums[1]);
				    
				    $('#ltr_result').val(Arrf(chkprize,txt.split('\n')).join('\n'));
				}
			});
			*/

			Admin.testAjax2(H+'www.jslottery.com/trend?locale=zh-CN','script',function(x){var A=[],y=eval(x.split('function shuangSeQiu() {')[1].split('var trIndex = 3;')[0]+'data'); $.each(y,function(i,m){A.unshift(m.BasicNumber.sort().concat(m.SpecialNumber[0]))}); return A})
			
			
			
			
			
			
			/* Echarts 极坐标 

			Admin.testAjax2(H+'www.jslottery.com/trend?locale=zh-CN','script',function(x){var A=[],y=eval(x.split('function shuangSeQiu() {')[1].split('var trIndex = 3;')[0]+'data'); $.each(y,function(i,m){Arrf(function(z){if(i%5==0){A.push([100-i,z])}},m.BasicNumber.sort())}); return jSoff(A)})
			

			获取近100期
			Admin.testAjax2(H+'www.jslottery.com/trend?locale=zh-CN','script',function(x){var A=[],y=eval(x.split('function shuangSeQiu() {')[1].split('var trIndex = 3;')[0]+'data'); $.each(y,function(i,m){A.push(m.BasicNumber.sort())}); return jSoff(A)})
			


			var AA=[];
			var prec=1;
			var Goal=AA[0], sameNums=function(x,weak){var n=0;for(var i=0;i<6;i++){if(Goal.indexOf(('0'+x[i]).substr(-2))>-1 || weak && (Goal.indexOf(('0'+((x[i]-1)%33 || 33)).substr(-2))>-1 || Goal.indexOf(('0'+((x[i]+1)%33 || 33)).substr(-2))>-1)){n++}} return n};
			var A=prec?AA:AA.slice(1), n=A.length, a=Arrf(Number,A[0]), B=[a], c=[].concat(a);
			for(var i=1-prec;i<n;i++){
				var Ai=Arrf(Number,A[i]),r=0, Bi;
				for(var j=0;j<5;j++){
					var d=a[0]-Ai[j], b=Arrf(function(x){return (33+x+d)%33 || 33},Ai);
					var rj=eval(Arrf(function(x,i){return (x-a[i])**2},b).join('+'));
					if(!r || rj<r){
						r=rj;Bi=[].concat(b);
					}
				}
				B.push(Bi)
			}
			for(var i=1-prec;i<n;i++){
				for(var j=0;j<5;j++){
					c[j]+=B[i][j]
				}
			}
			var D=Arrf(function(x){return Math.round(x/n) || 33},c), X=[];
			for(var j=1;j<=33;j++){
				if(prec || ((D[0]+j)%33 || 33)==+Goal[0]){
                    var t=Arrf(function(x){return (x+j)%33 || 33}, D)
					if(!prec){
						X.push(t.concat(sameNums(t),sameNums(t,1)));
					}else{
						X.push(t.sort(sortBy.numInt));
					}
				}

			}
			if(!prec){
				re=X[0].concat(sameNums(X[0]),sameNums(X[0],1));
			}else{
				re=X
            }
            re


			*/
		}else{
			var A=Arrf(chkprize,txt.split(brn)).filter(i=>/元/.test(i));
			if(A.length){
				A.push('共中奖'+A.map(i=>+i.replace(/.+\D(\d+)元.*/,'$1')).reduce((i,j)=>i+j)+'元')
			}else{
				A.push('未中奖')
			}

			$('#ltr_result').val(A.join(brn));
		}
		

	});


});
