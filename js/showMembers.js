function showMember(n){
	let template = 
		`<div class="card bg-primary">
				<h1 class="mb-0 card-header">
					<button class="card-title btn btn-link text-white" type="button" data-toggle="collapse" data-target="#collapse$i$" aria-expanded="true" aria-controls="collapse$i$">
						$name$
					</button>
				</h1>

			<div id="collapse$i$" class="collapse" aria-labelledby="member$i$" data-parent="#memberCollaspe">
				<div class="memberCard card-body text-primary bg-light">
					<h4 class="card-title text-center">$position$</h4>
					<div class="container-fluid">
						<div class="row align-items-center">
							<div class="col-md-4">
								<img height="100" class="memberImg card-img-top img-fluid" src="$icon$">
							</div>
							<div class="memberContent col-md-8 text-center">
								<p class="card-text">$intro$</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>`;
	$.getJSON('./json/members.json', data => {
		let to = $('#memberCollaspe');
		for(let i in data){
			$.ajax(`./intro/${i}.txt`).
				then(ajaxData => {
					let name = data[i].name;
					let position = data[i].position;
					let icon = data[i].avatar;
					let intro = ajaxData;
					console.log(intro);
					let person = template.
						replace(/\$name\$/g, name).
						replace(/\$position\$/g, position).
						replace(/\$icon\$/g, icon).
						replace(/\$i\$/g, i).
						replace(/\$intro\$/g, intro);
					to.append(person);
				}).
				catch(console.error);
		}
	});
}
showMember(17);	
