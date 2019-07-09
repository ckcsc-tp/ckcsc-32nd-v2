function showMember(n){
	let template = 
		`<div class="card bg-primary">
			<div class="card-header" id="member$i">
				<h2 class="mb-0">
					<button class="card-title btn btn-link text-white" type="button" data-toggle="collapse" data-target="#collapse$i" aria-expanded="true" aria-controls="collapse$i">
						$name
					</button>
				</h2>
			</div>

			<div id="collapse$i" class="collapse" aria-labelledby="member$i" data-parent="#memberCollaspe">
				<div class="card-body text-white">
					<h4 class="card-subtitle text-center">$position</h4>
					<img class="card-img-bottom img-fluid" src="$icon">
				</div>
			</div>
		</div>`;
	$.getJSON('./json/members.json', data => {
		let to = $('#memberCollaspe');
		for(let i = 1; i <= n; i++){
			let name = data[i].name;
			let position = data[i].position;
			let icon = data[i].avatar;
			let person = template.
				replace(/\$name/g, name).
				replace(/\$position/g, position).
				replace(/\$icon/g, icon).
				replace(/\$i/g, i);
			to.append(person);
		}
	});
}
showMember(17);	
