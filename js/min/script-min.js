"use strict";var Cardgame={cards:[],init:function(){this.cacheDom(),this.bindEvents(),this.createDeck(),this.shuffleDeck(),this.renderDeck()},cacheDom:function(){this.$deck=$("#deck"),this.$btnDeal=$("#btn-deal"),this.$playerPane=$("#player-pane"),this.$AIPane=$("#ai-pane"),this.$cardSlots=$(".card-slots")},bindEvents:function(){var t=this;this.$btnDeal.on("click",function(){t.dealCards("both")})},createDeck:function(){for(var t=["2","3","4","5","6","7","8","9","10","J","Q","K","A"],e=["Hearts","Diamonds","Spades","Clubs"],s=0;s<t.length;s++)for(var a=0;a<e.length;a++){var i=(t[s]+"_of_"+e[a]+".png").toLowerCase();this.cards.push({rank:t[s],suit:e[a],img:i})}},shuffleDeck:function(){for(var t=[],e,s=this.cards.length;s>0;s--)e=Math.floor(Math.random()*s),t.push(this.cards[e]),this.cards.splice(e,1);this.cards=t},renderDeck:function(){for(var t="",e="",s,a=this.cards.length-1;a>=0;a--)s=(this.cards.length-a)/4,e=this.cards[a].suit.toLowerCase()+"-"+this.cards[a].rank.toLowerCase(),t+='<div class="back card '+e+'" style="top: '+s+"px; left: "+s+"px; z-index: "+a+'"></div>\n';this.$deck.append(t)},dealCards:function(t){var e=this,s=400;this.getEmptySlots().each(function(t){var a=$(this),i=e.$deck.children().slice(0,e.getEmptySlots().length),n=$(i[t]),r=a.offset().top-e.$deck.offset().top+5,c=a.offset().left-e.$deck.offset().left+5;setTimeout(function(){n.addClass("rotate"),n.animate({top:r,left:c},s,function(){n.remove().appendTo("#"+a.attr("id")).css({position:"static","z-index":t}).removeClass("rotate")})},(s+100)*t)})},getEmptySlots:function(){return $(".card-slot:not(:has(div))")}};Cardgame.init();