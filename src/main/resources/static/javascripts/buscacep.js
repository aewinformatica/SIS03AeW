$(function(){
	$("#cep").autocompleteAddress({
		address: "input#meu-endereco",
		neighborhood: "form .fields .bairro",
		city: "form #city",
		state: ".my-state-field",
		publicAPI: "https://viacep.com.br/ws/{{cep}}/json/"
	});
});
