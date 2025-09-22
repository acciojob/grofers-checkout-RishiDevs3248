const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);
const getSum = () => {
//Add your code here
	let table = document.getElementsByTagName('table')
	let total = 0;
	let prices = document.querySelectorAll(".price")
	for (let i = 0; i < prices.length ; i++) {
		total += Number(prices[i].textContent)
	}
	let row = document.createElement('tr')
	let cell1 = document.createElement('td')
	let cell2 = document.createElement('td')
	row.setAttribute('id','ans')
	cell1.textContent = "total"
	cell2.textContent = `total ${total}`

	// row.appendChild(cell1)
	row.appendChild(cell2)
	table[0].appendChild(row)
  
};

getSumBtn.addEventListener("click", getSum);

