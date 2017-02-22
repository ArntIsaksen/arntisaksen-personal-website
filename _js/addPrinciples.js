var principles;

function preload() {
	principles = loadJSON('../_data/principles.json');
}

function setup() {
	var randomNr = floor(random(10));
	var ruleText = principles[randomNr].rule;
	var descriptionText = principles[randomNr].description;
	var rule = createElement('h3', randomNr + '. ' + ruleText).class('subheader');
	var description = createElement('p', descriptionText);
	var quoteFrom = createElement('p', '- Dieter Rams').class('text-right');
	rule.parent('rule');
	description.parent('principle-quote');
	quoteFrom.parent('principle-quote');
}