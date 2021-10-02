export default class advCogentItemSheet extends ItemSheet {
    get template() {
        return `modules/advCogent/templates/sheets/${this.item.data.type}-sheet.hbs`;
    }

    getData() {
        const data = super.getData();

        data.config = mergeObject(CONFIG.cogent,CONFIG.advCogent);

        return data;
    }
}