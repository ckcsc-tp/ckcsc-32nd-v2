function showMember(n){
	let template = 
		`<div class="card bg-primary">
				<h1 class="mb-0 card-header">
					<button class="card-title btn btn-link text-white" type="button" data-toggle="collapse" data-target="#collapse$i$" aria-expanded="true" aria-controls="collapse$i$">
						$name$
					</button>
				</h1>

			<div id="collapse$i$" class="collapse" aria-labelledby="member$i$" data-parent="#memberCollaspe">
				<div class="card-body text-primary bg-light crad">
					<div class="card-body">
						<h4 class="card-title text-center">$position$</h4>
						<img height="100" class="card-img-left img-fluid" src="$icon$">
						<p class="card-text">$intro$</p>
					</div>
				</div>
			</div>
		</div>`;
	$.getJSON('./json/members.json', data => {
		let to = $('#memberCollaspe');
		for(let i = 1; i <= n; i++){
			let name = data[i].name;
			let position = data[i].position;
			let icon = data[i].avatar;
			let intro = data[i].intro;
			let person = template.
				replace(/\$name\$/g, name).
				replace(/\$position\$/g, position).
				replace(/\$icon\$/g, icon).
				replace(/\$i\$/g, i).
				replace(/\$intro\$/g, intro);
			to.append(person);
		}
	});
}
showMember(17);	


