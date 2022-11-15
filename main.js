const transactions = [
  {
    id: 1,
    name: 'Akerebari Dumele',
    wins: 12,
    losses: 5,
    rate: 35,
    image: 'https://res.cloudinary.com/rukkiecodes/image/upload/v1668519308/Black_Minimalist_and_Elegant_Boutique_Logo_1_omcgcu.png'
  },
  {
    id: 2,
    name: 'Terry Ochuko',
    wins: 12,
    losses: 5,
    rate: 35,
    image: 'https://res.cloudinary.com/rukkiecodes/image/upload/v1668519245/83518331_127826968719847_5907551280254943232_n_a1ayor.jpg'
  },
  {
    id: 3,
    name: 'Peace John',
    wins: 12,
    losses: 5,
    rate: 35,
    image: 'https://res.cloudinary.com/rukkiecodes/image/upload/v1667346265/Screenshot_from_2022-11-02_00-39-45_b0arsw.png'
  },
  {
    id: 4,
    name: 'Deborah Nebble',
    wins: 12,
    losses: 5,
    rate: 35,
    image: 'https://res.cloudinary.com/rukkiecodes/image/upload/v1664014178/nodejs_n2acwe.png'
  },
  {
    id: 5,
    name: 'James Esther',
    wins: 12,
    losses: 5,
    rate: 35,
    image: 'https://res.cloudinary.com/rukkiecodes/image/upload/v1663779675/om2_k8rzve.jpg'
  },
]

const card = document.querySelector('.card');

transactions.forEach(item => {
  card.innerHTML += `<div class="listItem">
      <div class="left">
        <img
          src="${item.image}"
          alt="${item.name}">
      </div>
      <div class="right">
        <div class="left">
          <p class="username">${item.name}</p>
          <p class="winsLosses">${item.wins} wins - ${item.losses} losses</p>
          <p class="rate">${item.rate}%</p>
        </div>
        <button>Copy</button>
      </div>
    </div>`
});