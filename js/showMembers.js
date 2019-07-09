function showMember(){
	let template = '<div class="col-md-6 col-lg-4"><h4 class="text-center">$position</h4><h4 class="text-center">$name</h4><img class="img-fluid member-icon" src="$icon"></div>';
	$.getJSON('../json/members.json', data => {
		let n = 17;
		let to = $('#memberCard');
		for(let i = 1; i < n; i++){
			let name = data[i].name;
			let position = data[i].position;
			let icon = data[i].avatar;
			let person = template.
				replace('$name', name).
				replace('$position', position).
				replace('$icon', icon);
			to.append(person);
		}
	});
}
showMember();
