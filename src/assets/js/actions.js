
var burgerMenu = $('#burgerMenu');
var radius = {val: $('#initialCircle')};
var tl = new TimelineMax({onReverseComplete: clearTimeline});
var bmTl = new TimelineMax({onReverseComplete: clearBMTimeline});
var pressed = false;
var circle = $('#initialCircle');
var openRadius = 210;
var categories = 5;

var overClose = true;

var highlights = [];
var iconHolder = null;
var gradient = null;
var textBox = null;

var icons = [
['icon_Home', 'home'],
['icon_Horn', 'our brand'],
['icon_Glass', 'our products'],
['icon_Paper', 'news feed'],
['icon_Crown', 'challenge'],
];

SetEventHandlers();

var mousePos = {x: 0, y: 0};

window.onmousemove = function(e){	
	mousePos.x = e.clientX;
	mousePos.y = e.clientY;
	
	highlights.forEach(function(content, index){
		
		if(index != highlights.length - 1)
		{
			if(!overClose)
			{
				if(isInsideSector(mousePos, highlights[index].c, highlights[index].v1, highlights[index].v2, Math.pow(highlights[index].r, 2)))
				{
					$(highlights[index]).css({fill: '#d13a83'});
					if(textBox != null)
						textBox.innerHTML = highlights[index].textVal;
				}
				else	
				{
					$(highlights[index]).css({fill: 'black'});					
				}
			}
			else
			{
				$(highlights[index]).css({fill: 'none'});
			}
		}
		else
		{
			CheckCircle(mousePos, highlights[index]);
		}
		
	});
};

function clearTimeline() {	
	pressed = false;
	TransformBurgerMenu();
	tl.clear();
	tl = new TimelineMax({onReverseComplete: clearTimeline});
}

function clearBMTimeline(){
	bmTl.clear();
	bmTl = new TimelineMax({onReverseComplete: clearBMTimeline});
	highlights = [];
}

function SetEventHandlers() {
	circle.on('mousedown', function(){
		downPress();
	}).on('mouseup', function(){
		upRelease();
	}).on('mouseout', function(){		
		upRelease();
	});
}

function downPress() {	
	pressed = true;
	TransformBurgerMenu();
	tl.to(radius, .5, {val: openRadius, ease: Elastic.easeOut.config(0.3, 0.3), onUpdate: function(){
		$(circle).remove();
		var tmp = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
		tmp.setAttribute('id', 'initialCircle');
		tmp.setAttribute('class', 'uiCircle');
		tmp.setAttribute('r', radius.val);
		document.getElementById('svgContainer').insertBefore(tmp, document.getElementById('burgerMenu'));
		circle = $(tmp);
		SetEventHandlers();
	}, onComplete: function(){
		DrawHighlights();		
	}});
}

function upRelease(){
	if(pressed)
	{
		tl.reverse();
		highlights.forEach(function(content, index){			
			$(content).animate({opacity: 0}, 500, function(){
				$(content).remove();
			});
		});
		if(iconHolder != null)
		{
			$(iconHolder).animate({opacity: 0},500, function(){
				$(iconHolder).remove();
				iconHolder = null;
			});
		}
		if(gradient != null)
		{
			$(gradient).animate({opacity: 0}, 500, function(){
				$(gradient).remove();
				gradient = null;
			});
		}
		if(textBox != null)
		{
			$(textBox).animate({opacity: 0}, 500, function(){
				$(textBox).remove();
				textBox = null;
			});
		}	
	}	
}

function TransformBurgerMenu()
{	
	if(pressed)
	{
		bmTl.to(document.getElementById('line1'), .2, {alpha: 0});
		bmTl.to(document.getElementById('line0'), .2, {rotation: 39.8, scaleX: 1.28}, 0);
		bmTl.to(document.getElementById('line2'), .2, {rotation: -39.8, scaleX: 1.28}, 0);
	}
	else
	{
		bmTl.reverse();
	}
}

function DrawHighlights() {
	if(iconHolder == null)
	{
		iconHolder = document.createElement('div');
		$(iconHolder).css({
			position: 'absolute',
			width: openRadius*2,
			height: openRadius*2,
			top: 720.36 - openRadius,
			left: 187.5 - openRadius,
			'pointer-events': 'none',
			'border-radius':'50%',
			opacity: 0,
			'z-index': 2,
		});
		document.body.appendChild(iconHolder);
		TweenMax.fromTo($(iconHolder), .5, {rotation: 180, opacity: 0}, {rotation: 0, opacity: 1});

		gradient = document.createElement('div');
		$(gradient).css({
			position: 'absolute',
			top: '367px',
			left: '0px',
			width: '375px',
			height: '300px',
			background: 'linear-gradient(transparent, black)',	
			opacity: 0,			
		});
		document.body.appendChild(gradient);
		$(gradient).css({opacity: 1}, 500);
		
		textBox = document.createElement('div');
		$(textBox).css({
			width: '375px',
			height: 'auto',
			position: 'absolute',
			top: '475px',
			left: '0px',	
			color: 'white',
			'text-align':'center',
			'font-family':'Oswald',
			'font-size':'18px',
			'z-index': 5,
			margin: 0,
			padding: 0,
			'text-transform':'uppercase',
			'text-shadow': '2px 2px black',
		});
		textBox.innerHTML = '';
		document.body.appendChild(textBox);
	}
	
	for(var i = 0; i < categories; i++)
	{
		var data = ArcPath(i);
		highlights[i] = document.createElementNS('http://www.w3.org/2000/svg', 'path');
		highlights[i].setAttribute('class', 'uiPath');
		highlights[i].setAttribute('style', 'pointer-events: none; stroke: none; fill: none; opacity: 1;');
		highlights[i].setAttribute('d', data.d);
		document.getElementById('svgContainer').insertBefore(highlights[i], document.getElementById('burgerMenu'));
		$(highlights[i]).animate({opacity: 1}, 300);
		highlights[i].v1 = {x: data.arc1.x - data.c.x, y: data.arc1.y - data.c.y};
		highlights[i].v2 = {x: data.arc2.x - data.c.x, y: data.arc2.y - data.c.y};
		highlights[i].r = data.r;
		highlights[i].c = data.c;
		
		var x1 = data.c.x;
		var y1 = data.c.y;
		var x2 = data.ma.x;
		var y2 = data.ma.y;
		var mag = Math.sqrt(Math.pow((x2-x1),2) + Math.pow((y2 - y1),2));
		var ratio = .8;
		var x3 = Math.floor(ratio * x2 + (1-ratio) * x1);
		var y3 = Math.floor(ratio * y2 + (1-ratio) * y1);
				
		var rand = i;
		if(rand >= icons.length)
			rand = chance.integer({min: 1, max: icons.length -1})
		
		highlights[i].textVal = icons[rand][1];
		
		var tmp = document.createElement('div');
		$(tmp).css({
			position: 'absolute',
			width: '30px',
			height: '30px',
			'background-image': 'url(./img/'+ icons[rand][0] +'.png)',
			left: x3 - 15 - parseInt($(iconHolder)[0].style["left"]),
			top: y3 - 15 - parseInt($(iconHolder)[0].style["top"]),
		});
		iconHolder.appendChild(tmp);
	}
	DrawFinalCircle();
	
}

function ArcPath(i){
	var origin = {x: 187.5, y: 720.36};
	var r = circle[0].r.baseVal.value;
	
	var arc1 = {x: 0, y: 0};
	var arc2 = {x: 0, y: 0};
	var middleArcLine = {x: 0, y: 0}
	
	var angle = 2*Math.asin(0.5*(origin.x*2)/r);
	var sideAngle = (DegToRad(180) - angle)/2;
	var interval = angle/categories;
	
	arc1.x = origin.x + (r*Math.cos(sideAngle + (angle - (interval*i))));	
	arc1.y = origin.y - (r*Math.sin(sideAngle + (angle - (interval*i))));
	
	arc2.x = origin.x + (r*Math.cos(sideAngle + (angle - (interval*(i + 1)))));	
	arc2.y = origin.y - (r*Math.sin(sideAngle + (angle - (interval*(i + 1)))));
	
	middleArcLine.x = origin.x + (r*Math.cos(sideAngle + (angle - ((interval*i) + (interval/2)))));	
	middleArcLine.y = origin.y - (r*Math.sin(sideAngle + (angle - ((interval*i) + (interval/2)))));
	
	return {ma: middleArcLine, arc1: arc1, arc2: arc2, r: r, c: origin, d: 'M'+ origin.x +' '+ origin.y +' L'+ arc1.x +' '+ arc1.y +' A '+ r +' '+ r +' 0 0 1 '+ arc2.x +' '+ arc2.y +' Z'};
}

function DrawFinalCircle(){
	highlights[categories] = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
	highlights[categories].setAttribute('class', 'uiCircle');
	highlights[categories].setAttribute('style', 'pointer-events: none; fill: #d13a83; stroke: none; opacity: 1');
	highlights[categories].setAttribute('r', 120);
	document.getElementById('svgContainer').insertBefore(highlights[categories], document.getElementById('burgerMenu'));

	highlights[categories].c = {x: 187.5, y: 720.36};
	highlights[categories].radius = 120;
}

function DegToRad(deg){
	return (deg*(Math.PI/180));
}

function RadToDeg(rad){
	return (rad*(180/Math.PI));
}


function isInsideSector(point, center, sectorStart, sectorEnd, radiusSquared) {
  var relPoint = {
    x: point.x - center.x,
    y: point.y - center.y
  };

  return !areClockwise(sectorStart, relPoint) &&
         areClockwise(sectorEnd, relPoint) &&
         isWithinRadius(relPoint, radiusSquared);
}

function isWithinRadius(v, radiusSquared) {
  return v.x*v.x + v.y*v.y <= radiusSquared;
}

function areClockwise(v1, v2) {
  return -v1.x*v2.y + v1.y*v2.x > 0;
}

function CheckCircle(point, highlight){
	var d = Math.sqrt(Math.pow((point.x - highlight.c.x), 2) + Math.pow((point.y - highlight.c.y), 2));
	
	if(d <= highlight.radius)
	{
		overClose = true;
		$(highlight).css({fill: '#d13a83'});
		if(textBox != null)
			textBox.innerHTML = 'Close';
	}
	else
	{
		overClose = false;
		$(highlight).css({fill: 'black'});
	}
}

// document.getElementById('categoriesRange').onchange=changeEventHandler;

// function changeEventHandler(e)
// {
// 	document.getElementById('categoriesRange').setAttribute('value', e.target.value);
// 	document.getElementById('rangeNumber').setAttribute('value', e.target.value);
// 	categories = e.target.value;
// }

// document.getElementById('testButton').onmousedown = function(){	
// 	this.style["boxShadow"] = '0.5px 0.5px black';	
// 	this.style["left"] = '50.5%';
// 	this.style["top"] = '50.5%';
// };

// document.getElementById('testButton').onmouseup = function(){	
// 	this.style["boxShadow"] = '2px 2px black';
// 	this.style["left"] = '50%';
// 	this.style["top"] = '50%';
// };
	