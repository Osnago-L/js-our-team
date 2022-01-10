const team = [
  // {
  //   name: 'Wayne Barnett',
  //   role: 'Founder & CEO',
  //   image: 'wayne-barnett-founder-ceo.jpg',
  // },
  // {
  //   name: 'Angela Caroll',
  //   role: 'Chief Editor',
  //   image: 'angela-caroll-chief-editor.jpg',
  // },
  // {
  //   name: 'Walter Gordon',
  //   role: 'Office Manager',
  //   image: 'walter-gordon-office-manager.jpg',
  // },
  // {
  //   name: 'Angela Lopez',
  //   role: 'Social Media Manager',
  //   image: 'angela-lopez-social-media-manager.jpg',
  // },
  // {
  //   name: 'Scott Estrada',
  //   role: 'Developer',
  //   image: 'scott-estrada-developer.jpg',
  // },
  // {
  //   name: 'Barbara Ramos',
  //   role: 'Graphic Designer',
  //   image: 'barbara-ramos-graphic-designer.jpg',
  // },
];

document.getElementById("addMemberButton").addEventListener('click', getTeamData);

function getTeamData(){
  let newMember = {};
  newMember.name = document.getElementById('name').value;
  newMember.role = document.getElementById('role').value;
  newMember.image = document.getElementById('image').value;
  team.push(newMember);
  printNewTeamCard(newMember.name,newMember.role,newMember.image)
  console.log(team)
}
function printNewTeamCard(name, role, image){
let newCard = `<div class="team-card">
                  <div class="card-image">
                    <img
                      src="assets/img/${image}"
                      alt="${name}"
                    />
                  </div>
                  <div class="card-text">
                    <h3>${name}</h3>
                    <p>${role}</p>
                  </div>
                </div>`;
document.querySelector('.team-container').innerHTML += newCard;
}


