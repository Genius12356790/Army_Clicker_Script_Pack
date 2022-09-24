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

function maxdamage(clicksps=12, time=299){
    let damage = hrac[13] * (pomocBonusySpolu[0] / 100 + 1) * time;
	damage += hrac[12] * clicksps * time;
	damage += (itemBonusOverview[3] + pomocBonusyEffects[211]) * Math.floor(time / 6);
	damage += (itemBonusOverview[8] + pomocBonusyEffects[211]) * Math.floor(time / 8);
	damage += (itemBonusOverview[12] + pomocBonusyEffects[211]) * Math.floor(time / 10);
	
	let bombmod = 0;
	let bombleft = 50;
	if (bombleft > hrac[94]){
		bombleft -= hrac[94];
		bombmod = hrac[94] * 1.15;
	}
	else{
		bombmod = 65;
		bombleft = 0;
	}
	if (pomocBonusyEffects[220]){
		if (bombleft > hrac[93]){
		    bombleft -= hrac[93];
		    bombmod += hrac[93];
	    }
	    else{
		    bombmod += bombleft;
			bombleft = 0;
		}
	}
	if (bombleft > hrac[92]){
		bombmod += hrac[92];
	}
	else{
		bombmod += bombleft;
	}
	damage += itemBonusOverview[181]* bombmod* (itemBonusOverview[110]/100+1);
	return damage;
};

function MissionHint(_i){var disabledlvl=0;
if(_i>1)if(PocetPrejdeni(_i-1)<=0)disabledlvl=1;
if(disabledlvl)return LOC_najprv_prejdi_mensi_level;
var _hint='';
var level_jeden=herne_levelyA[_i];
var _goldzamisiu=GoldForMissionJS(level_jeden[5],level_jeden[7]);
try{var presielTento=PocetPrejdeni(level_jeden[0]);
_hint+='<div class="puHintNadpis">'+LOC_KOLO+' '+Bold(_i)+(PredchadzajuciLevel>=300?' / '+(maxMisii2-1):'')+'</div>';
_hint+=MissionIcon(_i,'',50,50,'wb','',0);
var _enemyData='';
_enemyData+=MinfoLine('Type:',LOC_KOLO_POPIS[level_jeden[4]],'');
_enemyData+=MinfoLine('Health:',EnemyMaxLifeJS(_i),'');
//
    let runtimer = maxMisiaCasDef;
    if(_i%7==4)runtimer=60;
    if(_i%7==2)runtimer=90;
    let mxdam = maxdamage(12, runtimer);
_enemyData+=MinfoLine('MaxDamPoss:',PCisloJS2(mxdam),'</div>','<div style="text-align:right;width:'+(PCisloJS2(mxdam).length*9)+'px">');
//
_enemyData+=MinfoLine('Min Damage:',EnemyMinDmgJS(_i),'</div>','<div style="text-align:right;width:'+(PCisloJS2(EnemyMaxDmgJS(_i)).length*9)+'px">');
_enemyData+=MinfoLine('Max Damage:',EnemyMaxDmgJS(_i),'</div>','<div style="text-align:right;width:'+(PCisloJS2(EnemyMaxDmgJS(_i)).length*9)+'px">');
if(JeFuelVisible()){let _sufix='';
if(herne_levelyA[_i][7]> 1){if(pomocBonusyEffects[212]>0){_sufix+=FSize(10,'('+(herne_levelyA[_i][7]+pomocBonusyEffects[212])+'x reward, '+herne_levelyA[_i][7]+'+'+pomocBonusyEffects[212]+')');
}else{_sufix='('+(herne_levelyA[_i][7]+pomocBonusyEffects[212])+'x reward)';
}}_enemyData+=MinfoLine(LOC_ITEM_cena,herne_levelyA[_i][7]+pomocBonusyEffects[212],IconValuta2(2,-2)+_sufix);
}_hint+='<table class="puHintTable" cellpadding="1" cellspacing="1">'+_enemyData+'</table>';
_hint+='<table class="puHintTable2"><tr><td style="width:90px;text-align:right;">'+(JeFuelVisible()?'Default<br>Rewards<br>per Fuel':'Mission<br>Rewards:')+'</td><td>:</td><td><div style="line-height:16px; max-width:280px;">'+MissionRewardsStr(_i)+'</div></td></tr></table>'; 
}catch(e){alert3('missionHint'+e);}return _hint;
};

function ShowMissingChestItems(_type,_pocetMax){if(!_pocetMax){_pocetMax=50;}let _pocet=0;
let _out='';
for(let _itemID of allChestItemIds[_type]){if(_pocet <_pocetMax){_out+=ItemImg(_itemID*1,'posmod40',F02o(VypisBonusNEW(itemyVShopeA[_itemID],1,'',1))+' class="specialitem" alt="special-item-mission" ',0,'height:40px;width:40px;margin-bottom:0px;');
}_pocet++;
}if(_pocetMax<allChestItemIds[_type].length){_out+=BR+F07f('[Load more]','ShowMissingChestItems(\''+_type+'\','+(_pocetMax+50)+');');
}_out+=MiniNotes('Items you can get via chest of class: '+_type);
DoPopup2c(_out,'Possible items','infoPopup2',850,0,20);
}

function ShopItemBlok(_vec1,_len_vnutro,_robSoldout,_lenCiSaDa){var _itemLocked=false;
var _daSaKupit=true;
var _nedaSaKupitHint='';
var _jeToLvlDrainItem=false;
var _vec_cena=_vec1[1];
var _cena=F06b(_vec1);
var _vecID=_vec1[0];
var _xpZaCenu=F03h(_vecID,_cena,_vec_cena[1],_vec_cena[6],_vec_cena[4]);
var _lvlrequired=1*F02h(_vecID);
let _myMaxLevel=GetMyMaxLevel();
var maxVec1=F05j(_vec1);
var _jeVypredane=false;
if(!_robSoldout)_robSoldout=0;
let __pocetVECi=F05p(_vecID);
var _testLock=false;
if(_vec_cena[5]>hrac[11]) 
if(__pocetVECi<=0){if(_maxLockedItems<MAX_LOCKED_ITEMS_KUK)if(PredchadzajuciLevel+100>_vec_cena[6])if(PredchadzajuciLevel>500)if(_vec_cena[9]==0)if(_vec_cena[12]==0)if(_vec_cena[1]==5||_vec_cena[1]==0)if(_vec_cena[5]<hrac[11]+5+(_testLock?5:0)) 
if(_vec1[4].length<=1)if(IsInArray(_vec1[4][0][1],unlockableAtts)){_itemLocked=true;
_maxLockedItems++;
}}var _dosiaholMax=(__pocetVECi>=maxVec1?1:0); 
if(maxVec1)if(!ajKupene&&!IsInArray(_vecID,posledne_kupeneVeci))if(_dosiaholMax){_jeVypredane=true;
if(!_robSoldout)return'';
}if(onlyNonBoughtItems&&__pocetVECi>0){return'';
}if(__pocetVECi==0){if(_vec1[5]==36)if((activeShopFilter!=0&&activeShopFilter!=10)||pocetPrejdeniNa1Session<8)if(!IN_TEST)return'';
if(_vec1[5]==37)if((activeShopFilter!=0&&activeShopFilter!=10)||pocetPrejdeniNa1Session<4)return'';
}if(_vec1[5]==34||_vec1[5]==35){if(hracVeciA[SECRET_THIRD_EYE_ID]){}else{if(__pocetVECi==0)if(pocetSecretItemovVidno>=2)return'';
if(_vec1[5]==34){if(hrac[131]%4!=0) 
return'';else if((pocetShopOtvoreni%17)!=4+(_vec1[0]+3)%9)return'';
}if(_vec1[5]==35)if(__pocetVECi<maxVec1){if((pocetShopOtvoreni%17)!=3+(_vec1[0]+3)%9)return'';
}}}var jeEventItem=(_vec_cena[9]==6?1:0);
var jeEventCost=(_vec_cena[1]==6?1:0);
if(vipShopFilter==1&&_vec_cena[9]!=1)return'';
if(!visibleVIPitems&&_vec_cena[9]==1)return'';
if(_vec_cena[1]==8&&!SuRubiny()) 
return'';
if(_vec_cena[9]==8&&__pocetVECi==0) 
return'';
if(_vec_cena[9]==12&&__pocetVECi==0) 
return'';
if(itemBonusOverview[115]==0)if((_vec_cena[9]==9 )&&_vec1[0]%25!=PredchadzajuciLevel%25) 
if(__pocetVECi==0)return'';
if((_vec_cena[7]==7||_vec1[3]=='et')&&__pocetVECi==0) 
return'';
if(jeEventItem&&!IsEvent(86400*4)&&__pocetVECi==0) 
return'';
if(jeEventItem&&!IsEvent(86400*4)&&!ajKupene) 
return'';
else if(jeEventItem&&(!IsEvent(604800)&&(__pocetVECi<=0||!ajKupene )))return'';
if(jeEventItem&&(activeShopFilter!=11&&activeShopFilter!=10&&activeShopFilter!=0)&&activeShopFilter<1000000)return'';
if(jeEventItem)if(!IsEvent())if(_vec1[1][0]>hrac[98]) 
return'';
if(jeEventCost) if(!jeEventItem){if(IsEvent())return'';
if(_vec1[1][0]>hrac[98])return'';
}if(jeEventItem) if(PredchadzajuciLevel<600)if(_vec1[1][0]>hrac[98]+5)if(__pocetVECi<=0)return'';
if(!IsRetroWeek())if(F015(_vecID,199))return'';
if(hrac[132]<=0)if(F015(_vecID,186))return'';
if(!IsCWactiv())if(F015(_vecID,65))return'';
if(_vec_cena[9]==13)if(!ajKupene||__pocetVECi==0){return'';
}var _IsActualSaleItem=false;
if(__pocetVECi==0){if(_vec_cena[9]==11)return'';
if(_vec_cena[9]==2){if(pocetSaleItemsInShop>=2)return'';
_IsActualSaleItem=IsSaleItem(_vec1[0]);
if(!_IsActualSaleItem)return'';
pocetSaleItemsInShop++;
}if((_vec_cena[9]==3||_vec_cena[9]==4)) 
return'';
}if(_vec_cena[9]==5&&!IsVip()) 
return'';
if(!MaArenu()&&_vec1[3]=='a')return'';
if(hrac[18]>=GetMaxFuelCap()&&PredchadzajuciLevel<300)for(var vb in _vec1[4])if(_vec1[4][vb][1]==40)return'';
var _requiredItem=F015(_vecID,105);
if(_requiredItem)if(!MamVykupenuVec(_requiredItem)&&__pocetVECi==0)return'';
var _requiredVP=F015(_vecID,155);
if(GetValorPoints()<_requiredVP)_daSaKupit=false;
if(GetValorPoints()+100<_requiredVP&&!(_requiredVP%1000==0&&GetValorPoints()+2000>=_requiredVP))return'';
var _requiredDATE=F015(_vecID,58,2);
if(Math.max(PHPtime4,hrac[129])<=_requiredDATE)return'';
var lockedUltiMod=false;
if(_vec1[5]==99){var _reqUltiKoef=F015(_vecID,230,2);
if(_reqUltiKoef>bestUltiMod+2)return'';
if(_reqUltiKoef>bestUltiMod+1){lockedUltiMod=true;
_daSaKupit=false;
_nedaSaKupitHint='Ultimate modules are locked one to another!<br>You must buy previous ultimate module to be able to buy this one!';
}}if(IsVip()&&_vecID==3407) 
return'';
if(_itemLocked) if(costfilter>0)return'';
if(F015(_vecID,232)){return'';
}if(_vecID==3597&&itemyNeskorPocet<=0) 
return'';
if(redundItems2[_vecID])return'';
if(itemyVyssiePocet<13&&_vec1[5]!=34&&_vec_cena[9]!=9&&_vec_cena[9]!=10&&_vec_cena[5]<hrac[11]+3)if(_vecID!=3&&_lvlrequired>_myMaxLevel&&_lvlrequired<=_myMaxLevel+50){itemyVyssie+=' '+ItemImg(_vecID,'posmodFit','class="previewitem '+(_vec_cena[9]==1?'goldenVipBorder':'')+'" '+F02o(LOC_Requiredlevel+': '+_lvlrequired+' ( in '+Bold(_lvlrequired-_myMaxLevel)+' )'+(_vec_cena[5]-hrac[11]>0?'<br>'+LOC_RequiredChapter+': '+(_vec_cena[5]+1)+' ( in '+Bold(_vec_cena[5]-hrac[11])+')':'')+(_vec_cena[9]==1?BR+'VIP item':'')));
itemyVyssiePocet++;
}if(_vec_cena[5]>hrac[11]) 
if(__pocetVECi<=0)if(!_itemLocked)return'';
if(!_itemLocked)if(_lvlrequired>_myMaxLevel+(PredchadzajuciLevel<5?0:1)&&__pocetVECi==0&&_vecID!=3)return'';
if(_vec1[4])if(_vec1[4][0][1]==115){if(itemBonusOverview[116]>=MAX_items_mythical){return'';
}}{if(hladamAtts.length||lastSearch!=''){let nasielAtt=false;
if(hladamAtts.length>0){if(_vec1[5]==36||_vec1[5]==37) if(__pocetVECi<=0) 
return'';
for(let b1 in _vec1[4]){if(hladamAtts.indexOf(_vec1[4][b1][1]*1)>=0){nasielAtt=true;
break;
}}}if(!nasielAtt&&lastSearch!=''){let _meno=MenoItemuNove(_vecID).toLowerCase();
if(_meno.indexOf(lastSearch)<0){return'';
}}if(_vec1[5]==34||_vec1[5]==35) 
return'';
}}if(_lenCiSaDa){if(_dosiaholMax)return'';
if(_myMaxLevel<_lvlrequired&&__pocetVECi<=0)return'';
if(_vec1[5]==34||_vec1[5]==35)pocetSecretItemovVidno++;
return 1;
}if(_vec1[5]==34||_vec1[5]==35)pocetSecretItemovVidno++;
var _jeOtazka=((_vec_cena[1]==1||_vec_cena[1]==2||_vec_cena[1]==7)&&uzKupilVec[_vecID]==0&&_vec_cena[12]<=0?1:0);
var buyClickStr='onmousedown="F02q('+_jeOtazka+',\''+LOC_SI_SI_ISTY_UPOU_ITEMU+'\',\'F08a(event,'+_vecID+','+(_vec_cena[12]>0?3:0)+','+_jeOtazka+');\',event);"'; 
let buyClickStrAll='';
if(!_jeOtazka&&_vec_cena[12]<=0)buyClickStrAll='F08a(event,'+_vecID+',0,1,1);';
for(var vb in _vec1[4])if(_vec1[4][vb][1]==73){_jeToLvlDrainItem=true;
var buyClickStr='onmousedown="F02q(1,\''+LOC_AYS+' buy this item?<br>'+InfoOkienko(LOC_item_vysvetlivka[73])+'\',\'F08a(event,'+_vecID+','+(_vec_cena[12]>0?3:0)+',1);\',event);"';
}if(_itemLocked){buyClickStrAll=buyClickStr='';
}if(buyClickStr){buyClickStr+=' ontouchstart="disabledShoping2=false; disableMultiShoping=false;"';
buyClickStr+=' oncontextmenu="return false"';
buyClickStr+=' ontouchend="disableMultiShoping=true; massShopingId=0;" ';
}var _item1='';
if(jeEventItem&&jeSvetJS!=5)_item1+='<img class="shopitembg" src="'+PicPrefix()+'shop/eventbg'+(event_picK)+(_vecID%2==0?'a':'b')+'.png?v2='+picversion+'_3" alt="1">';
else if(_vec_cena[9]==9)_item1+='<img class="shopitembg2" src="'+PicPrefix()+'shop/ghost_bg.png?v2='+picversion+'_3" alt="1">';
_item1+=ItemImg(_vecID,'posmod75A',' class="shop_pic'+(jeLietajuceIkony?'pulz':'')+'" onmousedown="SetAvatarMenu('+_vecID+');" alt="1"',0,(jeEventItem?'top:40px;':''));
if(_vec_cena[9]==9)_item1+='<img class="shopitembg3" src="'+PicPrefix()+'shop/ghost_bg2.png?v2='+picversion+'_5" alt="1">';
if(!_jeVypredane||!_robSoldout){if(__pocetVECi>=maxVec1&&maxVec1>0)_item1+='<div class="shop_item_xp">'+LOC_SOLD_OUT+'</div>';
else{if(_IsActualSaleItem&&__pocetVECi<=0){_item1+='<div class="shop_item_cena" onclick="OpenOfferWithItem('+_vecID+');">IN SALE</div>';
}else if(_vec_cena[9]==13){_item1+='<div class="shop_item_cena" onclick="OpenChestMenu();">in chests</div>';
}else{if(_vec_cena[12]>0){var _cena2=_vec_cena[12];
var _xpZaCenu2=F03h(_vecID,_cena2,1,_vec_cena[6],_vec_cena[4]); 
if(_myMaxLevel>=_lvlrequired){var _jeOtazka1=((_vec_cena[1]==1||_vec_cena[1]==2)&&uzKupilVec[_vecID]==0&&!somTESTER&&!JE_TESTER?1:0);
var buyClickStr1='onmousedown="F02q('+_jeOtazka1+',\''+(_vec_cena[1]==1?LOC_SI_SI_ISTY_UPOU_ITEMU:LOC_SI_SI_ISTY_UPOU_ITEMU_f)+'\',\'F08a(event,'+_vecID+',1,'+_jeOtazka1+');\',event);"';
}else{var buyClickStr1='onmousedown="F08a(event,'+_vecID+',0);" ';
}if(_myMaxLevel>=_lvlrequired)var buyClickStr2='onmousedown="F02q('+(uzKupilVec[_vecID]==0?1:0)+',\''+LOC_SI_SI_ISTY_UPOU_ITEMU+'\',\'F08a(event,'+_vecID+',2,'+(uzKupilVec[_vecID]==0?1:0)+');\',event);"';else var buyClickStr2=buyClickStr;
if(_itemLocked)buyClickStrAll=buyClickStr=buyClickStr2=buyClickStr1='';
_item1+='<div class="shop_item_cena1" '+(_cena>hrac[CostTypeReal(_vec_cena[1])]?'':buyClickStr1)+' '+XPzaCenuHint(_xpZaCenu,_vecID,'')+' '+(_cena>hrac[CostType(_vec_cena[1])]?'style="color:#AA0000;"':'')+'>'+LOC_ALT+'&nbsp;'+IconValuta2(_vec_cena[1])+PCisloJS2(_cena,'')+(_vec_cena[1]==5&&_cena>hrac[CostType(_vec_cena[1])]?' <span class="clickspan" onclick="OpenShop1(49,-1);return false;">[+]</span>':'')+(_vec_cena[1]==1&&PredchadzajuciLevel>=20&&_cena>hrac[9]?' <span class="clickspan" onclick="OtvorOknoGemyLepsie(19);return false;">[+]</span>':'')+'</div>';
_item1+='<div class="shop_item_cena2" '+(_cena2>hrac[9]?'':buyClickStr2)+' '+XPzaCenuHint(_xpZaCenu2,_vecID,2)+' '+(_cena2>hrac[CostType(1)]?'style="color:#AA0000;"':'')+'>'+IconValuta2(1)+PCisloJS2(_cena2,'')+(_cena2>hrac[9]?' <span class="clickspan" onclick="OtvorOknoGemyLepsie(19);return false;">[+]</span>':'')+'</div>';
}else 
_item1+='<div class="shop_item_cena" '+(_cena>hrac[CostTypeReal(_vec_cena[1])]?'':buyClickStr)+' '+XPzaCenuHint(_xpZaCenu,_vecID,'')+' '+(_cena>hrac[CostType(_vec_cena[1])]?'style="color:#AA0000;"':'')+'>'+IconValuta2(_vec_cena[1])+PCisloJS2(_cena,'')+(_vec_cena[1]==5&&_cena>hrac[CostType(_vec_cena[1])]?' <span class="clickspan" onclick="OpenShop1(49,-1);return false;">[+]</span>':'')+(_vec_cena[1]==1&&PredchadzajuciLevel>=20&&_cena>hrac[9]?' <span class="clickspan" onclick="OtvorOknoGemyLepsie(19);return false;">[+]</span>':'')+'</div>';
if(PredchadzajuciLevel>=15)if(_vec_cena[3]>1&&__pocetVECi+1<maxVec1)if(buyClickStrAll!='')if(!kupVecQueue.length){if(isMobile2)_item1+='<div class="shopbuyall_phone wbh" onclick="'+buyClickStrAll+'">BUY ALL</div>';
else 
_item1+='<div class="shopbuyall wbh" onclick="'+buyClickStrAll+'">BUY ALL</div>';
}}}}if(_vec_cena[9]==1&&!IsVip()&&GetMyMaxLevel()>500)_item1+='<img class="highlite vip_shop_button wbh" onclick="OpenShopSettings();" '+F02o('click to open shop settings<br>(you can hide VIP items in the shop settings)<br><br>There are many useful VIP items in the shop, they are not super powerful but can help. Support the Game and its Team by at least one payment and you will have access to all VIP items.')+' src="'+PicPrefix()+'shop/vip_options.png?v=2">';
_item1+='<div class="shop_item_meno'+(_vec_cena[9]==9?'_myth':(_vec_cena[9]==10?'_siluet':''))+'">'+(IN_TEST?'['+_vecID+']':'')+MenoItemuNove(_vecID)+'</div>';
//
let extraitems = itemyVShopeA[_vecID][1][13]-extraStacksA[_vecID];
let extrastring = extraitems?FSize(9,"(+"+extraitems+")"):"";
if(maxVec1>0&&(jeLoged||__pocetVECi>0))_item1+='<div class="shop_item_pocet" id="shop_vec_'+_vecID+'_pocet">'+FSize(14,__pocetVECi)+FSize(9,LOMKA+maxVec1)+extrastring+'</div>';
//
var bonusySTR='';
var bonusySTR_H='';{if(_jeVypredane&&_robSoldout)bonusySTR=LOC_SOLD_OUT;
else{bonusySTR=VypisBonusNEW(_vec1,7);
}if(PredchadzajuciLevel<MODULE_LVL_REQ+50)if(_vec1[5]==99){var _moduleHint='Please note - these <b>Module items</b> must be placed into module slots to be active.';
bonusySTR+=_moduleHint;
bonusySTR_H+='<br>'+_moduleHint;
}_item1+='<div class="shop_item_bonuses" '+(PredchadzajuciLevel>20&&bonusySTR_H!=''?F02o(bonusySTR_H,450,'shop_vec_'+_vecID+'_bonuses'):' id="shop_vec_'+_vecID+'_bonuses" ')+'><table class="itemBonusTable" cellspacing="0" cellpadding="0"><tr><td style="position:relative;"><div class="item_popis_td_div">';{_item1+=bonusySTR;
}_item1+='</div></td></tr></table></div>';
}var _pocetIcons=0;
if(_vec_cena[9]==1){_item1+=ShopIconStyle(7,0,0,'vobj','stuha_vip',LOC_SHOP_ITEM_VIP,'F0d(22);');
_pocetIcons++;
}if($maxKapitol-_vec_cena[5] <draheKapsKoefsLen&&_vec_cena[0]>5&&(_vec_cena[1]==1||_vec_cena[1]==5)){let _kratc=$draheKapsKoefs[$maxKapitol-_vec_cena[5]]+'x';
let _kratct='( '+_kratc+' the cost )';
_item1+='<div class="shop_new highendlabel highlite"><span>'+_kratc+'</span><img onclick="HighEndInfo('+_vec_cena[5]+')" src="'+PicPrefix()+'shop/stuha_high.png?v=2" '+F02o('High-End item'+BRBR+Bold(_kratct)+BRBR+LOC_cfm,300)+'></div>';
}else if(_lvlrequired==_myMaxLevel){_item1+='<img class="shop_new" src="'+PicPrefix()+'shop/stuha_new.png?v=2" '+F02o(LOC_NOVY_ITEM,90)+'>';
}if((_vec_cena[10]>0&&_vec_cena[10]<11)||_IsActualSaleItem){_item1+=ShopIconStyle(0,_pocetIcons,-4,'vobj','icon_top','','');
_pocetIcons++;
}if(F015(_vecID,199)){_item1+=ShopIconStyle(0,_pocetIcons,-4,'vobj','icon_retro',LOC_item_vysvetlivka[199],'OpenShop1(-199,-1);');
_pocetIcons++;
}if(jeEventItem){_item1+=ShopIconStyle(0,_pocetIcons,-4,'vobj','eventicon'+event_picK+'','','');
_pocetIcons++;
}if(VisibleValorPoints())if(F015(_vecID,46)){_item1+=ShopIconStyle(0,_pocetIcons,-4,'vobj','icon_valor','click to display items with valor points','OpenShop1(-46,-1);');
_pocetIcons++;
}var _item1LockPic='';
if(_itemLocked) 
_item1+='<img onclick="UnlockMenu('+_vecID+');" src="'+PicPrefix()+'shop/unlock.png?v=2" class="vobj highlite" style="left:192px;top:131" id="shop_vec_'+_vecID+'_unlockbut" onmousedown="return false;" '+F02o('Locked to chapter: '+_vec_cena[5]+(PredchadzajuciLevel>=_vec_cena[6]?'':'<br>and locked to level: '+_vec_cena[6])+'<br><br>Unlock now!')+'>';else if(_vec_cena[9]==13){_item1+='<img '+F02o('This item can be found only in chests and caravan (level 1500).')+' class="shop_inchest" src="'+PicPrefix()+'shop/inchest.png">';
}else if(!_dosiaholMax||_vec_cena[2]==0){if(_myMaxLevel>=_lvlrequired||(__pocetVECi>0&&F015(_vecID,193)<=0)){if(_daSaKupit)_daSaKupit=(_cena>hrac[CostType(_vec_cena[1])]&&_vec_cena[12]<=0?false:true);
_item1+='<img class="shop_buy_but'+(_cena>hrac[CostType(_vec_cena[1])]&&_vec_cena[12]<=0?'_n':(_vec_cena[1]==1?'_g':'')+' highlite')+'" src="'+PicPrefix()+'shop/buybut'+(!_daSaKupit?'_n':(_vec_cena[1]==1||(_vec_cena[12]>0&&_vec_cena[6]+plusLevelAlt>PredchadzajuciLevel)?'_g':''))+'.png" '+buyClickStr+' '+(isMobile?' id="shop_vec_'+_vecID+'_buy_but" ':(_daSaKupit?F02o((_vec_cena[12]<=0?LOC_SHOP_BUYBUT+Buyhintshift(_vec_cena[2]):LOC_ALT_cost),(_vec_cena[12]?300:220),'shop_vec_'+_vecID+'_buy_but'):(_nedaSaKupitHint?F02o(_nedaSaKupitHint):'')))+'>';
}else{_item1LockPic='<div class="shop_lvl_req" id="shop_vec_'+_vecID+'_lvl_req" onmousedown="return false;" '+buyClickStr+' '+F02o(LOC_POTREBUJES_LEVEL+_lvlrequired)+'><div class="shop_lvl_req_text">'+(_lvlrequired)+'</div></div>';
}}if(_len_vnutro)return _item1;
var shopBGe=''; 
if(_vec_cena[1]==1)shopBGe='_gem';
if(_vec_cena[9]==1)shopBGe='_vip';
if(_vec_cena[9]==2)shopBGe='_so';
if(_vec_cena[9]==10)shopBGe='_siluet';
if(_vec_cena[9]==9)shopBGe='_myth';
if(_vec_cena[3]==0)shopBGe='_unlimited';
if(_vec_cena[9]==13)shopBGe='_inchest';
if(_itemLocked)shopBGe='_unlock';
if(F015(_vecID,155))shopBGe='_valor';
if(F015(_vecID,130))if(!F015(_vecID,130,2))shopBGe='_refreshing';
if(!_itemLocked)if(_myMaxLevel<_lvlrequired&&__pocetVECi<=0) 
shopBGe+=' grayscale3';
if(_requiredVP>GetValorPoints()||lockedUltiMod)shopBGe+=' grayscale4';
return'<div class="shop_itemNEST"><div class="shop_blok shop_item2'+shopBGe+'" id="shop_vec_'+_vecID+'" onmousedown="return false;">'+_item1+'</div>'+_item1LockPic+'</div>';
}