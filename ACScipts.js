function itemsleft(mode=0){
	let have = 0;
	let havect = [];
    let havecur = [];
	let havecoi = 0;
	let haveextras = 0;
	let havevip = 0;
	let haveoffer = 0;
	let total = 0;
	let totalct = [];
	let totalcur = [];
	let totalcoi = 0;
	let totalextras = 0;
	let totalvip = 0;
	let totaloffer = 0;
	for(let i=1; i<max_item_ID2; i++){
		if (itemyVShopeA[i][1][3]){
			total += itemyVShopeA[i][1][3] + itemyVShopeA[i][1][13];
			let n = itemyVShopeA[i][1][1];
			let stacks = itemyVShopeA[i][1][3] + itemyVShopeA[i][1][13];
			totalct[n] = totalct[n] ? totalct[n] + stacks: stacks;
			totalcur[n] = totalcur[n] ? totalcur[n] + stacks * itemyVShopeA[i][1][0]: stacks * itemyVShopeA[i][1][0];
			totalextras += itemyVShopeA[i][1][13];
			if (itemyVShopeA[i][1][9] == 13){
				totalcoi += itemyVShopeA[i][1][3];
			}
			if (itemyVShopeA[i][1][9] == 1){
				totalvip += itemyVShopeA[i][1][3] + itemyVShopeA[i][1][13];
			}
			if (itemyVShopeA[i][1][9] == 2){
				totaloffer += itemyVShopeA[i][1][3] + itemyVShopeA[i][1][13];
			}
		}
	}
	for(let i in hracVeciA){
		if (hracVeciA[i]){
			have += hracVeciA[i];
			let n = itemyVShopeA[i][1][1];
			havect[n] = havect[n] ? havect[n] + hracVeciA[i]: hracVeciA[i];
			havecur[n] = havecur[n] ? havecur[n] + hracVeciA[i] * itemyVShopeA[i][1][0]: hracVeciA[i] * itemyVShopeA[i][1][0];
			if (extraStacksA[i]){
				haveextras += extraStacksA[i];
			}
			if (itemyVShopeA[i][1][9] == 13){
				havecoi += hracVeciA[i];
			}
			if (itemyVShopeA[i][1][9] == 1){
				havevip += hracVeciA[i];
			}
			if (itemyVShopeA[i][1][9] == 2){
				haveoffer += hracVeciA[i];
			}
		}
	}
	let name = [];
	name[0] = "Gold";
	name[1] = "Skull";
	name[2] = "Fuel";
	name[3] = "AutoClickers";
	name[5] = "Platinum";
	name[6] = "Event";
	name[8] = "Ruby";
	let mod = [];
	mod[0] = ["(T)"];
	mod[3] = ["(K)"];
	mod[5] = ["(M)"];
	mod[6] = ["(K)"];
	mod[8] = ["(K)"];
	havecur[0] = Math.floor(havecur[0] / 1000000000000);
	totalcur[0] = Math.floor(totalcur[0] / 1000000000000);
	havecur[3] = Math.floor(havecur[3] / 1000);
	totalcur[3] = Math.floor(totalcur[3] / 1000);
	havecur[5] = Math.floor(havecur[5] / 1000000);
	totalcur[5] = Math.floor(totalcur[5] / 1000000);
	havecur[6] = Math.floor(havecur[6] / 1000);
	totalcur[6] = Math.floor(totalcur[6] / 1000);
	havecur[8] = Math.floor(havecur[8] / 1000);
	totalcur[8] = Math.floor(totalcur[8] / 1000);
	if (mode){
		let itemsdata = Array();
		itemsdata.push([have.toString(), total.toString(), "Stacks obtained"]);
        for (let i in havect){
	    	itemsdata.push([havect[i].toString(), totalct[i].toString(), "Stacks of " + (name[i] ? name[i] : i.toString()) + " obtained"]);
			itemsdata.push([havecur[i].toString(), totalcur[i].toString(), "Currency of " + (name[i] ? name[i] : i.toString()) + (mod[i]?mod[i]:"") + " spent"]);
	    }
		itemsdata.push([haveextras.toString(), totalextras.toString(), "Extra stacks obtained"]);
		itemsdata.push([havecoi.toString(), totalcoi.toString(), "Chest stacks obtained"]);
		itemsdata.push([havevip.toString(), totalvip.toString(), "VIP stacks obtained"]);
		itemsdata.push([haveoffer.toString(), totaloffer.toString(), "Offer stacks obtained"]);
		return itemsdata;
	}
	else{
		console.log("Stacks obtained: " + have.toString() + "/" + total.toString() + " | " +(total - have).toString() + " left.");
	    for (let i in havect){
	    	console.log("Stacks of " + (name[i] ? name[i] : i.toString()) + " obtained: " + havect[i].toString() + "/" + totalct[i].toString() + " | " +(totalct[i] - havect[i]).toString() + " left.");
			console.log("Currency of " + (name[i] ? name[i] : i.toString()) + (mod[i]?mod[i]:"") + " spent: " + havecur[i].toString() + "/" + totalcur[i].toString() + " | " +(totalcur[i] - havecur[i]).toString() + " left.");
	    }
	    console.log("Extra stacks obtained: " + haveextras.toString() + "/" + totalextras.toString() + " | " +(totalextras - haveextras).toString() + " left.");
	    console.log("Chest stacks obtained: " + havecoi.toString() + "/" + totalcoi.toString() + " | " +(totalcoi - havecoi).toString() + " left.");
	    console.log("VIP stacks obtained: " + havevip.toString() + "/" + totalvip.toString() + " | " +(totalvip - havevip).toString() + " left.");
		console.log("Offer stacks obtained: " + haveoffer.toString() + "/" + totaloffer.toString() + " | " +(totaloffer - haveoffer).toString() + " left.");
	    console.log("///");
    }
}
	
	
	function VypisAchTracker(){var _out='';
	for(let _ach of trackedAchs){let _achLvl=achieveA[_ach];
	_out+=LOC_ACHIEVY[_ach]+' :: '+LOC_ACHIEVY_popis[_ach]+' :: level: '+achieveA[_ach]+' / 16'+BR;
	if(_achLvl <16){let _kolko=F06k(_ach);
	let _zkolko=achDef[_ach][_achLvl];
	let _pkolko=_achLvl != 0 ? achDef[_ach][_achLvl - 1]: 0; // New Line
	_out+='<div class="achTBar"><div style="width:'+F09i(Math.min(1,(_kolko-_pkolko)/(_zkolko-_pkolko))*100)+'%;"></div><span>'+PCisloJS2(_kolko)+' / '+PCisloJS2(_zkolko)+'</span></div>'; // Changed line
	}else{_out+=FCol('lime','[FINISHED]')+BR;
	}}if(_out){_out=Bold('Achievement Tracker:')+BR+_out;
	F068('achTrackerDiv','<div onclick="F0i();" id="achTrackerDivIn">'+_out+'</div>');
	}else{F068('achTrackerDiv','');
	}RecalculateBody2Height();}

	function OpenShop(_filter,_riadok){shopOpenedAgo=0;
	F061('quickshoppopup');
	CloseCaravan();
	let _out='<div style="position:relative;z-index:0;" id="shopmaincontainertotaluplol" onmousewheel="ShopPopScroll(event,'+_filter+');return false;">';
	itemyVyssie='';
	itemyVyssiePocet=0;
	pocetSecretItemovVidno=0;
	pocetSaleItemsInShop=0;
	_maxLockedItems=0;
	FocusTeraz();
	HideShopSipka(_filter);
	F061('iteminfos');
	HideTutorial();
	offlineTimer=0;
	if(_filter==3&&PredchadzajuciLevel<2){ZrobFtext2(708,255,LOC_POTREBUJES_LEVEL+'2','#DE582B');
	return false;
	}if(!boloPrveNacitanie)return false;
	if(F055()) 
	F02i(1);
	if(nastaveniaShop.old_wide_shop)sirkaShopScreenu2=windowinnerwidth;else sirkaShopScreenu2=windowinnerwidth-35;
	if(windowinnerwidth>1320){if(!nastaveniaShop.old_wide_shop) 
	sirkaShopScreenu2=sirkaShopScreenu2-320;
	else 
	sirkaShopScreenu2=sirkaShopScreenu2-50;
	}vyskaScreenu2=window.innerHeight-50;
	mensiShopLVL=CHANGE_SHOP_LVL;
	if(PredchadzajuciLevel<mensiShopLVL){sirkaShopScreenu2=1040;
	vyskaScreenu2=Math.min(vyskaScreenu2,600);
	}vyskaScreenu2=vyskaScreenu2 / gameSizeScale;
	var vyskaShopBloku=vyskaScreenu2-15-115;
	shop_riadkov_nastranu=F09i(vyskaShopBloku/200);
	if(somvofcbJS)shop_riadkov_nastranu=2;
	if(shop_riadkov_nastranu<2) shop_riadkov_nastranu=2;
	shop_stlpcov_nastranu=F09i((sirkaShopScreenu2-5)/310);
	sirkaShopScreenu2=Math.max(1040,shop_stlpcov_nastranu*310+50);
	shop_pocet_nastranu_max=shop_riadkov_nastranu*shop_stlpcov_nastranu;
	if(_riadok==-1)if(poslednyFilter==_filter)_riadok=shop_riadok;else _riadok=0;
	if(_riadok<0)_riadok=0; 
	if(_riadok==-1)_riadok=0; 
	if(!_filter)_filter=0;
	if(!F098('jeShopOpen')){for(let i in ftexts){SchovajFtext(i);
	}uzBolShopOpen=false;
	PlaySound('menu');
	pocetShopOtvoreni++;
	}else{uzBolShopOpen=true;
	}poslednyFilter=_filter;
	activeShopFilter=_filter;
	shop_riadok=_riadok;
	if(ajKupene>1) ajKupene=0;
	_out+=(nastaveniaShop.old_wide_shop?'<br>':'')+'<div id="shop_hornyGradient"></div><div id="jeShopOpen"></div><div id="shopfilterCap" class="wbh" onclick="OpenShopSettings();"></div><div id="shop_hornyContainer">';
	if(!nastaveniaShop.old_wide_shop){_out+='<div class="vobj" style="left:720px;top:11px;">';
	_out+=SingleMatInShop('icons2/icon_gold.png',hrac[6],0,0,'shop/singlematbg.png');
	if(JePlatina())_out+=SingleMatInShop('icons2/icon_platina.png',hrac[89],0,38,'shop/singlematbg.png');
	if(SuRubiny())_out+=SingleMatInShop('icons2/icon_rubiny.png',hrac[118],0,76,'shop/singlematbg.png');
	if(PredchadzajuciLevel>=LEBKY_LEVEL)_out+=SingleMatInShop('icons2/icon_skull.png',hrac[9],-120,00,'shop/singlematbg_s.png','skulls');
	if(IsEvent(86400*3))_out+=SingleMatInShop('icons2/icon_event'+event_picK+'.png',hrac[98],-120,38,'shop/singlematbg_s.png');
	_out+='</div>';
	}if(PredchadzajuciLevel<10)_out+='<img id="shop_hl_left" style="left:30px;" alt="logo" src="'+PicPrefix()+'shop/hlavicka_nadpis2'+(nastaveniaShop.old_wide_shop?'_min':'')+'.png?v='+picversion+'">';
	else if(PredchadzajuciLevel>=button_ajKupeneVeci)_out+='<img id="shop_hl_left" style="left:'+(nastaveniaShop.old_wide_shop?(shop_stlpcov_nastranu==3?50:-50):70)+'px;" alt="logo" src="'+PicPrefix()+'shop/hlavicka_nadpis2_min.png?v='+picversion+'">';
	_out+='<div id="new_shop_div"></div>';
	if(!IsSimpleTutorialLog()){_out+='<div id="filter_selected_text"></div><div id="shopFiltreAll">';
	var _filtrePoradie=[0,1,2,3,4,5,6,7,9,8,11,12];
	if(PredchadzajuciLevel>=6)for(var i in _filtrePoradie) if(PredchadzajuciLevel+itemBonusOverview[179]>=filre_lvls[_filtrePoradie[i]]) if(filtre[_filtrePoradie[i]].length>0)_out+='<div class="shop_filter" style="left:'+(130+i*35)+'px;" '+F02o(LOC_FILTRE[_filtrePoradie[i]],200,'shop_filter_'+_filtrePoradie[i],'FilterOut('+_filtrePoradie[i]+');')+' onmouseover="FilterIn('+_filtrePoradie[i]+');" onmousedown="PlayMS();if('+i+'==0)costfilter=0;onlyNonBoughtItems=false;OpenShop('+_filtrePoradie[i]+',-1); return false;"><img id="sf_'+_filtrePoradie[i]+'_a" class="shop_fil_img_a" alt="f'+_filtrePoradie[i]+'" src="'+PicPrefix()+'shop/filter'+_filtrePoradie[i]+'a.png?v='+picversion+'"><img id="sf_'+_filtrePoradie[i]+'_s" class="shop_fil_img" alt="f'+_filtrePoradie[i]+'" src="'+PicPrefix()+'shop/filter'+_filtrePoradie[i]+'.png?v='+picversion+'"><img id="sf_'+_filtrePoradie[i]+'_h" class="shop_fil_img_h" alt="f'+_filtrePoradie[i]+'h" src="'+PicPrefix()+'shop/filter'+_filtrePoradie[i]+'h.png?v='+picversion+'"></div>';
	if(PredchadzajuciLevel>=40) 
	_out+=F08q('infoinshopbut',95,25,1,'?',LOC_PLAYER_DETAILS,26,26,'CloseShop();PlayerDetails();');
	_out+='</div>';
	}for(var i=0;i<18;i++)_out+=ShopInfo(i);
	if(PredchadzajuciLevel>=button_ajKupeneVeci)_out+='<div style="left:'+(nastaveniaShop.old_wide_shop?(shop_stlpcov_nastranu==3?30:-70):50)+'px;" class="highlite" '+F02o(LOC_SHOP_AJKUPENE,200,'ajPlneKupeneBut'+ajKupene)+' onclick="onlyNonBoughtItems=false;posledne_kupeneVeci=[]; ajKupene++;OpenShop('+activeShopFilter+',-1);"></div>';
	_out+='</div>';
	if(_filter>=1000000){var _cofilt=Math.abs(_filter%1000000);
	var _subshop=new Array();
	_subshop.push(itemyVShopeA[_cofilt]);
	}else if(_filter<0){var _cofilt=Math.abs(_filter);
	var _subshop=new Array();
	var uzPridane=new Array();
	var _filter1=Math.abs(_filter%1000);
	var _filter2=Math.floor(Math.abs(_filter)/1000);
	for(var ihl in itemyVShopeA)if(!uzPridane[ihl])if(F015(ihl,_filter1)>0||(_filter2>0&&F015(ihl,_filter2)>0)){uzPridane[ihl]=1;
	_subshop.push(itemyVShopeA[ihl]);
	}if(shopsortorder) 
	_subshop.sort(function(a,b){return a[1][6]-b[1][6];}); else _subshop.sort(function(a,b){return b[1][6]-a[1][6];}); 
	}else{if(_filter==8){if(!shopItemyFiltered[8]){VytvorFilterNewItems();
	}}else if(shopItemyFiltered[_filter].length==0){InitFilteredItems(_filter);
	SortItemsOneFilter(_filter);
	}if(PredchadzajuciLevel>410&&(hrac[64]<=0&&hrac[218]*1<=0)&&(PHPtime4%864000>500000)&&_filter==0&&costfilter==0){var _subshop=CopyArray(shopItemyFiltered[_filter]);
	_subshop.unshift(itemyVShopeA[3407]);
	}else{var _subshop=shopItemyFiltered[_filter];
	}}if(_filter==0&&PredchadzajuciLevel<=2)_subshop=[itemyVShopeA[1],itemyVShopeA[2],itemyVShopeA[3]]; 
	var _out2='';
	var pocet_na_stranu=0;
	var _budeSipkaDole=false;
	var shop_item_vsetky_pocet=0;
	//
	_subshopbase = Array();
	_subshopbottom = Array();
	let _myMaxLevel=GetMyMaxLevel();
	for(var i in _subshop){
	let _vec1 = _subshop[i];
	let _vecID=_vec1[0];
	let _lvlrequired=1*F02h(_vecID);
	let _vec_cena=_vec1[1];
	if (_vec1[5]!=34&&_vec_cena[9]!=9&&_vec_cena[9]!=10&&_vec_cena[5]<hrac[11]+3&&_vecID!=3&&_lvlrequired>_myMaxLevel&&_lvlrequired<=_myMaxLevel+50){
		_subshopbottom.push(_subshop[i]);
	}
	else{
		_subshopbase.push(_subshop[i]);
	}
	}
	_subshopbottom.sort(function(a,b){return a[1][6]-b[1][6];});
	for(var i in _subshopbottom)
	if(pocet_na_stranu<shop_pocet_nastranu_max+1)if(SediCostFilter(_subshopbottom[i]))if(_subshopbottom[i][0]>0){_out3=ShopItemBlok(_subshopbottom[i]);
	if(_out3!=''){if(pocet_na_stranu>=shop_pocet_nastranu_max){_budeSipkaDole=true; 
	break;
	}else{if(shop_item_vsetky_pocet>=shop_riadok*shop_stlpcov_nastranu){_out2+=_out3;
	pocet_na_stranu++;
	if(pocet_na_stranu%shop_stlpcov_nastranu==0)_out2+='<div class="linedivider"></div>';
	}shop_item_vsetky_pocet++;
	}}}
	for(var i in _subshopbase) 
	if(pocet_na_stranu<shop_pocet_nastranu_max+1)if(SediCostFilter(_subshopbase[i]))if(_subshopbase[i][0]>0){_out3=ShopItemBlok(_subshopbase[i]);
	if(_out3!=''){if(pocet_na_stranu>=shop_pocet_nastranu_max){_budeSipkaDole=true; 
	break;
	}else{if(shop_item_vsetky_pocet>=shop_riadok*shop_stlpcov_nastranu){_out2+=_out3;
	pocet_na_stranu++;
	if(pocet_na_stranu%shop_stlpcov_nastranu==0)_out2+='<div class="linedivider"></div>';
	}shop_item_vsetky_pocet++;
	}}}
	//
	var _prazdnyShop=false;
	if(_out2==''){if(shop_riadok>0){OpenShop(activeShopFilter,shop_riadok-1);
	return false;
	}var _kupujXPshop='';
	if(_filter!=5)_kupujXPshop=BRBR+ButNew('+XP','OpenShop1(5,-1);return false;','',2);
	_prazdnyShop=true;
	_out2+='<table class="prazdnyshopTable"><tr>'+ThumbsUpGirl('<td><br>','</td>')+'<td width="500">'+F09k('imper',LOC_SHOP_PRAZDNE)+(costfilter?'<br><br>'+F07f(LOC_COSTfilterPrepni,'onlyNonBoughtItems=false;costfilter=0;OpenShop('+activeShopFilter+',-1);'):_kupujXPshop)+'</td></tr></table>';
	}if(PredchadzajuciLevel>=15){if(nastaveniaShop.old_wide_shop)_out+='<div style="left:'+F09f(sirkaShopScreenu2*0.5-165)+'px;top:30px;" class="vobj">';
	else 
	_out+='<div style="left:'+F09f(sirkaShopScreenu2*0.5-163)+'px;top:20px;" class="vobj">';
	_out+=F09d(LOC_shopsett,'OpenShopSettings();','');
	_out+='<br><img class="vobj" style="position:relative;top:8px; "src="'+PicPrefix()+'shop/lupa.png?v5='+picversion+'"><input type="text" id="searchFilter" class="searchfilter" value="'+lastSearch+'" placeholder="search for attribute / name" onkeyup="SearchShopAtt();">';
	_out+=BR+'<span id="itemFilterFounds"></span>';
	_out+='</div>';
	}if(shop_riadok>0){_out+='<div class="shop_sipka highlite" id="up_page" '+VyskaShopBut(0)+F02o(LOC_SHOP_up_page_shop,170)+' onmousedown="PlayMS();OpenShop('+activeShopFilter+','+Math.max(0,shop_riadok-shop_riadkov_nastranu)+'); return false;"></div>';
	_out+='<div class="shop_sipka highlite" id="up_page2" '+VyskaShopBut(0)+F02o(LOC_SHOP_up_page_shop,170)+' onmousedown="PlayMS();OpenShop('+activeShopFilter+','+Math.max(0,shop_riadok-shop_riadkov_nastranu)+'); return false;"></div>';
	_out+='<div class="shop_sipka highlite" id="up_line" '+VyskaShopBut(1)+F02o(LOC_SHOP_up_line_shop,170)+' onmousedown="PlayMS();OpenShop('+activeShopFilter+','+(shop_riadok-1)+'); return false;"></div>';
	_out+='<div class="shop_sipka highlite" id="up_line2" '+VyskaShopBut(1)+F02o(LOC_SHOP_up_line_shop,170)+' onmousedown="PlayMS();OpenShop('+activeShopFilter+','+(shop_riadok-1)+'); return false;"></div>';
	}else{_out+='<div class="shop_sipka grayscale3" id="up_page" '+VyskaShopBut(0)+' onmousedown="return false;"></div>';
	_out+='<div class="shop_sipka grayscale3" id="up_page2" '+VyskaShopBut(0)+' onmousedown="return false;"></div>';
	_out+='<div class="shop_sipka grayscale3" id="up_line" '+VyskaShopBut(1)+' onmousedown="return false;"></div>';
	_out+='<div class="shop_sipka grayscale3" id="up_line2" '+VyskaShopBut(1)+' onmousedown="return false;"></div>';
	}var _sipkaposun=-15;
	if(_budeSipkaDole&&pocet_na_stranu>=shop_pocet_nastranu_max){_out+='<div class="shop_sipka highlite" id="down_line" '+VyskaShopBut(3)+F02o(LOC_SHOP_down_line_shop,170)+' onmousedown="PlayMS();OpenShop('+activeShopFilter+','+(shop_riadok+1)+'); return false;"></div>';
	_out+='<div class="shop_sipka highlite" id="down_page" '+VyskaShopBut(4)+F02o(LOC_SHOP_down_page_shop,170)+' onmousedown="PlayMS();OpenShop('+activeShopFilter+','+(shop_riadok+shop_riadkov_nastranu)+'); return false;"></div>';
	_out+='<div class="shop_sipka highlite" id="down_line2" '+VyskaShopBut(3)+F02o(LOC_SHOP_down_line_shop,170)+' onmousedown="PlayMS();OpenShop('+activeShopFilter+','+(shop_riadok+1)+'); return false;"></div>';
	_out+='<div class="shop_sipka highlite" id="down_page2" '+VyskaShopBut(4)+F02o(LOC_SHOP_down_page_shop,170)+' onmousedown="PlayMS();OpenShop('+activeShopFilter+','+(shop_riadok+shop_riadkov_nastranu)+'); return false;"></div>';
	}else{_out+='<div class="shop_sipka grayscale3" id="down_line" '+VyskaShopBut(3)+' onmousedown="return false;"></div>';
	_out+='<div class="shop_sipka grayscale3" id="down_page" '+VyskaShopBut(4)+' onmousedown="return false;"></div>';
	_out+='<div class="shop_sipka grayscale3" id="down_line2" '+VyskaShopBut(3)+' onmousedown="return false;"></div>';
	_out+='<div class="shop_sipka grayscale3" id="down_page2" '+VyskaShopBut(4)+' onmousedown="return false;"></div>';
	}_out+=_out2;
	_out+='<div></div>';
	if(PredchadzajuciLevel>4)_out+=F09d(LOC_CLOSE,'CloseShop();','','','shopclosebut');
	if(PredchadzajuciLevel>=15)if(_filter<1000000)_out+=SPC+F09d(LOC_COST_FILTER,'ShopCostFilter();','This will filter the shop by costs.<br><br>'+LOC_SHOP_HOTKEYS1);
	if(PredchadzajuciLevel>=15) 
	_out+=SPC+F09d(LOC_shopsett,'OpenShopSettings();','');
	if(refundItems.length>0)if(PredchadzajuciLevel>=400) 
	_out+=SPC+F09d('REFUND ITEMS','RefundItemsMenu();','');
	if(PredchadzajuciLevel>=75&&itemyVyssiePocet>0)_out+='<div id="higherlevelitems"><span style="position:relative;top:-20px;">'+LOC_higherLVLitems+'</span>'+itemyVyssie+'</div>';
	_out+='</div>';
	if(somvofcbJS||PredchadzajuciLevel<mensiShopLVL){F07e(_out,'','shopPopupFCB',sirkaShopScreenu2-60,0,'','','','',50,'','CloseShop();','',0);
	F098('shopPopupFCBIN').style.height=(shop_riadkov_nastranu*200+180+40)+'px';
	}else {F07e(_out,'','shopPopup',sirkaShopScreenu2-40,(F098('shopPopupIN')?1:0),'','','',0,(saved_shop_y?saved_shop_y:document.body.scrollTop+35),'','CloseShop();','',(!uzBolShopOpen?'FitToMobileViewY':'')); 
	if(F098('shopPopupIN'))F098('shopPopupIN').style.height=(shop_riadkov_nastranu*200+180+70)+'px';
	}F07g('vyber_levelDiv');
	F07g('i_e_zivot');
	F07g('powerup_container');
	F07g('div_top_xp');
	F07g('div_top_zlato');
	F061('infoPopupD');
	F061('infoPopup2');
	F061('infoPopupD2');
	F061('infoPopupDes');
	F08c('sf_'+activeShopFilter+'_a');
	F07g('sf_'+activeShopFilter+'_s');
	F07g('sf_'+activeShopFilter+'_h');
	F03e();
	F07g('tutfirstupgdmg');
	if(tut_krok==3)ObrazkovyTutorialStart(4);
	if((tut_krok==9||tut_krok==10)&&_filter==32)ObrazkovyTutorialStart(11);
	NastavShopFilterCap();
	saved_shop_y=F08e('shopPopupIN');
	DeselectAll();
	if(windowinnerwidth>=1360){if(!uzBolShopOpen||forceZobracHracaNokom){ZobrazHracaBokom(sirkaShopScreenu2,(PredchadzajuciLevel<mensiShopLVL?1:0),1,0);
	forceZobracHracaNokom=false;
	}else 
	RefreshBocneinfoNumbers('shop'); 
	}ItemsDescriptionsRescale();
	if(PredchadzajuciLevel<20){if(hrac[H_ZLATO]>=500)if(F05p(31)<20){setTimeout(()=>{BlikBlik('shop_vec_31_buy_but');
	},500)}}}
	
function PlayerDetails(){try{visiblePlayerDetails=1;
F03e();
MenuSound();
var _out='';
var $co=0;
_out+='<table class="divauto" id="item_infos_td"><tr valign="top"><td style="text-align:center;">';
_out+=DetailsTable(LOC_PD_0,[101,59,126,127,179,107,108]);
_out+=F09k('imper',LOC_PD_6); 
_out+='<table class="tabulka_details">';
itemsdata = itemsleft(1);
for (i in itemsdata){
	_out+=DetTabRiadok(PCisloJS2(itemsdata[i][0])+LMK+PCisloJS2(itemsdata[i][1]),itemsdata[i][2],0);
}
if(itemBonusOverview[116]>0)_out+=DetTabRiadok(PCisloJS2(itemBonusOverview[116])+LMK+PCisloJS2(MAX_items_mythical),LOC_items_mythical,0);
if(itemBonusOverview[131]>0)_out+=DetTabRiadok(PCisloJS2(itemBonusOverview[131])+LMK+PCisloJS2(MAX_items_secret),LOC_items_secret,0);
if(itemBonusOverview[227]>0)_out+=DetTabRiadok(PCisloJS2(itemBonusOverview[227])+LMK+PCisloJS2(MAX_items_legendary),LOC_items_legendary,227);
if(itemBonusOverview[229]>0)_out+=DetTabRiadok(PCisloJS2(itemBonusOverview[229])+LMK+PCisloJS2(MAX_items_elite),LOC_items_elite,229);
_out+=DetTabRiadok(PCisloJS2($pocetMisii),LOC_ITEM_pocetFinishes,0);
_out+=DetTabRiadok(PCisloJS2(hrac[11]+1),' / '+$maxKapitol+' '+LOC_KAPs,0);
_out+=DetTabRiadok(PCisloJS2(hrac[58]),LOC_ITEM_pocetFinQ,0);
_out+=DetTabRiadok(PCisloJS2(hrac[53]),' / '+GetMaxRBstr()+' '+LOC_RB2,91);
if(VisibleValorPoints())_out+=DetTabRiadok(PCisloJS2(GetValorPoints()),LOC_ITEM_pocetValorPoints,46);
if(hrac[98]>0)_out+=DetTabRiadok(PCisloJS2(hrac[98]),LOC_item_popis[185],185);
if(IsEvent(86400*7,1)){_out+=DetTabRiadok('+'+itemBonusOverview[183],LOC_item_popis[183],183);
_out+=DetTabRiadok('+'+itemBonusOverview[151],LOC_item_popis[151],151);
_out+=DetTabRiadok('+'+PCisloJS2(itemBonusOverview[128]),LOC_item_popis[128],128);
}_out+='</table>';
_out+=DetailsTable(LOC_PD_5,[188,106,70,111,173,187,196,144,147,165,134,135]);
var _extra='';
_out+='</td><td style="text-align:center;">';
_out+=DetailsTable(LOC_PD_7,[99,69,64,190,73]);
let _dmg=DetTabRiadok(PCisloJSR(10+itemBonusOverview[31]),'Damage per click '+(pomocBonusyEffects[210]>0?' (without modules)':''),31);
_out+=DetailsTable(LOC_PD_1,[_dmg,37,153,36,110,186,154,181,159],_extra);
_out+=DetailsTable(LOC_PD_2,[122,87,109,140,143,72, 166,75, 197]);
let _hp=DetTabRiadok(PCisloJSR(1000+itemBonusOverview[68]),'Base HP '+(pomocBonusyEffects[209]>0?' (without modules)':''),68);
let _hpmod='';
if(pomocBonusyEffects[209])_hpmod=DetTabRiadok('+'+PCisloJSR(pomocBonusyEffects[209]),'HP from modules',209);
_out+=DetailsTable(LOC_PD_3,[123,78,137,125,_hp,_hpmod,178,192,98,62]);
if(PredchadzajuciLevel>=CREDIT_LEVEL){_out+=BR+'Credit: '+PCisloJS2(hrac[201])+' '+F07f('[+]','GetGems2Kredit(0);');
}if(hrac[150]>PHPtime4)_out+=BR+LOC_PREMIUM_END+F099(hrac[150]-PHPtime4,1,'premiovedniPD');
_out+='<br>started playing '+F08k(hrac[27]) +'; since then:'+PCisloJS2(F09f((PHPtime4-hrac[27])/86400))+' days';
if(PredchadzajuciLevel>250)_out+=BR+F07f('Show players daily statistics','ShowMyDailyStats();')+PHONEBR;
if(PredchadzajuciLevel>=35)_out+=BR+F07f(LOC_achieve_BUT,'F0i();F061(\'iteminfos\');');
_out+='</td></tr></table>';
_out+=BR+SaleBanners(0);
restart_dur=0;
F07e(_out,LOC_P_DETAILS,'iteminfos',1050,1,'popup_vertical_center',0,0,0,0,0,'visiblePlayerDetails=0;'); 
if(isMobile){setTimeout(()=>{if(!F098('iteminfos')){return false;
}let _rect=GetRect('iteminfosIN');
if(_rect.width> window.innerWidth){F098('iteminfosIN').style.transform='scale('+((window.innerWidth / (_rect.width+1))*0.95)+')';
let _rect2=GetRect('iteminfosIN');
F098('iteminfosIN').style.left=((window.innerWidth - _rect2.width)*0.5-30)+'px';
}},100);
}F02i(1);
}catch(e){alert3(e);}}function DetTabRiadok(_data1,_popiska,$co,_cislo){var _out='';
_out+='<tr><td class="tdr TDatt">'+_data1+'</td><td class="tdattleft">'+F09k('pdf',_popiska)+InfoDodatok($co);
if($co)_out+='&nbsp;<span class="clickspan" onclick="OpenShop(-'+$co+',-1);">[+]</span>';
if(IsInArray($co,LOC_item_vysvetlivkaArray)){_out+=ItemInfoBut([_cislo,$co]);
}_out+=(somTESTER?SPC+'['+$co+']':'');
_out+='</td></tr>';
return _out;}

function ChapterDificultyStr(_kapitola){var _out=SPC;
var _dif=0;
var _farba='';
var _myLevelChapter=GetMyChapterPodlaLevelu();
dif=3;
if(_myLevelChapter>=_kapitola||_kapitola==2)_dif=3;
if(_myLevelChapter>_kapitola+1&&hrac[11]>_kapitola)_dif=2;
if((_myLevelChapter>_kapitola+6&&hrac[11]>_kapitola)||_kapitola==1)_dif=1;
if(_kapitola>2||PredchadzajuciLevel>40){if(_myLevelChapter>_kapitola+8){_farba='#3E653C';
_dif=0;
}if(_myLevelChapter<_kapitola){_farba='#874D2F';
_dif=4;
}if(_myLevelChapter+1<_kapitola){_farba='#7C091C';
_dif=_kapitola-_myLevelChapter+4;
}}
if(_dif>15){_out+=LOC_DIF[15] + '+' + (_dif - 15).toString()}
else{_out+=LOC_DIF[_dif];};
if(_farba)_out=FSizeColB(12,_farba,_out);
if(_dif>4)_out+=SPC+LOC_HUNT_XP;
_out+=SPC;
return'<span '+F02o(LOC_OBTIAZNOST+BRBR+FSize(10,LOC_OBTIAZNOST3+GetRecommendedPlayerLevel(_kapitola-2)+BRBR+LOC_OBTIAZNOST2))+'>'+_out+'</span>';
};