var dislikeTags = [
	['Кот'],
	['Котомафия'],
	['Хаски', 'Собака'],
	['Дворняга', 'Собака'],
	['Кот', 'Собака', 'Видео']
]

function GetEvent(type){
	let ev = document.createEvent('HTMLEvents');
	ev.initEvent(type, true, true);
	ev.eventName = type;
	return ev;
}

function TagsInclude(tags){
	let i = dislikeTags.length;
	let res = false;
	while(i--){
		var filtered = dislikeTags[i].filter(value => -1 !== tags.indexOf(value));
		res = res || (filtered.length === dislikeTags[i].length);
	}
	
	return res;
}

function DislikeRunner(){
	let articles = document.querySelectorAll('article.story');
	let a = articles.length;
	while (a--){
		let tagsArr = [];
		articles[a].querySelectorAll('div.story__tags.tags a.tags__tag').forEach(x => tagsArr.push(x.innerText));
		if (TagsInclude(tagsArr)){
			articles[a].querySelector('div.story__rating-down').dispatchEvent(GetEvent('click'));
		}
	}
}

console.log(setInterval(DislikeRunner, 600));