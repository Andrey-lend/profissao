var canvas = document.getElementById('matrix');
var ctx = canvas.getContext('2d');

// ajustar o tamanho do canvas para cobrir a página inteira
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// caracteres de código binário para exibir
var code = "01";
code = code.split("");

var font_size = 12;
var columns = canvas.width / font_size; // número de colunas para o código chover
var drops = [];

// criando uma gota - um elemento - para cada coluna
for (var x = 0; x < columns; x++)
	drops[x] = 1;

// desenhando o código
function draw() {
	// preenchendo a tela com uma cor de fundo
	// translúcido para o efeito de rastro
	ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
	ctx.fillRect(0, 0, canvas.width, canvas.height);

	// definindo a cor do código
	ctx.fillStyle = "#0F0"; // verde claro
	ctx.font = font_size + "px arial";

	// loop para cair gotas de código
	for (var i = 0; i < drops.length; i++) {
		// escolhendo um caractere aleatório
		var text = code[Math.floor(Math.random() * code.length)];
		
		// desenhando o caractere na posição atual
		ctx.fillText(text, i * font_size, drops[i] * font_size);

		// resetando a gota e criando uma nova
		if (drops[i] * font_size > canvas.height && Math.random() > 0.975)
			drops[i] = 0;

		// aumentando a queda da gota
		drops[i]++;
	}
}

setInterval(draw, 33);
