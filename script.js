//your JS code here. If required.
document.getElementById('btn').addEventListener('click', async()=>{
	const text=document.getElementById('text').value;
	const delay = parseInt(document.getElementById('delay').value, 10);

	 const outputDiv = document.getElementById('output');
     outputDiv.innerHTML = '';
	function delayFor(ms) {
		return new Promise(resolve=>setTimeout(resolve, ms));
	}
	async function displayMessage(message,ms) {
		await delayFor(ms);
		outputDiv.textContent=message;
		
	}
	displayMessage(text,delay);
})
