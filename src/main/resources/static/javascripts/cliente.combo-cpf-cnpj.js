var Sis03 = Sis03 || {};

Sis03.MascaraComboCpfCnpj = (function() {
	
	function MascaraComboCpfCnpj() {
		this.comboTipoPessoa = $('.js-combo-tipo-pessoa');
		this.labelCpfCnpj = $('[for=cpfOuCnpj]');
		this.inputCpfCnpj = $('#cpfOuCnpj');
	}
	
	MascaraComboCpfCnpj.prototype.iniciar = function() {
		this.comboTipoPessoa.on('change', onTipoPessoaAlterado.bind(this));
//		var tipoPessoaSelecionada = this.comboTipoPessoa.val();
		var tipoPessoaSelecionada = 'FISICA';
		if (tipoPessoaSelecionada) {
			aplicarMascara.call(this, $(tipoPessoaSelecionada));
		}
	}
	
	function onTipoPessoaAlterado(evento) {
		var tipoPessoaSelecionada = $(evento.currentTarget);
		aplicarMascara.call(this, tipoPessoaSelecionada);
		this.inputCpfCnpj.val('');
	}
	
	function aplicarMascara(tipoPessoaSelecionada) {
		this.labelCpfCnpj.text(tipoPessoaSelecionada.data('documento'));
		this.inputCpfCnpj.mask(tipoPessoaSelecionada.data('mascara'));
		this.inputCpfCnpj.removeAttr('disabled');
	}
	
	return MascaraComboCpfCnpj;
	
}());

$(function() {
	var mascaraComboCpfCnpj = new Sis03.MascaraComboCpfCnpj();
	mascaraComboCpfCnpj.iniciar();
});