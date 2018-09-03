var Aew = Aew || {};

Aew.MascaraComboCpfCnpj = (function() {
	
	function MascaraComboCpfCnpj() {
		this.comboTipoPessoa = $('.js-combo-tipo-pessoa');
		this.labelCpfCnpj = $('[for=cpfOuCnpj]');
		this.inputCpfCnpj = $('#cpfOuCnpj');
	}
	
	MascaraComboCpfCnpj.prototype.iniciar = function() {
		this.comboTipoPessoa.on('change', onTipoPessoaAlterado.bind(this));
		var tipoPessoaSelecionada = this.comboTipoPessoa.find(":selected").val();
		
		if (tipoPessoaSelecionada) {
			aplicarMascara.call(this, $(tipoPessoaSelecionada));
		}
	}
	
	function onTipoPessoaAlterado(evento) {
		var tipoPessoaSelecionada = this.comboTipoPessoa.find(":selected").val();
		aplicarMascara.call(this, tipoPessoaSelecionada);
		this.inputCpfCnpj.val('');

	}
	
	function aplicarMascara(tipoPessoaSelecionada) {
		this.labelCpfCnpj.text($('.js-combo-tipo-pessoa :selected').data('documento'));		
		this.inputCpfCnpj.mask($('.js-combo-tipo-pessoa :selected').data('mascara'));
		this.inputCpfCnpj.removeAttr('disabled');
	}
	
	return MascaraComboCpfCnpj;
	
}());

$(function() {
	var mascaraComboCpfCnpj = new Aew.MascaraComboCpfCnpj();
	mascaraComboCpfCnpj.iniciar();
});